import { Link } from "react-router-dom";
import predicTech from "@/assets/logo_predic.svg";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 p-2 text-white shadow-sm bg-predic">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link to="/" className="flex items-center justify-evenly">
            <img src={predicTech} className="w-8"></img>
            <span className="w-1/2 text-xl font-medium">PredicTech</span>
          </Link>
          <nav className="hidden md:flex gap-4">
            <Link
              to="/"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              //   prefetch={false}
            >
              Dashboard
            </Link>
            <Link
              to="/add-sensor"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              //   prefetch={false}
            >
              Add sensor
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
