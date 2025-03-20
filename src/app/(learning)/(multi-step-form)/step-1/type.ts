export type STEP_ONE_INIT_STATE_TYPE = {
    formData: formStateType;
    buttonDisabled: boolean;
};

export type StepOneInputType = {
    name: "name" | "email" | "phone" | "gender" | "dob"; // Restrict allowed keys
    placeholder: string;
    type?: string;
    required?: boolean;
    autoComplete?: boolean;
};

export type formStateType = {
    name: PropertyType;
    email: PropertyType;
    phone: PropertyType;
    gender: PropertyType;
    dob: PropertyType;
    // [key: string]: PropertyType;
};

export type PropertyType = {
    value: string;
    error: boolean;
    errorMsg?: string;
};
