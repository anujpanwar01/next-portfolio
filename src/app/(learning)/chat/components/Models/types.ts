export type ModelsType = {
    model: string;
    maxTokens: number;
    temperature: number;
}[];

export type OptionType = {
    label: string;
    value: string;
};

export type AIAndMlModelsType = {
    openai: string[];
    anthropic: string[];
    deepseek: string[];
};
