import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MachineInputForm from "@/components/add_sensor/MachineInputForm";
import MachineReportForm from "@/components/report/MachineReportForm";

export default function AddReportPage() {
  return (
    <div className="flex w-full justify-center items-center max-h-screen h-full pt-4">
      <Card className=" h-[38rem] w-1/2 p-2 flex flex-col items-end">
        <CardHeader className="font-medium text-center h-16 text-lg w-full">
          <CardTitle className="flex items-center justify-center">
            <h1 className="text-2xl">Report machine</h1>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex w-full p-0 items-center justify-center h-full">
          <MachineReportForm />
        </CardContent>
      </Card>
    </div>
  );
}
