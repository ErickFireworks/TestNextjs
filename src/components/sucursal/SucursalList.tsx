"use client";

import { getSucursales } from "@/helpers/HelperSucursales";

type Props = {
  id: number;
  name: string;
};

const sucursales = getSucursales();

export const SucursalList = () => {
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
