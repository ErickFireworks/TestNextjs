"use client";
import { useState } from "react";

type Props = {
  handle: (total: number) => void;
};

export const MolinoFormOnchange = ({ handle }: Props) => {
  const [inputValue, setInputValue] = useState(0);

  const handleInputChange = (e: any) => {
    const value = e.target.value;
    setInputValue(value);

    handle(Number(value) * 98);
  }; //end function

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log(inputValue * 98);
  }; //end function

  return (
    <form onSubmit={handleSubmit}>
      <div className="my-5">
        <label>Agrega el número de bultos cocidos</label>
      </div>
      <input
        type="number"
        className="border border-white/50 placeholder-white placeholder-opacity-30 rounded bg-transparent p-4 w-full focus:border-white/100 focus:ring-transparent"
        value={inputValue}
        onChange={handleInputChange}
      />
      {!inputValue && (
        <div className="mt-2 text-red-500">
          {"El número de bultos debe ser mayor a 1"}
        </div>
      )}
    </form>
  );
};
