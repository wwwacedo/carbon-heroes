import { CardHero } from "@/components/card-hero";
import React from "react";
import {
  calcularAlimentacao,
  calcularEnergiaEmCasa,
  calcularTransporteIndividual,
  calcularTransporteColetivo,
  calcularViagensAereas,
} from "@/lib/calc";
import { Leaf } from "lucide-react";

// http://localhost:3000/resultado?nome=Mariana&p1=true&p2=2&p3=50&p4=10&p7=true&p8=2&p9=4&p10=true&p11=6&p12=5&p13=true&p15=1&p16=1&p17=30&p18=2&p19=false&p21=true&p22=21&p23=true&p24=0.2&p25=1.4&p27=1&p28=7

export default async function ResultadoPage({
  searchParams,
}: {
  searchParams: Promise<{
    nome: string;
    p1?: string;
    p2?: string;
    p3?: string;
    p4?: string;
    p5?: string;
    p6?: string;
    p7?: string;
    p8?: string;
    p9?: string;
    p10?: string;
    p11?: string;
    p12?: string;
    p13?: string;
    p14?: string;
    p15?: string;
    p16?: string;
    p17?: string;
    p18?: string;
    p19?: string;
    p20?: string;
    p21?: string;
    p22?: string;
    p23?: string;
    p24?: string;
    p25?: string;
    p26?: string;
    p27?: string;
    p28?: string;
  }>;
}) {
  const data = await searchParams;
  const respostas = {
    nome: data.nome,
    p1: data.p1 ? Boolean(data.p1) : true,
    p2: data.p2 ? Number(data.p2) : 0,
    p3: data.p3 ? Number(data.p3) : 0,
    p4: data.p4 ? Number(data.p4) : 0,
    p5: data.p5 ? Number(data.p5) : 0,
    p6: data.p6 ? Number(data.p6) : 0,
    p7: data.p7 ? Boolean(data.p7) : true,
    p8: data.p8 ? Number(data.p8) : 0,
    p9: data.p9 ? Number(data.p9) : 0,
    p10: data.p10 ? Boolean(data.p10) : true,
    p11: data.p11 ? Number(data.p11) : 0,
    p12: data.p12 ? Number(data.p12) : 0,
    p13: data.p13 ? Boolean(data.p13) : true,
    p14: data.p14 ? Number(data.p14) : 0,
    p15: data.p15 ? Number(data.p15) : 0,
    p16: data.p16 ? Number(data.p16) : 0,
    p17: data.p17 ? Number(data.p17) : 0,
    p18: data.p18 ? Number(data.p18) : 0,
    p19: data.p19 ? Boolean(data.p19) : true,
    p20: data.p20 ? Number(data.p20) : 0,
    p21: data.p21 ? Boolean(data.p21) : true,
    p22: data.p22 ? Number(data.p22) : 0,
    p23: data.p23 ? Boolean(data.p23) : true,
    p24: data.p24 ? Number(data.p24) : 0,
    p25: data.p25 ? Number(data.p25) : 0,
    p26: data.p26 ? Number(data.p26) : 0,
    p27: data.p27 ? Number(data.p27) : 0,
    p28: data.p28 ? Number(data.p28) : 0,
  };

  // TRANSPORTE INDIVIDUAL - p1 a p6
  console.log("Você tem carro?", respostas.p1);
  console.log(
    "Quantas pessoas em média são transportadas no seu carro?",
    respostas.p2
  );
  console.log(
    "Qual o seu consumo semanal de gasolina? (em litros)",
    respostas.p3
  );
  console.log(
    "Qual o seu consumo semanal de etanol? (em litros)",
    respostas.p4
  );
  console.log(
    "Qual o seu consumo semanal de diesel? (em litros)",
    respostas.p5
  );
  console.log("Qual o seu consumo semanal de GNV? (em m3)", respostas.p6);

  const transporteIndividual = calcularTransporteIndividual(
    respostas.p1,
    respostas.p2,
    respostas.p3,
    respostas.p4,
    respostas.p5,
    respostas.p6
  );

  // TRANSPORTE COLETIVO - p7 a p12
  console.log("Você usa ônibus?", respostas.p7);
  console.log("Quantas viagens de ônibus você faz por semana?", respostas.p8);
  console.log(
    "Qual a distância média percorrida por viagem de ônibus?",
    respostas.p9
  );
  console.log("Você usa metrô ou trem?", respostas.p10);
  console.log(
    "Quantas viagens de metrô ou trem você faz por semana?",
    respostas.p11
  );
  console.log(
    "Qual a distância média percorrida por viagem de metrô ou trem?",
    respostas.p12
  );

  const transporteColetivo = calcularTransporteColetivo(
    respostas.p7,
    respostas.p8,
    respostas.p9,
    respostas.p10,
    respostas.p11,
    respostas.p12
  );

  // VIAGENS AÉREAS - p13 a p16
  console.log("Você viajou nos últimos 12 meses?", respostas.p13);
  console.log(
    "Quantas viagens de curta distância você fez nos últimos 12 meses?",
    respostas.p14
  );
  console.log(
    "Quantas viagens de média distância você fez nos últimos 12 meses?",
    respostas.p15
  );
  console.log(
    "Quantas viagens de longa distância você fez nos últimos 12 meses?",
    respostas.p16
  );

  // ENERGIA EM CASA 17 a 22
  console.log(
    "Qual é o seu consumo mensal de energia elétrica (em kWh)?",
    respostas.p17
  );
  console.log("Quantas pessoas moram na sua casa?", respostas.p18);
  console.log("Você usa botijão de gás em casa?", respostas.p19);
  console.log(
    "Quantos meses dura um botijão de gás na sua casa?",
    respostas.p20
  );
  console.log("Você usa gás encanado em casa?", respostas.p21);
  console.log("Consumo de gás encanado mensal?", respostas.p22);

  const energiaEmCasa = calcularEnergiaEmCasa(
    respostas.p17,
    respostas.p18,
    respostas.p19,
    respostas.p20,
    respostas.p21,
    respostas.p22
  );

  // ALIMENTAÇÃO
  console.log("Você consome produtos de origem animal?", respostas.p23);
  console.log("Carne bovina:", respostas.p24);
  console.log("Carne de frango:", respostas.p25);
  console.log("Carne suína:", respostas.p26);
  console.log("Leite de vaca:", respostas.p27);
  console.log("Ovos:", respostas.p28);

  const alimentacao = calcularAlimentacao(
    respostas.p23,
    respostas.p24,
    respostas.p25,
    respostas.p26,
    respostas.p27,
    respostas.p28
  );

  const viagensAereas = calcularViagensAereas(
    respostas.p13,
    respostas.p14,
    respostas.p15,
    respostas.p16
  );

  console.log(
    "\nTransporte individual:",
    transporteIndividual,
    "kg de CO2/ano"
  );
  console.log("Transporte coletivo:", transporteColetivo, "kg de CO2/ano");
  console.log("Viagens aéreas:", viagensAereas, "kg de CO2/ano");
  console.log("Energia em casa:", energiaEmCasa, "kg de CO2/ano");
  console.log("Alimentação:", alimentacao, "kg de CO2/ano");

  const totalTransportes =
    transporteIndividual + transporteColetivo + viagensAereas;
  const totalGeral = totalTransportes + energiaEmCasa + alimentacao;

  const resumoCard = {
    usuario: respostas.nome,
    total: totalGeral,
    transportes: totalTransportes,
    energia: energiaEmCasa,
    alimentacao,
  };

  return (
    <main className="m-auto">
      <div className="pt-4">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-2 mb-2">
            <div className="inline-block rounded-lg bg-green-100 p-2">
              <Leaf className="h-6 w-6 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Carbon Heroes
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-800 md:text-xl">
              <span className="font-semibold">{respostas.nome}</span>, acompanhe
              a sua pegada de carbono.
            </p>
          </div>
          <section className="mt-4 py-10 w-full bg-gray-100 flex flex-col items-center">
            <h2 className="pb-2 text-foreground/70 font-semibold text-xl">
              Resultados
            </h2>
            <div className="w-full px-6 flex justify-center">
              <CardHero {...resumoCard} />
            </div>
          </section>

					<section className="pt-10 py-10 w-full bg-gray-200 flex flex-col items-center">
            <h2 className="pb-2 text-foreground/70 font-semibold text-xl">
              Detalhes
            </h2>
            <div className="w-full px-6 flex justify-center">
              <CardHero {...resumoCard} />
            </div>
          </section>
          
        </div>
      </div>
    </main>
  );
}
