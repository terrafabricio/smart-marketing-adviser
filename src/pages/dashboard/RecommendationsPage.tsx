
import React from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Lightbulb, 
  TrendingUp, 
  Target, 
  DollarSign, 
  Search, 
  Bell,
  ArrowRight,
  AlertTriangle
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const RecommendationsPage = () => {
  const navigate = useNavigate();

  const recommendations = [
    {
      id: "1",
      title: "Otimizar Termos de Pesquisa",
      description: "12 termos sugeridos para negativação que podem economizar R$ 450/mês",
      impact: "Alto",
      difficulty: "Fácil",
      category: "search-terms",
      icon: <Search className="h-5 w-5 text-blue-600" />,
      action: () => navigate("/dashboard/search-terms"),
      savings: "R$ 450/mês",
      timeframe: "Imediato"
    },
    {
      id: "2",
      title: "Reestruturar Grupos de Anúncios",
      description: "5 grupos identificados com intenções mistas que afetam o Quality Score",
      impact: "Alto",
      difficulty: "Médio",
      category: "ad-groups",
      icon: <Target className="h-5 w-5 text-purple-600" />,
      action: () => navigate("/dashboard/ad-groups"),
      savings: "Melhoria +15% CTR",
      timeframe: "1-2 semanas"
    },
    {
      id: "3",
      title: "Configurar Alertas de CPA",
      description: "Monitore automaticamente quando o CPA exceder R$ 100 em qualquer campanha",
      impact: "Médio",
      difficulty: "Fácil",
      category: "alerts",
      icon: <Bell className="h-5 w-5 text-red-600" />,
      action: () => navigate("/dashboard/alerts"),
      savings: "Prevenção perdas",
      timeframe: "5 minutos"
    },
    {
      id: "4",
      title: "Otimizar Lances por Dispositivo",
      description: "Mobile apresenta CPA 30% menor - ajustar estratégia de lances",
      impact: "Alto",
      difficulty: "Médio",
      category: "bidding",
      icon: <DollarSign className="h-5 w-5 text-green-600" />,
      action: () => navigate("/dashboard/campaigns"),
      savings: "R$ 300/mês",
      timeframe: "3-5 dias"
    },
    {
      id: "5",
      title: "Expandir Palavras-chave de Alto ROI",
      description: "Identificadas 8 palavras com ROI >400% para ampliar investimento",
      impact: "Alto",
      difficulty: "Fácil",
      category: "keywords",
      icon: <TrendingUp className="h-5 w-5 text-orange-600" />,
      action: () => navigate("/dashboard/campaigns"),
      savings: "+25% receita",
      timeframe: "1-2 dias"
    },
    {
      id: "6",
      title: "Ajustar Cronograma de Anúncios",
      description: "Performance 40% melhor entre 14h-18h - concentrar orçamento",
      impact: "Médio",
      difficulty: "Fácil",
      category: "scheduling",
      icon: <AlertTriangle className="h-5 w-5 text-amber-600" />,
      action: () => navigate("/dashboard/campaigns"),
      savings: "R$ 200/mês",
      timeframe: "Imediato"
    }
  ];

  const getImpactBadge = (impact: string) => {
    switch (impact) {
      case "Alto":
        return <Badge className="bg-red-100 text-red-700 border-red-200">Alto Impacto</Badge>;
      case "Médio":
        return <Badge className="bg-amber-100 text-amber-700 border-amber-200">Médio Impacto</Badge>;
      case "Baixo":
        return <Badge className="bg-green-100 text-green-700 border-green-200">Baixo Impacto</Badge>;
      default:
        return null;
    }
  };

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case "Fácil":
        return <Badge variant="outline" className="border-green-200 text-green-700">Fácil</Badge>;
      case "Médio":
        return <Badge variant="outline" className="border-amber-200 text-amber-700">Médio</Badge>;
      case "Difícil":
        return <Badge variant="outline" className="border-red-200 text-red-700">Difícil</Badge>;
      default:
        return null;
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 pb-8">
        <div className="mb-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-foreground mb-2">
                Recomendações IA
              </h1>
              <p className="text-gray-500">
                Insights personalizados para otimizar suas campanhas
              </p>
            </div>
            <Badge className="inline-flex rounded-full px-3 py-1 bg-advisor-purple/10 text-advisor-purple">
              {recommendations.length} novas recomendações
            </Badge>
          </div>
        </div>

        {/* Cards de Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-white rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-red-100 rounded-full">
                  <TrendingUp className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {recommendations.filter(r => r.impact === "Alto").length}
                  </p>
                  <p className="text-sm text-gray-500">Alto Impacto</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-100 rounded-full">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">
                    {recommendations.filter(r => r.difficulty === "Fácil").length}
                  </p>
                  <p className="text-sm text-gray-500">Implementação Fácil</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-100 rounded-full">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">R$ 950</p>
                  <p className="text-sm text-gray-500">Economia Potencial/Mês</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Lista de Recomendações */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recommendations.map((rec) => (
            <Card key={rec.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-50 rounded-lg">
                      {rec.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{rec.title}</CardTitle>
                    </div>
                  </div>
                </div>
                <CardDescription className="mt-2 line-clamp-3">
                  {rec.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="py-3">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    {getImpactBadge(rec.impact)}
                    {getDifficultyBadge(rec.difficulty)}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Economia:</span>
                      <p className="font-medium text-green-600">{rec.savings}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Prazo:</span>
                      <p className="font-medium">{rec.timeframe}</p>
                    </div>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="pt-3">
                <Button 
                  className="w-full bg-advisor-purple hover:bg-advisor-vivid-purple hover:scale-105 transition-transform h-10"
                  onClick={rec.action}
                >
                  Implementar
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Card de Ação Rápida */}
        <Card className="bg-gradient-to-r from-advisor-purple to-advisor-vivid-purple text-white rounded-2xl shadow-xl">
          <CardContent className="p-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  🚀 Otimização Rápida Disponível
                </h3>
                <p className="text-white/90 mb-4">
                  Implemente as 3 recomendações de maior impacto e menor dificuldade agora mesmo
                </p>
                <div className="flex gap-2">
                  <Button 
                    variant="secondary" 
                    onClick={() => navigate("/dashboard/search-terms")}
                    className="bg-white text-advisor-purple hover:bg-white/90"
                  >
                    Iniciar Otimização
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/20"
                  >
                    Saiba Mais
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <Lightbulb className="h-20 w-20 text-white/20" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default RecommendationsPage;
