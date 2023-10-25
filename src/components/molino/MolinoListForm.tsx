"use client";

import { useForm } from "react-hook-form";
import { getSucursales } from "@/helpers/HelperSucursales";
import { Button } from "../shared/Button";

const sucursales = getSucursales();

export const MolinoListForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: {}) => {
    console.log(data);
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
                type="number"
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
