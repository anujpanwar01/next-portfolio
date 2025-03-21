import { PropertyType } from "../step-1/type";

export type STEP3_INIT_STATE_TYPE = {
    formData: formStateType;
    buttonDisabled: boolean;
};

export type formStateType = {
    cardNumber: PropertyType;
    expiryDate: PropertyType;
    securityCode: PropertyType;
};
