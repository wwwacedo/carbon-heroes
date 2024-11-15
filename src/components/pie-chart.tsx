"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { kgParaTons } from "@/lib/calc";

export function PieChartSection({
  total,
  transportes,
  energia,
  alimentacao,
}: {
  total: number;
  transportes: number;
  energia: number;
  alimentacao: number;
}) {
  const chartData = [
    {
      categories: "Transporte",
      tonsAno: transportes,
      fill: "var(--color-energia)",
    },
    {
      categories: "Energia",
      tonsAno: energia,
      fill: "var(--color-transporte)",
    },
    {
      categories: "Alimentação",
      tonsAno: alimentacao,
      fill: "var(--color-alimentacao)",
    },
  ];

  const chartConfig = {
    tonsAno: {
      label: "tons CO2/ano",
    },
    transporte: {
      label: "Transporte",
      color: "hsl(var(--chart-1))",
    },
    energia: {
      label: "Energia",
      color: "hsl(var(--chart-2))",
    },
    alimentacao: {
      label: "Alimentação",
      color: "hsl(var(--chart-3))",
    },
  } satisfies ChartConfig;

  const anoAtual = new Date().getFullYear();
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const mesAtual = new Date().getMonth();
  const nomeMesAtual = meses[mesAtual];
  const nomeMesAnterior = mesAtual == 11 ? "Janeiro" : meses[mesAtual + 1];

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Sua Pegada de Carbono</CardTitle>
        <CardDescription>
          {nomeMesAnterior} {anoAtual - 1} - {nomeMesAtual} {anoAtual}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="tonsAno"
              nameKey="categories"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {total}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          tons CO2 / ano
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Seus hábitos em toneladas de CO2 / ano
        </div>
      </CardFooter>
    </Card>
  );
}
