import { Card, CardContent, CardHeader } from "../ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/lib/components/ui/chart";
import { LabelList, Pie, PieChart } from "recharts";

const chartData = [
  { status: "uptime", value: 275, fill: "#1A32F6" },
  { status: "downtime", value: 200, fill: "#1A111199" },
];

const chartConfig = {
  value: {
    label: "Value",
  },
  uptime: {
    label: "Up time",
    color: "aquablue",
  },
  downtime: {
    label: "Down time",
    color: "red",
  },
} satisfies ChartConfig;

export default function RuntimePieChart() {
  return (
    <Card>
      <CardHeader>Uptime vs DownTime</CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              startAngle={90}
              endAngle={450}
            >
              {" "}
              <LabelList
                dataKey="status"
                className="fill-background"
                stroke="none"
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
