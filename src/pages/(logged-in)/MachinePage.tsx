import type { Machine } from "@/components/dashboard/types";
import { Link, useParams } from "react-router-dom";
import GradientChart from "@/components/machine/GradientChart";
import MachineStatsCard from "@/components/machine/MachineStatsCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@radix-ui/react-scroll-area";

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
      <h1>Machine Page</h1>
      <p>ID: {machine.machineId}</p>
      <p>Name: {machine.name}</p>
      <MachineStatsCard />
      <div className="grid grid-cols-5 gap-8 h-[30rem]">
        <div className="col-span-4">
          <GradientChart data={machine.dataset} />
        </div>
        <Card className="col-span-1 h-[30rem]">
          <CardHeader>
            <CardTitle className="items-center grid grid-cols-2 ">
              Recent Raports
              <Link to="/add-sensor">
                <Button className="rounded">Report Machine</Button>
              </Link>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ScrollArea className="flex flex-col gap-4 overflow-y-auto h-[24rem]">
              <Card className="bg-rose-200 border-2 border-rose-300">
                <CardHeader>
                  <CardTitle>Fatal Error: 203</CardTitle>
                </CardHeader>
                <CardContent>Machine is at its 80% of power</CardContent>
              </Card>
              <Card className="bg-yellow-200 border-2 border-yellow-300">
                <CardHeader>
                  <CardTitle>Warning: 203</CardTitle>
                </CardHeader>
                <CardContent>Machine is at its 80% of power</CardContent>
              </Card>
              <Card className="bg-rose-200 border-2 border-rose-300">
                <CardHeader>
                  <CardTitle>Fatal Error: 203</CardTitle>
                </CardHeader>
                <CardContent>Machine is at its 80% of power</CardContent>
              </Card>
              <Card className="bg-yellow-200 border-2 border-yellow-300">
                <CardHeader>
                  <CardTitle>Warning: 203</CardTitle>
                </CardHeader>
                <CardContent>Machine is at its 80% of power</CardContent>
              </Card>
            </ScrollArea>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
