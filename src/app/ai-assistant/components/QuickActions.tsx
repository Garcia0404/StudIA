import { BookOpen, FileText, Zap, Lightbulb } from "@/lib/icons";
import React from "react";
import { QuickActionCard } from "./QuickActionCard";

const quickActions = [
  {
    icon: BookOpen,
    title: "Generar Tarjetas",
    gradientFrom: "blue-950",
    gradientTo: "indigo-950",
    iconColor: "text-blue-500",
  },
  {
    icon: FileText,
    title: "Crear Resumen",
    gradientFrom: "green-950",
    gradientTo: "emerald-950",
    iconColor: "text-green-500",
  },
  {
    icon: Zap,
    title: "Generar Quiz",
    gradientFrom: "purple-950",
    gradientTo: "pink-950",
    iconColor: "text-purple-500",
  },
  {
    icon: Lightbulb,
    title: "Explicar Concepto",
    gradientFrom: "orange-950",
    gradientTo: "red-950",
    iconColor: "text-orange-500",
  },
];

export const QuickActions: React.FC = () => (
  <div className="grid min-[400px]:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
    {quickActions.map((action, index) => (
      <QuickActionCard
        key={index}
        icon={action.icon}
        title={action.title}
        gradientFrom={action.gradientFrom}
        gradientTo={action.gradientTo}
        iconColor={action.iconColor}
      />
    ))}
  </div>
); 