
import React from "react";
import PageLayout from "@/components/Layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <PageLayout>
      <div className="container mx-auto py-24 flex flex-col items-center justify-center min-h-[calc(100vh-4rem-8rem)] text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 neon-text">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Página não encontrada
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-lg">
          A página que você está procurando pode ter sido removida, teve seu nome
          alterado ou está temporariamente indisponível.
        </p>
        <Link to="/">
          <Button className="bg-advisor-purple hover:bg-advisor-vivid-purple">
            Voltar para a página inicial
          </Button>
        </Link>
      </div>
    </PageLayout>
  );
};

export default NotFoundPage;
