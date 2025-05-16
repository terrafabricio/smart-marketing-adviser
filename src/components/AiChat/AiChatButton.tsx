
import React, { useState } from "react";
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import AiChatModal from "./AiChatModal";

const AiChatButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed right-6 bottom-6 rounded-full w-16 h-16 p-0 animate-glow bg-advisor-purple hover:bg-advisor-vivid-purple shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        aria-label="Chat com IA"
      >
        <Bot className="h-8 w-8 text-white" />
        <span className="absolute -top-1 -right-1 bg-advisor-bright-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          AI
        </span>
      </Button>
      <AiChatModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default AiChatButton;
