import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MachineInputForm from "@/components/add_sensor/MachineInputForm";

export default function AddSensorPage() {
  return (
    <div className="flex w-full max-h-screen h-full items-center justify-center">
      <Card className="bg-zinc-900 h-[38rem] text-white border-zinc-600 w-2/3  p-2 flex flex-col items-end">
        <CardHeader className="font-medium text-center h-16 text-lg w-full">
          <CardTitle className="flex items-center justify-center">
            <h2>Add new connection</h2>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex w-full p-0 items-center justify-center h-full">
          <MachineInputForm />
        </CardContent>
      </Card>
    </div>
  );
}
