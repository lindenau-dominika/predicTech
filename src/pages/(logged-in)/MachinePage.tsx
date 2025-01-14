import type { Machine } from "@/components/dashboard/types";

interface MachineProps {
  machinesData: Machine;
}

export default function MachinePage({ machinesData }: MachineProps) {
  return (
    <div>
      <h1>Machine Page</h1>
    </div>
  );
}
