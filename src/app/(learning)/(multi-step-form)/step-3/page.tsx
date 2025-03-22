"use client";

import { useContext } from "react";
import Input from "../components/Input";
import styles from "../step-1.module.css";
import MultiStepFromContext from "../context/MultiStepForm";
import Button from "../components/Button";
import { useRouter } from "next/navigation";
import { UIFormatter, validate } from "./utils";

export default function Step3() {
    const { state, updateState } = useContext(MultiStepFromContext);
    const { formData, buttonDisabled } = state.step3;
    const router = useRouter();

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const modifiedValue = UIFormatter.getFormatter(name)(value);

        updateState("UPDATE_BUTTON_DISABLED", { key: "step3", value: false });

        updateState("UPDATE_STEP_3", { [name]: { value: modifiedValue, error: false } });
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        updateState("UPDATE_STEP_3", {
            [e.target.name]: { ...formData[e.target.name as keyof typeof formData], error: false },
        });
    };

    const goBackHandler = () => {
        router.replace("step-2");
    };

    const handleSave = async () => {
        const newState = validate(formData);

        const hasError = Object.entries(newState).some(([_, value]) => value.error);

        if (hasError) {
            updateState("UPDATE_STEP_3", newState);
            return;
        }

        try {
            const response = await fetch("/api/multi-step-wizard", {
                method: "POST",
                body: JSON.stringify(state),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            if (response.status !== 201 || !response.ok) {
                throw new Error("Failed to save data");
            }
            const data = await response.json();
            console.log(data);

            router.replace("success");
        } catch (e) {
            console.error("Failed to save data", e);
            prompt("Failed to save data");
        }
    };

    return (
        <div className={`flex height-330 w-96 justify-center flex-col ${styles.parent}`}>
            <h1>Card details</h1>
            <Input
                name="cardNumber"
                labelName="Card number"
                placeholder="3345 5894 1323 0123"
                onChange={handleOnChange}
                onBlur={handleBlur}
                value={formData.cardNumber.value}
                error={formData.cardNumber.error}
                errorMessage={formData.cardNumber.errorMsg}
            />

            <div className="flex gap-8 mt-2">
                <Input
                    name="expiryDate"
                    labelName="Expiry date"
                    placeholder="MM / YY"
                    onChange={handleOnChange}
                    onBlur={handleBlur}
                    value={formData.expiryDate.value}
                    error={formData.expiryDate.error}
                    errorMessage={formData.expiryDate.errorMsg}
                />
                <Input
                    name="securityCode"
                    labelName="Security Code"
                    placeholder="CVC"
                    onChange={handleOnChange}
                    onBlur={handleBlur}
                    value={formData.securityCode.value}
                    error={formData.securityCode.error}
                    errorMessage={formData.securityCode.errorMsg}
                />
            </div>

            <div className={styles["button-group"]}>
                <Button buttonType="secondary" onClick={goBackHandler}>
                    Back
                </Button>
                <Button buttonType="primary" onClick={handleSave} disabled={buttonDisabled}>
                    Next
                </Button>
            </div>
        </div>
    );
}
