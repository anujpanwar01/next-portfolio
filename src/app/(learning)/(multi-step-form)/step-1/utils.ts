import { formStateType, PropertyType } from "./type";

export const validate = (states: formStateType): formStateType => {
    const newState: formStateType = {} as formStateType;

    Object.entries(states).forEach(([key, value]) => {
        const typedKey = key as keyof formStateType;
        const nextState: PropertyType = { ...value };

        if (typedKey === "name") {
            nextState.error = value.value === "";
        }

        if (typedKey === "email") {
            const emailRegex =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            nextState.error = !emailRegex.test(value.value);
        }

        if (typedKey === "phone") {
            const phoneRegex = /^[0-9]{10}$/;
            nextState.error = !phoneRegex.test(value.value);
        }

        newState[typedKey] = nextState;
    });

    return newState;
};

export const validation = () => {};
