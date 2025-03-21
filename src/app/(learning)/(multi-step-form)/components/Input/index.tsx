/* eslint-disable react/display-name */
"use client";

import React from "react";
import styles from "./input.module.css";
// import { InputType } from "./type";

const Input = React.forwardRef<
    HTMLInputElement,
    React.InputHTMLAttributes<HTMLInputElement> & { errorMessage?: string; error?: boolean; labelName?: string }
>(({ name, type = "text", value, placeholder, onChange, error = false, errorMessage, labelName, ...props }, ref) => {
    return (
        <div className="flex flex-col gap-2 mb-3">
            <label htmlFor={name} className="flex gap-1">
                {labelName || placeholder}
                {props.required && (
                    <span className="text-red-500" aria-hidden="true">
                        *
                    </span>
                )}
            </label>
            <input
                className={`${props.className || "multi-form multi-form-" + name} ${styles.input}`}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                ref={ref}
                {...props}
            />

            {error ? <p className="text-red-500 text-xs">{errorMessage}</p> : ""}
        </div>
    );
});
export default Input;
