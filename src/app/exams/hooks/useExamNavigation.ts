import { useState, useEffect } from "react";
import { Card } from "@/store/globalStore";

interface UserAnswer {
  questionIndex: number;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
}

interface UseExamNavigationProps {
  questions: Card[];
  onAnswerChange: (answers: UserAnswer[]) => void;
}

export const useExamNavigation = ({ questions, onAnswerChange }: UseExamNavigationProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [currentAnswer, setCurrentAnswer] = useState("");

  const totalQuestions = questions.length;
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  const currentQuestion = questions[currentQuestionIndex];

  const saveCurrentAnswer = () => {
    if (!currentQuestion || !currentAnswer) return;
    
    const newAnswer: UserAnswer = {
      questionIndex: currentQuestionIndex,
      userAnswer: currentAnswer,
      correctAnswer: currentQuestion.answer,
      isCorrect: currentAnswer === currentQuestion.answer,
    };

    const updatedAnswers = userAnswers.filter(a => a.questionIndex !== currentQuestionIndex);
    const newAnswers = [...updatedAnswers, newAnswer];
    
    setUserAnswers(newAnswers);
    onAnswerChange(newAnswers);
  };

  const goToPrevious = () => {
    if (currentQuestionIndex > 0) {
      saveCurrentAnswer();
      setCurrentQuestionIndex(prev => prev - 1);
      const previousAnswer = userAnswers.find(a => a.questionIndex === currentQuestionIndex - 1);
      setCurrentAnswer(previousAnswer?.userAnswer || "");
    }
  };

  const goToNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      saveCurrentAnswer();
      setCurrentQuestionIndex(prev => prev + 1);
      const nextAnswer = userAnswers.find(a => a.questionIndex === currentQuestionIndex + 1);
      setCurrentAnswer(nextAnswer?.userAnswer || "");
    }
  };

  const selectAnswer = (answer: string) => {
    setCurrentAnswer(answer);
  };

  const finishExam = () => {
    saveCurrentAnswer();
  };

  // Restaurar respuesta al cambiar de pregunta
  useEffect(() => {
    const existingAnswer = userAnswers.find(a => a.questionIndex === currentQuestionIndex);
    setCurrentAnswer(existingAnswer?.userAnswer || "");
  }, [currentQuestionIndex, userAnswers]);

  return {
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
  };
}; 