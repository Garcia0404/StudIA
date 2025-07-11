"use client";

import { useState } from "react";
import { CreateCardHeader } from "./components/CreateCardHeader";
import { CreateCardForm } from "./components/CreateCardForm";
// import { MultimediaSection } from "./components/MultimediaSection";
import { ConfigurationSection } from "./components/ConfigurationSection";
import { AISuggestions } from "./components/AISuggestions";
import { CardPreview } from "./components/CardPreview";
import { Toaster } from "@/components/ui/sonner";
import { Card, useGlobalStore } from "@/store/globalStore";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function CreateCardPage() {
  const [cardData, setCardData] = useState<Card>({
    id: "",
    question: "",
    answer: "",
    options: [],
    hint: "",
    category: "Sin categoría",
    tags: [] as string[],
    media: {
      image: "",
      audio: "",
    },
  });
  // Tag
  const [newTag, setNewTag] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [errors, setErrors] = useState<{
    question?: boolean;
    answer?: boolean;
  }>({});
  const { addCard } = useGlobalStore();

  const addIdToCard = () => {
    setCardData((prev) => ({ ...prev, id: crypto.randomUUID() }));
  };
  const resetCard = () => {
    setCardData(() => ({
      id: "",
      question: "",
      answer: "",
      options: [],
      hint: "",
      category: "Sin categoría",
      tags: [] as string[],
      media: {
        image: "",
        audio: "",
      },
    }));
  };
  const handleAddTag = () => {
    if (newTag.trim() && !cardData.tags.includes(newTag.trim())) {
      setCardData({
        ...cardData,
        tags: [...cardData.tags, newTag.trim()],
      });
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setCardData({
      ...cardData,
      tags: cardData.tags.filter((tag) => tag !== tagToRemove),
    });
  };

  const generateOptions = (question: string, answer: string): string[] => {
    // Dummy: Genera 3 distractores simples (puedes reemplazar por llamada a IA)
    const distractors = [
      `No es ${answer}`,
      `${answer} (incorrecto)`,
      `Otra respuesta para: ${question}`,
    ];
    // Mezclar opciones
    const allOptions = [answer, ...distractors].sort(() => Math.random() - 0.5);
    return allOptions;
  };

  const handleSave = () => {
    const newErrors: { question?: boolean; answer?: boolean } = {};
    // validar los datos
    if (!cardData.question.trim()) newErrors.question = true;
    if (!cardData.answer.trim()) newErrors.answer = true;
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return false;
    // Creando el id de la tarjeta
    addIdToCard();
    // Generar opciones automáticamente
    const options = generateOptions(cardData.question, cardData.answer);
    addCard({ ...cardData, options });
    resetCard();
    return true;
    // Mostrar mensaje de éxito
  };

  const generateWithAI = () => {
    // Simulamos generación con IA
    if (cardData.question) {
      setCardData({
        ...cardData,
        answer:
          "Esta es una respuesta generada automáticamente por IA basada en tu pregunta. La IA analiza el contexto y proporciona una respuesta completa y educativa.",
        hint: "Recuerda los conceptos clave relacionados con este tema.",
      });
    }
  };

  const handleCardDataChange = (data: Partial<typeof cardData>) => {
    setCardData({ ...cardData, ...data });
  };

  const handleConfigChange = (
    data: Partial<{ category: string; difficulty: string; tags: string[] }>
  ) => {
    setCardData({ ...cardData, ...data });
  };

  return (
    <div className="bg-background bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px] min-h-screen">
      <CreateCardHeader
        showPreview={showPreview}
        onTogglePreview={() => setShowPreview(!showPreview)}
        onSave={handleSave}
      />
      <Toaster />
      <div className="container mx-auto">
        <Breadcrumb className="px-4 pt-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/flashcards">Tarjetas</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Crear</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="container mx-auto px-4 pt-4 pb-8">
        {!showPreview ? (
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-2">
                Crear nueva tarjeta de estudio
              </h1>
              <p>Crea tarjetas interactivas para optimizar tu aprendizaje</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Formulario principal */}
              <div className="space-y-6">
                <CreateCardForm
                  cardData={{
                    question: cardData.question,
                    answer: cardData.answer,
                    hint: cardData.hint,
                  }}
                  onCardDataChange={handleCardDataChange}
                  onGenerateWithAI={generateWithAI}
                  errors={errors}
                />
                {/* <MultimediaSection /> */}
              </div>

              {/* Configuración */}
              <div className="space-y-6">
                <ConfigurationSection
                  configData={{
                    category: cardData.category,
                    tags: cardData.tags,
                  }}
                  newTag={newTag}
                  onConfigChange={handleConfigChange}
                  onNewTagChange={setNewTag}
                  onAddTag={handleAddTag}
                  onRemoveTag={handleRemoveTag}
                />
                <AISuggestions />
              </div>
            </div>
          </div>
        ) : (
          <CardPreview cardData={cardData} />
        )}
      </div>
    </div>
  );
}
