import CardHero from "@/components/card-hero";
import React from "react";


// http://localhost:3000/resultado?nome=Mariana&p1=1&p2=2&p3=30&p4=9&p5=6&p6=5&p7=1&p8=2&p9=3&p10=1&p11=2&p12=5&p13=1&p14=2&p15=1&p16=2&p17=1&p18=2&p19=1&p20=2&p21=1&p22=2&p23=1&p24=3&p25=2&p26=4&p27=5&p28=4
export default async function ResultadoPage({
  searchParams,
}: {
  searchParams: Promise<{
    nome: string;
    p1: string;
    p2?: string;
    p3?: string;
    p4?: string;
    p5?: string;
    p6?: string;
    p7: string;
    p8?: string;
    p9?: string;
    p10: string;
    p11?: string;
    p12?: string;
    p13: string;
    p14?: string;
    p15?: string;
    p16?: string;
    p17?: string;
    p18?: string;
    p19: string;
    p20?: string;
    p21: string;
    p22?: string;
    p23: string;
    p24?: string;
    p25?: string;
    p26?: string;
    p27?: string;
    p28?: string;
  }>;
}) {
  const data = await searchParams;

  return (
    <main className="flex flex-col gap-4 items-center justify-center min-h-screen bg-gradient-to-br from-green-200 to-gray-300 p-4">
      <CardHero nome={data.nome}/>
    </main>
  );
}
