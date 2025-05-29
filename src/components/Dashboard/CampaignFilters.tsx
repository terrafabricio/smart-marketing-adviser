
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Filter } from "lucide-react";

interface CampaignFiltersProps {
  onFilterChange?: (filters: any) => void;
}

const CampaignFilters: React.FC<CampaignFiltersProps> = ({ onFilterChange }) => {
  const [selectedPeriod, setSelectedPeriod] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  return (
    <div className="flex flex-wrap gap-4 mb-6 p-4 bg-white rounded-lg border">
      <div className="flex items-center gap-2">
        <Filter className="h-4 w-4 text-gray-500" />
        <span className="text-sm font-medium text-gray-700">Filtros:</span>
      </div>

      <div className="flex flex-wrap gap-3 flex-1">
        <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
          <SelectTrigger className="w-[180px]">
            <Calendar className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Período" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="last-7-days">Últimos 7 dias</SelectItem>
            <SelectItem value="last-30-days">Últimos 30 dias</SelectItem>
            <SelectItem value="last-90-days">Últimos 90 dias</SelectItem>
            <SelectItem value="last-year">Último ano</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Tipo de Campanha" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="search">Busca</SelectItem>
            <SelectItem value="display">Display</SelectItem>
            <SelectItem value="video">Vídeo</SelectItem>
            <SelectItem value="shopping">Shopping</SelectItem>
            <SelectItem value="performance-max">Performance Max</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="active">Ativa</SelectItem>
            <SelectItem value="paused">Pausada</SelectItem>
            <SelectItem value="ended">Finalizada</SelectItem>
          </SelectContent>
        </Select>

        <Button
          variant="outline"
          onClick={() => {
            setSelectedPeriod("");
            setSelectedType("");
            setSelectedStatus("");
          }}
          className="text-sm"
        >
          Limpar Filtros
        </Button>
      </div>
    </div>
  );
};

export default CampaignFilters;
