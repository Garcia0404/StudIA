"use client";
import { useGlobalStore } from "@/store/globalStore";
import type { Card } from "@/store/globalStore";
import { useState, useMemo } from "react";
import { FlashcardHeader } from "./components/FlashcardHeader";
import { FlashcardFilters } from "./components/FlashcardFilters";
import { FlashcardGrid } from "./components/FlashcardGrid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Plus } from "@/lib/icons";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function FlashcardsPage() {
  const { cards } = useGlobalStore();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [showAnswers, setShowAnswers] = useState(false);
  const handleShowAnswers = () => {
    setShowAnswers((prev) => !prev);
  };
  // Obtener categorías únicas
  const categories = useMemo(() => {
    const set = new Set<string>();
    cards?.forEach((card: Card) => set.add(card.category || "Sin categoría"));
    return ["all", ...Array.from(set)];
  }, [cards]);

  // Filtrar por categoría
  const filteredCards = useMemo(() => {
    if (!cards) return [];
    if (selectedCategory === "all") return cards;
    return cards.filter(
      (card: Card) => (card.category || "Sin categoría") === selectedCategory
    );
  }, [cards, selectedCategory]);

  return (
    <div className="bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] min-h-screen">
      <FlashcardHeader />
      <div className="container mx-auto">
        <Breadcrumb className="px-4 pt-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Flashcards</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <FlashcardFilters
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        showAnswers={showAnswers}
        handleShowAnswers={handleShowAnswers}
      />
      <div className="container mx-auto px-4 py-10">
        {filteredCards && filteredCards.length > 0 ? (
          <FlashcardGrid cards={filteredCards} showAnswers={showAnswers} />
        ) : (
          <div className="flex flex-col items-center justify-center py-20">
            <p className="text-lg mb-4 text-muted-foreground">
              No tienes flashcards en esta categoría.
            </p>
            <Button asChild>
              <Link href="/flashcards/create">
                <Plus className="w-4 h-4 mr-2" /> Crear nueva flashcard
              </Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
