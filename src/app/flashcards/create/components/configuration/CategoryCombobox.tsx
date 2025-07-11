import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Check, Plus } from "lucide-react";

interface CategoryComboboxProps {
  value: string;
  onChange: (category: string) => void;
  categories: string[];
  setCategories: (categories: string[]) => void;
}

export const CategoryCombobox: React.FC<CategoryComboboxProps> = ({
  value,
  onChange,
  categories,
  setCategories,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);

  const handleSelectCategory = (category: string) => {
    onChange(category);
    setOpen(false);
  };

  const handleCreateCategory = () => {
    if (inputValue.trim() && !categories.includes(inputValue.trim())) {
      setCategories([...categories, inputValue.trim()]);
      onChange(inputValue.trim());
      setInputValue("");
      setOpen(false);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-between bg-neutral-800 text-white border border-white/10"
        >
          {value || "Selecciona o crea una categoría"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-2 bg-neutral-900 border border-white/10">
        <Input
          placeholder="Buscar o crear categoría..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="mb-2 text-white bg-neutral-800"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleCreateCategory();
            }
          }}
        />
        <div className="max-h-40 overflow-y-auto space-y-1">
          {categories
            .filter((cat) =>
              cat.toLowerCase().includes(inputValue.toLowerCase())
            )
            .map((cat) => (
              <Button
                key={cat}
                variant="ghost"
                className="w-full flex justify-between text-left px-2 py-1"
                onClick={() => handleSelectCategory(cat)}
              >
                <span>{cat}</span>
                {value === cat && <Check className="h-4 w-4 text-green-400" />}
              </Button>
            ))}
          {inputValue.trim() &&
            !categories.some(
              (cat) => cat.toLowerCase() === inputValue.trim().toLowerCase()
            ) && (
              <Button
                variant="ghost"
                className="w-full flex items-center gap-2 px-2 py-1 text-blue-400"
                onClick={handleCreateCategory}
              >
                <Plus className="h-4 w-4" />
                Crear &quot;{inputValue.trim()}&quot;
              </Button>
            )}
        </div>
      </PopoverContent>
    </Popover>
  );
}; 