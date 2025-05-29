
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon, Eye, MousePointer, DollarSign, TrendingUp, Users, Target } from "lucide-react";

const KpiCards = () => {
  const kpis = [
    {
      title: "Impressões",
      value: "2.4M",
      change: "+12.5%",
      trend: "up",
      icon: Eye,
      color: "text-[#8AFF72]"
    },
    {
      title: "Cliques",
      value: "145.2K",
      change: "+8.2%",
      trend: "up",
      icon: MousePointer,
      color: "text-blue-500"
    },
    {
      title: "CPC Médio",
      value: "R$ 2.45",
      change: "-5.1%",
      trend: "down",
      icon: DollarSign,
      color: "text-emerald-500"
    },
    {
      title: "CTR",
      value: "6.08%",
      change: "+2.4%",
      trend: "up",
      icon: TrendingUp,
      color: "text-purple-500"
    },
    {
      title: "Conversões",
      value: "3.2K",
      change: "+15.7%",
      trend: "up",
      icon: Target,
      color: "text-orange-500"
    },
    {
      title: "ROAS",
      value: "4.8x",
      change: "+0.3x",
      trend: "up",
      icon: Users,
      color: "text-pink-500"
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-6">
      {kpis.map((kpi, index) => {
        const IconComponent = kpi.icon;
        const isPositive = kpi.trend === "up";
        
        return (
          <Card key={index} className="eduplex-card hover:scale-105 transition-all duration-300">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-lg bg-gray-50 ${kpi.color}`}>
                  <IconComponent className="h-4 w-4" />
                </div>
                <div className={`flex items-center text-sm font-medium ${
                  isPositive ? "text-[#8AFF72]" : "text-red-500"
                }`}>
                  {isPositive ? (
                    <ArrowUpIcon className="h-3 w-3 mr-1" />
                  ) : (
                    <ArrowDownIcon className="h-3 w-3 mr-1" />
                  )}
                  {kpi.change}
                </div>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900 mb-1">{kpi.value}</p>
                <p className="text-sm text-gray-500">{kpi.title}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default KpiCards;
