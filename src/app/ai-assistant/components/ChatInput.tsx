import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Upload, ImageIcon, Mic } from "@/lib/icons";
import React from "react";

interface ChatInputProps {
  message: string;
  onMessageChange: (message: string) => void;
  onSendMessage: () => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  message,
  onMessageChange,
  onSendMessage,
}) => (
  <div className="space-y-4">
    <div className="flex space-x-2">
      <Button size="sm" variant="neutral">
        <Upload className="w-4 h-4" />
      </Button>
      <Button variant="neutral" size="sm">
        <ImageIcon className="w-4 h-4" />
      </Button>
      <Button variant="neutral" size="sm">
        <Mic className="w-4 h-4" />
      </Button>
    </div>

    <div className="flex space-x-2">
      <Input
        placeholder="Escribe tu pregunta o solicitud..."
        value={message}
        onChange={(e) => onMessageChange(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && onSendMessage()}
        className="flex-1 rounded-2xl p-6"
      />
      <Button
        onClick={onSendMessage}
        disabled={!message.trim()}
        aria-label="enviar mensaje"
      >
        <Send className="w-4 h-4" />
      </Button>
    </div>
  </div>
);
