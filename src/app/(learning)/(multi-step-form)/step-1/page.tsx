"use client";

import React from "react";
import Input from "../components/Input";
import MultiStepFromContext from "../context/MultiStepForm";
import { STEP_ONE_INPUT_DATA } from "./constant";
import styles from "../step-1.module.css";
import Button from "../components/Button";
import { validate } from "./utils";
import { useRouter } from "next/navigation";

export default function Step1() {
    const { state, updateState } = React.useContext(MultiStepFromContext);
    const { step1 } = state;

    const router = useRouter();
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateState("UPDATE_BUTTON_DISABLED", { key: "step1", value: false });

        const dataToSet = { [e.target.name]: { value: e.target.value, error: false } };

        if (e.target.name == "gender") {
            dataToSet[e.target.name] = { ...dataToSet[e.target.name], value: e.target.id };
        }
        updateState("UPDATE_STEP_1", dataToSet);
    };

    const goNextHandler = () => {
        const states = validate(state.step1.formData);
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const hasError = Object.entries(states).some(([_, value]) => value.error);

        if (hasError) {
            updateState("UPDATE_STEP_1", states);
            return;
        }
        updateState("UPDATE_STEP_1", states);
        router.replace("step-2");
    };

    const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const currentInp = state.step1.formData[e.target.name as keyof typeof state.step1.formData];

        updateState("UPDATE_STEP_1", { [e.target.name]: { ...currentInp, error: false } });
    };

    const selectedGender = step1.formData.gender.value;
    return (
        <div className={`flex height-330 w-96 justify-center flex-col ${styles.parent}`}>
            <h1>Personal details</h1>

            {STEP_ONE_INPUT_DATA.map((inp) => {
                return (
                    <Input
                        type={inp.type}
                        key={inp.name}
                        name={inp.name}
                        value={step1.formData[inp.name as keyof typeof step1.formData].value}
                        onChange={handleOnChange}
                        onBlur={handleOnBlur}
                        placeholder={inp.placeholder}
                        required={inp.required}
                        autoComplete={inp.autoComplete ? inp.name : "off"}
                        error={step1.formData[inp.name].error}
                        errorMessage="This field is required"
                    />
                );
            })}

            <div className="flex gap-1 mb-3">
                Gender
                <p className="text-red-500">*</p>
            </div>
            <div className="flex gap-4 mr-3">
                <div className="flex gap-2">
                    <input
                        name="gender"
                        id="male"
                        type="radio"
                        onChange={handleOnChange}
                        checked={selectedGender == "male"}
                    />
                    <label htmlFor="male">Male</label>
                </div>
                <div className="flex gap-2">
                    <input
                        name="gender"
                        id="female"
                        type="radio"
                        checked={selectedGender == "female"}
                        onChange={handleOnChange}
                    />
                    <label htmlFor="female">Female</label>
                </div>
                <div className="flex gap-2">
                    <input
                        name="gender"
                        id="other"
                        type="radio"
                        checked={selectedGender === "other"}
                        onChange={handleOnChange}
                    />
                    <label htmlFor="other">Other</label>
                </div>
            </div>
            <div className={styles["button-group"]}>
                <Button buttonType="secondary" disabled={true}>
                    Back
                </Button>
                <Button buttonType="primary" onClick={goNextHandler} disabled={step1.buttonDisabled}>
                    Next
                </Button>
            </div>
        </div>
    );
}

/**
 * name, email, phone, gender, dob;
 */
