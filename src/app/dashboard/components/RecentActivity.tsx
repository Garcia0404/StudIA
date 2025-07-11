import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, BookOpen, Zap, FileText } from "@/lib/icons";
import { Badge } from "@/components/ui/badge";
import React from "react";

export interface Activity {
  type: "flashcard" | "exam" | "note";
  subject: string;
  score: number | null;
  time: string;
}

interface RecentActivityProps {
  recentActivity: Activity[];
}

export const RecentActivity: React.FC<RecentActivityProps> = ({
  recentActivity,
}) => (
  <Card className="shadow-lg bg-neutral-900/80 backdrop-blur-xl border border-neutral-800">
    <CardHeader className="flex flex-row items-center justify-between">
      <CardTitle className="text-slate-100">Actividad Reciente</CardTitle>
      <Button className="text-slate-300 hover:bg-neutral-800">
        Ver todo
        <ChevronRight className="w-4 h-4 ml-1" />
      </Button>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {recentActivity.map((activity, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-lg bg-neutral-800/50 border border-neutral-700"
          >
            <div className="flex items-center space-x-3">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  activity.type === "flashcard"
                    ? "bg-blue-900/30"
                    : activity.type === "exam"
                    ? "bg-green-900/30"
                    : "bg-purple-900/30"
                }`}
              >
                {activity.type === "flashcard" && (
                  <BookOpen className="w-5 h-5 text-blue-600" />
                )}
                {activity.type === "exam" && (
                  <Zap className="w-5 h-5 text-green-600" />
                )}
                {activity.type === "note" && (
                  <FileText className="w-5 h-5 text-purple-600" />
                )}
              </div>
              <div>
                <div className="font-medium text-slate-100">
                  {activity.subject}
                </div>
                <div className="text-sm text-slate-400">
                  Hace {activity.time}
                </div>
              </div>
            </div>
            <div className="text-right">
              {activity.score && (
                <Badge
                  variant={activity.score >= 80 ? "default" : "secondary"}
                  className="mb-1"
                >
                  {activity.score}%
                </Badge>
              )}
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);
