import { Button } from "../ui/button";
import { Link } from "react-router-dom";

interface MachineButtonsProps {
  state: boolean;
  machineId: number;
}

export default function MachineButtons({
  state,
  machineId,
}: MachineButtonsProps) {
  return (
    <>
      <Button
        disabled={state}
        className="rounded hover:border-zinc-500 hover:bg-zinc-800"
        variant={state ? "ghost" : "default"}
      >
        Connect
      </Button>
      <Button className="rounded hover:border-zinc-500 hover:bg-zinc-800 ">
        Edit
      </Button>
      <Button className="rounded hover:border-zinc-500 hover:bg-zinc-800">
        Delete
      </Button>
      <Button className="rounded hover:border-zinc-500 hover:bg-zinc-800">
        <Link to={`/machines/${machineId}`}>
          <p>Details</p>
        </Link>
      </Button>
    </>
  );
}
