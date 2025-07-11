import { Card, CardContent } from "@/components/ui/card";

const features = [
  "Explicar conceptos complejos de forma simple",
  "Generar tarjetas de estudio automáticamente",
  "Crear resúmenes de textos largos",
  "Generar preguntas de práctica",
  "Ayudar con técnicas de estudio",
];

const tips = [
  "Sé específico en tus preguntas",
  "Puedes subir documentos para analizar",
  "Pide ejemplos para mejor comprensión",
  "Solicita diferentes niveles de dificultad",
  'Usa comandos como "explica", "resume", "crea"',
];

export const FeaturesInfo: React.FC = () => (
  <div className="grid md:grid-cols-2 gap-6 mt-8">
    <Card className="bg-white">
      <CardContent className="p-6">
        <h3 className="font-semibold mb-3">¿Qué puedo hacer?</h3>
        <ul className="space-y-2 text-sm list-none">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-main rounded-full"></div>
              <div>{feature}</div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>

    <Card className="bg-white">
      <CardContent className="p-6">
        <h3 className="font-semibold mb-3">Consejos de uso</h3>
        <ul className="space-y-2 text-sm list-none">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-main rounded-full"></div>
              <div>{tip}</div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </div>
);
