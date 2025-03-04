"use client";

import { useEffect, useRef, useState } from "react";
import { OptionType } from "./types";
import Select from "react-select";
import { getModels } from "./utils";

const models = getModels();

export default function Models() {
  const [modelOption, setModelOptions] = useState<OptionType>(models[0]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleChange = (data: OptionType | null) => {
    if (!data) return;

    setModelOptions(data);
  };
  return (
    <Select
      options={models}
      onChange={handleChange}
      backspaceRemovesValue={false}
      blurInputOnSelect={true}
      captureMenuScroll={false}
      value={modelOption}
      isSearchable={false}
    />
  );
}
