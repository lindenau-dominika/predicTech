import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Machine } from "./types";
import { cn } from "@/lib/utils";
import MachineButtons from "./MachineButtons";
import { Link } from "react-router-dom";

interface MachineProps {
  machinesData: Machine[];
}
export default function MachineCard({ machinesData }: MachineProps) {
  return (
    <>
      {machinesData.map((machine) => (
        <Link to={`/machines/${machine.machineId}`}>
          <Card
            className={cn(
              "dark:bg-zinc-900 h-56 border-zinc-400",
              machine.state
                ? "opacity-100"
                : "dark:bg-opacity-30 dark:text-opacity-40 text-opacity-40 border-opacity-40"
            )}
          >
            <CardHeader className="flex flex-row w-full items-center justify-between text-xl h-12">
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
            <CardContent className="w-full flex gap-1 flex-col justify-end h-44">
              {machine.state == true ? (
                <div className="flex gap-4">
                  <p>time on:</p>
                  {machine.timeOn.toLocaleTimeString()}
                </div>
              ) : (
                ""
              )}
              <div className="grid grid-cols-4 gap-2 ">
                <MachineButtons
                  state={machine.state}
                  machineId={machine.machineId}
                />
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </>
  );
}
