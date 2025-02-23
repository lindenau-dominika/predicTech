import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface LandingCardProps {
  info: {
    title: string;
    subtitle: string;
    img: string;
  };
}
export default function LandingCard({ info }: LandingCardProps) {
  return (
    <Card className="bg-transparent border-none text-white shadow-none">
      <CardHeader className="items-center gap-2">
        <CardTitle className="text-4xl font-medium">{info.title}</CardTitle>
        <CardDescription className="text-white text-lg">
          {info.subtitle}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex p-10 justify-center">
        <img src={info.img} alt={info.title} className="rounded-2xl w-4/5" />
      </CardContent>
    </Card>
  );
}
