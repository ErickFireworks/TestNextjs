"use client";

import { useForm } from "react-hook-form";
import { getSucursales } from "@/helpers/HelperSucursales";
import { Button } from "../shared/Button";
import { useSwal } from "@/hooks/useSwal";
import { useFormCustom } from "@/hooks/useFormCustom";
import { useEffect } from "react";

const sucursales = getSucursales();

const fieldsForm = sucursales;

type Props = {
  total: number;
  handleAssign: any;
  handleSpare: any;
};

export const MolinoListForm = ({ total, handleAssign, handleSpare }: Props) => {
  let fields: any = {};

  for (const element of fieldsForm) {
    fields[element.name] = "";
  }

  const { register, handleSubmit } = useForm();
  const { succesMessage, errorMessage } = useSwal();
  const { formState, onInputChange, onResetForm } = useFormCustom(fields);

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
    // console.log(formState);
  };

  useEffect(() => {
    // console.log(formState);

    let suma = 0;
    for (const item in formState) {
      suma += Number(formState[item]);
    }

    const assign = suma * 25;
    handleAssign(assign);
    handleSpare(total - assign);
  }, [formState]);

  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex content-center flex-row w-auto gap-5 flex-wrap grow">
          {Object.keys(formState).map((item, index) => (
            <div key={index} className="my-5">
              <label htmlFor="">{item} </label>
              <input
                className="border border-white/50 placeholder-white placeholder-opacity-30 rounded bg-transparent p-4 w-full focus:border-white/100 focus:ring-transparent"
                type="text"
                placeholder="Asigna cantidad de maletas"
                name={item}
                value={formState[item]}
                onChange={onInputChange}
              />
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-4 justify-center mt-5">
          <Button type="submit" text="Asignar" />
          <button
            type="button"
            className="border border-gray-100 rounded py-4 px-20"
            onClick={onResetForm}
          >
            Limpiar
          </button>
        </div>
      </form>
    </div>
  );
};
