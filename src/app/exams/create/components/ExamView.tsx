import { ExamProgress } from "./ExamProgress";
import { QuestionCard } from "./QuestionCard";
import { Button } from "@/components/ui/button";
import {
  useExamTimer,
  useExamNavigation,
  useExamResults,
  useExamQuestions,
} from "../../hooks";

interface ExamViewProps {
  selectedCategory: string | null;
  onFinish: () => void;
  duration: number;
  mode: "multiple-choice";
}

export const ExamView: React.FC<ExamViewProps> = ({
  selectedCategory,
  onFinish,
  duration,
  mode,
}) => {
  // Hooks personalizados
  const { questions, hasQuestions } = useExamQuestions({ selectedCategory });

  const { timeRemaining, formatTime, getTimeSpent } = useExamTimer({
    duration,
    onTimeUp: handleFinish,
  });

  const {
    currentQuestionIndex,
    currentQuestion,
    currentAnswer,
    totalQuestions,
    isFirstQuestion,
    isLastQuestion,
    userAnswers,
    goToPrevious,
    goToNext,
    selectAnswer,
    finishExam,
  } = useExamNavigation({
    questions,
    onAnswerChange: () => {}, // No necesitamos hacer nada aquí por ahora
  });

  const { saveResults } = useExamResults({
    userAnswers,
    questions,
    timeSpent: getTimeSpent(),
    category: selectedCategory,
    mode,
  });

  function handleFinish() {
    finishExam();
    saveResults();
  }

  if (!hasQuestions) {
    return (
      <div className="max-w-4xl mx-auto text-center py-8 sm:py-12 px-4">
        <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">
          No hay preguntas disponibles
        </h3>
        <p className="mb-4 sm:mb-6 text-sm sm:text-base">
          No se encontraron tarjetas para la categoría seleccionada.
        </p>
        <Button onClick={onFinish} className="w-full sm:w-auto">
          Volver al inicio
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6">
      <ExamProgress
        currentQuestion={currentQuestionIndex + 1}
        totalQuestions={totalQuestions}
        timeRemaining={formatTime(timeRemaining)}
        progress={((currentQuestionIndex + 1) / totalQuestions) * 100}
      />

      <QuestionCard
        category={currentQuestion.category}
        question={currentQuestion.question}
        options={
          currentQuestion.options || [
            "Opción A",
            "Opción B",
            "Opción C",
            "Opción D",
          ]
        }
        selectedOption={currentAnswer}
        onOptionSelect={selectAnswer}
        onPrevious={goToPrevious}
        onNext={goToNext}
        onFinish={handleFinish}
        isFirstQuestion={isFirstQuestion}
        isLastQuestion={isLastQuestion}
      />
    </div>
  );
};
