import { Link } from "react-router-dom";
import predicTech from "@/lib/assets/logo_predic.svg";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 p-2 text-white shadow-sm bg-predic z-40">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link to="/app" className="flex items-center justify-evenly">
            <img src={predicTech} className="w-8"></img>
            <span className="w-1/2 text-xl font-medium">PredicTech</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              to="/app"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              //   prefetch={false}
            >
              Dashboard
            </Link>
            <Link
              to="/app/add-sensor"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              //   prefetch={false}
            >
              Add sensor
            </Link>
            <Link
              to="/app/report"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              //   prefetch={false}
            >
              Report
            </Link>

            <Link
              to="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              //   prefetch={false}
            >
              Contact
            </Link>
          </nav>
          <div className="p-6">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
