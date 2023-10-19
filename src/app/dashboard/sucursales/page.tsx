import { Button } from "@/components/shared/Button";
import { SucursalList } from "../../../components/sucursal/SucursalList";

export default function SucursalesPage() {
  return (
    <div className="p-10">
      <h1 className="font-semibold text-6xl/[80%] text-center pb-10">
        Sucursales
      </h1>
      <hr />
      <div className="flex justify-end my-5">
        <Button type="button" text="Nuevo +" />
      </div>
      <SucursalList />
    </div>
  );
}
