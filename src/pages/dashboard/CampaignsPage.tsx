
import React from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import CampaignTable from "@/components/Dashboard/CampaignTable";

const CampaignsPage = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Campanhas</h1>
      <p className="text-muted-foreground mb-6">
        Visualize e gerencie todas as suas campanhas publicitárias
      </p>
      <CampaignTable />
    </DashboardLayout>
  );
};

export default CampaignsPage;
