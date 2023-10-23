"use client";

import { useForm, useFieldArray } from "react-hook-form";
import { getSucursales } from "@/helpers/HelperSucursales";

const sucursales = getSucursales();

export const MolinoListForm = () => {
  const { register, control, handleSubmit, reset, trigger, setError } = useForm(
    {}
  );

  const { fields, append, remove } = useFieldArray({
    control,
    name: "value",
  });

  return (
    <div className="mt-5">
      <form onSubmit={handleSubmit((data) => console.log(data))}>
        <ul>
          {sucursales.map((item, index) => (
            <li key={item.id} className="my-5">
              <label htmlFor="">{item.name}</label>
              <input
                className="border border-white/50 placeholder-white placeholder-opacity-30 rounded bg-transparent p-4 w-full focus:border-white/100 focus:ring-transparent"
                type="number"
                placeholder="Asigna cantidad de maletas"
                {...register(`value.${item.name}`)}
              />
            </li>
          ))}
        </ul>
        <input
          type="submit"
          className="border border-gray-100 rounded py-4 px-20"
        />
      </form>
    </div>
  );
};
