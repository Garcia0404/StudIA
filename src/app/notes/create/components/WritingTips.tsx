import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const tips = [
  "💡 Usa títulos para estructurar tu contenido",
  "📝 Incluye ejemplos prácticos",
  "🔗 Conecta conceptos relacionados",
  "📚 Añade referencias y fuentes",
];

export const WritingTips: React.FC = () => (
  <Card className="bg-white">
    <CardHeader>
      <CardTitle className="text-main">Consejos de escritura</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-3">
        {tips.map((tip, index) => (
          <p key={index} className="text-sm">
            {tip}
          </p>
        ))}
      </div>
    </CardContent>
  </Card>
);
