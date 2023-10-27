"use client";

import { MolinoFormOnchange } from "@/components/molino/MolinoFormOnchange";
import { MolinoListForm } from "@/components/molino/MolinoListForm";
import { NavBar } from "@/components/shared/Navbar";
import { useState } from "react";
import { useFormTotal } from "../../../hooks/useFormTotal";
import { useFormTotalOnChange } from "@/hooks/useFormTotalOnChange";

export default function MolinoPage() {
  const { total, setTotal } = useFormTotal(0);
  const { inputValue, setInputValue } = useFormTotalOnChange(0);
  const [assign, setAssign] = useState(0);
  const [spare, setSpare] = useState(0);

  const handleTotal = (bultos: number) => {
    setTotal(bultos);
    if (!bultos) {
      setAssign(0);
      setSpare(0);
    }
  };

  const handleAssign = (assign: number) => {
    setAssign(assign);
  };

  const handleSpare = (spare: number) => {
    setSpare(spare);
  };

  const onReserFormTotal = () => {
    setTotal(0);
    setInputValue(0);
    setAssign(0);
    setSpare(0);
  };

  return (
    <>
      <NavBar />
      <div className="p-10">
        <h1 className="font-semibold text-6xl/[80%] pb-10">Molino</h1>

        <div className="flex justify-around">
          <div className="text-center">
            <MolinoFormOnchange
              handle={handleTotal}
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
          </div>
          <div className="flex flex-row gap-4">
            <div>
              <div>
                <h2 className="font-semibold text-4xl">TOTAL DE MASA</h2>
              </div>
              <div>
                <h3 className="font-semibold text-3xl">{total}</h3>
              </div>
            </div>
            <br />
            <div>
              {assign >= 25 && (
                <>
                  <h2 className="font-semibold text-4xl">TOTAL ASIGNADO</h2>
                  <h3 className="font-semibold text-3xl">{assign}</h3>
                </>
              )}
            </div>
            <br />
            <div>
              {spare > 0 && assign >= 25 && (
                <>
                  <h2 className="font-semibold text-4xl">SOBRANTE</h2>
                  <h3 className="font-semibold text-3xl">{spare}</h3>
                </>
              )}
            </div>
          </div>
        </div>
        <div>
          {total > 100 && (
            <MolinoListForm
              total={total}
              handleAssign={handleAssign}
              handleSpare={handleSpare}
              handleResetFormTotal={onReserFormTotal}
            />
          )}
        </div>
      </div>
    </>
  );
}
