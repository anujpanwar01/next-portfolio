"use client";
import React, { useReducer } from "react";
import { MultiStepFormProviderType } from "./type";
import { reducer } from "./reducer";
import { INIT_STATE } from "./constant";

const MultiStepFromContext = React.createContext({
    state: INIT_STATE,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateState: <T,>(type: string, payload: T) => {},
});

export const MultiStepFromProvider = ({ children }: MultiStepFormProviderType) => {
    const [state, dispatch] = useReducer(reducer, INIT_STATE);

    const updateState = <T,>(type: string, payload: T) => {
        dispatch({ type, payload });
    };
    return (
        <MultiStepFromContext.Provider value={{ state: state as typeof INIT_STATE, updateState }}>
            {children}
        </MultiStepFromContext.Provider>
    );
};

export default MultiStepFromContext;

/**
 * step wise state,
 * current step,
 *
 */
