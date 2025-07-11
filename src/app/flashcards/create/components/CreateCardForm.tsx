import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sparkles } from "@/lib/icons";
import { AlertCircleIcon } from "@/lib/icons";
import { Alert, AlertTitle } from "@/components/ui/alert";

interface CardData {
  question: string;
  answer: string;
  hint: string;
}

interface CreateCardFormProps {
  cardData: CardData;
  onCardDataChange: (data: Partial<CardData>) => void;
  onGenerateWithAI: () => void;
  errors?: { question?: boolean; answer?: boolean };
}

export const CreateCardForm: React.FC<CreateCardFormProps> = ({
  cardData,
  onCardDataChange,
  onGenerateWithAI,
  errors = {},
}) => (
  <Card className="bg-white">
    <CardHeader>
      <CardTitle>Contenido de la tarjeta</CardTitle>
      <CardDescription>
        Define la pregunta y respuesta de tu tarjeta
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="flex flex-col gap-3">
        <Label htmlFor="question">
          Pregunta <span className="text-main">*</span>
        </Label>
        <Textarea
          id="question"
          placeholder="¿Cuál es la capital de Francia?"
          value={cardData.question}
          onChange={(e) => onCardDataChange({ question: e.target.value })}
          className="min-h-[100px] field-sizing-content resize-none"
        />
        {errors.question && (
          <Alert className="border-none w-max px-2 py-1">
            <AlertCircleIcon />
            <AlertTitle>Este campo es obligatorio</AlertTitle>
          </Alert>
        )}
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-end justify-between gap-3">
          <Label htmlFor="answer">
            Respuesta <span className="text-main">*</span>
          </Label>
          <Button onClick={onGenerateWithAI}>
            <Sparkles className="h-4 w-4" />
            <span className="max-sm:hidden">Generar con IA</span>
          </Button>
        </div>
        <Textarea
          id="answer"
          placeholder="París es la capital de Francia..."
          value={cardData.answer}
          onChange={(e) => onCardDataChange({ answer: e.target.value })}
          className="min-h-[120px] field-sizing-content resize-none"
        />
        {errors.answer && (
          <Alert className="w-max px-2 py-1">
            <AlertCircleIcon />
            <AlertTitle>Este campo es obligatorio</AlertTitle>
          </Alert>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex justify-between">
          <Label htmlFor="hint">
            Pista{" "}
            <span className="text-sm font-light">
              (opcional)
            </span>
          </Label>
        </div>
        <Input
          id="hint"
          placeholder="Una pista para ayudar a recordar..."
          value={cardData.hint}
          onChange={(e) => onCardDataChange({ hint: e.target.value })}
        />
      </div>
    </CardContent>
  </Card>
);
