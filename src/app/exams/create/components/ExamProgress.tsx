import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Clock } from "@/lib/icons";
import React from "react";

interface ExamProgressProps {
  currentQuestion: number;
  totalQuestions: number;
  timeRemaining: string;
  progress: number;
}

export const ExamProgress: React.FC<ExamProgressProps> = ({
  currentQuestion,
  totalQuestions,
  timeRemaining,
  progress
}) => (
  <div className="mb-6">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
        <Badge className="px-3 py-1 text-sm sm:text-base w-fit">
          Pregunta {currentQuestion} de {totalQuestions}
        </Badge>
        <div className="flex items-center space-x-2 text-sm sm:text-base">
          <Clock className="h-4 w-4" />
          <span>{timeRemaining}</span>
        </div>
      </div>
    </div>
    <Progress value={progress} className="h-2" />
  </div>
);
