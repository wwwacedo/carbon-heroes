import React from "react";

// http://localhost:3000/resultado?nome=Mariana&p1=2&p7=2&p10=2&p13=2&p17=2&p18=2&p19=2&p21=2&p23=2
export default async function ResultadoPage({
  searchParams,
}: {
  searchParams: Promise<{
		nome: string;
		p1?: string;
	}>;
}) {
  const data = await searchParams;
  // console.log(data.p1);

  return (
    <main className="max-w-screen-lg m-auto">
      <div>Resultado</div>
      <div>p1: {data.p1}</div>
    </main>
  );
}
