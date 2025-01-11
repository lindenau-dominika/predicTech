import MachineCard from "@/components/dashboard/MachineCard";
import type { Machine } from "@/components/dashboard/types";
import { parseTime } from "@/utils/fun";

export default function Dashboard() {
  const machines: Machine[] = [
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
    {
      machineId: 4,
      name: "machine 4",
      state: true,
      timeOn: parseTime("11:21:00"),
    },
    {
      machineId: 5,
      name: "machine 1",
      state: true,
      timeOn: parseTime("01:25:00"),
    },
    {
      machineId: 6,
      name: "machine 2",
      state: false,
      timeOn: parseTime("00:00:00"),
    },
    {
      machineId: 7,
      name: "machine 3",
      state: true,
      timeOn: parseTime("02:54:00"),
    },
    {
      machineId: 8,
      name: "machine 4",
      state: true,
      timeOn: parseTime("11:21:00"),
    },
    {
      machineId: 9,
      name: "machine 1",
      state: true,
      timeOn: parseTime("01:25:00"),
    },
    {
      machineId: 10,
      name: "machine 2",
      state: false,
      timeOn: parseTime("00:00:00"),
    },
    {
      machineId: 11,
      name: "machine 3",
      state: true,
      timeOn: parseTime("02:54:00"),
    },
    {
      machineId: 12,
      name: "machine 4",
      state: true,
      timeOn: parseTime("11:21:00"),
    },
  ];

  return (
    <div className="pt-[5.5rem] px-8 gap-8">
      <MachineCard machinesData={machines} />
    </div>
  );
}
