import { NavBar } from "@/components/shared/Navbar";
import Link from "next/link";

export default function DashBoardPage() {
  return (
    <>
      <NavBar />
      <div className="p-10">
        <h1 className="font-semibold text-6xl/[80%] pb-10">Dashboard</h1>
        <ul>
          <li>
            <Link href="/dashboard/molino">Molino</Link>
          </li>
          <li>
            <Link href="/dashboard/sucursales">Sucursales</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
