
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Lightbulb, 
  Zap, 
  TrendingUp, 
  Shield, 
  BarChart3,
  ArrowRight,
  Clock
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const QuickActionsPanel = () => {
  const navigate = useNavigate();

  const quickActions = [
    {
      title: "Otimização Rápida",
      description: "Aplique as 3 recomendações de maior impacto",
      icon: <Zap className="h-5 w-5 text-yellow-600" />,
      time: "5 min",
      impact: "Alto",
      action: () => navigate("/dashboard/recommendations"),
      color: "yellow"
    },
    {
      title: "Revisão de Alertas",
      description: "Verifique e resolva alertas críticos",
      icon: <Shield className="h-5 w-5 text-red-600" />,
      time: "10 min",
      impact: "Crítico",
      action: () => navigate("/dashboard/alerts"),
      color: "red"
    },
    {
      title: "Análise Semanal",
      description: "Revise o desempenho da última semana",
      icon: <BarChart3 className="h-5 w-5 text-blue-600" />,
      time: "15 min",
      impact: "Médio",
      action: () => navigate("/dashboard/campaigns"),
      color: "blue"
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "yellow":
        return {
          bg: "bg-yellow-50",
          border: "border-yellow-200",
          button: "bg-yellow-600 hover:bg-yellow-700"
        };
      case "red":
        return {
          bg: "bg-red-50",
          border: "border-red-200",
          button: "bg-red-600 hover:bg-red-700"
        };
      case "blue":
        return {
          bg: "bg-blue-50",
          border: "border-blue-200",
          button: "bg-blue-600 hover:bg-blue-700"
        };
      default:
        return {
          bg: "bg-gray-50",
          border: "border-gray-200",
          button: "bg-gray-600 hover:bg-gray-700"
        };
    }
  };

  return (
    <Card className="bg-white rounded-2xl shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl flex items-center gap-2 text-black">
          <Lightbulb className="h-6 w-6 text-advisor-purple" />
          Ações Rápidas Recomendadas
        </CardTitle>
        <CardDescription>
          Otimizações que você pode fazer agora mesmo para melhorar a performance
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickActions.map((action, index) => {
            const colors = getColorClasses(action.color);
            return (
              <div
                key={index}
                className={`p-4 rounded-xl border-2 ${colors.bg} ${colors.border} hover:shadow-lg transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    {action.icon}
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {action.time}
                    </Badge>
                    <Badge 
                      variant={action.impact === "Crítico" ? "destructive" : "secondary"}
                      className="text-xs"
                    >
                      {action.impact}
                    </Badge>
                  </div>
                </div>
                
                <h4 className="font-semibold text-black mb-2">{action.title}</h4>
                <p className="text-sm text-gray-600 mb-4">{action.description}</p>
                
                <Button
                  onClick={action.action}
                  className={`w-full ${colors.button} text-white h-9`}
                >
                  Executar
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickActionsPanel;
