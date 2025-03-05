import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import type { StatsCardProps } from "@/pages/(logged-in)/Dashboard";

export default function StatsCard({
  title,
  description,
  value,
}: StatsCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{value}</CardContent>
    </Card>
  );
}
