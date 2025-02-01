import { useState } from "react";
import AddMachineCard from "@/components/dashboard/AddMachineCard";
import MachineCard from "@/components/dashboard/MachineCard";
import StatsCard from "@/components/dashboard/StatsCard";
import type { Machine } from "@/components/dashboard/types";
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
        dataset: [0.5, 0.4, 0.7, 0.5, 0.4, 0.8, 0.5, 0.4, 0.7, 0.5],
      },
      {
        machineId: 2,
        name: "machine 2",
        state: false,
        timeOn: parseTime("00:00:00"),
        dataset: [0.5, 0.4, 0.7, 0.5, 0.4, 0.8, 0.5, 0.4, 0.7, 0.5],
      },
      {
        machineId: 3,
        name: "machine 3",
        state: true,
        timeOn: parseTime("02:54:00"),
        dataset: [0.5, 0.4, 0.7, 0.5, 0.4, 0.8, 0.5, 0.4, 0.7, 0.5],
      },
    ],
    line2: [
      {
        machineId: 4,
        name: "machine 4",
        state: true,
        timeOn: parseTime("11:21:00"),
        dataset: [0.5, 0.4, 0.7, 0.5, 0.4, 0.8, 0.5, 0.4, 0.7, 0.5],
      },
      {
        machineId: 5,
        name: "machine 5",
        state: true,
        timeOn: parseTime("01:25:00"),
        dataset: [0.5, 0.4, 0.7, 0.5, 0.4, 0.8, 0.5, 0.4, 0.7, 0.5],
      },
    ],
    line3: [
      {
        machineId: 6,
        name: "machine 6",
        state: true,
        timeOn: parseTime("11:21:00"),
        dataset: [0.5, 0.4, 0.7, 0.5, 0.4, 0.8, 0.5, 0.4, 0.7, 0.5],
      },
      {
        machineId: 7,
        name: "machine 7",
        state: true,
        timeOn: parseTime("01:25:00"),
        dataset: [0.5, 0.4, 0.7, 0.5, 0.4, 0.8, 0.5, 0.4, 0.7, 0.5],
      },
      {
        machineId: 8,
        name: "machine 8",
        state: true,
        timeOn: parseTime("01:25:00"),
        dataset: [0.5, 0.4, 0.7, 0.5, 0.4, 0.8, 0.5, 0.4, 0.7, 0.5],
      },
      {
        machineId: 9,
        name: "machine 9",
        state: true,
        timeOn: parseTime("01:25:00"),
        dataset: [0.5, 0.4, 0.7, 0.5, 0.4, 0.8, 0.5, 0.4, 0.7, 0.5],
      },
      {
        machineId: 10,
        name: "machine 10",
        state: true,
        timeOn: parseTime("01:25:00"),
        dataset: [0.5, 0.4, 0.7, 0.5, 0.4, 0.8, 0.5, 0.4, 0.7, 0.5],
      },
      {
        machineId: 11,
        name: "machine 11",
        state: true,
        timeOn: parseTime("01:25:00"),
        dataset: [0.5, 0.4, 0.7, 0.5, 0.4, 0.8, 0.5, 0.4, 0.7, 0.5],
      },
    ],
  });

  // Obsługuje zmianę wybranej linii produkcyjnej
  const handleLineChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const line = event.target.value as "line1" | "line2" | "line3";
    setSelectedLine(line);
  };

  return (
    <div className="gap-8 flex flex-col">
      <StatsCard />
      <div className="flex gap-4 w-[10rem]">
        <select
          id="production-lines"
          onChange={handleLineChange} // Dodane
          value={selectedLine} // Dodane
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="line1">Linia 1</option>
          <option value="line2">Linia 2</option>
          <option value="line3">Linia 3</option>
        </select>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <AddMachineCard />
        <MachineCard machinesData={machines[selectedLine]} />
      </div>
    </div>
  );
}
