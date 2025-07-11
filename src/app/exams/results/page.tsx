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
    <div className="min-h-screen bg-neutral-950 text-white">
      <div className="container mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link href="/exams/create">
            <Button className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver al simulacro
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-slate-100 mb-2">
            Resultados del simulacro
          </h1>
          <p className="text-slate-300">
            Revisa tus respuestas y aprende de tus errores
          </p>
        </div>

        {/* Resumen */}
        <Card className="bg-neutral-900 border-0 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="h-6 w-6 text-yellow-500" />
              <span>Resumen</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">
                  {correctAnswers}
                </div>
                <div className="text-slate-400">Correctas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-400">
                  {totalQuestions - correctAnswers}
                </div>
                <div className="text-slate-400">Incorrectas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">
                  {percentage}%
                </div>
                <div className="text-slate-400">Acierto</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">
                  {formatTime(timeSpent)}
                </div>
                <div className="text-slate-400">Tiempo</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detalle de respuestas */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-100 mb-4">
            Detalle de respuestas
          </h2>
          {questions.map((question, idx) => {
            const answer = userAnswers.find((a) => a.questionIndex === idx);
            return (
              <Card key={idx} className="bg-neutral-900 border-0">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Badge className="text-white">Pregunta {idx + 1}</Badge>
                      {answer?.isCorrect ? (
                        <CheckCircle className="h-5 w-5 text-green-400" />
                      ) : (
                        <XCircle className="h-5 w-5 text-red-400" />
                      )}
                    </div>
                    <Badge
                      variant={answer?.isCorrect ? "default" : "neutral"}
                      className={
                        answer?.isCorrect ? "bg-green-600" : "bg-red-600"
                      }
                    >
                      {answer?.isCorrect ? "Correcta" : "Incorrecta"}
                    </Badge>
                  </div>
                  <div className="mb-2">
                    <div className="text-sm text-slate-400 mb-1">Pregunta:</div>
                    <div className="text-white bg-neutral-800 p-3 rounded">
                      {question.question}
                    </div>
                  </div>
                  <div className="mb-2">
                    <div className="text-sm text-slate-400 mb-1">Opciones:</div>
                    <div className="flex flex-col gap-2">
                      {question.options?.map((option: string, i: number) => {
                        const isCorrect = option === question.answer;
                        const isSelected = answer?.userAnswer === option;
                        return (
                          <div
                            key={i}
                            className={`p-2 rounded border flex items-center gap-2
                              ${
                                isCorrect
                                  ? "border-green-500 bg-green-900/30"
                                  : "border-neutral-700"
                              }
                              ${
                                isSelected && !isCorrect
                                  ? "border-blue-500 bg-blue-900/30"
                                  : ""
                              }
                              ${
                                isSelected && isCorrect
                                  ? "border-green-700 bg-green-800/60"
                                  : ""
                              }
                            `}
                          >
                            <span
                              className={`font-semibold ${
                                isCorrect
                                  ? "text-green-400"
                                  : isSelected
                                  ? "text-blue-400"
                                  : "text-white"
                              }`}
                            >
                              {option}
                            </span>
                            {isCorrect && (
                              <span className="ml-2 text-xs text-green-400">
                                (Correcta)
                              </span>
                            )}
                            {isSelected && !isCorrect && (
                              <span className="ml-2 text-xs text-blue-400">
                                (Tu respuesta)
                              </span>
                            )}
                            {isSelected && isCorrect && (
                              <span className="ml-2 text-xs text-green-400">
                                (Tu respuesta correcta)
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="text-sm text-slate-400 mb-1">
                        Tu respuesta:
                      </div>
                      <div className="text-white bg-neutral-800 p-3 rounded">
                        {answer?.userAnswer || "Sin respuesta"}
                      </div>
                    </div>
                    {!answer?.isCorrect && (
                      <div>
                        <div className="text-sm text-slate-400 mb-1">
                          Respuesta correcta:
                        </div>
                        <div className="text-green-400 bg-green-900/20 p-3 rounded border border-green-800">
                          {answer?.correctAnswer}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Acciones */}
        <div className="mt-8 flex justify-center space-x-4">
          <Link href="/exams/create">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Nuevo simulacro
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button>Ir al dashboard</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
