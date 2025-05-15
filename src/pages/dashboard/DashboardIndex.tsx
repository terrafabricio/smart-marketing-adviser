
import React from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import DashboardHeader from "@/components/Dashboard/DashboardHeader";
import KpiCards from "@/components/Dashboard/KpiCards";
import Charts from "@/components/Dashboard/Charts";
import RecommendationsSection from "@/components/Dashboard/RecommendationsSection";

const DashboardIndex = () => {
  return (
    <DashboardLayout>
      <DashboardHeader />
      <KpiCards />
      <Charts />
      <RecommendationsSection />
    </DashboardLayout>
  );
};

export default DashboardIndex;
