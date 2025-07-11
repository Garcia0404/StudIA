import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target } from "@/lib/icons";
import React from "react";

const tips = [
  "Encuentra un lugar tranquilo sin distracciones",
  "Lee cada pregunta cuidadosamente antes de responder",
  "Gestiona tu tiempo: no te quedes demasiado en una pregunta",
  "Revisa tus respuestas si te sobra tiempo",
];

export const TipsSection: React.FC = () => (
  <Card className="bg-white">
    <CardHeader>
      <CardTitle className="flex items-center space-x-2 text-main">
        <Target className="h-5 w-5" />
        <span>Consejos para el simulacro</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-3">
        {tips.map((tip, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-main rounded-full mt-2"></div>
            <p className="text-sm">{tip}</p>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
); 