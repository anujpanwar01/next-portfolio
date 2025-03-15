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
    name: { value: string; error: boolean };
    email: { value: string; error: boolean };
    phone: { value: string; error: boolean };
    gender: { value: string; error: boolean };
    dob: { value: string; error: boolean };
};
