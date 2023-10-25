"use client";
import { SucursalList } from "../../../components/sucursal/SucursalList";
import { Modal } from "@/components/shared/Modal";
import { useState } from "react";
import { NavBar } from "@/components/shared/Navbar";

export default function SucursalesPage() {
  const [open, setOpen] = useState(false);

  const handleModal = () => {
    setOpen(!open);
  };

  return (
    <>
      <NavBar />
      <div className="p-10">
        <h1 className="font-semibold text-6xl/[80%] text-center pb-10">
          Sucursales
        </h1>
        <hr />
        <div className="flex justify-end my-5">
          <button
            className="border border-gray-100 rounded py-4 px-20"
            type="button"
            onClick={handleModal}
          >
            Nuevo +
          </button>
        </div>
        <SucursalList />
        <Modal isOpen={open} />
      </div>
    </>
  );
}
