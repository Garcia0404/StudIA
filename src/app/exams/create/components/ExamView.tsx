import { ExamProgress } from "./ExamProgress";
import { QuestionCard } from "./QuestionCard";
import { Button } from "@/components/ui/button";
import {
  useExamTimer,
  useExamNavigation,
  useExamResults,
  useExamQuestions,
} from "../../hooks";
import { useGlobalStore } from "@/store/globalStore";
import { useRouter } from "next/navigation";

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

  const router = useRouter();

  function handleFinish() {
    // Guardar la respuesta actual antes de finalizar
    if (currentQuestion) {
      const finalAnswer = {
        questionIndex: currentQuestionIndex,
        userAnswer: currentAnswer || "",
        correctAnswer: currentQuestion.answer,
        isCorrect: currentAnswer === currentQuestion.answer,
      };
      
      // Actualizar userAnswers con la respuesta final
      const updatedAnswers = userAnswers.filter(a => a.questionIndex !== currentQuestionIndex);
      const finalAnswers = [...updatedAnswers, finalAnswer];
      
      finishExam();
      // Llamar a saveResults con las respuestas actualizadas
      // Actualizar el estado directamente
      const { setCurrentExam, addSimulacroToHistory } = useGlobalStore.getState();
      const simulacroResults = {
        userAnswers: finalAnswers,
        totalQuestions: questions.length,
        correctAnswers: finalAnswers.filter(a => a.isCorrect).length,
        timeSpent: getTimeSpent(),
        category: selectedCategory,
        mode,
        date: new Date().toISOString(),
        questions,
      };
      
      setCurrentExam({ userAnswers: finalAnswers, questions, timeSpent: getTimeSpent() });
      addSimulacroToHistory(simulacroResults);
      router.push('/exams/results');
    } else {
      finishExam();
      saveResults();
    }
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
    <div className="max-w-4xl mx-auto">
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
