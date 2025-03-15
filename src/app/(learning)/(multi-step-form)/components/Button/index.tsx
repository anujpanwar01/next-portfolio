import React from "react";
import Styles from "./button.module.css";
import { getClassNameBasedOnProp } from "./utils";

const Button = ({ buttonType, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { buttonType: string }) => {
    const buttonClass = getClassNameBasedOnProp(buttonType);

    return (
        <button
            className={`multi-step-form-button ${buttonClass && Styles[buttonClass]} ${props.className ? props.className : ""}`}
        >
            {props.children}
        </button>
    );
};

export default Button;
