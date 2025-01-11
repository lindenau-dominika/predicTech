import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Machine } from "./types";
import { Link } from "react-router-dom";

interface MachineProps {
  machinesData: Machine[];
}
export default function MachineCard({ machinesData }: MachineProps) {
  return (
    <div className="grid grid-cols-6 gap-8">
      {machinesData.map((machine) => (
        <Card>
          <CardHeader className="flex flex-row w-full items-center justify-between">
            <CardTitle>{machine.name}</CardTitle>
            <svg width="20" height="20" viewBox="0 0 20 20">
              <circle
                cx="10"
                cy="10"
                r="8"
                fill={machine.state ? "#4CAF50" : "#F44336"}
                strokeWidth="1"
              />
            </svg>
          </CardHeader>
          <CardContent className="w-full flex gap-1">
            <p>time on:</p>
            {machine.timeOn.toLocaleTimeString()}
            <Link to={`/machines/${machine.machineId}`}>
              <p>Details</p>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
