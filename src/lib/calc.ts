import { Fator } from "../data/types";

const SEMANAS_ANO = 52;
const MESES_ANO = 12;

export function kgParaTons(kg: number) {
	const casas = kg > 10000 ? 2 : 4;
  return Number((kg / 1000).toFixed(casas));
}

export function calcularTransporteIndividual(
  temCarro: boolean,
  qtddPessoasTransportadas: number,
  consumoSemanalGasolina: number, // em litros
  consumoSemanalEtanol: number, // em litros
  consumoSemanalDiesel: number, // em litros
  consumoSemanalGNV: number // em m3
): number {
  if (!temCarro) {
    return 0;
  }

  // Prevenindo divisão por zero
  const qtddPessoas =
    qtddPessoasTransportadas <= 0 ? 1 : qtddPessoasTransportadas;

  return (
    ((consumoSemanalGasolina * Fator.Gasolina +
      consumoSemanalEtanol * Fator.Etanol +
      consumoSemanalDiesel * Fator.Diesel +
      consumoSemanalGNV * Fator.GNV) *
      SEMANAS_ANO) /
    qtddPessoas
  );
}

export function calcularTransporteColetivo(
  usaOnibus: boolean,
  qtddViagensOnibusSemana: number,
  kmMedioOnibus: number,
  usaMetroOuTrem: boolean,
  qtddViagensMetroOuTremSemana: number,
  kmMedioMetroOuTrem: number
): number {
  if (!usaOnibus && !usaMetroOuTrem) {
    return 0;
  }

  const onibusSemanal = usaOnibus
    ? qtddViagensOnibusSemana * kmMedioOnibus * Fator.Onibus
    : 0;

  const metroOuTremSemanal = usaMetroOuTrem
    ? qtddViagensMetroOuTremSemana * kmMedioMetroOuTrem * Fator.MetroOuTrem
    : 0;

  return (onibusSemanal + metroOuTremSemanal) * SEMANAS_ANO;
}

export function calcularViagensAereas(
  viajouNosUltimos12Meses: boolean,
  qtddViagensCurtaDistancia: number,
  qtddViagensMediaDistancia: number,
  qtddViagensLongaDistancia: number
): number {
  const kmCurtaDistancia = 1000;
  const kmMediaDistancia = 3700;
  const kmLongaDistancia = 5000;
  const viagemIdaEVolta = 2;

  if (!viajouNosUltimos12Meses) {
    return 0;
  }

  const viagensCurtaDistancia =
    qtddViagensCurtaDistancia *
    viagemIdaEVolta *
    kmCurtaDistancia *
    Fator.AviaoCurtaDistancia;

  const viagensMediaDistancia =
    qtddViagensMediaDistancia *
    viagemIdaEVolta *
    kmMediaDistancia *
    Fator.AviaoMediaDistancia;

  const viagensLongaDistancia =
    qtddViagensLongaDistancia *
    viagemIdaEVolta *
    kmLongaDistancia *
    Fator.AviaoLongaDistancia;

  return viagensCurtaDistancia + viagensMediaDistancia + viagensLongaDistancia;
}

export function calcularEnergiaEmCasa(
  consumoMensalKWh: number,
  qtddPessoasCasa: number,
  usaBotijaoGas: boolean,
  duracaoBotijaoMeses: number,
  usaGasEncanado: boolean,
  consumoMensalGasEncanado: number
) {
  // Prevenindo divisão por zero
  const qtddPessoas = qtddPessoasCasa <= 0 ? 1 : qtddPessoasCasa;
  const duracaoBotijao = duracaoBotijaoMeses <= 0 ? 1 : duracaoBotijaoMeses;

  const energiaEletrica =
    (consumoMensalKWh * Fator.EnergiaEletrica * MESES_ANO) / qtddPessoas;

  const botijaoDeGas = usaBotijaoGas
    ? (Fator.BotijaoDeGas / duracaoBotijao) * MESES_ANO
    : 0;

  const gasEncanado = usaGasEncanado
    ? consumoMensalGasEncanado * Fator.GasEncanado * MESES_ANO
    : 0;

  return energiaEletrica + botijaoDeGas + gasEncanado;
}

export function calcularAlimentacao(
  consomeProdutosAnimais: boolean,
  consumoCarneBovinaSemana: number,
  consumoCarneFrangoSemana: number,
  consumoCarneSuinaSemana: number,
  consumoLeiteSemana: number,
  consumoOvoSemana: number
): number {
  const carneBovina =
    consumoCarneBovinaSemana * Fator.CarneBovina * SEMANAS_ANO;
  const carneFrango =
    consumoCarneFrangoSemana * Fator.CarneFrango * SEMANAS_ANO;
  const carneSuina = consumoCarneSuinaSemana * Fator.CarneSuina * SEMANAS_ANO;
  const leite = consumoLeiteSemana * Fator.Leite * SEMANAS_ANO;
  const ovo = consumoOvoSemana * Fator.Ovo * SEMANAS_ANO;
  return consomeProdutosAnimais
    ? carneBovina + carneFrango + carneSuina + leite + ovo
    : 0;
}
