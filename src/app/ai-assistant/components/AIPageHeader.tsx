import { Brain } from "@/lib/icons";
import React from "react";

export const AIPageHeader: React.FC = () => (
  <div className="text-center mb-8">
    <div className="w-16 h-16 bg-main border-2 rounded-full flex items-center justify-center mx-auto mb-4">
      <Brain className="w-8 h-8" />
    </div>
    <h1 className="text-3xl font-bold mb-2">
      Asistente de IA
    </h1>
    <p>
      Tu compañero inteligente para el aprendizaje personalizado
    </p>
  </div>
); 