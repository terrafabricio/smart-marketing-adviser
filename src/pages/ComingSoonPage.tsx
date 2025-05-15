
import React from "react";
import PageLayout from "@/components/Layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ComingSoonPage = () => {
  return (
    <PageLayout>
      <div className="container mx-auto py-24 flex flex-col items-center justify-center min-h-[calc(100vh-4rem-8rem)] text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="neon-text">Em Breve</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
          Estamos trabalhando duro para trazer ainda mais funcionalidades incríveis para o AdVisor-AI.
          Esta página estará disponível em breve.
        </p>
        <div className="animate-float">
          <svg
            width="150"
            height="150"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mb-10 text-advisor-purple opacity-70"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 8V12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 16H12.01"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <Link to="/">
          <Button className="bg-advisor-purple hover:bg-advisor-vivid-purple">
            Voltar para a página inicial
          </Button>
        </Link>
      </div>
    </PageLayout>
  );
};

export default ComingSoonPage;
