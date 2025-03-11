import { INIT_STATE_TYPE } from "./type";

export const reducer = <T>(state: INIT_STATE_TYPE, { type, payload }: { type: string; payload: T }) => {
    switch (type) {
        case "ADD":
            return {
                ...state,
                [payload.name]: payload.value,
            };
        default:
            return state;
    }
};
