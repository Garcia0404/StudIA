import type { Card as FlashCard } from "@/store/globalStore";
import { FlashcardCard } from "./FlashcardCard";

interface FlashcardGridProps {
  cards: FlashCard[];
  showAnswers: boolean;
}

export function FlashcardGrid({ cards, showAnswers }: FlashcardGridProps) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cards.map((card) => (
        <FlashcardCard key={card.id} card={card} showAnswer={showAnswers} />
      ))}
    </div>
  );
} 