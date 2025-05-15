
import React from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import IntegrationsSection from "@/components/Dashboard/IntegrationsSection";

const IntegrationsPage = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Integrações</h1>
      <p className="text-muted-foreground mb-6">
        Conecte suas contas de Google Ads, Facebook Ads e outras plataformas
      </p>
      <IntegrationsSection />
    </DashboardLayout>
  );
};

export default IntegrationsPage;
