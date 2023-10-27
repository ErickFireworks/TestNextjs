import { useState } from "react";

export const useFormTotalOnChange = (value: number) => {
  const [inputValue, setInputValue] = useState(value);

  return {
    inputValue,
    setInputValue,
  };
};
