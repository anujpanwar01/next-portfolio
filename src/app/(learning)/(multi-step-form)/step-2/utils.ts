import { formStateType } from "./type";

export const validate = (step2FormData: formStateType): formStateType => {
    const newState = {} as formStateType;

    Object.entries(step2FormData).forEach(([key, value]) => {
        const typedKey = key as keyof formStateType;

        const nextState = { ...value };

        if (typedKey === "address" || typedKey === "landmark" || typedKey === "country") {
            Object.assign(nextState, validateEmptyField(value.value, typedKey));
        }

        if (typedKey === "zip") {
            Object.assign(nextState, validateZip(value.value));
        }
        newState[typedKey] = nextState;
    });

    return newState;
};

const validateEmptyField = (value: string, fieldType: string) => {
    if (value.trim() === "") {
        return { errorMsg: `${fieldType} is required`, error: true };
    }

    if (!isNaN(+value) && typeof +value == "number") {
        return { errorMsg: `${fieldType} can't be number`, error: true };
    }

    return { errorMsg: "", error: false };
};

const validateZip = (zip: string) => {
    if (zip.trim() == "") {
        return { errorMsg: "Zip code is required", error: true };
    }

    const zipRegex = /^[0-9]{6}$/;

    if (!zipRegex.test(zip)) {
        return { errorMsg: "Invalid zip code", error: true };
    }
    return { errorMsg: "", error: false };
};
