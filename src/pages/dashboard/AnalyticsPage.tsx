
import React from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import Charts from "@/components/Dashboard/Charts";

const AnalyticsPage = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Analytics</h1>
      <p className="text-muted-foreground mb-6">
        Analise o desempenho de suas campanhas com gráficos e métricas detalhadas
      </p>
      <Charts />
    </DashboardLayout>
  );
};

export default AnalyticsPage;
