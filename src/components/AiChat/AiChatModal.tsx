
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send } from "lucide-react";

interface AiChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AiChatModal: React.FC<AiChatModalProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Olá! Sou o assistente virtual do AdVisor-AI. Como posso ajudar com suas campanhas de marketing hoje?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate AI response with a delay
    setTimeout(() => {
      const aiResponses = [
        "Baseado nos seus dados recentes, recomendo aumentar o orçamento para as campanhas que têm mostrado CTR acima de 3%.",
        "Analisei os resultados da semana passada e identifiquei que suas campanhas no WhatsApp estão tendo maior engajamento do que no Google Ads.",
        "Você sabia que pode melhorar o desempenho do Google Ads aumentando o score de qualidade? Posso ajudar com isso.",
        "Os dados de conversão indicam uma oportunidade de otimização nas campanhas do Gmail. Deseja ver recomendações específicas?",
        "Observei que suas campanhas têm melhor desempenho nas terças e quintas. Recomendo concentrar o orçamento nesses dias.",
      ];

      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];

      const aiMessage: Message = {
        id: Date.now().toString(),
        text: randomResponse,
        isUser: false,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[500px] h-[600px] flex flex-col p-0">
        <DialogHeader className="p-4 border-b">
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-advisor-purple" />
            <DialogTitle>Assistente AdVisor-AI</DialogTitle>
          </div>
          <DialogDescription>
            Pergunte sobre suas campanhas ou solicite recomendações
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex-1 overflow-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.isUser
                    ? "bg-advisor-purple text-white"
                    : "bg-muted text-foreground"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-lg p-3 bg-muted text-foreground animate-pulse">
                <div className="flex space-x-2">
                  <div className="h-2 w-2 rounded-full bg-advisor-purple"></div>
                  <div className="h-2 w-2 rounded-full bg-advisor-purple"></div>
                  <div className="h-2 w-2 rounded-full bg-advisor-purple"></div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <DialogFooter className="p-4 border-t flex-row gap-2">
          <Input
            placeholder="Digite sua mensagem..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1"
            autoFocus
          />
          <Button
            type="submit"
            onClick={handleSendMessage}
            className="bg-advisor-purple hover:bg-advisor-vivid-purple"
            size="icon"
          >
            <Send className="h-4 w-4" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AiChatModal;
