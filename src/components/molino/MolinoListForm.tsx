"use client";

import { useForm } from "react-hook-form";
import { getSucursales } from "@/helpers/HelperSucursales";
import { Button } from "../shared/Button";
import { useSwal } from "@/hooks/useSwal";
import { useFormCustom } from "@/hooks/useFormCustom";
import { useEffect } from "react";

const sucursales = getSucursales();

const fieldsForm = sucursales;
let fields: any = {};

for (const element of fieldsForm) {
  fields[element.name] = "";
}

type Props = {
  total: number;
  handleSum: any;
};

export const MolinoListForm = ({ total, handleSum }: Props) => {
  const { register, handleSubmit } = useForm();
  const { succesMessage, errorMessage } = useSwal();

  const onSubmit = (dataForm: any) => {
    // let totalInputs = 0;
    // for (const input in dataForm) {
    //   totalInputs += Number(dataForm[input]);
    // }
    // totalInputs = totalInputs * 25;
    // if (totalInputs <= total) {
    //   succesMessage();
    // } else {
    //   errorMessage("La cantidad asignada es mayor a la existente");
    // }
    console.log(formState);
  };

  const { formState, onInputChange } = useFormCustom(fields, handleSum);

  useEffect(() => {
    let suma = 0;
    for (const item in formState) {
      suma += Number(formState[item]);
    }
    handleSum(suma * 25);
  }, [formState]);

  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul>
          {Object.keys(fields).map((item, index) => (
            <li key={index} className="my-5">
              <label htmlFor="">{item} </label>
              <input
                className="border border-white/50 placeholder-white placeholder-opacity-30 rounded bg-transparent p-4 w-full focus:border-white/100 focus:ring-transparent"
                type="text"
                placeholder="Asigna cantidad de maletas"
                name={item}
                value={fields.item}
                onChange={onInputChange}
              />
            </li>
          ))}
        </ul>
        <Button type="submit" text="Asignar" />
      </form>
    </div>
  );
};
