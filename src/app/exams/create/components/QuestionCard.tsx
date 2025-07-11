import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import React, { useState, useEffect } from "react";

interface QuestionCardProps {
  category: string;
  question: string;
  options: string[];
  selectedOption?: string;
  onOptionSelect: (option: string) => void;
  onPrevious: () => void;
  onNext: () => void;
  onFinish: () => void;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  category,
  question,
  options,
  selectedOption,
  onOptionSelect,
  onPrevious,
  onNext,
  onFinish,
  isFirstQuestion,
  isLastQuestion,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState(selectedOption || "");

  useEffect(() => {
    setSelectedAnswer(selectedOption || "");
  }, [selectedOption]);

  const handleOptionClick = (option: string) => {
    setSelectedAnswer(option);
    onOptionSelect(option);
  };

  return (
    <Card className="bg-white">
      <CardContent className="p-4 sm:p-6 lg:p-8">
        <div className="mb-4 sm:mb-6">
          <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
            <Badge className="text-xs sm:text-sm">{category}</Badge>
          </div>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 leading-tight">
            {question}
          </h2>
        </div>

        <div className="flex flex-col gap-2 sm:gap-3 mb-6 sm:mb-8">
          {options.map((option, index) => (
            <Button
              key={index}
              variant={selectedAnswer === option ? "default" : "neutral"}
              className="w-full flex justify-start text-start text-sm sm:text-lg whitespace-normal h-auto"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </Button>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:justify-between">
          {!isFirstQuestion && (
            <Button onClick={onPrevious} className="w-full sm:w-auto">
              Anterior
            </Button>
          )}
          {!isLastQuestion && <Button onClick={onNext}>Siguiente</Button>}
          {isLastQuestion && <Button onClick={onFinish}>Finalizar</Button>}
        </div>
      </CardContent>
    </Card>
  );
};
