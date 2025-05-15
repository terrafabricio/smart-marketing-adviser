
import React from "react";
import PageLayout from "@/components/Layout/PageLayout";
import DashboardHeader from "@/components/Dashboard/DashboardHeader";
import KpiCards from "@/components/Dashboard/KpiCards";
import Charts from "@/components/Dashboard/Charts";
import RecommendationsSection from "@/components/Dashboard/RecommendationsSection";
import CampaignTable from "@/components/Dashboard/CampaignTable";
import IntegrationsSection from "@/components/Dashboard/IntegrationsSection";

const DashboardPage = () => {
  return (
    <PageLayout>
      <div className="container mx-auto py-8">
        <DashboardHeader />
        <KpiCards />
        <Charts />
        <RecommendationsSection />
        <CampaignTable />
        <IntegrationsSection />
      </div>
    </PageLayout>
  );
};

export default DashboardPage;
