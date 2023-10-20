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
    handle(Number(inputValue) * 98);
  }; //end function

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // const found = categories.find( ( category) => category.toLowerCase() === inputValue.toLowerCase() );

    // if( found ) return;

    // if( inputValue.trim().length > 2 ){
    // 	//TODO: Hacer apunte sobre funciones que pasan como prop al componente
    // 	// Y como la funcion del use state tiene por defecto su valor anterior en un callback
    // 	setCategories( c => [ inputValue, ...c ] );
    // 	setInputValue('');
    // } //end if
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
    </form>
  );
};
