import { STEP_ONE_INIT_STATE } from "../step-1/constant";
import { STEP_TWO_INIT_STATE } from "../step-2/constant";
import { STEP3_INIT_STATE } from "../step-3/constant";

export const INIT_STATE = {
    step1: { ...STEP_ONE_INIT_STATE },
    step2: { ...STEP_TWO_INIT_STATE },
    step3: { ...STEP3_INIT_STATE },
    activeStep: 1,
};
