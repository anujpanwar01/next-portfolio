import { PropertyType } from "../step-1/type";

export type formStateType = {
    landmark: PropertyType;
    address: PropertyType;
    city: PropertyType;
    state: PropertyType;
    country: PropertyType;
    zip: PropertyType;
};

export interface InputFieldType {
    name: string;
    autoComplete?: boolean;
    type?: string;
    placeholder?: string;
    required?: boolean;
}

export type STEP_TWO_INIT_STATE_TYPE = {
    formData: formStateType;
    buttonDisabled: boolean;
};
