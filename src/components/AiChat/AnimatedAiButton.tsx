
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";

interface AnimatedAiButtonProps {
  onClick: () => void;
}

const AnimatedAiButton: React.FC<AnimatedAiButtonProps> = ({ onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreeting(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const userName = user?.user_metadata?.name || "USUÁRIO";

  return (
    <Button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-20 h-20 p-0 bg-transparent border-none shadow-none hover:bg-transparent group"
      aria-label="Chat com IA"
    >
      <div className="relative w-full h-full">
        {/* Container do anel animado */}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="absolute inset-0 animate-organic-deform">
            {/* Anel com efeito orgânico */}
            <div className="absolute inset-0">
              {/* Blob 1 */}
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-purple-500 border-r-cyan-400 animate-pulse-organic blur-sm"></div>
              {/* Blob 2 */}
              <div className="absolute -inset-1 rounded-full border-2 border-transparent border-l-purple-500 border-b-cyan-400 animate-pulse-organic-delayed blur-sm"></div>
              {/* Blob 3 */}
              <div className="absolute inset-1 rounded-full border-2 border-transparent border-t-cyan-400 border-l-purple-500 animate-pulse-organic-delayed-2 blur-sm"></div>
            </div>
          </div>
        </div>
        
        {/* Conteúdo interno */}
        <div className="absolute inset-2 rounded-full bg-[#0f0a29] flex items-center justify-center shadow-inner">
          <div className="text-center text-white text-xs font-bold leading-tight">
            {showGreeting && (
              <>
                {!isHovered ? (
                  <div className="transition-opacity duration-300 opacity-100">
                    <div>OLÁ,</div>
                    <div>{userName}!</div>
                    <span className="inline-block animate-wave">👋</span>
                  </div>
                ) : (
                  <div className="transition-opacity duration-300 opacity-100">
                    <div>COMO POSSO</div>
                    <div>AJUDAR</div>
                    <div>VOCÊ?</div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        
        {/* Efeito de hover */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
      </div>
    </Button>
  );
};

export default AnimatedAiButton;
