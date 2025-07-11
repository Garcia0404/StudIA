import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

interface CardPreviewData {
  question: string;
  answer: string;
  hint: string;
  category: string;
  tags: string[];
}

interface CardPreviewProps {
  cardData: CardPreviewData;
}

export const CardPreview: React.FC<CardPreviewProps> = ({ cardData }) => (
  <div className="max-w-2xl mx-auto">
    <div className="mb-8">
      <h1 className="text-3xl font-bold mb-2">Vista previa de la tarjeta</h1>
      <p>Así se verá tu tarjeta durante el estudio</p>
    </div>

    <Card className="bg-white">
      <CardContent className="pt-4">
        <div className="text-center mb-4">
          <div className="px-3 py-1 rounded-full">
            <Badge className="text-sm font-medium">
              {cardData.category || "Sin categoría"}
            </Badge>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Pregunta:</h3>
            <p className="text-xl leading-relaxed">
              {cardData.question || "Tu pregunta aparecerá aquí..."}
            </p>
          </div>

          <div className="border-t py-6">
            <h3 className="text-lg font-semibold mb-3">Respuesta:</h3>
            <p className="leading-relaxed font-light">
              {cardData.answer || "Tu respuesta aparecerá aquí..."}
            </p>
          </div>

          {cardData.hint && (
            <Card className="rounded-lg p-4 bg-background gap-2">
              <h4 className="text-sm font-semibold">💡 Pista:</h4>
              <p>{cardData.hint}</p>
            </Card>
          )}

          {cardData.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-4 border-t">
              {cardData.tags.map((tag, index) => (
                <Badge key={index}>{tag}</Badge>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  </div>
);
