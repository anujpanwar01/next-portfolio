import { OptionType } from "../components/Models/types";

export type STATE_TYPE = {
    model: OptionType;
    userMsg: string;
};

export type OBJECT_TYPE = {
    [key: string]: unknown;
};
export type Action<T> = { type: string; payload: T };
