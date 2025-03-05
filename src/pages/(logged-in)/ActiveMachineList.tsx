import { useState, useEffect } from "react";
import AddMachineCard from "@/lib/components/machineList/AddMachineCard";
import MachineCard from "@/lib/components/machineList/MachineCard";
import StatsCard from "@/lib/components/machineList/StatsCard";
import { useAuth } from "@/context/AuthContext";

type Machine = {
  id: string;
};

export default function ActiveMachineList() {
  const [lines, setLines] = useState<string[]>(["1", "2", "3"]);
  const [selectedLine, setSelectedLine] = useState<string>("1");
  const [newLineName, setNewLineName] = useState<string>(""); // Nowy input
  const [machines, setMachines] = useState<Machine[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const handleLineChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLine(event.target.value);
  };

  const handleNewLineNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setNewLineName(event.target.value);
  };

  const handleAddLine = () => {
    if (newLineName && !lines.includes(newLineName)) {
      setLines([...lines, newLineName]);
      setSelectedLine(newLineName);
      setNewLineName(""); // Czyścimy input po dodaniu
    }
  };

  const { getUser } = useAuth();
  const userData = getUser();
  useEffect(() => {
    const fetchMachines = async () => {
      setLoading(true);
      setError(null);

      try {
        const userId = userData?.user._id;

        if (!selectedLine || !userId) {
          setError("Name and userId are required");
          setLoading(false);
          return;
        }

        // Logowanie zapytania do API
        const requestBody = { name: selectedLine, userId };
        console.log("Sending request to API with body:", requestBody);

        const response = await fetch(
          "https://backend-production-1467.up.railway.app/api/lines",
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody),
          }
        );

        const data = await response.json();

        // Logowanie odpowiedzi z serwera
        console.log("Received response from API:", data);

        if (!response.ok) {
          throw new Error(
            data.message || `HTTP error! Status: ${response.status}`
          );
        }

        setMachines(data);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchMachines();
  }, [selectedLine]);

  return (
    <div className="gap-8 flex flex-col">
      <StatsCard />
      <div className="flex gap-4">
        <select
          id="production-lines"
          onChange={handleLineChange}
          value={selectedLine}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
              focus:ring-blue-500 focus:border-blue-500 block w-[10rem] p-2.5 
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
              dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {lines.map((line) => (
            <option key={line} value={line}>
              {line}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="New line name"
          value={newLineName}
          onChange={handleNewLineNameChange}
          className="border border-gray-300 rounded-lg p-2 text-sm dark:bg-gray-700 dark:text-white"
        />

        <button
          onClick={handleAddLine}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Add line
        </button>
      </div>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        <AddMachineCard />
        {/* <MachineCard machinesData={machines} /> */}
      </div>
    </div>
  );
}
