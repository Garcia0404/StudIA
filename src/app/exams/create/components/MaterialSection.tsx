import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BookOpen } from "@/lib/icons";
import Link from "next/link";

interface MaterialSectionProps {
  categories: string[];
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export const MaterialSection = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: MaterialSectionProps) => {
  const handleToggleCategory = (category: string) => {
    if (selectedCategory === category) {
      onSelectCategory(null); // Deseleccionar si ya está seleccionada
    } else {
      onSelectCategory(category); // Seleccionar la nueva categoría
    }
  };

  return (
    <Card className="bg-white">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <BookOpen className="h-5 w-5 text-main" />
          <span>Material disponible</span>
        </CardTitle>
        <CardDescription>
          Tarjetas y contenido para tu simulacro
        </CardDescription>
      </CardHeader>
      <CardContent>
        {categories.length !== 0 ? (
          <div className="flex gap-2">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={selectedCategory === category ? "default" : "neutral"}
                onClick={() => handleToggleCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">
              No tienes tarjetas creadas
            </h3>
            <p className="mb-6 text-sm font-light">
              Necesitas crear al menos 5 tarjetas para realizar un simulacro
            </p>
            <Link
              className="bg-main border-2 rounded-xl p-3 flex items-center justify-center w-max mx-auto"
              href="/flashcards/create"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Crear tarjetas
            </Link>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
