import { StepOneInputType } from "./type";

export const FIELDS = [{ name: "name" }, {}];
export const STEP_ONE_INIT_STATE = {
    formData: {
        name: { value: "", error: false },
        email: { value: "", error: false },
        phone: { value: "", error: false },
        gender: { value: "", error: false },
        dob: { value: "", error: false },
    },
    buttonDisabled: true,
};
// * name, email, phone, gender, dob;

export const STEP_ONE_INPUT_DATA: StepOneInputType[] = [
    {
        name: "name",
        placeholder: "Name",
        required: true,
        autoComplete: true,
    },
    {
        name: "email",
        placeholder: "Email",
        type: "email",
        required: true,
        autoComplete: true,
    },
    { name: "phone", placeholder: "Phone", type: "text", required: true, autoComplete: true },
    { name: "dob", placeholder: "Date of birth", type: "date" },
];
