import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
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
    <div className="container mx-auto px-4 mt-4 flex flex-wrap items-end gap-4 justify-between">
      <div className="flex flex-col gap-3">
        <Label>Filtrar por categoría:</Label>
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-max">
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
      </div>
      <Button
        variant={showAnswers ? "noShadow" : "neutral"}
        onClick={handleShowAnswers}
      >
        {showAnswers ? "Ocultar respuestas" : "Mostrar respuestas"}
      </Button>
    </div>
  );
}
