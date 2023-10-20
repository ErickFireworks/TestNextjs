"use client";

import { useForm } from "react-hook-form";
import { Input } from "../shared/Input";
import { Button } from "../shared/Button";
import { useEffect } from "react";

type FormValues = {
  bultos: string;
};

type Props = {
  handle: (total: number) => void;
};

export const MolinoForm = ({ handle }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    // handle(Number(data.bultos));
  };

  return (
    <form
      className="text-unika-gray-300 flex flex-col gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="md:max-w-md flex flex-col gap-6">
        <div>
          <div className="my-5">
            <label>Agrega número de bultos cocidos</label>
          </div>
          <Input
            type="number"
            placeholder="Número de bultos cocidos"
            {...register("bultos", {
              required: "Número de bultos cocidos es requerido",
            })}
          />
          {errors.bultos && (
            <div className="mt-2 text-red-500">{errors.bultos.message}</div>
          )}
        </div>
        <div>
          <Button type="submit" text="Enviar" handle={() => {}} />
        </div>
      </div>
    </form>
  );
};
