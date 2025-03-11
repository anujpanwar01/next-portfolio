"use client";

import Input from "../components/Input";

export default function Step1() {
    return (
        <div>
            <Input
                name="name"
                value="hi"
                placeholder="Name"
                handleChange={(e) => {
                    console.log(e);
                }}
            />
        </div>
    );
}

/**
 * name, email, phone, gender, dob;
 */
