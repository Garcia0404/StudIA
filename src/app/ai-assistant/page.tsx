"use client";

import { useState } from "react";
import { AIHeader } from "./components/AIHeader";
import { AIPageHeader } from "./components/AIPageHeader";
import { QuickActions } from "./components/QuickActions";
import { ChatInterface } from "./components/ChatInterface";
import { FeaturesInfo } from "./components/FeaturesInfo";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

interface Message {
  id: number;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function AIAssistantPage() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: "assistant",
      content:
        "¡Hola! Soy tu asistente de IA para estudios. Puedo ayudarte a explicar conceptos, generar tarjetas de estudio, crear resúmenes y mucho más. ¿En qué puedo ayudarte hoy?",
      timestamp: new Date(),
    },
  ]);

  const [suggestions] = useState([
    "Explícame la fotosíntesis de manera simple",
    "Crea 5 tarjetas sobre la Segunda Guerra Mundial",
    "Resume este texto en puntos clave",
    "Genera preguntas de práctica sobre álgebra",
    "¿Cuáles son las técnicas de estudio más efectivas?",
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      type: "user",
      content: message,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setMessage("");

    // Simular respuesta de IA
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        type: "assistant",
        content:
          "Esta es una respuesta simulada de la IA. En una implementación real, aquí se procesaría tu consulta y se generaría una respuesta inteligente basada en tu pregunta.",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 1000);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setMessage(suggestion);
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(to_right,#80808033_1px,transparent_1px),linear-gradient(to_bottom,#80808033_1px,transparent_1px)] bg-[size:70px_70px]">
      <AIHeader />
      <div className="container mx-auto">
        <Breadcrumb className="px-4 pt-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/dashboard">Inicio</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/ai-assistant">Asistente IA</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="container mx-auto px-4 pt-4 pb-8 max-w-4xl">
        <AIPageHeader />
        <QuickActions />
        <ChatInterface
          messages={messages}
          suggestions={suggestions}
          message={message}
          onMessageChange={setMessage}
          onSendMessage={handleSendMessage}
          onSuggestionClick={handleSuggestionClick}
        />
        <FeaturesInfo />
      </div>
    </div>
  );
}
