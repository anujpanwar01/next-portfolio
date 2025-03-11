import React from "react";
import { STEP_ONE_INIT_STATE_TYPE } from "../step-1/type";

export type MultiStepFormProviderType = {
    children?: React.ReactNode;
};

export type INIT_STATE_TYPE = {
    activeStep: number;
    step1: STEP_ONE_INIT_STATE_TYPE;
};
