
import React from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import DashboardHeader from "@/components/Dashboard/DashboardHeader";
import KpiCards from "@/components/Dashboard/KpiCards";
import Charts from "@/components/Dashboard/Charts";
import AICampaignStatus from "@/components/Dashboard/AICampaignStatus";

const DashboardIndex = () => {
  // This would normally come from an API or context
  const campaignStatus = "needs-adjustment";
  
  return (
    <DashboardLayout>
      <div className="space-y-6 pb-8">
        <AICampaignStatus status={campaignStatus as "good" | "needs-adjustment" | "bad"} />
        <KpiCards />
        <Charts />
      </div>
    </DashboardLayout>
  );
};

export default DashboardIndex;
