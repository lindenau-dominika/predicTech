import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/lib/components/ui/card";
import { Zap } from "lucide-react";

export default function StatsCard() {
  const stats = [
    { title: "Energy", value: "xxxxx" },
    { title: "Energy", value: "xxxxx" },
    { title: "Energy", value: "xxxxx" },
    { title: "Energy", value: "xxxxx" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 my-4">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="dark:bg-zinc-900 light:bg-zinc-300 border-zinc-400 h-40"
        >
          <CardHeader className="flex flex-row justify-between">
            <CardTitle className="text-xl">{stat.title}</CardTitle>
            <Zap className="size-6 stroke-predic" />
          </CardHeader>
          <CardContent className="text-2xl font-bold">{stat.value}</CardContent>
        </Card>
      ))}
    </div>
  );
}
