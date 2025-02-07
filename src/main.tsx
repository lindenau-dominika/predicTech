import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";
import Dashboard from "./pages/(logged-in)/DashboardPage";
import NotFound from "./pages/NotFoundPage";
import Layout from "./pages/Layout";
import AddSensorPage from "./pages/(logged-in)/AddSensorPage";
import MachinePage from "./pages/(logged-in)/MachinePage";
import AddReportPage from "./pages/(logged-in)/AddReportPage";
import { Machine } from "./components/dashboard/types";

// const company = await getCompanyDetails(23);
// console.log(company.production_lines);
// const [machines, setMachines] = useState<Record<string, Machine[]>>({
//   line1: [
//     {
//       machineId: 1,
//       name: "machine 1",
//       state: true,
//       timeOn: parseTime("01:25:00"),
//       dataset: [0.5, 0.4, 0.7, 0.5, 0.4, 0.8, 0.5, 0.4, 0.7, 0.5],
//     },
//     {
//       machineId: 2,
//       name: "machine 2",
//       state: false,
//       timeOn: parseTime("00:00:00"),
//       dataset: [0.5, 0.4, 0.7, 0.5, 0.4, 0.8, 0.5, 0.4, 0.7, 0.5],
//     },
//     {
//       machineId: 3,
//       name: "machine 3",
//       state: true,
//       timeOn: parseTime("02:54:00"),
//       dataset: [0.5, 0.4, 0.7, 0.5, 0.4, 0.8, 0.5, 0.4, 0.7, 0.5],
//     },
//   ],
//   line2: [
//     {
//       machineId: 4,
//       name: "machine 4",
//       state: true,
//       timeOn: parseTime("11:21:00"),
//       dataset: [0.5, 0.4, 0.7, 0.5, 0.4, 0.8, 0.5, 0.4, 0.7, 0.5],
//     },
//     {
//       machineId: 5,
//       name: "machine 5",
//       state: true,
//       timeOn: parseTime("01:25:00"),
//       dataset: [0.5, 0.4, 0.7, 0.5, 0.4, 0.8, 0.5, 0.4, 0.7, 0.5],
//     },
//   ],
//   line3: [
//     {
//       machineId: 6,
//       name: "machine 6",
//       state: true,
//       timeOn: parseTime("11:21:00"),
//       dataset: [0.5, 0.4, 0.7, 0.5, 0.4, 0.8, 0.5, 0.4, 0.7, 0.5],
//     },
//     {
//       machineId: 7,
//       name: "machine 7",
//       state: true,
//       timeOn: parseTime("01:25:00"),
//       dataset: [0.5, 0.4, 0.7, 0.5, 0.4, 0.8, 0.5, 0.4, 0.7, 0.5],
//     },
//     {
//       machineId: 8,
//       name: "machine 8",
//       state: true,
//       timeOn: parseTime("01:25:00"),
//       dataset: [0.5, 0.4, 0.7, 0.5, 0.4, 0.8, 0.5, 0.4, 0.7, 0.5],
//     },
//     {
//       machineId: 9,
//       name: "machine 9",
//       state: true,
//       timeOn: parseTime("01:25:00"),
//       dataset: [0.5, 0.4, 0.7, 0.5, 0.4, 0.8, 0.5, 0.4, 0.7, 0.5],
//     },
//     {
//       machineId: 10,
//       name: "machine 10",
//       state: true,
//       timeOn: parseTime("01:25:00"),
//       dataset: [0.5, 0.4, 0.7, 0.5, 0.4, 0.8, 0.5, 0.4, 0.7, 0.5],
//     },
//     {
//       machineId: 11,
//       name: "machine 11",
//       state: true,
//       timeOn: parseTime("01:25:00"),
//       dataset: [0.5, 0.4, 0.7, 0.5, 0.4, 0.8, 0.5, 0.4, 0.7, 0.5],
//     },
//   ],
// });
let machines: Machine[] = [];

// interface LineProps {
//   machines: Machine[];
// }

// let lines: LineProps[] = company.production_lines;

// lines.forEach((line) => {
//   machines.push(...line.machines);
// });

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/add-sensor", element: <AddSensorPage /> },
      { path: "/report", element: <AddReportPage /> },
      {
        path: "/machines/:id",
        element: <MachinePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
