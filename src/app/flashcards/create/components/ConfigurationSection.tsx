import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Settings, Check, Plus } from "@/lib/icons";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useGlobalStore } from "@/store/globalStore";
import { Badge } from "@/components/ui/badge";

interface ConfigurationSectionProps {
  configData: {
    category: string;
    tags: string[];
  };
  newTag: string;
  onConfigChange: (data: Partial<{ category: string; tags: string[] }>) => void;
  onNewTagChange: (tag: string) => void;
  onAddTag: () => void;
  onRemoveTag: (tag: string) => void;
}

export const ConfigurationSection: React.FC<ConfigurationSectionProps> = ({
  configData,
  newTag,
  onConfigChange,
  onNewTagChange,
  onAddTag,
  onRemoveTag,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [open, setOpen] = useState(false);
  const { categories, addCategory } = useGlobalStore();

  const handleSelectCategory = (category: string) => {
    onConfigChange({ category });
    setOpen(false);
  };

  const handleCreateCategory = () => {
    if (inputValue.trim() && !categories.includes(inputValue.trim())) {
      addCategory(inputValue.trim());
      onConfigChange({ category: inputValue.trim() });
      setInputValue("");
      setOpen(false);
    }
  };

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Settings className="h-5 w-5 text-main" />
          <span>Configuración</span>
        </CardTitle>
        <CardDescription>Personaliza la categoría y etiquetas</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Categoría con Combobox */}
        <div>
          <label className="text-sm font-medium mb-3 block">Categoría</label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button className="w-full justify-between">
                {configData.category || "Selecciona o crea una categoría"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full p-2">
              <Input
                placeholder="Buscar o crear categoría..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="mb-2"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleCreateCategory();
                  }
                }}
              />
              <div
                style={{ scrollbarWidth: "none" }}
                className="max-h-40 overflow-y-auto space-y-1"
              >
                {categories
                  .filter((cat) =>
                    cat.toLowerCase().includes(inputValue.toLowerCase())
                  )
                  .map((cat) => (
                    <Button
                      variant="noShadow"
                      key={cat}
                      className="w-full flex justify-between text-left px-2 py-1"
                      onClick={() => handleSelectCategory(cat)}
                    >
                      <span>{cat}</span>
                      {configData.category === cat && (
                        <Check className="h-4 w-4" />
                      )}
                    </Button>
                  ))}
                {inputValue.trim() &&
                  !categories.some(
                    (cat) =>
                      cat.toLowerCase() === inputValue.trim().toLowerCase()
                  ) && (
                    <Button
                      variant="noShadow"
                      className="w-full flex items-center gap-2 px-2 py-1"
                      onClick={handleCreateCategory}
                    >
                      <Plus className="h-4 w-4" />
                      Crear &quot;{inputValue.trim()}&quot;
                    </Button>
                  )}
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Etiquetas */}
        <div>
          <label className="text-sm font-medium mb-3 block">Etiquetas</label>
          <div className="flex gap-2 mb-2">
            <Input
              value={newTag}
              onChange={(e) => onNewTagChange(e.target.value)}
              placeholder="Nueva etiqueta"
              onKeyDown={(e) => {
                if (e.key === "Enter") onAddTag();
              }}
            />
            <Button type="button" onClick={onAddTag}>
              Añadir
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {configData.tags.map((tag) => (
              <Badge
                key={tag}
                className="text-xs px-2 py-0.5 rounded flex items-center gap-1"
              >
                {tag}
                <button
                  type="button"
                  className="ml-1"
                  onClick={() => onRemoveTag(tag)}
                >
                  ×
                </button>
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
