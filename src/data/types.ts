export type Pergunta = {
  id: number;
  categoria: Categoria;
  texto: string;
  unidadeResposta?: string;
  fatorConversao?: number;
};

export enum Categoria {
  Transporte = "Transporte",
  EnergiaEmCasa = "Energia em Casa",
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
