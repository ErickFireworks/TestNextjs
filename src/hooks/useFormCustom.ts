import { useState } from "react";

export const useFormCustom = (initialForm: any, handleSum: any) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }: any) => {
    const { name, value } = target;

    // if (onlyNumbers(value)) {
    setFormState({
      ...formState,
      [name]: value,
    });
    // }
  };

  return {
    formState,
    onInputChange,
  };
};
