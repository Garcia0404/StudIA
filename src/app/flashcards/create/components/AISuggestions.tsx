import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "@/lib/icons";
import React from "react";

export const AISuggestions: React.FC = () => (
  <Card className="bg-white">
    <CardHeader>
      <CardTitle className="flex items-center space-x-2">
        <Sparkles className="h-5 w-5 text-main" />
        <span>Sugerencias IA</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-3">
        <p className="text-sm">
          💡 Considera añadir ejemplos prácticos a tu respuesta
        </p>
        <p className="text-sm">
          🎯 Una buena pista podría ser mencionar el país
        </p>
        <p className="text-sm">
          📚 Etiquetas sugeridas: europa, capitales, geografía
        </p>
      </div>
    </CardContent>
  </Card>
);
