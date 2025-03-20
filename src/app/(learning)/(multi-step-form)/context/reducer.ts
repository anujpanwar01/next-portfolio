import { BUTTON_TYPE, INIT_STATE_TYPE } from "./type";

export const reducer = <T>(state: INIT_STATE_TYPE, { type, payload }: { type: string; payload: T }) => {
    switch (type) {
        case "UPDATE_STEP_1":
            return {
                ...state,
                step1: {
                    ...state.step1,
                    formData: {
                        ...state.step1.formData,
                        ...payload,
                    },
                    ...payload,
                },
            };
        case "UPDATE_STEP_2":
            return {
                ...state,
                step2: {
                    ...state.step2,
                    formData: {
                        ...state.step2.formData,
                        ...payload,
                    },
                    ...payload,
                },
            };
        case "UPDATE_ACTIVE_STEP":
            return {
                ...state,
                activeStep: payload as number,
            };
        case "UPDATE_BUTTON_DISABLED":
            const stepKey = (payload as BUTTON_TYPE).key;

            return {
                ...state,
                [stepKey]: {
                    ...state[stepKey],
                    buttonDisabled: (payload as BUTTON_TYPE).value,
                },
            };

        default:
            return state;
    }
};
