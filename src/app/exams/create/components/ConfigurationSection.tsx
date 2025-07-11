import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Settings, Play } from "@/lib/icons";

interface SimulatorConfig {
  duration: number;
  category: string | null;
  mode: "multiple-choice";
}

interface ConfigurationSectionProps {
  simulatorConfig: SimulatorConfig;
  onConfigChange: (config: Partial<SimulatorConfig>) => void;
  onStartSimulator: () => void;
}

const durations = [10, 15, 30];

export const ConfigurationSection: React.FC<ConfigurationSectionProps> = ({
  simulatorConfig,
  onConfigChange,
  onStartSimulator,
}) => (
  <Card className="bg-white">
    <CardHeader>
      <CardTitle className="flex items-center space-x-2">
        <Settings className="h-5 w-5 text-main" />
        <span>Configuración del simulacro</span>
      </CardTitle>
      <CardDescription>Personaliza la duración del simulacro</CardDescription>
    </CardHeader>
    <CardContent className="space-y-6">
      <div>
        <Label className="mb-3 block">
          Duración del simulacro
        </Label>
        <div className="grid grid-cols-3 gap-3">
          {durations.map((duration) => (
            <Button
              key={duration}
              variant={
                simulatorConfig.duration === duration ? "default" : "neutral"
              }
              onClick={() => onConfigChange({ duration })}
              className="h-12 border"
            >
              {duration} min
            </Button>
          ))}
        </div>
      </div>

      <Button
        className="w-full h-12"
        onClick={onStartSimulator}
      >
        <Play className="h-4 w-4 mr-2" />
        Iniciar simulacro
      </Button>
    </CardContent>
  </Card>
);
