import { sucursales } from "../data/data";

type Props = {
  id: number;
  name: string;
};

export const getSucursales = () => {
  // typeof window !== "undefined"
  //   ? localStorage.setItem("sucursales", JSON.stringify(sucursales))
  //   : false;
  // const localSucursales =
  //   typeof window !== "undefined" ? localStorage.getItem("sucursales") : "[]";
  // return JSON.parse(localSucursales ? localSucursales : "[]");
  return sucursales;
};

export const setNewSucursal = (sucursal: Props) => {
  // const sucursalesLocal = sucursales;
  // sucursalesLocal.push(sucursal);
  // localStorage.setItem("sucursales", JSON.stringify(sucursalesLocal));
};
