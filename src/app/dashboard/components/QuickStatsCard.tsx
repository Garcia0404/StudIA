import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, TrendingUp, Star } from "@/lib/icons";
import React from "react";

export const QuickStatsCard: React.FC = () => (
  <Card className="bg-white">
    <CardHeader>
      <CardTitle>Estadísticas</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Calendar className="w-4 h-4 text-main" />
          <span className="text-sm">Esta semana</span>
        </div>
        <span className="font-medium">5h 30m</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-4 h-4 text-main" />
          <span className="text-sm">Mejora promedio</span>
        </div>
        <span className="text-main font-bold">+12%</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Star className="w-4 h-4 text-main" />
          <span className="text-sm">Puntuación media</span>
        </div>
        <span className="font-medium">85%</span>
      </div>
    </CardContent>
  </Card>
); 