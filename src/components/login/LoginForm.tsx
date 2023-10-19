"use client";

import { useForm } from "react-hook-form";
import { Input } from "../shared/Input";
import { Button } from "../shared/Button";
import { useSwal } from "@/hooks/useSwal";

type FormValues = {
  email: string;
  password: string;
};

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const { showMessage } = useSwal();

  const onSubmit = async (data: FormValues) => {
    console.log(data);
    // showMessage();
  };

  return (
    <form
      className="text-unika-gray-300 flex flex-col gap-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="md:max-w-md flex flex-col gap-6">
        <div>
          <Input
            type="text"
            placeholder="Escribe tu email"
            {...register("email", { required: "Email es requerido" })}
          />
          {errors.email && (
            <div className="mt-2 text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div>
          <Input
            type="password"
            placeholder="Escribe tu contraseña"
            {...register("password", { required: "Contraseña es requerida" })}
          />
          {errors.password && (
            <div className="mt-2 text-red-500">{errors.password.message}</div>
          )}
        </div>
        <div className="text-center">
          <Button type="submit" text="Enviar" />
        </div>
      </div>
    </form>
  );
};
