import { STATE_TYPE } from "./types";
import { getModels } from "./utils";

const models = getModels();

export const STATE: STATE_TYPE = {
    model: models[0],
};

export const CHAT_ACTIONS = {
    SET_MODEL: "SET_MODEL",
};
