
import React from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import KpiCards from "@/components/Dashboard/KpiCards";
import Charts from "@/components/Dashboard/Charts";
import AICampaignStatus from "@/components/Dashboard/AICampaignStatus";

const DashboardIndex = () => {
  const campaignStatus = "needs-adjustment";
  
  return (
    <DashboardLayout>
      <div className="space-y-6 pb-8">
        <div className="mb-10">
          <h1 className="text-2xl font-semibold text-foreground mb-2">Dashboard</h1>
          <p className="text-gray-500">Visão geral do desempenho das suas campanhas</p>
        </div>
        
        <AICampaignStatus status={campaignStatus as "good" | "needs-adjustment" | "bad"} />
        <KpiCards />
        <Charts />
      </div>
    </DashboardLayout>
  );
};

export default DashboardIndex;
