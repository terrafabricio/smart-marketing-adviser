
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

  const fullName = user?.user_metadata?.name || "USUÁRIO";
  const firstName = fullName.split(' ')[0];

  return (
    <Button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-40 h-32 p-0 bg-transparent border-none shadow-none hover:bg-transparent group"
      aria-label="Chat com IA"
    >
      <div className="relative w-full h-full">
        {/* Múltiplos anéis neon animados */}
        <div className="absolute inset-0 animate-spin-slow">
          <div className="absolute inset-0 animate-organic-deform">
            {/* Anel principal com glow intenso */}
            <div className="absolute inset-0">
              <div className="absolute inset-0 rounded-2xl border-4 border-transparent border-t-purple-400 border-r-cyan-300 animate-pulse-organic shadow-[0_0_30px_rgba(168,85,247,0.8)] blur-[2px]"></div>
              <div className="absolute -inset-1 rounded-2xl border-4 border-transparent border-l-purple-400 border-b-cyan-300 animate-pulse-organic-delayed shadow-[0_0_25px_rgba(34,197,94,0.6)] blur-[2px]"></div>
              <div className="absolute inset-1 rounded-2xl border-4 border-transparent border-t-cyan-300 border-l-purple-400 animate-pulse-organic-delayed-2 shadow-[0_0_20px_rgba(59,130,246,0.7)] blur-[2px]"></div>
            </div>
            
            {/* Camada de glow adicional */}
            <div className="absolute inset-2">
              <div className="absolute inset-0 rounded-xl border-2 border-purple-500 opacity-60 animate-pulse shadow-[0_0_40px_rgba(168,85,247,0.9),inset_0_0_20px_rgba(168,85,247,0.3)]"></div>
              <div className="absolute -inset-1 rounded-xl border-2 border-cyan-400 opacity-40 animate-pulse-organic shadow-[0_0_35px_rgba(34,197,94,0.7),inset_0_0_15px_rgba(34,197,94,0.2)]"></div>
            </div>
            
            {/* Partículas flutuantes */}
            <div className="absolute inset-4">
              <div className="absolute top-2 right-2 w-1 h-1 bg-purple-400 rounded-full animate-ping shadow-[0_0_10px_rgba(168,85,247,1)]"></div>
              <div className="absolute bottom-3 left-3 w-1 h-1 bg-cyan-300 rounded-full animate-ping animation-delay-500 shadow-[0_0_8px_rgba(34,197,94,1)]"></div>
              <div className="absolute top-4 left-2 w-0.5 h-0.5 bg-blue-400 rounded-full animate-ping animation-delay-1000 shadow-[0_0_6px_rgba(59,130,246,1)]"></div>
              <div className="absolute bottom-2 right-4 w-0.5 h-0.5 bg-purple-300 rounded-full animate-ping animation-delay-1500 shadow-[0_0_6px_rgba(147,51,234,1)]"></div>
            </div>
          </div>
        </div>
        
        {/* Conteúdo interno com efeito neon */}
        <div className="absolute inset-3 rounded-xl bg-[#0f0a29] flex items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.8),0_0_40px_rgba(168,85,247,0.4)] border border-purple-500/20">
          <div className="text-center text-white text-[11px] font-bold leading-tight px-1">
            {showGreeting && (
              <>
                {!isHovered ? (
                  <div className="transition-opacity duration-300 opacity-100">
                    <div className="text-shadow-neon">OLÁ,</div>
                    <div className="text-shadow-neon">{firstName}!</div>
                  </div>
                ) : (
                  <div className="transition-opacity duration-300 opacity-100">
                    <div className="text-shadow-neon">COMO</div>
                    <div className="text-shadow-neon">POSSO</div>
                    <div className="text-shadow-neon">AJUDAR</div>
                    <div className="text-shadow-neon">VOCÊ?</div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        
        {/* Efeito de hover intensificado */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 shadow-[0_0_60px_rgba(168,85,247,0.8)]"></div>
        
        {/* Anel externo de glow */}
        <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-purple-500/20 via-transparent to-cyan-400/20 animate-pulse shadow-[0_0_50px_rgba(168,85,247,0.3)]"></div>
      </div>
    </Button>
  );
};

export default AnimatedAiButton;
