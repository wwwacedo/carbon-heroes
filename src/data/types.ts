export type Pergunta = {
  id: number;
  categoria: Categoria;
  texto: string;
  unidadeResposta: Unidade;
  fatorConversao?: number;
};

export type Respostas = {
  nome: string;
  p1: boolean;
  p2: number;
  p3: number;
  p4: number;
  p5: number;
  p6: number;
  p7: boolean;
  p8: number;
  p9: number;
  p10: boolean;
  p11: number;
  p12: number;
  p13: boolean;
  p14: number;
  p15: number;
  p16: number;
  p17: number;
  p18: number;
  p19: boolean;
  p20: number;
  p21: boolean;
  p22: number;
  p23: boolean;
  p24: number;
  p25: number;
  p26: number;
  p27: number;
  p28: number;
};

export enum Categoria {
  Transporte = "Transporte",
  EnergiaEmCasa = "Energia",
  Alimentacao = "Alimentação",
}

export enum Unidade {
  Booleano = "booleano",
  Pessoa = "pessoa(s)",
  Litro = "litro(s)",
  MetroCubico = "metro(s) cúbico(s)",
  Viagem = "viagem(ns)",
  Km = "km",
  KWh = "kWh",
  Mes = "mes(es)",
  Kg = "kg(s)",
  Unidade = "unidade(s)",
}

// em kg de CO2 por unidades de resposta
export enum Fator {
  Gasolina = 2.3, // kg de CO2 por litro
  Etanol = 1.5, // kg de CO2 por litro
  Diesel = 2.7, // kg de CO2 por litro
  GNV = 2.7, // kg de CO2 por m3
  Onibus = 0.089, // kg de CO2 por passageiro por km
  MetroOuTrem = 0.041, // kg de CO2 por passageiro por km
  AviaoCurtaDistancia = 0.25, // kg de CO2 por km por passageiro
  AviaoMediaDistancia = 0.15, // kg de CO2 por km por passageiro
  AviaoLongaDistancia = 0.12, // kg de CO2 por km por passageiro
  EnergiaEletrica = 0.1, // kg de CO2/kWh
  BotijaoDeGas = 37.7, // kg de CO2 por número de meses
  GasEncanado = 2.9, // kg de CO2 por m3
  CarneBovina = 27, // kg de CO2 por kg de carne
  CarneFrango = 6.9, // kg de CO2 por kg de carne
  CarneSuina = 12.1, // kg de CO2 por kg de carne
  Leite = 1.3, // kg de CO2 por litro de leite
  Ovo = 0.0375, // // kg de CO2 por ovo produzido
}
