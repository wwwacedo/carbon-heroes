import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { Car, Utensils, Zap } from "lucide-react";
import { Categoria, FatorDescricao, Unidade } from "@/data/types";
import { cn } from "@/lib/utils";

type CardDetailsProps = {
  categoria: Categoria;
  pergunta: string;
  resposta: string | number;
  unidade: Unidade;
  fatorDescricao?: FatorDescricao;
};

export const CardDetails: React.FC<CardDetailsProps> = ({
  categoria,
  pergunta,
  resposta,
  unidade,
  fatorDescricao,
}) => {
  return (
    <Card className="w-full max-w-md overflow-hidden text-start">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <Badge
            variant="secondary"
            className={cn(
              "text-xs capitalize text-white",
              CorCategoria(categoria)
            )}
          >
            {categoria}
          </Badge>
          {IconeCategoria(categoria)}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h3 className="font-medium text-lg">{pergunta}</h3>
          <p className="text-2xl font-semibold">
            {resposta} {unidade !== "booleano" && AvaliaUnidade(resposta, unidade)}
          </p>
        </div>

        {fatorDescricao && (
          <div className="pt-2 border-t">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <span className="font-medium">Fator de emissão:</span>
              {fatorDescricao}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const IconeCategoria = (categoria: Categoria) => {
  if (categoria === Categoria.Transporte) {
    return <Car className="h-5 w-5 text-blue-600" />;
  } else if (categoria === Categoria.EnergiaEmCasa) {
    return <Zap className="h-5 w-5 text-yellow-600" />;
  } else {
    return <Utensils className="h-5 w-5 text-red-600" />;
  }
};

const CorCategoria = (categoria: Categoria) => {
  if (categoria === Categoria.Transporte) {
    return "text-blue-600";
  } else if (categoria === Categoria.EnergiaEmCasa) {
    return "text-yellow-600";
  } else {
    return "text-red-600";
  }
};

const AvaliaUnidade = (valor: string | number, unidade: Unidade) => {
	const valorNumber = Number(valor);
	if (valorNumber > 1 || valorNumber === 0) {
		switch (unidade) {
			case Unidade.Pessoa:
				return "pessoas";
			case Unidade.Litro:
				return "litros";
			case Unidade.MetroCubico:
				return "metros cúbicos";
			case Unidade.Viagem:
				return "viagens";
			case Unidade.Km:
				return "km";
			case Unidade.KWh:
				return "kWh";
			case Unidade.Mes:
				return "meses";
			case Unidade.Kg:
				return "kg";
			case Unidade.Unidade:
				return "unidades";
		}
	}
	return unidade;
}

