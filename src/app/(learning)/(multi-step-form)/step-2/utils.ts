import { formStateType } from "./type";

export const validate = (step2FormData: formStateType): formStateType => {
    const newState = {} as formStateType;

    Object.entries(step2FormData).forEach(([key, value]) => {
        const typedKey = key as keyof formStateType;

        const nextState = { ...value };

        if (typedKey === "address") {
            nextState.error = value.value === "";
        }
        if (typedKey === "city") {
            nextState.error = value.value === "";
        }
        if (typedKey === "state") {
            nextState.error = value.value === "";
        }
        if (typedKey === "zip") {
            const zipRegex = /^[0-9]{6}$/;
            nextState.error = !zipRegex.test(value.value);
        }
        newState[typedKey] = nextState;
    });

    return newState;
};
