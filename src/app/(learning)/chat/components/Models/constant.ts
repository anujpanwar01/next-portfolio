import { AIAndMlModelsType, ModelsType } from "./types";

export const MODELS: ModelsType = [
    {
        model: "claude-3-7-sonnet-20250219",
        maxTokens: 1024,
        temperature: 0,
    },
    {
        model: "claude-3-5-sonnet-20240620",
        maxTokens: 1024,
        temperature: 0,
    },
    {
        model: "gpt-4o-mini",
        maxTokens: 1024,
        temperature: 0,
    },
];

export const AI_AND_ML_MODELS: AIAndMlModelsType = {
    openai: ["s"],
    anthropic: ["claude-3-5-sonnet-20240620", "claude-3-7-sonnet-20250219"],
    deepseek: ["s"],
};
