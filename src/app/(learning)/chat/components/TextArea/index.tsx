"use client";

import { useContext } from "react";
import ChatContext from "../../store/context";
import { CHAT_ACTIONS } from "../../store/constant";

export default function TextArea() {
    const { state, dispatch } = useContext(ChatContext);

    const handleOnChange = (e: React.ChangeEvent) =>
        dispatch(CHAT_ACTIONS.UPDATE_USER_MSG, (e.target as HTMLTextAreaElement).value);

    const handleKeyDown = async (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter") {
            const provider: string = "openai";

            // Object.keys(AI_AND_ML_MODELS).forEach((model) => {
            //     const modelType = model as keyof AIAndMlModelsType;

            //     if (!AI_AND_ML_MODELS[modelType]) {
            //         return;
            //     }
            //     if (AI_AND_ML_MODELS[modelType].includes(state.model.value)) {
            //         provider = modelType;
            //     }
            // });

            await fetch(`/api/chat/${provider}`, {
                method: "POST",
                body: JSON.stringify({ prompt: state.userMsg, model: state.model.value }),
            }).then((res) => {
                console.log(res);
            });
        }
    };

    return (
        <div>
            <textarea
                id="chat-box"
                name="chat"
                value={state.userMsg}
                onChange={handleOnChange}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}
