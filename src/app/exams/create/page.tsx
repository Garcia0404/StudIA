"use client";

import { useState } from "react";
import { ExamHeader } from "./components/ExamHeader";
import { SetupView } from "./components/SetupView";
import { ExamView } from "./components/ExamView";
import { useExamConfig } from "../hooks";

export default function SimulatorPage() {
  const [showSetup, setShowSetup] = useState(true);
  const { config, updateConfig, resetConfig } = useExamConfig({ initialDuration: 10 });

  const startSimulator = () => setShowSetup(false);

  const handleFinish = () => {
    setShowSetup(true);
    resetConfig();
  };

  return (
    <div className="bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] min-h-screen">
      <ExamHeader />
      <div className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {showSetup ? (
          <SetupView
            simulatorConfig={config}
            onConfigChange={updateConfig}
            onStartSimulator={startSimulator}
          />
        ) : (
          <ExamView
            selectedCategory={config.category}
            onFinish={handleFinish}
            duration={config.duration}
            mode={config.mode}
          />
        )}
      </div>
    </div>
  );
}
