
import React from "react";
import { Card } from "@/components/ui/card";
import { Check, Settings, X } from "lucide-react";
import { cn } from "@/lib/utils";

type CampaignStatus = "good" | "needs-adjustment" | "bad";

interface AICampaignStatusProps {
  status: CampaignStatus;
}

const statusConfig = {
  "good": {
    icon: Check,
    color: "text-green-500",
    bgColor: "bg-green-50",
    borderColor: "border-green-500",
    message: "Suas campanhas estão com bom desempenho",
    description: "Continue com a estratégia atual"
  },
  "needs-adjustment": {
    icon: Settings,
    color: "text-amber-500",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-500",
    message: "Suas campanhas precisam de ajustes",
    description: "Alguns indicadores precisam de atenção"
  },
  "bad": {
    icon: X,
    color: "text-red-500",
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
      className={cn(
        "mb-6 border-l-4",
        config.bgColor,
        config.borderColor
      )}
      role="status"
      aria-label={`Status da campanha: ${config.message}`}
    >
      <div className="p-4 flex items-center">
        <div className={cn("rounded-full p-2 mr-4", config.bgColor)}>
          <IconComponent className={cn("h-6 w-6", config.color)} aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-medium text-lg">{config.message}</h3>
          <p className="text-sm text-muted-foreground">{config.description}</p>
        </div>
      </div>
    </Card>
  );
};

export default AICampaignStatus;
