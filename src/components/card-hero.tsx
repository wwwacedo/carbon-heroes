import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Droplet, Zap, Factory } from "lucide-react";

export default function CardHero({nome}: {nome: string}) {
  return (
    <Card className="w-full max-w-sm aspect-[1/1.4] bg-white border-4 border-green-500 rounded-xl overflow-hidden shadow-xl">
      <CardContent className="p-4 h-full flex flex-col">
        <div className="text-center mb-2">
          <h2 className="text-2xl font-bold text-green-600">CARBON HEROES</h2>
        </div>

        <div className="flex-grow relative mb-2">
          <img
            src="/placeholder.svg?height=300&width=400"
            alt="Eco Warrior Avatar"
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded-full text-sm font-bold">
            E1
          </div>
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between items-center bg-gray-100 p-2 rounded">
            <span className="font-semibold flex items-center">
              <Leaf className="w-4 h-4 mr-2 text-green-500" /> Carbon Footprint
            </span>
            <span className="font-bold">2.5 tons/year</span>
          </div>
          <div className="flex justify-between items-center bg-gray-100 p-2 rounded">
            <span className="font-semibold flex items-center">
              <Droplet className="w-4 h-4 mr-2 text-blue-500" /> Water Usage
            </span>
            <span className="font-bold">100 L/day</span>
          </div>
          <div className="flex justify-between items-center bg-gray-100 p-2 rounded">
            <span className="font-semibold flex items-center">
              <Zap className="w-4 h-4 mr-2 text-yellow-500" /> Energy Efficiency
            </span>
            <span className="font-bold">90%</span>
          </div>
          <div className="flex justify-between items-center bg-gray-100 p-2 rounded">
            <span className="font-semibold flex items-center">
              <Factory className="w-4 h-4 mr-2 text-gray-500" /> Waste Reduction
            </span>
            <span className="font-bold">75%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
