import { Card } from "@/components/ui/card";
import { Car, Leaf, Utensils, Zap, Factory } from "lucide-react";
import { PieChartSection } from "./pie-chart";
import { kgParaTons } from "@/lib/calc";

type CardHeroProps = {
  usuario: string;
  total: number;
  transportes: number;
  energia: number;
  alimentacao: number;
};

export const CardHero: React.FC<CardHeroProps> = ({
  usuario,
  total,
  transportes,
  energia,
  alimentacao,
}) => {
  return (
    <Card className="w-full max-w-md overflow-hidden">
      <div className="p-4 border-b flex items-center gap-2">
        <div className="w-10 h-10 rounded bg-green-100 flex items-center justify-center">
          <Leaf className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Carbon Heroes</div>
          <div className="font-semibold">{usuario}</div>
        </div>
      </div>

      <PieChartSection
        total={kgParaTons(total)}
        transportes={kgParaTons(transportes)}
        energia={kgParaTons(energia)}
        alimentacao={kgParaTons(alimentacao)}
      />

      <div className="p-6 space-y-3">
        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-3">
            <Factory className="w-5 h-5 text-gray-600" />
            <span>CO2 total</span>
          </div>
          <span className="font-medium">{kgParaTons(total)} tons/ano</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-3">
            <Car className="w-5 h-5 text-blue-600" />
            <span>Transporte</span>
          </div>
          <span className="font-medium">
            {kgParaTons(transportes)} tons/ano
          </span>
        </div>

        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-3">
            <Zap className="w-5 h-5 text-yellow-600" />
            <span>Energia</span>
          </div>
          <span className="font-medium">{kgParaTons(energia)} tons/ano</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-3">
            <Utensils className="w-5 h-5 text-red-600" />
            <span>Alimentação</span>
          </div>
          <span className="font-medium">
            {kgParaTons(alimentacao)} tons/ano
          </span>
        </div>
      </div>
    </Card>
  );
};
