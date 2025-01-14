import { useState } from "react";
import AddMachineCard from "@/components/dashboard/AddMachineCard";
import MachineCard from "@/components/dashboard/MachineCard";
import StatsCard from "@/components/dashboard/StatsCard";
import type { Machine } from "@/components/dashboard/types";
import { Button } from "@/components/ui/button";
import { parseTime } from "@/utils/fun";

export default function Dashboard() {
  const [selectedLine, setSelectedLine] = useState<"line1" | "line2" | "line3">(
    "line3"
  );
  const [machines, setMachines] = useState<Record<string, Machine[]>>({
    line1: [
      {
        machineId: 1,
        name: "machine 1",
        state: true,
        timeOn: parseTime("01:25:00"),
      },
      {
        machineId: 2,
        name: "machine 2",
        state: false,
        timeOn: parseTime("00:00:00"),
      },
      {
        machineId: 3,
        name: "machine 3",
        state: true,
        timeOn: parseTime("02:54:00"),
      },
    ],
    line2: [
      {
        machineId: 4,
        name: "machine 4",
        state: true,
        timeOn: parseTime("11:21:00"),
      },
      {
        machineId: 5,
        name: "machine 5",
        state: true,
        timeOn: parseTime("01:25:00"),
      },
    ],
    line3: [
      {
        machineId: 6,
        name: "machine 6",
        state: true,
        timeOn: parseTime("11:21:00"),
      },
      {
        machineId: 7,
        name: "machine 7",
        state: true,
        timeOn: parseTime("01:25:00"),
      },
      {
        machineId: 8,
        name: "machine 8",
        state: true,
        timeOn: parseTime("01:25:00"),
      },
      {
        machineId: 9,
        name: "machine 9",
        state: true,
        timeOn: parseTime("01:25:00"),
      },
      {
        machineId: 10,
        name: "machine 10",
        state: true,
        timeOn: parseTime("01:25:00"),
      },
      {
        machineId: 11,
        name: "machine 11",
        state: true,
        timeOn: parseTime("01:25:00"),
      },
    ],
  });

  const handleAddMachine = (newMachine: Machine) => {
    setMachines((prevMachines) => ({
      ...prevMachines,
      [selectedLine]: [...prevMachines[selectedLine], newMachine],
    }));
  };

  return (
    <div className="gap-8 flex flex-col">
      <StatsCard />
      <div className="flex gap-4">
        <Button onClick={() => setSelectedLine("line3")}>Line 1</Button>
        <Button onClick={() => setSelectedLine("line2")}>Line 2</Button>
        <Button onClick={() => setSelectedLine("line1")}>Line 3</Button>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <AddMachineCard />
        <MachineCard machinesData={machines[selectedLine]} />
      </div>
    </div>
  );
}
