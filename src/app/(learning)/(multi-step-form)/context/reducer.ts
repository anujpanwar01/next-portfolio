import { INIT_STATE_TYPE } from "./type";

export const reducer = <T>(state: INIT_STATE_TYPE, { type, payload }: { type: string; payload: T }) => {
    switch (type) {
        case "UPDATE_STEP_1":
            return {
                ...state,
                step1: {
                    ...state.step1,
                    ...payload,
                },
            };
        default:
            return state;
    }
};
