import { sucursales } from "../data/data";

type Props = {
  id: number;
  name: string;
};

export const getSucursales = () => {
  // localStorage.setItem("sucursales", JSON.stringify(sucursales));
  const localSucursales = localStorage.getItem("sucursales");
  return JSON.parse(localSucursales ? localSucursales : "{}");
};

export const setNewSucursal = (sucursal: Props) => {
  const sucursales = getSucursales();
  sucursales.push(sucursal);
  localStorage.setItem("sucursales", JSON.stringify(sucursales));
};
