"use client";

import { useContext, useEffect } from "react";
import Input from "../components/Input";
import styles from "../step-1.module.css";
import { STEP_TWO_INPUT_DATA } from "./constant";
import MultiStepFromContext from "../context/MultiStepForm";
import Button from "../components/Button";
import { useRouter } from "next/navigation";
import { validate } from "./utils";

const Step2 = () => {
    const { state, updateState } = useContext(MultiStepFromContext);
    const { step2 } = state;
    const router = useRouter();

    useEffect(() => {
        const data = Object.keys(state.step1.formData);
        const allFieldsFilled = data
            .filter((d) => d !== "dob")
            .every((key) => {
                const value = state.step1.formData[key as keyof typeof state.step1.formData].value;
                return value && value.length > 0;
            });
        if (!allFieldsFilled) {
            router.replace("step-1");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateState("UPDATE_BUTTON_DISABLED", { key: "step2", value: false });
        updateState("UPDATE_STEP_2", { [e.target.name]: { value: e.target.value, error: false } });
    };
    const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const currentInp = state.step2.formData[e.target.name as keyof typeof state.step2.formData];

        updateState("UPDATE_STEP_2", { [e.target.name]: { ...currentInp, error: false } });
    };

    const goNextHandler = () => {
        const newState = validate(state.step2.formData);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const hasError = Object.entries(newState).some(([_, value]) => value.error);

        if (hasError) {
            updateState("UPDATE_STEP_2", newState);
            return;
        }
        updateState("UPDATE_STEP_2", newState);
        router.replace("step-3");
    };

    const goBackHandler = () => {
        router.replace("step-1");
    };

    return (
        <div className={`flex height-330 w-96 justify-center flex-col ${styles.parent}`}>
            <h1>Address</h1>
            {STEP_TWO_INPUT_DATA.map((inp) => {
                return (
                    <Input
                        key={inp.name}
                        type={inp.type || "text"}
                        name={inp.name}
                        value={step2.formData[inp.name as keyof typeof step2.formData].value}
                        onChange={handleOnChange}
                        onBlur={handleOnBlur}
                        placeholder={inp.placeholder}
                        required={inp.required}
                        autoComplete={inp.autoComplete ? inp.name : "off"}
                        error={step2.formData[inp.name as keyof typeof step2.formData].error}
                        errorMessage={step2.formData[inp.name as keyof typeof step2.formData].errorMsg}
                    />
                );
            })}
            <div className={styles["button-group"]}>
                <Button buttonType="secondary" onClick={goBackHandler}>
                    Back
                </Button>
                <Button buttonType="primary" onClick={goNextHandler} disabled={step2.buttonDisabled}>
                    Next
                </Button>
            </div>
        </div>
    );
};
export default Step2;
