"use client";

import React, { useRef, useState } from "react";
import Input from "../components/Input";
import MultiStepFromContext from "../context/MultiStepForm";
import { STEP_ONE_INPUT_DATA } from "./constant";
import styles from "./step-1.module.css";

export default function Step1() {
    const labelRef = useRef<HTMLLabelElement[]>([]);
    const inputRef = useRef<HTMLInputElement[]>([]);

    const { state, updateState } = React.useContext(MultiStepFromContext);
    const { step1 } = state;

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateState("UPDATE_STEP_1", { [e.target.name]: e.target.value });
    };

    const handleBlur = (index: number, op: "add" | "remove") => {
        const labelElement = labelRef.current[index];
        //     "  left: 5%;
        // top: -20%;"

        labelElement.classList[op]("hovered");
    };

    return (
        <div className={`flex height-330 w-96 justify-center flex-col ${styles.parent}`}>
            {STEP_ONE_INPUT_DATA.map((inp, i) => {
                return (
                    <div
                        key={inp.name}
                        className={`flex flex-row-reverse justify-end gap-6 w-1/2 ${styles["input-container"]}`}
                    >
                        <Input
                            type={inp.type}
                            key={inp.name}
                            name={inp.name}
                            value={step1[inp.name as keyof typeof step1]}
                            onChange={handleOnChange}
                            onBlur={() => handleBlur(i, "remove")}
                            onFocus={() => handleBlur(i, "add")}
                            ref={(el: HTMLInputElement) => {
                                if (el) inputRef.current.push(el);
                            }}
                        />
                        <label
                            className={`step-1-label ${styles.multiFormLabel}`}
                            style={{ left: "5%", bottom: "45%" }}
                            htmlFor={inp.name}
                            ref={(el: HTMLLabelElement) => {
                                if (el) labelRef.current.push(el);
                            }}
                            onClick={() => {
                                handleBlur(i, "add");
                                inputRef.current[i].focus();
                            }}
                        >
                            {inp.placeholder}
                        </label>
                    </div>
                );
            })}

            <div className="flex gap-4">
                <div className="flex gap-4">
                    <input name="male" type="radio" />
                    <label htmlFor="male">Male</label>
                </div>
                <div className="flex gap-4">
                    <input name="female" type="radio" />
                    <label htmlFor="female">Female</label>
                </div>
                <div className="flex gap-4">
                    <input name="other" type="radio" />
                    <label htmlFor="other">Other</label>
                </div>
            </div>
        </div>
    );
}

/**
 * name, email, phone, gender, dob;
 */
