import { StepOneInputType } from "./type";

export const FIELDS = [{ name: "name" }, {}];
export const STEP_ONE_INIT_STATE = {
    name: "",
    email: "",
    phone: "",
    gender: "",
    dob: "",
};
// * name, email, phone, gender, dob;

export const STEP_ONE_INPUT_DATA: StepOneInputType[] = [
    {
        name: "name",
        placeholder: "Name",
    },
    {
        name: "email",
        placeholder: "Email",
        type: "email",
    },
    { name: "phone", placeholder: "Phone", type: "text" },
    { name: "dob", placeholder: "Date of birth", type: "date" },
];
