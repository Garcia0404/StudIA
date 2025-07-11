"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, Trophy, ArrowLeft } from "@/lib/icons";
import Link from "next/link";
import { useGlobalStore } from "@/store/globalStore";
import { useTimeUtils } from "../hooks/useTimeUtils";

export default function ExamResultsPage() {
  const { currentExam } = useGlobalStore();
  const { userAnswers, questions, timeSpent } = currentExam;
  const { formatTime } = useTimeUtils();

  if (!userAnswers?.length || !questions?.length) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">
            No hay resultados disponibles
          </h1>
          <Link href="/exams/create">
            <Button>Volver al simulacro</Button>
          </Link>
        </div>
      </div>
    );
  }

  const totalQuestions = questions.length;
  const correctAnswers = userAnswers.filter((a) => a.isCorrect).length;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);

  return (
    <div className="bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] min-h-screen">
      <div className="container max-w-5xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/exams/create">
            <Button className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al simulacro
            </Button>
          </Link>
          <h1 className="text-3xl font-bold mb-2">Resultados del simulacro</h1>
          <p>Revisa tus respuestas y aprende de tus errores</p>
        </div>

        {/* Resumen */}
        <Card className="mb-8 bg-white">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="h-6 w-6 text-main" />
              <span>Resumen</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-extrabold text-main">
                  {correctAnswers}
                </div>
                <div>Correctas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-main">
                  {totalQuestions - correctAnswers}
                </div>
                <div>Incorrectas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-main">
                  {percentage}%
                </div>
                <div>Acierto</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-extrabold text-main">
                  {formatTime(timeSpent)}
                </div>
                <div>Tiempo</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detalle de respuestas */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">Detalle de respuestas</h2>
          {questions.map((question, idx) => {
            const answer = userAnswers.find((a) => a.questionIndex === idx);
            return (
              <Card key={idx} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Badge>Pregunta {idx + 1}</Badge>
                      {answer?.isCorrect ? (
                        <CheckCircle className="h-5 w-5 text-main" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-400" />
                      )}
                    </div>
                    <Badge
                      className={
                        answer?.isCorrect ? "bg-green-500" : "bg-red-500"
                      }
                    >
                      {answer?.isCorrect ? "Correcta" : "Incorrecta"}
                    </Badge>
                  </div>
                  <div className="mb-2">
                    <div className="text-sm mb-1">Pregunta:</div>
                    <div className="p-3 rounded bg-background border-2">
                      {question.question}
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="text-sm mb-1">Opciones:</div>
                    <div className="flex flex-col gap-2">
                      {question.options?.map((option: string, i: number) => {
                        const isCorrect = option === question.answer;
                        const isSelected = answer?.userAnswer === option;
                        // Nueva lógica de colores
                        let optionClass =
                          "p-2 rounded border flex items-center gap-2 ";
                        if (answer?.isCorrect) {
                          // Si la respuesta es correcta
                          if (isSelected && isCorrect) {
                            optionClass += "bg-green-900/30";
                          } else {
                            optionClass += "border-neutral-700";
                          }
                        } else {
                          // Si la respuesta es incorrecta
                          if (isSelected && !isCorrect) {
                            optionClass += "border-red-500 bg-red-900/30";
                          } else if (isCorrect) {
                            optionClass += "bg-green-900/30";
                          } else {
                            optionClass += "border-neutral-700";
                          }
                        }
                        return (
                          <div key={i} className={optionClass}>
                            <span className="font-semibold">{option}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Acciones */}
        <div className="mt-8 flex justify-center space-x-4">
          <Button asChild>
            <Link href="/exams/create">Nuevo simulacro</Link>
          </Button>
          <Button asChild variant="neutral">
            <Link href="/dashboard">Ir al dashboard</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
