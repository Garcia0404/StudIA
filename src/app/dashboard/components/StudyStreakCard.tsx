import { Card, CardContent } from "@/components/ui/card";
import { Flame } from "@/lib/icons";
import React from "react";

interface StudyStreakCardProps {
  streak: number;
}

export const StudyStreakCard: React.FC<StudyStreakCardProps> = ({ streak }) => (
  <Card className="bg-main">
    <CardContent className="p-3 text-center">
      <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border-2">
        <Flame className="w-8 h-8 fill-main" />
      </div>
      <div className="text-3xl font-extrabold">{streak}</div>
      <div className="text-2xl font-bold">días consecutivos</div>
      <div className="text-sm">¡Sigue así!</div>
    </CardContent>
  </Card>
); 