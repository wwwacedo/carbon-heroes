import { Fator } from "../data/types";

const SEMANAS_ANO = 52;
const MESES_ANO = 12;

export function calcularTransporteIndividual(
  qtddPessoasTransportadas: number,
  consumoSemanalGasolina: number, // em litros
  consumoSemanalEtanol: number, // em litros
  consumoSemanalDiesel: number, // em litros
  consumoSemanalGNV: number // em m3
) {
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
  qtddViagensOnibusSemana: number,
  kmMedioOnibus: number,
  qtddViagensMetroOuTremSemana: number,
  kmMedioMetroOuTrem: number
) {
  return (
    (qtddViagensOnibusSemana * kmMedioOnibus * Fator.Onibus +
      qtddViagensMetroOuTremSemana * kmMedioMetroOuTrem * Fator.MetroOuTrem) *
    SEMANAS_ANO
  );
}

export function calcularViagensAereas(
  qtddViagensCurtaDistancia: number,
  qtddViagensMediaDistancia: number,
  qtddViagensLongaDistancia: number
) {
  const kmCurtaDistancia = 1000;
  const kmMediaDistancia = 3700;
  const kmLongaDistancia = 5000;
  const viagemIdaEVolta = 2;

  return (
    qtddViagensCurtaDistancia *
      viagemIdaEVolta *
      kmCurtaDistancia *
      Fator.AviaoCurtaDistancia +
    qtddViagensMediaDistancia *
      viagemIdaEVolta *
      kmMediaDistancia *
      Fator.AviaoMediaDistancia +
    qtddViagensLongaDistancia *
      viagemIdaEVolta *
      kmLongaDistancia *
      Fator.AviaoLongaDistancia
  );
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
) {
	const carneBovina = consumoCarneBovinaSemana * Fator.CarneBovina * SEMANAS_ANO;
	const carneFrango = consumoCarneFrangoSemana * Fator.CarneFrango * SEMANAS_ANO;
	const carneSuina = consumoCarneSuinaSemana * Fator.CarneSuina * SEMANAS_ANO;
	const leite = consumoLeiteSemana * Fator.Leite * SEMANAS_ANO;
	const ovo = consumoOvoSemana * Fator.Ovo * SEMANAS_ANO;

	return consomeProdutosAnimais
		? carneBovina + carneFrango + carneSuina + leite + ovo
		: 0;
}