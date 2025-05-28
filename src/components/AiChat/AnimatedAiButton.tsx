
import React, { useState, useEffect } from "react";
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AnimatedAiButtonProps {
  onClick: () => void;
}

const AnimatedAiButton: React.FC<AnimatedAiButtonProps> = ({ onClick }) => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  const messages = [
    "",
    "OLÁ, JOHN! 👋",
    "COMO POSSO AJUDÁ-LO?",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Button
      onClick={onClick}
      className="fixed right-6 bottom-6 w-24 h-24 p-0 bg-transparent border-none shadow-none hover:bg-transparent group"
      aria-label="Chat com IA"
    >
      <div className="relative w-full h-full">
        {/* Anel animado */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 animate-spin-slow opacity-80">
          <div className="absolute inset-1 rounded-full bg-[#1a1b3d]"></div>
        </div>
        
        {/* Conteúdo interno */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white text-xs font-bold leading-tight">
            {messages[currentMessageIndex] ? (
              <span className="block animate-fade-in">
                {messages[currentMessageIndex]}
              </span>
            ) : (
              <Bot className="h-8 w-8 text-white animate-pulse" />
            )}
          </div>
        </div>
        
        {/* Efeito de hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </div>
    </Button>
  );
};

export default AnimatedAiButton;
