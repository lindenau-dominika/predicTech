import { Link } from "react-router-dom";
import predicTech from "@/assets/logo_predic.svg";

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-white shadow-sm dark:bg-gray-950/90">
      <div className="w-full max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-14 items-center">
          <Link to="/" className="flex items-center justify-evenly">
            <img src={predicTech} className="w-8"></img>
            {/* <MountainIcon className="h-6 w-6" /> */}
            <span className="w-1/2 text-xl">PredicTech</span>
          </Link>
          <nav className="hidden md:flex gap-4">
            <Link
              to="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              //   prefetch={false}
            >
              Home
            </Link>
            <Link
              to="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              //   prefetch={false}
            >
              About
            </Link>
            <Link
              to="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              //   prefetch={false}
            >
              Services
            </Link>
            <Link
              to="#"
              className="font-medium flex items-center text-sm transition-colors hover:underline"
              //   prefetch={false}
            >
              Contact
            </Link>
          </nav>
          {/* <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              Sign in
            </Button>
            <Button size="sm">Sign up</Button>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

// function MountainIcon(props: object[]) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
//     </svg>
//   );
// }
