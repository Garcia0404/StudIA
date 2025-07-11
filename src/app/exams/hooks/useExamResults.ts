import { useRouter } from "next/navigation";
import { useGlobalStore, SimulacroHistory } from "@/store/globalStore";
import { Card } from "@/store/globalStore";
import { useTimeUtils } from "./useTimeUtils";

interface UserAnswer {
  questionIndex: number;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

interface UseExamResultsProps {
  userAnswers: UserAnswer[];
  questions: Card[];
  timeSpent: number;
  category: string | null;
  mode: "multiple-choice";
}

export const useExamResults = ({ 
  userAnswers, 
  questions, 
  timeSpent, 
  category, 
  mode 
}: UseExamResultsProps) => {
  const router = useRouter();
  const { setCurrentExam, addSimulacroToHistory } = useGlobalStore();
  const { formatTime } = useTimeUtils();

  const saveResults = () => {
    const results: SimulacroHistory = {
      userAnswers,
      totalQuestions: questions.length,
      correctAnswers: userAnswers.filter(a => a.isCorrect).length,
      timeSpent,
      category,
      mode,
      date: new Date().toISOString(),
      questions,
    };

    setCurrentExam({ userAnswers, questions, timeSpent });
    addSimulacroToHistory(results);
    router.push('/exams/results');
  };

  const getResults = () => {
    const totalQuestions = questions.length;
    const correctAnswers = userAnswers.filter(a => a.isCorrect).length;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);

    return {
      totalQuestions,
      correctAnswers,
      incorrectAnswers: totalQuestions - correctAnswers,
      percentage,
      timeSpent,
    };
  };

  return {
    saveResults,
    getResults,
    formatTime,
  };
}; 