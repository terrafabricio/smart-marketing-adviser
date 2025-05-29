
import React from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import CampaignCarousel from "@/components/Dashboard/CampaignCarousel";
import CampaignFilters from "@/components/Dashboard/CampaignFilters";
import DetailedCampaignList from "@/components/Dashboard/DetailedCampaignList";

const CampaignsPage = () => {
  const handleFilterChange = (filters: any) => {
    // Implementar lógica de filtros quando a API estiver conectada
    console.log("Filtros aplicados:", filters);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 pb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Campanhas</h1>
          <p className="text-gray-600 mt-1">
            Visualize e gerencie todas as suas campanhas publicitárias
          </p>
        </div>

        <CampaignFilters onFilterChange={handleFilterChange} />
        
        <CampaignCarousel />
        
        <DetailedCampaignList />
      </div>
    </DashboardLayout>
  );
};

export default CampaignsPage;
