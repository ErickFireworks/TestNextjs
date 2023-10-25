"use client";

import { useForm } from "react-hook-form";
import { getSucursales } from "@/helpers/HelperSucursales";
import { Button } from "../shared/Button";
import { useSwal } from "@/hooks/useSwal";

const sucursales = getSucursales();

type Props = {
  total: number;
};

export const MolinoListForm = ({ total }: Props) => {
  const { register, handleSubmit } = useForm();
  const { succesMessage, errorMessage } = useSwal();

  const onSubmit = (dataForm: any) => {
    let totalInputs = 0;

    for (const input in dataForm) {
      totalInputs += Number(dataForm[input]);
    }

    totalInputs = totalInputs * 25;

    if (totalInputs <= total) {
      succesMessage();
    } else {
      errorMessage("La cantidad asignada es mayor a la existente");
    }
  };

  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <ul>
          {sucursales.map((item, index) => (
            <li key={item.id} className="my-5">
              <label htmlFor="">{item.name}</label>
              <input
                className="border border-white/50 placeholder-white placeholder-opacity-30 rounded bg-transparent p-4 w-full focus:border-white/100 focus:ring-transparent"
                type="text"
                placeholder="Asigna cantidad de maletas"
                {...register(`${item.name}`)}
              />
            </li>
          ))}
        </ul>
        <Button type="submit" text="Asignar" />
      </form>
    </div>
  );
};
