import { Plus, Zap, FileText, Brain } from "@/lib/icons";
import { QuickActionItem } from "./QuickActionItem";

export const QuickActions: React.FC = () => (
  <div className="flex flex-wrap max-[400px]:justify-between gap-2 min-[400px]:gap-4 mb-8">
    <QuickActionItem
      href="/flashcards/create"
      icon={<Plus className="w-6 h-6" />}
      color="blue"
      title="Crear Tarjetas"
      description="Nueva sesión"
    />
    <QuickActionItem
      href="/exams/create"
      icon={<Zap className="w-6 h-6" />}
      color="green"
      title="Simulacro"
      description="Practicar"
    />
    <QuickActionItem
      href="/notes/create"
      icon={<FileText className="w-6 h-6" />}
      color="purple"
      title="Notas"
      description="Escribir"
    />
    <QuickActionItem
      href="/ai-assistant"
      icon={<Brain className="w-6 h-6" />}
      color="orange"
      title="Asistente IA"
      description="Preguntar"
    />
  </div>
);
