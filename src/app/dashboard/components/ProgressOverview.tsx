import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3 } from "@/lib/icons";

export const ProgressOverview: React.FC = () => (
  <Card className="bg-white gap-2">
    <CardHeader>
      <CardTitle className="flex items-center">
        <BarChart3 className="w-5 h-5 mr-2" />
        Tu Progreso Hoy
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-main mb-1 [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]">
            24
          </div>
          <div className="text-xs min-[400px]:text-sm">Tarjetas estudiadas</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-main mb-1 [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]">
            2
          </div>
          <div className="text-xs min-[400px]:text-sm">Simulacros completados</div>
        </div>
        <div className="text-center">
          <div className="text-2xl sm:text-3xl font-bold text-main mb-1 [text-shadow:_-1px_-1px_0_#000,_1px_-1px_0_#000,_-1px_1px_0_#000,_1px_1px_0_#000]">
            45
          </div>
          <div className="text-xs min-[400px]:text-sm">Minutos de estudio</div>
        </div>
      </div>
    </CardContent>
  </Card>
);
