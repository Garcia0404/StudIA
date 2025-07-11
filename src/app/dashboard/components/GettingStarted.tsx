import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Brain, Plus, Target, TrendingUp } from "@/lib/icons";
import Link from "next/link";

const progress = 0;
// const color = "#80808090"
export const GettingStarted = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Target className="h-5 w-5 text-main" />
            <span>Primeros pasos</span>
          </CardTitle>
          <CardDescription className="text-pretty">
            Completa estos pasos para comenzar tu experiencia de aprendizaje
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center space-x-3">
            <Avatar className="size-5 bg-main grid place-items-center">
              <span className="text-xs font-bold">1</span>
            </Avatar>
            <span className="text-sm">Crear tu primera tarjeta de estudio</span>
          </div>
          <div className="flex items-center space-x-3">
            <Avatar className="size-5 grid place-items-center">
              <span className="text-xs font-bold">2</span>
            </Avatar>
            <span className="text-sm">Realizar tu primer simulacro</span>
          </div>
          <div className="flex items-center space-x-3">
            <Avatar className="size-5 grid place-items-center">
              <span className="text-xs font-bold">3</span>
            </Avatar>
            <span className="text-sm">Escribir tus primeras notas</span>
          </div>
          <div className="flex items-center space-x-3">
            <Avatar className="size-5 grid place-items-center">
              <span className="text-xs font-bold">4</span>
            </Avatar>
            <span className="text-sm">Establecer tus objetivos de estudio</span>
          </div>
          <Progress value={progress} className="mt-4" />
          <p className="text-sm">{progress}% completado</p>
        </CardContent>
      </Card>

      <Card className="bg-white">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <TrendingUp className="h-5 w-5 text-main" />
            <span>Progreso semanal</span>
          </CardTitle>
          <CardDescription>Tu actividad de estudio esta semana</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <Brain className="h-16 w-16 mx-auto mb-4" />
            <p className="mb-4">¡Comienza a estudiar para ver tu progreso!</p>
            <Link href="/flashcards/create">
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Crear primera tarjeta
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
