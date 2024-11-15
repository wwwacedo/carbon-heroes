import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Car, Zap, Beef } from "lucide-react";
import Image from "next/image";
import { PieChartSection } from "./pie-chart";

export default function CardHero({ nome }: { nome: string }) {
  return (
    <Card className="w-full max-w-sm bg-white  bg-gradient-to-br from-green-500 to-green-600 rounded-xl overflow-hidden shadow-xl">
      <div className="py-2 px-4">
        <div className="flex gap-2 items-center">
          <div className="relative flex items-center justify-center h-[50px] w-[50px] rounded-full bg-white">
            <Image
              src="/carbon-neutral.png"
              alt="Carbon Neutral"
              width={40}
              height={40}
            />
          </div>
          <div className="h-[50px]">
            <h4 className="text-sm text-foreground/80">Carbon Heroes</h4>
            <h1 className="text-xl font-bold text-white">{nome}</h1>
          </div>
        </div>
      </div>

      <CardContent className="p-4 h-full flex gap-4 flex-col bg-gray-200">
        
				<PieChartSection/>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
            <span className="font-semibold flex items-center">
              <Leaf className="w-5 h-5 mr-2 text-green-500" /> Pegada de Carbono
            </span>
            <span className="font-bold">2.5 tons/year</span>
          </div>
          <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
            <span className="font-semibold flex items-center">
              <Car className="w-5 h-5 mr-2 text-blue-500" /> Transporte
            </span>
            <span className="font-bold">100 L/day</span>
          </div>
          <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
            <span className="font-semibold flex items-center">
              <Zap className="w-5 h-5 mr-2 text-yellow-500" /> Energia em Casa
            </span>
            <span className="font-bold">90%</span>
          </div>
          <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
            <span className="font-semibold flex items-center">
              <Beef className="w-5 h-5 mr-2 text-red-500" /> Alimentação
            </span>
            <span className="font-bold">75%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
