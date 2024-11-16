import { CardHero } from "@/components/card-hero";
import { CardDetails } from "@/components/card-details";
import React from "react";
import {
  calcularAlimentacao,
  calcularEnergiaEmCasa,
  calcularTransporteIndividual,
  calcularTransporteColetivo,
  calcularViagensAereas,
} from "@/lib/calc";
import { Leaf } from "lucide-react";
import { perguntas } from "@/data/data";
import { Fator, FatorDescricao, Respostas, Unidade } from "@/data/types";

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

  const avaliaString = (valor: string): boolean => {
    return valor === "true" ? true : false;
  };

  const respostas: Respostas = {
    nome: data.nome,
    p1: avaliaString(data.p1!),
    p2: data.p2 ? Number(data.p2) : 0,
    p3: data.p3 ? Number(data.p3) : 0,
    p4: data.p4 ? Number(data.p4) : 0,
    p5: data.p5 ? Number(data.p5) : 0,
    p6: data.p6 ? Number(data.p6) : 0,
    p7: avaliaString(data.p7!),
    p8: data.p8 ? Number(data.p8) : 0,
    p9: data.p9 ? Number(data.p9) : 0,
    p10: avaliaString(data.p10!),
    p11: data.p11 ? Number(data.p11) : 0,
    p12: data.p12 ? Number(data.p12) : 0,
    p13: avaliaString(data.p13!),
    p14: data.p14 ? Number(data.p14) : 0,
    p15: data.p15 ? Number(data.p15) : 0,
    p16: data.p16 ? Number(data.p16) : 0,
    p17: data.p17 ? Number(data.p17) : 0,
    p18: data.p18 ? Number(data.p18) : 0,
    p19: avaliaString(data.p19!),
    p20: data.p20 ? Number(data.p20) : 0,
    p21: avaliaString(data.p21!),
    p22: data.p22 ? Number(data.p22) : 0,
    p23: avaliaString(data.p23!),
    p24: data.p24 ? Number(data.p24) : 0,
    p25: data.p25 ? Number(data.p25) : 0,
    p26: data.p26 ? Number(data.p26) : 0,
    p27: data.p27 ? Number(data.p27) : 0,
    p28: data.p28 ? Number(data.p28) : 0,
  };

  const transporteIndividual = calcularTransporteIndividual(
    respostas.p1,
    respostas.p2,
    respostas.p3,
    respostas.p4,
    respostas.p5,
    respostas.p6
  );

  const transporteColetivo = calcularTransporteColetivo(
    respostas.p7,
    respostas.p8,
    respostas.p9,
    respostas.p10,
    respostas.p11,
    respostas.p12
  );

  const viagensAereas = calcularViagensAereas(
    respostas.p13,
    respostas.p14,
    respostas.p15,
    respostas.p16
  );

  const energiaEmCasa = calcularEnergiaEmCasa(
    respostas.p17,
    respostas.p18,
    respostas.p19,
    respostas.p20,
    respostas.p21,
    respostas.p22
  );

  const alimentacao = calcularAlimentacao(
    respostas.p23,
    respostas.p24,
    respostas.p25,
    respostas.p26,
    respostas.p27,
    respostas.p28
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

  const avaliaResposta = (resposta: string | number | boolean) => {
    if (typeof resposta === "boolean") {
      return resposta ? "Sim" : "Não";
    }
    return resposta.toString();
  };

  const details = perguntas.map((pergunta) => ({
    categoria: pergunta.categoria,
    pergunta: pergunta.texto,
    resposta: avaliaResposta(respostas[`p${pergunta.id}` as keyof Respostas]),
    unidade: pergunta.unidadeResposta as Unidade,
    fatorDescricao: pergunta.fatorDescricao as FatorDescricao,
  }));

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
            <h2 className="text-2xl font-semibold text-center mb-8">
              Resultados
            </h2>
            <div className="w-full px-6 flex justify-center">
              <CardHero {...resumoCard} />
            </div>
          </section>

          <section className="pt-10 py-10 w-full bg-gray-200 flex flex-col items-center">
            <h2 className="text-2xl font-semibold text-center mb-8">
              Detalhes
            </h2>
            <div className="w-full px-6 flex justify-center">
              <div className="w-full flex flex-col gap-6 items-center">
                {details.map((detalhe, index) => (
                  <CardDetails key={index} {...detalhe} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
