
import React from "react";
import { Card } from "@/components/ui/card";
import { Check, Settings, X } from "lucide-react";
import clsx from "clsx";

type CampaignStatus = "good" | "needs-adjustment" | "bad";

interface AICampaignStatusProps {
  status: CampaignStatus;
}

const statusConfig = {
  "good": {
    icon: Check,
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-500",
    message: "Suas campanhas estão com bom desempenho",
    description: "Continue com a estratégia atual"
  },
  "needs-adjustment": {
    icon: Settings,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-500",
    message: "Suas campanhas precisam de ajustes",
    description: "Alguns indicadores precisam de atenção"
  },
  "bad": {
    icon: X,
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-500",
    message: "Campanhas com desempenho abaixo do esperado",
    description: "Ação imediata recomendada"
  }
};

const AICampaignStatus: React.FC<AICampaignStatusProps> = ({ status }) => {
  const config = statusConfig[status];
  const IconComponent = config.icon;
  
  return (
    <Card 
      className={clsx(
        "mb-6 border-l-4 bg-white rounded-2xl shadow-xl p-6",
        config.borderColor,
        config.bgColor
      )}
      role="status"
      aria-label={`Status da campanha: ${config.message}`}
    >
      <div className="flex items-center">
        <div className={clsx("rounded-full p-3 mr-4", config.bgColor)}>
          <IconComponent className={clsx("h-6 w-6", config.color)} aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-semibold text-lg text-gray-900">{config.message}</h3>
          <p className="text-sm text-gray-500">{config.description}</p>
        </div>
      </div>
    </Card>
  );
};

export default AICampaignStatus;
