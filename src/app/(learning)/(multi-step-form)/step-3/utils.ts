import { Formatter, formStateType } from "./type";

export const getCardNumber = (value: string) => {
    const cardNumber = value.replace(/\D/g, "");
    return cardNumber;
};

export class UIFormatter {
    private static formatters: Record<string, Formatter> = {
        cardNumber: UIFormatter.formatCardNumber,
        securityCode: UIFormatter.formatSecurityCode,
        expiryDate: UIFormatter.formatExpiryDate,
    };

    static getFormatter(name: string): Formatter {
        return UIFormatter.formatters[name];
    }

    private static formatCardNumber(value: string) {
        if (value.length >= 19) {
            return value.trim().slice(0, 19);
        }

        if (value.split(" ").join("").length % 4 == 0) {
            return value + " ";
        }

        return value;
    }
    private static formatSecurityCode(value: string) {
        if (value.length >= 3) {
            return value.trim().slice(0, 3);
        }
        return value;
    }

    private static formatExpiryDate(value: string) {
        if (value.length >= 7) {
            return value.trim().slice(0, 7);
        }

        if (value.length == 2) {
            return value + " / ";
        }

        return value;
    }
}

export const getEmptyErrorMsg = (field: string) => {
    return { errorMsg: `${field} is required`, error: true };
};
export const cardNumberValidation = (value: string) => {
    if (value.trim() == "") {
        return getEmptyErrorMsg("Card number");
    }

    if (value.replace(/\s/g, "").length < 16) {
        return { errorMsg: "Invalid card number", error: true };
    }

    if (isNaN(Number(value.replace(/\s/g, "")))) {
        return { errorMsg: "Card number only be number", error: true };
    }
    return { errorMsg: "", error: false };
};

export const securityCodeValidation = (value: string) => {
    if (value.trim() == "") {
        return getEmptyErrorMsg("Security code");
    }

    if (isNaN(Number(value))) {
        return { errorMsg: "Security code only be number", error: true };
    }

    if (value.length < 3) {
        return { errorMsg: "Invalid security code", error: true };
    }
    return { errorMsg: "", error: false };
};

export const expiryDateValidation = (value: string) => {
    if (value.trim() == "") {
        return getEmptyErrorMsg("Expiry date");
    }

    const currentYear = getYearLastTwoDigits();

    if ((value.split(" / ")?.at(-1) ?? "") < currentYear) {
        return { errorMsg: "Invalid expiry date", error: true };
    }
    return { errorMsg: "", error: false };
};

export const validate = (step3FormData: formStateType): formStateType => {
    const newState = {} as formStateType;

    Object.entries(step3FormData).forEach(([key, value]) => {
        const typedKey = key as keyof formStateType;

        const nextState = { ...value };

        if (typedKey === "cardNumber") {
            Object.assign(nextState, cardNumberValidation(value.value));
        }

        if (typedKey === "expiryDate") {
            Object.assign(nextState, expiryDateValidation(value.value));
        }

        if (typedKey === "securityCode") {
            Object.assign(nextState, securityCodeValidation(value.value));
        }
        newState[typedKey] = nextState;
    });

    return newState;
};

const getYearLastTwoDigits = () => {
    const currentYear = new Date().getFullYear();
    return currentYear.toString().slice(2);
};
