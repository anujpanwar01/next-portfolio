"use client";

import { InputType } from "./type";

const Input = (props: InputType) => {
    const { name, type = "text", value, handleChange, placeholder } = props;

    return <input name={name} type={type} value={value} onChange={handleChange} placeholder={placeholder} />;
};
export default Input;
