import { MODELS } from "../components/Models/constant";

export const getModels = () => {
  return MODELS.map((model) => ({
    label: model.model,
    value: model.model,
  }));
};

