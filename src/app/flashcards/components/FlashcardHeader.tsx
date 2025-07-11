import Link from "next/link";
import { BookOpen, Plus } from "@/lib/icons";
import { Button } from "@/components/ui/button";

export function FlashcardHeader() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b-4 shadow-sm">
      <div className="container mx-auto px-4 py-3.5 flex justify-between items-center">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 rounded-lg"
        >
          <div className="flex items-center space-x-2">
            <div className="border-2 bg-main p-1 rounded-md">
              <BookOpen className="size-5" />
            </div>
            <span className="text-xl font-bold">
              <span className="max-sm:hidden">Mis</span> Tarjetas
            </span>
          </div>
        </Link>
        <Button asChild size="sm">
          <Link href="/flashcards/create" className="flex gap-2">
            <Plus className="w-4 h-4" />
            <span className="max-sm:hidden">Nueva tarjeta</span>
          </Link>
        </Button>
      </div>
    </header>
  );
} 