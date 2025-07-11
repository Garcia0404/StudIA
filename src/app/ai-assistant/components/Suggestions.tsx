import { Button } from "@/components/ui/button";

interface SuggestionsProps {
  suggestions: string[];
  onSuggestionClick: (suggestion: string) => void;
}

export const Suggestions: React.FC<SuggestionsProps> = ({
  suggestions,
  onSuggestionClick,
}) => (
  <div className="space-y-3">
    <h4 className="text-sm font-medium">
      Sugerencias para empezar:
    </h4>
    <div className="flex flex-wrap gap-2">
      {suggestions.map((suggestion, index) => (
        <Button
          key={index}
          size="sm"
          onClick={() => onSuggestionClick(suggestion)}
          className="text-xs line-clamp-1 max-[400px]:w-full text-start"
        >
          {suggestion}
        </Button>
      ))}
    </div>
  </div>
); 