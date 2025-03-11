import { OptionType } from "../components/Models/types";
import { CHAT_ACTIONS } from "./constant";
import { STATE_TYPE } from "./types";

const reducer = (state: STATE_TYPE, { type, payload }: Readonly<{ type: string; payload: string | unknown }>) => {
    switch (type) {
        case CHAT_ACTIONS.SET_MODEL:
            return { ...state, model: payload as OptionType };

        case CHAT_ACTIONS.UPDATE_USER_MSG:
            return { ...state, userMsg: payload as string };
        default:
            return state;
    }
};
export default reducer;
