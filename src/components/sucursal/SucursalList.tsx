"use client";

import { getSucursales } from "@/helpers/HelperSucursales";

type Props = {
  id: number;
  name: string;
};

export const SucursalList = () => {
  const sucursales = getSucursales();

  return (
    <div className="mt-5">
      <ul>
        {sucursales?.map((sucursal: Props) => (
          <li key={sucursal.id} className="uppercase">
            {sucursal.id}. {sucursal.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
