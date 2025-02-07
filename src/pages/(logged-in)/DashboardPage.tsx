import { useState, useEffect } from "react";
import AddMachineCard from "@/components/dashboard/AddMachineCard";
import MachineCard from "@/components/dashboard/MachineCard";
import StatsCard from "@/components/dashboard/StatsCard";
import { getCompanyDetails } from "@/api/company";
import type { Machine } from "@/components/dashboard/types";

export default function Dashboard() {
  const [selectedLine, setSelectedLine] = useState<"1" | "2" | "3">("1");
  const [machines, setMachines] = useState<Machine[]>([]); // Stan na przechowywanie maszyn
  const [company, setCompany] = useState<any>(null); // Stan na przechowywanie danych firmy

  // Funkcja do obsługi zmiany wybranej linii produkcyjnej
  const handleLineChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const line = event.target.value as "1" | "2" | "3";
    setSelectedLine(line);
  };

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const companyData = await getCompanyDetails(0);
        if (companyData && !companyData.error) {
          setCompany(companyData);
        }
      } catch (error) {
        console.error("Error fetching company data:", error);
      }
    };
    fetchCompanyData();
  }, []);

  useEffect(() => {
    if (company) {
      console.log(company);
      const lineMachines =
        company.production_lines[selectedLine]?.machines || [];
      setMachines(lineMachines);
    }
  }, [selectedLine, company]);

  return (
    <div className="gap-8 flex flex-col">
      <StatsCard />
      <div className="flex gap-4 w-[10rem]">
        <select
          id="production-lines"
          onChange={handleLineChange}
          value={selectedLine}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="1">Linia 1</option>
          <option value="2">Linia 2</option>
          <option value="3">Linia 3</option>
        </select>
      </div>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <AddMachineCard />
        <MachineCard machinesData={machines} />
      </div>
    </div>
  );
}
