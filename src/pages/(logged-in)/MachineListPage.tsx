import { useState, useEffect } from "react";
import AddMachineCard from "@/lib/components/machineList/AddMachineCard";
import MachineCard from "@/lib/components/machineList/MachineCard";
import StatsCard from "@/lib/components/machineList/StatsCard";
import MachineListElement from "@/lib/components/machineList/MachineListElement";
// import { getCompanyDetails } from "@/lib/api/company";
// import type { Machine } from "@/lib/components/machineList/types";

type Machine = {
  id: string;
};
export default function MachineListPage() {
  const [selectedLine, setSelectedLine] = useState<"1" | "2" | "3">("1");
  const [machines, setMachines] = useState<Machine[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleLineChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const line = event.target.value as "1" | "2" | "3";
    setSelectedLine(line);
  };

  // useEffect(() => {
  //   fetch("https://backend-production-1467.up.railway.app/api/lines")
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((data) => {
  //       setMachines(data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       setError(err.message);
  //       setLoading(false);
  //     });
  // }, []);

  // if (loading) return <p>Ładowanie...</p>;
  // if (error) return <p>Błąd: {error}</p>;

  return (
    <div className="gap-8 flex flex-col">
      <div className="flex gap-4 w-[10rem]"></div>
      <div className="grid">
        <div className="border rounded p-4 gap-4 flex flex-col mb-4">
          <div className="p-2 border-b">
            <h1 className="text-2xl font-semibold">Job list</h1>
          </div>
          <div className="grid w-full items-center grid-cols-5 px-10 font-medium">
            <span className="w-full text-start flex items-center justify-start">
              WO
            </span>
            <span className="w-full text-center">OP</span>
            <span className="w-full text-center">Progress</span>
            <span className="w-full text-center">Estimated</span>
            <span className="w-full text-end">Action</span>
          </div>
        </div>
        <MachineListElement />
        <MachineListElement />
        <MachineListElement />
        <MachineListElement />
        <MachineListElement />
        <MachineListElement />
        <MachineListElement />
        <MachineListElement />
      </div>
    </div>
  );
}
