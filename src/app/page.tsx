import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Github from "./icons/github";
import {
  ArrowRight,
  QrCodeIcon,
  Zap,
  Users,
  BarChart,
  Car,
  Utensils,
} from "lucide-react";
import { orbitron } from "./fonts/fonts";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 xl:py-48 bg-green-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Torne-se um Herói do Carbono
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Descubra sua pegada de carbono e aprenda como reduzi-la com
                  nosso jogo de perguntas interativo.
                </p>
              </div>
              <div className="space-x-4">
                <DialogHero>
                  <Button
                    size={"lg"}
                    className="bg-green-600 hover:bg-green-700 text-base"
                  >
                    Iniciar teste
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </DialogHero>
                <Link href="#sobre">
                  <Button size={"lg"} variant="outline" className="text-base">
                    Saiba mais
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section
          className="w-full flex justify-center py-12 md:py-24 lg:py-32"
          id="sobre"
        >
          <div className="container md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  O que é o{" "}
                  <span className={`${orbitron.className}`}>Carbon Heroes</span>
                  ?
                </h2>
                <p className=" text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  <span className={`${orbitron.className}`}>Carbon Heroes</span>{" "}
                  é um jogo de perguntas interativo projetado para ajudar você a
                  entender e calcular sua pegada de carbono. Ao responder
                  perguntas sobre suas atividades diárias, você aprenderá como
                  seu estilo de vida impacta o meio ambiente.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full max-w-sm">
                  <CardContent className="p-6">
                    <div className="grid gap-4">
                      <div className="flex items-center gap-4">
                        <Car className="h-8 w-8 text-blue-600" />
                        <div className="space-y-1">
                          <h3 className="font-bold">Transporte</h3>
                          <p className="text-sm text-gray-600">
                            Analise seus hábitos de viagem e impacto
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Zap className="h-8 w-8 text-yellow-600" />
                        <div className="space-y-1">
                          <h3 className="font-bold">Energia em casa</h3>
                          <p className="text-sm text-gray-600">
                            Meça o consumo de energia da sua casa
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Utensils className="w-8 h-8 text-red-600" />
                        <div className="space-y-1">
                          <h3 className="font-bold">Alimentação</h3>
                          <p className="text-sm text-gray-600">
                            Avalie seus hábitos e consumo diários
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section
          className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-gray-100"
          id="recursos"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center mb-8">
              Recursos
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <BarChart className="h-12 w-12 text-green-600" />
                  <h3 className="text-xl font-bold">Cálculos Personalizados</h3>
                  <p className="text-gray-600">
                    Obtenha uma estimativa precisa da sua pegada de carbono com
                    base no seu estilo de vida
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Users className="h-12 w-12 text-green-600" />
                  <h3 className="text-xl font-bold">Compare e Compita</h3>
                  <p className="text-gray-600">
                    Veja como sua pegada de carbono se compara a outras e
                    desafie seus amigos
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <QrCodeIcon className="h-12 w-12 text-green-600" />
                  <h3 className="text-xl font-bold">
                    Compartilhe seus resultados
                  </h3>
                  <p className="text-gray-600">
                    Compartilhe seus resultados e inspire outras pessoas a
                    conhecer sua própria pegada de carbono
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          className="w-full flex justify-center py-12 md:py-24 lg:py-32"
          id="como-jogar"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center mb-8">
              Como jogar
            </h2>
            <div className="grid gap-10 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-900">
                  1
                </div>
                <h3 className="text-xl font-bold">Responda as Questões</h3>
                <p className="text-gray-600">
                  Responda a uma série de perguntas sobre suas atividades
                  diárias e hábitos
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-900">
                  2
                </div>
                <h3 className="text-xl font-bold">Obtenha sua pontuação</h3>
                <p className="text-gray-600">
                  Receba uma análise da sua pegada de carbono em diferentes
                  categorias
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-900">
                  3
                </div>
                <h3 className="text-xl font-bold">Tome uma atitude</h3>
                <p className="text-gray-600">
                  Aprenda sobre maneiras de reduzir seu impacto e acompanhar seu
                  progresso ao longo do tempo
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full flex justify-center py-12 md:py-24 lg:py-32 bg-green-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Pronto para se tornar um Herói do Carbono?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Faça o teste agora e comece sua jornada em direção a um estilo
                  de vida mais sustentável.
                </p>
              </div>
              <div className="space-x-4">
                <DialogHero>
                  <Button
                    size={"lg"}
                    className="bg-white text-green-600 hover:bg-gray-100 text-base"
                  >
                    Iniciar teste
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </Button>
                </DialogHero>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-center px-4 md:px-6 border-t ">
        <p className="text-xs text-gray-500">
          © 2024 Carbon Heroes. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}

function DialogHero({ children }: { children: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Questionário em C#</DialogTitle>
        </DialogHeader>
        <p>
          Neste momento, o acesso ao quiz está disponível apenas através da
          nossa aplicação em C#.
        </p>
        <DialogFooter>
          <a
            href="https://github.com/wwwacedo/gs-carbon-hero"
            target="_blank"
            className="w-full"
          >
            <Button
              size={"lg"}
              variant="default"
              className="bg-black w-full flex items-center justify-around hover:text-black transition-all"
            >
              <Github />
              <p>Ir para o repositório no GitHub</p>
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </a>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
