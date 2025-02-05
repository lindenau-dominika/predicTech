import type { Machine } from "@/components/dashboard/types";
import { Link, useParams } from "react-router-dom";
import GradientChart from "@/components/machine/GradientChart";
import MachineStatsCard from "@/components/machine/MachineStatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import ErrorCard from "@/components/machine/ErrorCard";

interface MachineProps {
  machinesData: Machine[];
}

export default function MachinePage({ machinesData }: MachineProps) {
  const { id } = useParams<{ id: string }>();

  const machine = machinesData.find((m) => m.machineId === Number(id));

  if (!machine) {
    return <h1>Maszyna nie znaleziona</h1>;
  }

  return (
    <div className="w-full flex flex-col">
      <h1 className="text-3xl font-medium p-2 px-0">Machine ID: {machine.machineId}</h1>
      <MachineStatsCard />
      <div className="grid grid-cols-5 gap-8 h-[30rem]">
        <div className="col-span-4">
          <GradientChart data={machine.dataset}/>
        </div>
        <Card className="col-span-1 h-[30rem]">
          <CardHeader>
            <CardTitle className="items-center grid grid-cols-2 ">
              Recent Raports
              <Link to="/add-sensor">
                <Button className="rounded bg-predic dark:bg-predic text-white dark:text-white">Report Machine</Button>
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="flex flex-col gap-4 overflow-y-auto h-[24rem]">
              {/* TUTAJ MAPOWANIE PO UZYSKANIU API */}
              <ErrorCard
                machineId={7}
                isWarning={true}
                message={
                  "The effectiveness of machine is dropping. Action required"
                }
              />
              <ErrorCard
                machineId={7}
                isWarning={false}
                message={
                  "Consumption of machine increased to 80% of its power. "
                }
              />
              <ErrorCard
                machineId={7}
                isWarning={true}
                message={
                  "The effectiveness of machine is dropping. Action required"
                }
              />
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
