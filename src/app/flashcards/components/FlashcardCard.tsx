import { Card, CardContent } from "@/components/ui/card";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Badge } from "@/components/ui/badge";
import type { Card as FlashCard } from "@/store/globalStore";
import { Button } from "@/components/ui/button";
import { Trash } from "@/lib/icons";
import { useGlobalStore } from "@/store/globalStore";

interface FlashcardCardProps {
  card: FlashCard;
  showAnswer: boolean;
}

export function FlashcardCard({ card, showAnswer }: FlashcardCardProps) {
  const removeCard = useGlobalStore((state) => state.removeCard);
  const cards = useGlobalStore((state) => state.cards);

  const handleDelete = () => {
    const index = cards.findIndex((c) => c.id === card.id);
    if (index !== -1) {
      removeCard(index);
    }
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Card className="bg-white">
          <CardContent>
            <div className="text-center">
              <div className="px-3 py-1 rounded-full">
                <Badge className="text-sm font-medium">
                  {card.category || "Sin categoría"}
                </Badge>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <h3 className="text-lg font-semibold mb-3">Pregunta:</h3>
                <p className="text-xl leading-relaxed">{card.question}</p>
              </div>
              {showAnswer && (
                <div className="border-t py-6">
                  <h3 className="text-lg font-semibold mb-3">Respuesta:</h3>
                  <p className="leading-relaxed font-light">{card.answer}</p>
                </div>
              )}
              {card.hint && (
                <Card className="rounded-lg p-4 bg-background gap-2">
                  <h4 className="text-sm font-semibold">💡 Pista:</h4>
                  <p>{card.hint}</p>
                </Card>
              )}
              {card.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {card.tags.map((tag, index) => (
                    <Badge key={index}>{tag}</Badge>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto max-w-xl my-3">
          <Card className="bg-white relative">
            <Button variant="noShadow" aria-label="Eliminar tarjeta" className="size-7 absolute right-0 mx-6 mt-1 active:scale-90 transition-transform" onClick={handleDelete}>
              <Trash/>
            </Button>
            <CardContent>
              <div className="text-center">
                <div className="px-3 py-1 rounded-full">
                  <Badge className="text-sm font-medium">
                    {card.category || "Sin categoría"}
                  </Badge>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <DrawerTitle className="text-lg font-semibold mb-2">
                    Pregunta:
                  </DrawerTitle>
                  <DrawerDescription className="text-xl leading-relaxed">
                    {card.question}
                  </DrawerDescription>
                </div>

                <div className="border-t py-6">
                  <h3 className="text-lg font-semibold mb-2">Respuesta:</h3>
                  <p className="leading-relaxed font-light">{card.answer}</p>
                </div>

                {card.hint && (
                  <Card className="rounded-lg p-4 bg-background gap-2">
                    <h4 className="text-sm font-semibold">💡 Pista:</h4>
                    <p>{card.hint}</p>
                  </Card>
                )}
                {card.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {card.tags.map((tag, index) => (
                      <Badge key={index}>{tag}</Badge>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
