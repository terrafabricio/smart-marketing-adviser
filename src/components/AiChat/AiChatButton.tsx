
import React, { useState } from "react";
import AnimatedAiButton from "./AnimatedAiButton";
import AiChatModal from "./AiChatModal";
import { useAuth } from "@/contexts/AuthContext";

const AiChatButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();

  if (!user) return null;

  return (
    <>
      <AnimatedAiButton onClick={() => setIsOpen(true)} />
      <AiChatModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default AiChatButton;
