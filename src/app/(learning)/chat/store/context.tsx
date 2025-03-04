"use client";
import React, { useReducer } from "react";
import reducer from "./reducer";
import { STATE } from "./constant";
import { Action, OBJECT_TYPE } from "./types";

const ChatContext = React.createContext({
  state: STATE,
  dispatch: function dispatch<T>(type: string, payload: T) {},
});

export const ChatProvider = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const [state, dispatch] = useReducer(reducer, STATE);

  function dispatchAction<T>(type: string, payload: T) {
    dispatch({ type, payload });
  }

  return (
    <ChatContext.Provider value={{ state, dispatch: dispatchAction }}>
      {children}
    </ChatContext.Provider>
  );
};
export default ChatContext;
