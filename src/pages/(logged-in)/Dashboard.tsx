import RuntimePieChart from "@/lib/components/dashboard/runtimePieChart";
import StatsCard from "@/lib/components/dashboard/StatsCard";

export interface StatsCardProps {
    title: string;
    description: string;
    value: string;
}

export default function Dashboard() {
    return (
        <div className="grid grid-cols-3">
            <StatsCard title={"OEE"} description={"Overall Equipment Effectiveness"} value={"79 %"} />
            <RuntimePieChart />
        </div>
    )
}