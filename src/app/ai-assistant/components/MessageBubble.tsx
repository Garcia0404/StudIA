import React from "react";

interface Message {
  id: number;
  type: "user" | "assistant";
  content: string;
  timestamp: Date;
}

interface MessageBubbleProps {
  message: Message;
}

export const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => (
  <div
    className={`flex ${
      message.type === "user" ? "justify-end text-pretty" : "text-pretty"
    }`}
  >
    <div
      className={`px-4 py-3 rounded-xl ${
        message.type === "user"
          ? "bg-main max-w-xs lg:max-w-md border-2"
          : ""
      }`}
    >
      <p className="text-sm">{message.content}</p>
    </div>
  </div>
);
