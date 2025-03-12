/* eslint-disable react/display-name */
"use client";

import React from "react";

// import { InputType } from "./type";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
    ({ name, type = "text", value, placeholder, onChange, ...props }, ref) => {
        return (
            <input
                className={props.className || "multi-form multi-form-" + name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                ref={ref}
                {...props}
            />
        );
    },
);
export default Input;
