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
import { Categoria, Unidade } from "@/data/types";

type CardDetailsProps = {
  categoria:
    | Categoria.Transporte
    | Categoria.EnergiaEmCasa
    | Categoria.Alimentacao;
  pergunta: string;
  resposta: string | number;
  unidade:
    | Unidade.Booleano
    | Unidade.Pessoa
    | Unidade.Litro
    | Unidade.MetroCubico
    | Unidade.Viagem
    | Unidade.Km
    | Unidade.KWh
    | Unidade.Mes
    | Unidade.Kg
    | Unidade.Unidade;
  fator?: string;
};

export const CardDetails: React.FC<CardDetailsProps> = ({
  categoria,
  pergunta,
  resposta,
  unidade,
  fator,
}) => {
  return (
    <Card className="w-full max-w-md overflow-hidden text-start">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          {IconeCategoria({ categoria })}
          <Badge variant="secondary" className="text-xs capitalize">
            {categoria}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <h3 className="font-medium text-lg">{pergunta}</h3>
          <p className="text-2xl font-semibold text-primary">
            {resposta} {unidade !== "booleano" && unidade}
          </p>
        </div>

        {fator && (
          <div className="pt-2 border-t">
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              <span className="font-medium">Fator:</span>
              {fator}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

const IconeCategoria = ({ categoria }: { categoria: Categoria }) => {
  if (categoria === Categoria.Transporte) {
    return <Car className="h-5 w-5 text-blue-600" />;
  } else if (categoria === Categoria.EnergiaEmCasa) {
    return <Zap className="h-5 w-5 text-yellow-600" />;
  } else {
    return <Utensils className="h-5 w-5 text-red-600" />;
  }
};
