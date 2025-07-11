import { useState, useEffect } from "react";
import { useGlobalStore, Card } from "@/store/globalStore";

interface UseExamQuestionsProps {
  selectedCategory: string | null;
}

export const useExamQuestions = ({ selectedCategory }: UseExamQuestionsProps) => {
  const { cards } = useGlobalStore();
  const [filteredCards, setFilteredCards] = useState<Card[]>([]);

  useEffect(() => {
    const filtered = selectedCategory 
      ? cards.filter(card => card.category === selectedCategory)
      : [];
    setFilteredCards(filtered);
  }, [cards, selectedCategory]);

  const hasQuestions = filteredCards.length > 0;
  const questionCount = filteredCards.length;

  return {
    questions: filteredCards,
    hasQuestions,
    questionCount,
  };
}; 