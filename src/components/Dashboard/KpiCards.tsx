
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUp, ArrowDown } from "lucide-react";

interface KpiProps {
  title: string;
  value: string;
  change: number;
  changeType: "increase" | "decrease";
}

const KpiCard: React.FC<KpiProps> = ({ title, value, change, changeType }) => {
  return (
    <Card className="border border-border bg-card hover:shadow-lg transition-all card-hover">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className="flex items-center mt-1">
          <div
            className={`flex items-center text-xs ${
              changeType === "increase"
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {changeType === "increase" ? (
              <ArrowUp className="h-3 w-3 mr-1" />
            ) : (
              <ArrowDown className="h-3 w-3 mr-1" />
            )}
            {change}%
          </div>
          <span className="text-xs text-muted-foreground ml-1">vs período anterior</span>
        </div>
      </CardContent>
    </Card>
  );
};

const KpiCards = () => {
  const kpis = [
    {
      title: "Impressões",
      value: "1.256.789",
      change: 12.5,
      changeType: "increase" as const,
    },
    {
      title: "Cliques",
      value: "85.432",
      change: 8.3,
      changeType: "increase" as const,
    },
    {
      title: "Conversões",
      value: "3.241",
      change: 15.7,
      changeType: "increase" as const,
    },
    {
      title: "CPC Médio",
      value: "R$ 1,87",
      change: 3.2,
      changeType: "decrease" as const,
    },
    {
      title: "CTR",
      value: "6.8%",
      change: 4.1,
      changeType: "increase" as const,
    },
    {
      title: "ROAS",
      value: "3.5x",
      change: 7.9,
      changeType: "increase" as const,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
      {kpis.map((kpi, index) => (
        <KpiCard
          key={index}
          title={kpi.title}
          value={kpi.value}
          change={kpi.change}
          changeType={kpi.changeType}
        />
      ))}
    </div>
  );
};

export default KpiCards;
