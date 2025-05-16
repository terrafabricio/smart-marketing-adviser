
import React from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import RecommendationsSection from "@/components/Dashboard/RecommendationsSection";

const RecommendationsPage = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Recomendações da IA</h1>
      <p className="text-muted-foreground mb-6">
        Sugestões inteligentes baseadas na análise dos seus dados para melhorar o desempenho das suas campanhas
      </p>
      <RecommendationsSection />
    </DashboardLayout>
  );
};

export default RecommendationsPage;
