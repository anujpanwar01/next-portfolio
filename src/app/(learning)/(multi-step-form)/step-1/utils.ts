import { formStateType } from "./type";

export const validate = (states: formStateType) => {
    const newState: { [key: string]: any } = {};

    Object.entries(states).forEach(([key, value]) => {
        const nextState = { ...value };
        if (key === "name") {
            nextState.error = value.value === "";
        }

        if (key === "email") {
            const emailRegex =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            nextState.error = !emailRegex.test(value.value);
        }

        if (key === "phone") {
            const phoneRegex = /^[0-9]{10}$/;
            nextState.error = !phoneRegex.test(value.value);
        }

        newState[key] = nextState;
    });

    return newState;
};

export const validation = () => {};
