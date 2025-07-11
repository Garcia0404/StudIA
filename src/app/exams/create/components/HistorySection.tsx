import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "@/lib/icons";
import React from "react";
import { useExamHistory } from "../../hooks";

export const HistorySection: React.FC = () => {
  const { simulacrosHistory, formatTime, formatDate, hasHistory } =
    useExamHistory();

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <TrendingUp className="h-5 w-5 text-main" />
          <span>Historial de simulacros</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        {!hasHistory ? (
          <div className="text-center py-8">
            <TrendingUp className="h-12 w-12 mx-auto mb-3" />
            <p className="font-light">Aún no has realizado ningún simulacro</p>
          </div>
        ) : (
          <div className="space-y-4">
            {simulacrosHistory.map((sim, idx) => (
              <div
                key={idx}
                className="rounded-lg border-2 p-4 flex flex-col md:flex-row md:items-center md:justify-between bg-background"
              >
                <div>
                  <div className="font-semibold">
                    {sim.category || "Sin categoría"}
                  </div>
                  <div className="text-xs">{formatDate(sim.date)}</div>
                </div>
                <div className="flex gap-4 mt-2 md:mt-0">
                  <div className="text-main font-bold">
                    {sim.correctAnswers}/{sim.totalQuestions} aciertos
                  </div>
                  <div className="font-bold">{formatTime(sim.timeSpent)}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
