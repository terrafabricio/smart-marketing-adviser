
import React from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import RecommendationsSection from "@/components/Dashboard/RecommendationsSection";

const RecommendationsPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 pb-8">
        <div className="mb-10">
          <h1 className="text-2xl font-semibold mb-2 text-gray-900">Recomendações da IA</h1>
          <p className="text-gray-500 mb-6">
            Sugestões inteligentes baseadas na análise dos seus dados para melhorar o desempenho das suas campanhas
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Novas recomendações:</span>
            <span className="inline-flex items-center rounded-full bg-[#8AFF72]/10 px-3 py-1 text-sm font-medium text-gray-900 border border-[#8AFF72]/20">
              3 disponíveis
            </span>
          </div>
        </div>
        <RecommendationsSection />
      </div>
    </DashboardLayout>
  );
};

export default RecommendationsPage;
