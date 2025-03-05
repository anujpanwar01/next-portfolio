"use client";

import { useContext, useEffect, useState } from "react";
import { OptionType } from "./types";
import Select from "react-select";
import { getModels } from "./utils";
import ChatContext from "../../store/context";
import { CHAT_ACTIONS } from "../../store/constant";

const models = getModels();

export default function Models() {
    const { state, dispatch } = useContext(ChatContext);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const handleChange = (data: OptionType | null) => {
        if (!data) return;
        dispatch(CHAT_ACTIONS.SET_MODEL, data);
    };

    console.log(state);
    return (
        <Select
            options={models}
            onChange={handleChange}
            backspaceRemovesValue={false}
            blurInputOnSelect={true}
            captureMenuScroll={false}
            value={state.model}
            isSearchable={false}
        />
    );
}
