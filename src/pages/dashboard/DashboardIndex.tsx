
import React from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import KpiCards from "@/components/Dashboard/KpiCards";
import Charts from "@/components/Dashboard/Charts";
import AICampaignStatus from "@/components/Dashboard/AICampaignStatus";
import NewFeaturesWidgets from "@/components/Dashboard/NewFeaturesWidgets";
import QuickActionsPanel from "@/components/Dashboard/QuickActionsPanel";

const DashboardIndex = () => {
  const campaignStatus = "needs-adjustment";
  
  return (
    <DashboardLayout>
      <div className="space-y-8 pb-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-black mb-2">Dashboard</h1>
          <p className="text-gray-600">Central de comando para otimização das suas campanhas</p>
        </div>
        
        <AICampaignStatus status={campaignStatus as "good" | "needs-adjustment" | "bad"} />
        <NewFeaturesWidgets />
        <QuickActionsPanel />
        <KpiCards />
        <Charts />
      </div>
    </DashboardLayout>
  );
};

export default DashboardIndex;
