
import React from "react";
import { Card } from "@/components/ui/card";
import { Check, Settings, X } from "lucide-react";

type CampaignStatus = "good" | "needs-adjustment" | "bad";

interface AICampaignStatusProps {
  status: CampaignStatus;
}

const statusConfig = {
  "good": {
    icon: Check,
    color: "text-green-500",
    bgColor: "bg-green-50",
    message: "Suas campanhas estão com bom desempenho",
    description: "Continue com a estratégia atual"
  },
  "needs-adjustment": {
    icon: Settings,
    color: "text-amber-500",
    bgColor: "bg-amber-50",
    message: "Suas campanhas precisam de ajustes",
    description: "Alguns indicadores precisam de atenção"
  },
  "bad": {
    icon: X,
    color: "text-red-500",
    bgColor: "bg-red-50",
    message: "Campanhas com desempenho abaixo do esperado",
    description: "Ação imediata recomendada"
  }
};

const AICampaignStatus: React.FC<AICampaignStatusProps> = ({ status }) => {
  const config = statusConfig[status];
  const IconComponent = config.icon;
  
  return (
    <Card className={`mb-6 ${config.bgColor} border-l-4 border-l-${status === "good" ? "green" : status === "needs-adjustment" ? "amber" : "red"}-500`}>
      <div className="p-4 flex items-center">
        <div className={`rounded-full p-2 mr-4 ${config.bgColor}`}>
          <IconComponent className={`h-6 w-6 ${config.color}`} />
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
