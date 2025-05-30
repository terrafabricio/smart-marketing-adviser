
import React from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, DollarSign, Users, Zap, BarChart3 } from "lucide-react";

const RecommendationsPage = () => {
  const recommendations = [
    {
      id: 1,
      title: "Otimizar palavras-chave de baixo desempenho",
      description: "Identifiquei 15 palavras-chave com CTR abaixo de 2% que podem ser pausadas ou ter lances reduzidos.",
      impact: "Alto",
      difficulty: "Fácil",
      icon: <Target className="h-5 w-5" />,
      estimatedImprovement: "+25% no ROAS"
    },
    {
      id: 2,
      title: "Ajustar horários de exibição",
      description: "Suas conversões são 40% maiores entre 14h-18h. Recomendo aumentar lances neste período.",
      impact: "Médio",
      difficulty: "Fácil",
      icon: <BarChart3 className="h-5 w-5" />,
      estimatedImprovement: "+18% nas conversões"
    },
    {
      id: 3,
      title: "Expandir segmentação geográfica",
      description: "Detectei potencial em 3 novas regiões com baixa concorrência e alto volume de busca.",
      impact: "Alto",
      difficulty: "Médio",
      icon: <TrendingUp className="h-5 w-5" />,
      estimatedImprovement: "+35% no alcance"
    },
    {
      id: 4,
      title: "Otimizar orçamento entre campanhas",
      description: "Redistribuir orçamento pode aumentar o volume de conversões em 22% sem custo adicional.",
      impact: "Alto",
      difficulty: "Fácil",
      icon: <DollarSign className="h-5 w-5" />,
      estimatedImprovement: "+22% nas conversões"
    },
    {
      id: 5,
      title: "Implementar extensões de anúncio",
      description: "Adicionar extensões de sitelink e chamada pode melhorar o CTR em até 15%.",
      impact: "Médio",
      difficulty: "Médio",
      icon: <Zap className="h-5 w-5" />,
      estimatedImprovement: "+15% no CTR"
    },
    {
      id: 6,
      title: "Refinar audiências personalizadas",
      description: "Criar lookalike audiences baseadas nos seus melhores clientes pode reduzir o CPA em 30%.",
      impact: "Alto",
      difficulty: "Médio",
      icon: <Users className="h-5 w-5" />,
      estimatedImprovement: "-30% no CPA"
    }
  ];

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "Alto": return "bg-red-100 text-red-800";
      case "Médio": return "bg-yellow-100 text-yellow-800";
      case "Baixo": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Fácil": return "bg-green-100 text-green-800";
      case "Médio": return "bg-yellow-100 text-yellow-800";
      case "Difícil": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 pb-8">
        <div className="mb-10">
          <h1 className="text-2xl font-semibold mb-2 text-foreground">Recomendações da IA</h1>
          <p className="text-gray-500 mb-6">
            Sugestões inteligentes baseadas na análise dos seus dados para melhorar o desempenho das suas campanhas
          </p>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Novas recomendações:</span>
            <span className="inline-flex items-center rounded-full bg-advisor-purple/10 px-3 py-1 text-sm font-medium text-advisor-purple border border-advisor-purple/20">
              {recommendations.length} disponíveis
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((recommendation) => (
            <Card key={recommendation.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-advisor-purple/10 rounded-lg text-advisor-purple">
                    {recommendation.icon}
                  </div>
                  <div className="flex gap-2">
                    <Badge className={`text-xs ${getImpactColor(recommendation.impact)}`}>
                      {recommendation.impact}
                    </Badge>
                    <Badge className={`text-xs ${getDifficultyColor(recommendation.difficulty)}`}>
                      {recommendation.difficulty}
                    </Badge>
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight">{recommendation.title}</CardTitle>
                <CardDescription className="text-sm text-gray-600 line-clamp-3">
                  {recommendation.description}
                </CardDescription>
              </CardHeader>

              <div className="flex items-center space-x-4 mt-4 px-6">
                <div className="text-sm">
                  <span className="text-gray-500">Estimativa:</span>
                  <span className="ml-1 font-medium text-advisor-purple">{recommendation.estimatedImprovement}</span>
                </div>
              </div>

              <CardFooter className="mt-6 flex space-x-2 px-6 pb-0">
                <Button className="bg-advisor-purple hover:scale-105 transition-transform h-10 flex-1">
                  Aplicar
                </Button>
                <Button variant="outline" className="h-10">
                  Detalhes
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default RecommendationsPage;
