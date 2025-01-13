import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";

export default function Layout() {
  return (
    <div className="flex flex-col w-max-[1920px] ">
      <Navbar />
      <div className="pt-[5.5rem] px-8 h-screen py-8">
        <Outlet />
      </div>
    </div>
  );
}
