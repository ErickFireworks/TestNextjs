import { useState } from "react";

export const useFormTotal = (value: number) => {
  const [total, setTotal] = useState(value);

  return {
    total,
    setTotal,
  };
};
