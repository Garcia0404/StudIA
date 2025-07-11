import React from "react";
import { MaterialSection } from "./MaterialSection";
import { HistorySection } from "./HistorySection";
import { ConfigurationSection } from "./ConfigurationSection";
import { TipsSection } from "./TipsSection";
import { useGlobalStore } from "@/store/globalStore";

interface SimulatorConfig {
  duration: number;
  category: string | null;
  mode: "multiple-choice";
}

interface SetupViewProps {
  simulatorConfig: SimulatorConfig;
  onConfigChange: (config: Partial<SimulatorConfig>) => void;
  onStartSimulator: () => void;
}

export const SetupView: React.FC<SetupViewProps> = ({
  simulatorConfig,
  onConfigChange,
  onStartSimulator,
}) => {
  const { categories } = useGlobalStore();
  
  const handleSelectCategory = (category: string | null) => {
    onConfigChange({ category });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          Configurar simulacro
        </h1>
        <p >
          Personaliza tu simulacro para una experiencia de estudio óptima
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <MaterialSection 
            categories={categories}
            selectedCategory={simulatorConfig.category}
            onSelectCategory={handleSelectCategory}
          />
          <HistorySection />
        </div>

        <div className="space-y-6">
          <ConfigurationSection
            simulatorConfig={simulatorConfig}
            onConfigChange={onConfigChange}
            onStartSimulator={onStartSimulator}
          />
          <TipsSection />
        </div>
      </div>
    </div>
  );
}; 