import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Leaf, Zap, Users, BarChart } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">
            CARBON HEROES
          </span>
        </Link>
        
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-green-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Become a Carbon Hero
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Discover your carbon footprint and learn how to reduce it with
                  our interactive quiz game.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-green-600 hover:bg-green-700">
                  Start Quiz
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="about">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 px-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  What is Carbon Heroes?
                </h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Carbon Heroes is an interactive quiz game designed to help you
                  understand and calculate your carbon footprint. By answering
                  questions about your daily activities, you'll learn how your
                  lifestyle impacts the environment and discover ways to reduce
                  your carbon emissions.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full max-w-sm">
                  <CardContent className="p-6">
                    <div className="grid gap-4">
                      <div className="flex items-center gap-4">
                        <Zap className="h-8 w-8 text-yellow-500" />
                        <div className="space-y-1">
                          <h3 className="font-bold">Energy Use</h3>
                          <p className="text-sm text-gray-600">
                            Measure your home energy consumption
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Users className="h-8 w-8 text-blue-500" />
                        <div className="space-y-1">
                          <h3 className="font-bold">Transportation</h3>
                          <p className="text-sm text-gray-600">
                            Analyze your travel habits and impact
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Leaf className="h-8 w-8 text-green-500" />
                        <div className="space-y-1">
                          <h3 className="font-bold">Lifestyle Choices</h3>
                          <p className="text-sm text-gray-600">
                            Evaluate your daily habits and consumption
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
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
          id="features"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center mb-8">
              Key Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <BarChart className="h-12 w-12 text-green-600" />
                  <h3 className="text-xl font-bold">
                    Personalized Calculations
                  </h3>
                  <p className="text-gray-600">
                    Get an accurate estimate of your carbon footprint based on
                    your lifestyle
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Users className="h-12 w-12 text-green-600" />
                  <h3 className="text-xl font-bold">Compare & Compete</h3>
                  <p className="text-gray-600">
                    See how your carbon footprint compares to others and
                    challenge your friends
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Leaf className="h-12 w-12 text-green-600" />
                  <h3 className="text-xl font-bold">Eco-friendly Tips</h3>
                  <p className="text-gray-600">
                    Receive personalized suggestions to reduce your
                    environmental impact
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="how-to-play">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-center mb-8">
              How to Play
            </h2>
            <div className="grid gap-10 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-900">
                  1
                </div>
                <h3 className="text-xl font-bold">Answer Questions</h3>
                <p className="text-gray-600">
                  Respond to a series of questions about your daily activities
                  and habits
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-900">
                  2
                </div>
                <h3 className="text-xl font-bold">Get Your Score</h3>
                <p className="text-gray-600">
                  Receive a detailed breakdown of your carbon footprint across
                  different categories
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-900">
                  3
                </div>
                <h3 className="text-xl font-bold">Take Action</h3>
                <p className="text-gray-600">
                  Learn about ways to reduce your impact and track your progress
                  over time
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center text-white">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Become a Carbon Hero?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Take the quiz now and start your journey towards a more
                  sustainable lifestyle.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-white text-green-600 hover:bg-gray-100">
                  Start Quiz
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">
          © 2024 Carbon Heroes. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
