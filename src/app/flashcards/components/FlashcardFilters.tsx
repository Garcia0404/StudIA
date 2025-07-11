import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface FlashcardFiltersProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  showAnswers: boolean;
  handleShowAnswers: () => void;
}

export function FlashcardFilters({
  categories,
  selectedCategory,
  setSelectedCategory,
  showAnswers,
  handleShowAnswers,
}: FlashcardFiltersProps) {
  return (
    <div className="container mx-auto px-4 mt-8 flex flex-col sm:flex-row items-center gap-4">
      <span className="font-medium">Filtrar por categoría:</span>
      <Select value={selectedCategory} onValueChange={setSelectedCategory}>
        <SelectTrigger className="w-56">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {categories.map((cat) => (
            <SelectItem key={cat} value={cat}>
              {cat === "all" ? "Todas" : cat}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button
        variant={showAnswers ? "default" : "neutral"}
        onClick={handleShowAnswers}
      >
        {showAnswers ? "Ocultar respuestas" : "Mostrar respuestas"}
      </Button>
    </div>
  );
}
