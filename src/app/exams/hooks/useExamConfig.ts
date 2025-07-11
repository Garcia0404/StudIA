import { useState, useEffect } from "react";
import { useGlobalStore } from "@/store/globalStore";

interface SimulatorConfig {
  duration: number;
  category: string | null;
  mode: "multiple-choice";
}

interface UseExamConfigProps {
  initialDuration?: number;
}

export const useExamConfig = ({ initialDuration = 10 }: UseExamConfigProps) => {
  const { categories } = useGlobalStore();
  const [config, setConfig] = useState<SimulatorConfig>({
    duration: initialDuration,
    category: categories.length > 0 ? categories[0] : null,
    mode: "multiple-choice",
  });

  // Actualizar categoría por defecto cuando se cargan las categorías
  useEffect(() => {
    if (categories.length > 0 && !config.category) {
      setConfig(prev => ({ ...prev, category: categories[0] }));
    }
  }, [categories, config.category]);

  const updateConfig = (updates: Partial<SimulatorConfig>) => {
    setConfig(prev => ({ ...prev, ...updates }));
  };

  const resetConfig = () => {
    setConfig({
      duration: initialDuration,
      category: categories.length > 0 ? categories[0] : null,
      mode: "multiple-choice",
    });
  };

  return {
    config,
    updateConfig,
    resetConfig,
  };
}; 