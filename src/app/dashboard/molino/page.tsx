"use client";

import { MolinoFormOnchange } from "@/components/molino/MolinoFormOnchange";
import { MolinoListForm } from "@/components/molino/MolinoListForm";
import { NavBar } from "@/components/shared/Navbar";
import { useState } from "react";

export default function MolinoPage() {
  const [total, setTotal] = useState(0);

  const handleTotal = (total: number) => {
    setTotal(total);
  };

  return (
    <>
      <NavBar />
      <div className="p-10">
        <h1 className="font-semibold text-6xl/[80%] pb-10">Molino</h1>

        <div className="flex justify-around">
          <div className="text-center">
            <MolinoFormOnchange handle={handleTotal} />
          </div>
          <div className="flex flex-col">
            <div>
              <h2 className="font-semibold text-4xl">TOTAL DE MASA</h2>
            </div>
            <div>
              <h3 className="font-semibold text-3xl">{total}</h3>
            </div>
          </div>
        </div>
        <div>{total > 100 && <MolinoListForm total={total} />}</div>
      </div>
    </>
  );
}
