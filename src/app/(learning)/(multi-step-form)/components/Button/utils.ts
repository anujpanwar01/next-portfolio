export const getClassNameBasedOnProp = (buttonType: string) => {
    return ["primary", "secondary", "link"].find((cl) => cl == buttonType);
};
