import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle } from "@/lib/icons";
import React from "react";
import { MessageBubble } from "./MessageBubble";
import { Suggestions } from "./Suggestions";
import { ChatInput } from "./ChatInput";

interface Message {
  id: number;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface ChatInterfaceProps {
  messages: Message[];
  suggestions: string[];
  message: string;
  onMessageChange: (message: string) => void;
  onSendMessage: () => void;
  onSuggestionClick: (suggestion: string) => void;
}

export const ChatInterface: React.FC<ChatInterfaceProps> = ({
  messages,
  suggestions,
  message,
  onMessageChange,
  onSendMessage,
  onSuggestionClick,
}) => (
  <Card className="bg-white">
    <CardHeader>
      <CardTitle className="flex items-center">
        <MessageCircle className="w-5 h-5 mr-2" />
        Conversación
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-6">
      {/* Messages */}
      <div className="space-y-4 max-h-96 overflow-y-scroll" style={{scrollbarWidth:"none"}}>
        {messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
      </div>

      {/* Suggestions */}
      {messages.length === 1 && (
        <Suggestions
          suggestions={suggestions}
          onSuggestionClick={onSuggestionClick}
        />
      )}

      {/* Input Area */}
      <ChatInput
        message={message}
        onMessageChange={onMessageChange}
        onSendMessage={onSendMessage}
      />
    </CardContent>
  </Card>
); 