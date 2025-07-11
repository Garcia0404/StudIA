import { Flame, Trophy } from "@/lib/icons";
import React from "react";

interface WelcomeSectionProps {
  user: {
    name: string;
    level: number;
    streak: number;
    totalPoints: number;
    studyTime: number;
  };
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ user }) => (
  <div className="mb-8">
    <div className="flex max-[500px]:flex-col gap-4 items-center justify-between mb-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">
          ¡Hola, <span>{user.name}</span>! 👋
        </h1>
        <p className="text-pretty">
          Continuemos con tu aprendizaje. Tienes {user.studyTime} minutos de
          estudio hoy.
        </p>
      </div>
      <div className="flex items-center gap-4 max-[500px]:me-auto">
        <div className="text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-main rounded-full mb-2 border-2">
            <Flame className="w-6 h-6" />
          </div>
          <div className="text-sm font-medium whitespace-nowrap">
            {user.streak} días
          </div>
          <div className="text-xs">Racha</div>
        </div>
        <div className="text-center">
          <div className="flex items-center justify-center w-12 h-12 bg-main rounded-full mb-2 border-2">
            <Trophy className="w-6 h-6" />
          </div>
          <div className="text-sm font-medium whitespace-nowrap">
            Nivel {user.level}
          </div>
          <div className="text-xs">{user.totalPoints} pts</div>
        </div>
      </div>
    </div>
  </div>
);
