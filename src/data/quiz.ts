enum Categoria {
  Transporte = "Transporte",
  EnergiaEmCasa = "Energia em Casa",
  Alimentacao = "Alimentação"
}

enum Unidade {
	Booleano = "booleano",
	Pessoa = "pessoa(s)",
	Litro = "litro(s)",
	MetroCubico = "metro(s) cúbico(s)",
	Viagem = "viagem(ns)",
	Km = "km",
	KWh = "kWh",
	Mes = "mes(es)",
	Kg = "kg(s)",
	Unidade = "unidade(s)"
}

type Pergunta = {
  id: number;
  categoria: Categoria;
  texto: string;
  unidadeResposta?: string;
  fatorConversao?: number;
};

// em kg de CO2 por unidades de resposta
enum Fator {
	Gasolina = 2.3,
	Etanol = 1.5,
	Diesel = 2.7,
	GNV = 2.7,
	Onibus = 0.089,
	MetroOuTrem = 0.041,
	AviaoCurtaDistancia = 0.25,
	AviaoMediaDistancia = 0.15,
	AviaoLongaDistancia = 0.12,
	EnergiaEletrica = 0.1,
	BotijaoDeGas = 37.7,
	GasEncanado = 2.9,
	CarneBovina = 27,
	CarneFrango = 6.9,
	CarneSuina = 12.1,
	Leite = 1.3,
	Ovo = 0.0375 
}

export const perguntas: Pergunta[] = [
  { 
    id: 1,
    categoria: Categoria.Transporte, 
    texto: "Você possui carro?",
    unidadeResposta: Unidade.Booleano, 
  },
  {
    id: 2,
    categoria: Categoria.Transporte,
    texto: "Quantas pessoas em média são transportadas no seu carro?",
    unidadeResposta: Unidade.Pessoa,
  },
  {
    id: 3,
    categoria: Categoria.Transporte,
    texto: "Qual o seu consumo semanal de gasolina? (em litros)",
    unidadeResposta: Unidade.Litro,
  },
  {
    id: 4,
    categoria: Categoria.Transporte,
    texto: "Qual o seu consumo semanal de etanol? (em litros)",
    unidadeResposta: Unidade.Litro,
  },
  {
    id: 5,
    categoria: Categoria.Transporte,
    texto: "Qual o seu consumo semanal de diesel? (em litros)",
    unidadeResposta: Unidade.Litro,
  },
  {
    id: 6,
    categoria: Categoria.Transporte,
    texto: "Qual o seu consumo semanal de GNV? (em m3)",
    unidadeResposta: Unidade.MetroCubico,
  },
  {
    id: 7,
    categoria: Categoria.Transporte,
    texto: "Você utiliza ônibus?",
    unidadeResposta: Unidade.Booleano,
  },
  {
    id: 8,
    categoria: Categoria.Transporte,
    texto: "Quantas viagens por semana você faz de ônibus?",
    unidadeResposta: Unidade.Viagem,
  },
  {
    id: 9,
    categoria: Categoria.Transporte,
    texto: "Quantos km em média por viagem?",
    unidadeResposta: Unidade.Km,
  },
  {
    id: 10,
    categoria: Categoria.Transporte,
    texto: "Você utiliza metrô?",
    unidadeResposta: Unidade.Booleano,
  },
  {
    id: 11,
    categoria: Categoria.Transporte,
    texto: "Quantas viagens por semana você faz de metrô ou trem?",
    unidadeResposta: Unidade.Viagem,
  },
  {
    id: 12,
    categoria: Categoria.Transporte,
    texto: "Quantos km em média por viagem?",
    unidadeResposta: Unidade.Km,
  },
  {
    id: 13,
    categoria: Categoria.Transporte,
    texto: "Você viajou de avião nos últimos 12 meses?",
    unidadeResposta: Unidade.Booleano,
  },
  {
    id: 14,
    categoria: Categoria.Transporte,
    texto: "Quantas viagens de curta distância (até 1.000 km) você fez nos últimos 12 meses (ida e volta = 1 viagem)?",
    unidadeResposta: Unidade.Viagem,
  },
  {
    id: 15,
    categoria: Categoria.Transporte,
    texto: "Quantas viagens de média distância (1.000 a 3.700 km) você fez nos últimos 12 meses (ida e volta = 1 viagem)?",
    unidadeResposta: Unidade.Viagem,
  },
  {
    id: 16,
    categoria: Categoria.Transporte,
    texto: "Quantas viagens de longa distância (mais de 5.000 km) você fez nos últimos 12 meses (ida e volta = 1 viagem)?",
    unidadeResposta: Unidade.Viagem,
  },
  {
    id: 17,
    categoria: Categoria.EnergiaEmCasa,
    texto: "Qual é o seu consumo mensal de energia elétrica (em kWh)?",
    unidadeResposta: Unidade.KWh,
  },
  {
    id: 18,
    categoria: Categoria.EnergiaEmCasa,
    texto: "Quantas pessoas moram na sua casa?",
    unidadeResposta: Unidade.Pessoa,
  },
  {
    id: 19,
    categoria: Categoria.EnergiaEmCasa,
    texto: "Você usa botijão de gás em casa?",
    unidadeResposta: Unidade.Booleano,
  },
  {
    id: 20,
    categoria: Categoria.EnergiaEmCasa,
    texto: "Quantos meses dura um botijão de gás na sua casa?",
    unidadeResposta: Unidade.Mes,
  },
  {
    id: 21,
    categoria: Categoria.EnergiaEmCasa,
    texto: "Você usa gás encanado em casa?",
    unidadeResposta: Unidade.Booleano,
  },
  {
    id: 22,
    categoria: Categoria.EnergiaEmCasa,
    texto: "Qual é o seu consumo de gás encanado mensal (em m3)?",
    unidadeResposta: Unidade.MetroCubico,
  },
  {
    id: 23,
    categoria: Categoria.Alimentacao,
    texto: "Você consome produtos de origem animal? (carnes, leite, ovos, etc)",
    unidadeResposta: Unidade.Booleano,
  },
  {
    id: 24,
    categoria: Categoria.Alimentacao,
    texto: "Quanta carne bovina você consome por semana (em kg)?",
    unidadeResposta: Unidade.Kg,
  },
  {
    id: 25,
    categoria: Categoria.Alimentacao,
    texto: "Quanta carne de frango você consome por semana (em kg)?",
    unidadeResposta: Unidade.Kg,
  },
  {
    id: 26,
    categoria: Categoria.Alimentacao,
    texto: "Quanta carne suína você consome por semana (em kg)?",
    unidadeResposta: Unidade.Kg,
  },
  {
    id: 27,
    categoria: Categoria.Alimentacao,
    texto: "Quanto leite de vaca você consome por semana (em litros)?",
    unidadeResposta: Unidade.Litro,
  },
  {
    id: 28,
    categoria: Categoria.Alimentacao,
    texto: "Quantos ovos você consome por semana (em unidades)?",
    unidadeResposta: Unidade.Unidade,
  },
];