import { InputFieldType } from "./type";

export const STEP_TWO_INIT_STATE = {
    formData: {
        landmark: {
            value: "",
            error: false,
            errorMsg: "",
        },
        address: {
            value: "",
            error: false,
            errorMsg: "",
        },
        city: {
            value: "",
            error: false,
            errorMsg: "",
        },
        state: {
            value: "",
            error: false,
            errorMsg: "",
        },
        country: {
            value: "",
            error: false,
            errorMsg: "",
        },
        zip: {
            value: "",
            error: false,
            errorMsg: "",
        },
    },
    buttonDisabled: true,
};
// landmark | address | city | state | country | zip;

export const STEP_TWO_INPUT_DATA: InputFieldType[] = [
    { name: "landmark", autoComplete: true, placeholder: "Landmark" },
    { name: "address", autoComplete: true, placeholder: "Address", required: true },
    { name: "city", autoComplete: true, placeholder: "City", required: true },
    { name: "state", autoComplete: true, placeholder: "State", required: true },
    { name: "country", autoComplete: true, placeholder: "Country", required: true },
    { name: "zip", autoComplete: true, placeholder: "Zip Code", required: true },
];
