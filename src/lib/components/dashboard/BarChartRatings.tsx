import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/lib/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/lib/components/ui/chart";
const chartData = [
  { month: "M1", desktop: 186 },
  { month: "M2", desktop: 305 },
  { month: "M3", desktop: 237 },
  { month: "M4", desktop: 73 },
  { month: "M5", desktop: 209 },
  { month: "M6", desktop: 214 },
  { month: "M7", desktop: 22 },
  { month: "M8", desktop: 132 },
  { month: "M9", desktop: 201 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#1A32F6",
  },
} satisfies ChartConfig;

export function BarChartRatings() {
  return (
    <Card className="w-full h-[350px]">
      <CardHeader className="h-[70px]">
        <CardTitle>MPR</CardTitle>
        <CardDescription>Machine Productivity Rankings</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 50,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="desktop"
              fill="var(--color-desktop)"
              radius={4}
              barSize={40}
            >
              <LabelList
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={20}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
