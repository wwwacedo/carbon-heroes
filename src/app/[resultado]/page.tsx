import React from "react";

// http://localhost:3000/resultado?nome=Mariana&p1=1&p2=2&p3=30&p4=9&p5=6&p6=5&p7=1&p8=2&p9=3&p10=1&p11=2&p12=5&p13=1&p14=2&p15=1&p16=2&p17=1&p18=2&p19=1&p20=2&p21=1&p22=2&p23=1&p24=3&p25=2&p26=4&p27=5&p28=4
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

  return (
    <main className="max-w-screen-lg m-auto">
      <div>Resultado</div>
      <div>p1: {data.p1}</div>
			<div>p2: {data.p2}</div>
			<div>p3: {data.p3}</div>
			<div>p4: {data.p4}</div>
			<div>p5: {data.p5}</div>
			<div>p6: {data.p6}</div>
			<div>p7: {data.p7}</div>
			<div>p8: {data.p8}</div>
			<div>p9: {data.p9}</div>
			<div>p10: {data.p10}</div>
			<div>p11: {data.p11}</div>
			<div>p12: {data.p12}</div>
			<div>p13: {data.p13}</div>
			<div>p14: {data.p14}</div>
			<div>p15: {data.p15}</div>
			<div>p16: {data.p16}</div>
			<div>p17: {data.p17}</div>
			<div>p18: {data.p18}</div>
			<div>p19: {data.p19}</div>
			<div>p20: {data.p20}</div>
			<div>p21: {data.p21}</div>
			<div>p22: {data.p22}</div>
			<div>p23: {data.p23}</div>
			<div>p24: {data.p24}</div>
			<div>p25: {data.p25}</div>
			<div>p26: {data.p26}</div>
			<div>p27: {data.p27}</div>
			<div>p28: {data.p28}</div>
    </main>
  );
}
