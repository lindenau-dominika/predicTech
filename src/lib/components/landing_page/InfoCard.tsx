import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function InfoCard() {
  return (
    <Card className="bg-transparent border-none shadow-none flex flex-col items-center">
      <CardHeader className="items-center gap-2">
        <CardTitle className="text-4xl font-medium">
          The predictive maintenance tool that transforms Your Manufacturing
          Output
        </CardTitle>
      </CardHeader>
      <CardContent className="flex p-10 text-lg w-3/5 text-center font-medium text-black/70">
        We're working with all kinds of manufacturing SMEs to lower costs,
        increase efficiency and help make sense of their machinery with our
        predictive maintenance technology. <br /> <br /> Our technology combined
        with your legacy machinery can help you understand how and where you can
        lower costs and improve your company's productivity.
      </CardContent>
    </Card>
  );
}
