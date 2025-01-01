import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createLazyFileRoute } from "@tanstack/react-router";
import { Euro, ReceiptEuro, ReceiptText, Users } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

export const Route = createLazyFileRoute("/(dashboard)/")({
  component: RouteComponent,
});

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

const cardsData = [
  {
    title: "Total Client",
    value: 65,
    icon: Users,
  },
  {
    title: "Total Devis",
    value: 517,
    icon: ReceiptText,
  },
  {
    title: "Total Facture",
    value: 65,
    icon: ReceiptEuro,
  },
  {
    title: "Chiffre d'affaire",
    value: 65,
    icon: Euro,
  },
];

export default function RouteComponent() {
  return (
    <>
      <div className="grid auto-rows-min gap-4 md:grid-cols-4">
        {cardsData.map((card) => (
          <Card key={card.title}>
            <CardHeader>
              <CardTitle>{card.title}</CardTitle>
              <CardContent className="flex flex-row items-center justify-between">
                <b className="text-2xl ">{card.value}</b>
                <card.icon width={40} height={40} />
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
      <ChartContainer
        config={chartConfig}
        className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min"
      >
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
          <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
        </BarChart>
      </ChartContainer>
    </>
  );
}
