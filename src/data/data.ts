import { Categoria, Pergunta, Unidade, Fator, FatorDescricao } from "./types";

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
		fator: Fator.Gasolina,
		fatorDescricao: FatorDescricao.Gasolina,
  },
  {
    id: 4,
    categoria: Categoria.Transporte,
    texto: "Qual o seu consumo semanal de etanol? (em litros)",
    unidadeResposta: Unidade.Litro,
		fator: Fator.Etanol,
		fatorDescricao: FatorDescricao.Etanol,
	},
	{
		id: 5,
		categoria: Categoria.Transporte,
		texto: "Qual o seu consumo semanal de diesel? (em litros)",
		unidadeResposta: Unidade.Litro,
  },
  {
    id: 5,
    categoria: Categoria.Transporte,
    texto: "Qual o seu consumo semanal de diesel? (em litros)",
    unidadeResposta: Unidade.Litro,
		fator: Fator.Diesel,
		fatorDescricao: FatorDescricao.Diesel,
  },
  {
    id: 6,
    categoria: Categoria.Transporte,
    texto: "Qual o seu consumo semanal de GNV? (em m3)",
    unidadeResposta: Unidade.MetroCubico,
		fator: Fator.GNV,
		fatorDescricao: FatorDescricao.GNV,
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
    texto: "Qual a distância percorrida em média por viagem? (em km)",
    unidadeResposta: Unidade.Km,
		fator: Fator.Onibus,
		fatorDescricao: FatorDescricao.Onibus
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
    texto: "Qual a distância percorrida em média por viagem? (em km)",
    unidadeResposta: Unidade.Km,
		fator: Fator.MetroOuTrem,
		fatorDescricao: FatorDescricao.MetroOuTrem
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
    texto:
      "Quantas viagens de curta distância (até 1.000 km) você fez nos últimos 12 meses (ida e volta = 1 viagem)?",
    unidadeResposta: Unidade.Viagem,
		fator: Fator.AviaoCurtaDistancia,
		fatorDescricao: FatorDescricao.AviaoCurtaDistancia
  },
  {
    id: 15,
    categoria: Categoria.Transporte,
    texto:
      "Quantas viagens de média distância (1.000 a 3.700 km) você fez nos últimos 12 meses (ida e volta = 1 viagem)?",
    unidadeResposta: Unidade.Viagem,
		fator: Fator.AviaoMediaDistancia,
		fatorDescricao: FatorDescricao.AviaoMediaDistancia
  },
  {
    id: 16,
    categoria: Categoria.Transporte,
    texto:
      "Quantas viagens de longa distância (mais de 5.000 km) você fez nos últimos 12 meses (ida e volta = 1 viagem)?",
    unidadeResposta: Unidade.Viagem,
		fator: Fator.AviaoLongaDistancia,
		fatorDescricao: FatorDescricao.AviaoLongaDistancia
  },
  {
    id: 17,
    categoria: Categoria.EnergiaEmCasa,
    texto: "Qual é o seu consumo mensal de energia elétrica (em kWh)?",
    unidadeResposta: Unidade.KWh,
		fator: Fator.EnergiaEletrica,
		fatorDescricao: FatorDescricao.EnergiaEletrica
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
		fator: Fator.BotijaoDeGas,
		fatorDescricao: FatorDescricao.BotijaoDeGas
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
		fator: Fator.GasEncanado,
		fatorDescricao: FatorDescricao.GasEncanado
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
		fator: Fator.CarneBovina,
		fatorDescricao: FatorDescricao.CarneBovina
  },
  {
    id: 25,
    categoria: Categoria.Alimentacao,
    texto: "Quanta carne de frango você consome por semana (em kg)?",
    unidadeResposta: Unidade.Kg,
		fator: Fator.CarneFrango,
		fatorDescricao: FatorDescricao.CarneFrango
  },
  {
    id: 26,
    categoria: Categoria.Alimentacao,
    texto: "Quanta carne suína você consome por semana (em kg)?",
    unidadeResposta: Unidade.Kg,
		fator: Fator.CarneSuina,
		fatorDescricao: FatorDescricao.CarneSuina
  },
  {
    id: 27,
    categoria: Categoria.Alimentacao,
    texto: "Quanto leite de vaca você consome por semana (em litros)?",
    unidadeResposta: Unidade.Litro,
		fator: Fator.Leite,
		fatorDescricao: FatorDescricao.Leite
  },
  {
    id: 28,
    categoria: Categoria.Alimentacao,
    texto: "Quantos ovos você consome por semana (em unidades)?",
    unidadeResposta: Unidade.Unidade,
		fator: Fator.Ovo,
		fatorDescricao: FatorDescricao.Ovo
  },
];
