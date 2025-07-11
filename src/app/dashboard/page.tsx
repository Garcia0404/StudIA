"use client";

import { useState } from "react";
import { DashboardHeader } from "./components/DashboardHeader";
import { WelcomeSection } from "./components/WelcomeSection";
import { QuickActions } from "./components/QuickActions";
import { ProgressOverview } from "./components/ProgressOverview";
import { Activity, RecentActivity } from "./components/RecentActivity";
import { GoalsCard } from "./components/GoalsCard";
import { StudyStreakCard } from "./components/StudyStreakCard";
import { QuickStatsCard } from "./components/QuickStatsCard";
import { GettingStarted } from "./components/GettingStarted";

export default function DashboardPage() {
  const [user] = useState({
    name: "Julio García",
    level: 12,
    streak: 7,
    totalPoints: 2450,
    studyTime: 45, // minutos hoy
  });

  const [recentActivity] = useState<Activity[]>([
    { type: "flashcard", subject: "Matemáticas", score: 85, time: "2 horas" },
    { type: "exam", subject: "Historia", score: 92, time: "4 horas" },
    { type: "note", subject: "Biología", score: null, time: "6 horas" },
    { type: "flashcard", subject: "Inglés", score: 78, time: "1 día" },
  ]);

  const [goals] = useState([
    {
      title: "Estudiar 30 tarjetas diarias",
      progress: 80,
      target: 30,
      current: 24,
    },
    {
      title: "Completar 3 simulacros semanales",
      progress: 66,
      target: 3,
      current: 2,
    },
    {
      title: "Mantener racha de 10 días",
      progress: 70,
      target: 10,
      current: 7,
    },
  ]);
  const gettingStartedCompleted = false;
  
  return (
    <div className="bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] min-h-screen">
      {/* Header */}
      <DashboardHeader user={user} />
      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <WelcomeSection user={user} />
        {/* Quick Actions */}
        <QuickActions />
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Progress Overview */}
            <ProgressOverview />
            {gettingStartedCompleted ? (
              <RecentActivity recentActivity={recentActivity} />
            ) : (
              <GettingStarted />
            )}
          </div>
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Goals */}
            <GoalsCard goals={goals} />
            {/* Study Streak */}
            <StudyStreakCard streak={user.streak} />
            {/* Quick Stats */}
            <QuickStatsCard />
          </div>
        </div>
      </div>
    </div>
  );
}
