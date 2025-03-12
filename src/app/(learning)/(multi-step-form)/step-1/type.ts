export type STEP_ONE_INIT_STATE_TYPE = {
    name: string;
    email: string;
    phone: string;
    gender: string;
    dob: string;
};
export type StepOneInputType = {
    name: "name" | "email" | "phone" | "gender" | "dob"; // Restrict allowed keys
    placeholder: string;
    type?: string;
};
