import { Button } from "../ui/button";

export default function MachineListElement() {
  return (
    <div className="grid w-full border rounded p-4 items-center mb-4 grid-cols-5">
      <span className="w-full text-start">Machine name</span>
      <span className="w-full text-center">50</span>
      <div className="w-full flex items-center justify-center">
        <span className="bg-teal-500 px-2 rounded text-center text-white font-semibold">
          In Progress
        </span>
      </div>
      <span className="w-full text-center">5h 32m</span>
      <div className="w-full flex items-center justify-end">
        <Button className="rounded bg-predic">Turn on</Button>
      </div>
    </div>
  );
}
