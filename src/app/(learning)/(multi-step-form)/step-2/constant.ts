import { InputFieldType } from "./type";

export const STEP_TWO_INIT_STATE = {
    formData: {
        landmark: {
            value: "",
            error: false,
        },
        address: {
            value: "",
            error: false,
        },
        city: {
            value: "",
            error: false,
        },
        state: {
            value: "",
            error: false,
        },
        country: {
            value: "",
            error: false,
        },
        zip: {
            value: "",
            error: false,
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
    { name: "zip", autoComplete: true, placeholder: "Zip Code", required: true, type: "number" },
];
