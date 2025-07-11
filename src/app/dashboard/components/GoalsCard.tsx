import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Plus } from "@/lib/icons";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import React from "react";

interface Goal {
  title: string;
  progress: number;
  target: number;
  current: number;
}

interface GoalsCardProps {
  goals: Goal[];
}

export const GoalsCard: React.FC<GoalsCardProps> = ({ goals }) => (
  <Card className="bg-white">
    <CardHeader>
      <CardTitle className="flex items-center">
        <Target className="w-5 h-5 mr-2" />
        Objetivos
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      {goals.map((goal, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>{goal.title}</span>
            <span>
              {goal.current}/{goal.target}
            </span>
          </div>
          <Progress
            aria-label={`Progreso de objectivo ${index}`}
            value={goal.progress}
            className="h-3"
          />
        </div>
      ))}
      <Button className="w-full mt-4">
        <Plus className="w-4 h-4 mr-2" />
        Nuevo Objetivo
      </Button>
    </CardContent>
  </Card>
);
