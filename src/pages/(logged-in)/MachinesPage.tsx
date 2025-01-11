import { Link } from "react-router-dom";

export default function MachinesPage() {
  const machines = [1, 2, 3, 4, 5];
  return (
    <div className="flex flex-col gap-2">
      {machines.map((machine) => (
        <Link key={machine} to={`/machines/${machine}`}>
          Machine {machine}
        </Link>
      ))}
    </div>
  );
}
