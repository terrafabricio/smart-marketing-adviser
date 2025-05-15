
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
        className="fixed right-4 bottom-4 rounded-full w-12 h-12 p-0 animate-glow bg-advisor-purple hover:bg-advisor-vivid-purple"
        aria-label="Chat com IA"
      >
        <Bot className="h-6 w-6" />
      </Button>
      <AiChatModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default AiChatButton;
