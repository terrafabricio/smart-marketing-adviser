
import React from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import RecommendationsSection from "@/components/Dashboard/RecommendationsSection";

const RecommendationsPage = () => {
  return (
    <DashboardLayout>
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-2">Recomendações da IA</h1>
        <p className="text-muted-foreground mb-6">
          Sugestões inteligentes baseadas na análise dos seus dados para melhorar o desempenho das suas campanhas
        </p>
        <div className="flex items-center gap-2 mb-6">
          <span className="text-sm text-muted-foreground">Novas recomendações:</span>
          <span className="inline-flex items-center rounded-full bg-advisor-purple/10 px-3 py-1 text-sm font-medium text-advisor-purple">
            3 disponíveis
          </span>
        </div>
      </div>
      <RecommendationsSection />
    </DashboardLayout>
  );
};

export default RecommendationsPage;
