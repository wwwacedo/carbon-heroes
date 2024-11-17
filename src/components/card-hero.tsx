import { Card } from "@/components/ui/card";
import { Car, Leaf, Utensils, Zap, Factory } from "lucide-react";
import { PieChartSection } from "./pie-chart";
import { kgParaTons } from "@/lib/calc";
import { Badge } from "./ui/badge";
import { orbitron } from "@/app/fonts/fonts";

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
        <div className="flex flex-col items-start">
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

      <div className="p-6 space-y-4">
        <Component name="CO2 total" value={total}>
          <Factory className="w-5 h-5 text-gray-600" />
        </Component>

        <Component name="Transporte" value={transportes}>
          <Car className="w-5 h-5 text-blue-600" />
        </Component>

        <Component name="Energia" value={energia}>
          <Zap className="w-5 h-5 text-yellow-600" />
        </Component>

        <Component name="Alimentação" value={alimentacao}>
          <Utensils className="w-5 h-5 text-red-600" />
        </Component>
      </div>
    </Card>
  );
};

const Component = ({
  children,
  name,
  value,
}: {
  children: React.ReactNode;
  name: string;
  value: number;
}) => {
  return (
    <div className={`flex items-center justify-between p-3 bg-muted/50 rounded-lg ${value === 0 && "bg-primary/10"}` }>
      <div className="relative flex items-center gap-3">
        {value === 0 && (
          <Badge className={`absolute -top-6 -left-3 ${orbitron.className}`}>Carbon Hero</Badge>
        )}
        {children}
        <span>{name}</span>
      </div>
      <span className="font-medium">{kgParaTons(value)} tons/ano</span>
    </div>
  );
};
