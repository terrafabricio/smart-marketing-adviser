
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Search, Target, TrendingUp, AlertTriangle, CheckCircle, ArrowRight, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NewFeaturesWidgets = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      {/* Widget de Alertas de Performance */}
      <Card className="bg-white rounded-2xl shadow-xl border-l-4 border-red-500 hover:shadow-2xl transition-all duration-300">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2 text-black">
              <div className="p-2 bg-red-100 rounded-lg">
                <Bell className="h-5 w-5 text-red-600" />
              </div>
              Alertas Críticos
            </CardTitle>
            <Badge variant="destructive" className="px-3 py-1">
              3 novos
            </Badge>
          </div>
          <CardDescription>
            Mudanças significativas detectadas nas últimas 24h
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg border border-red-100">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">CPA Alto</p>
                  <p className="text-xs text-red-600">+45% em 24h</p>
                </div>
              </div>
              <Badge variant="outline" className="border-red-200 text-red-700 text-xs">
                Crítico
              </Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg border border-amber-100">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-4 w-4 text-amber-600" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">CTR Baixo</p>
                  <p className="text-xs text-amber-600">Abaixo da meta</p>
                </div>
              </div>
              <Badge variant="outline" className="border-amber-200 text-amber-700 text-xs">
                Atenção
              </Badge>
            </div>

            <div className="pt-2">
              <Button 
                onClick={() => navigate("/dashboard/alerts")}
                className="w-full bg-red-600 hover:bg-red-700 text-white h-10"
              >
                Ver Todos os Alertas
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Widget de Termos de Pesquisa */}
      <Card className="bg-white rounded-2xl shadow-xl border-l-4 border-blue-500 hover:shadow-2xl transition-all duration-300">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2 text-black">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Search className="h-5 w-5 text-blue-600" />
              </div>
              Termos de Pesquisa
            </CardTitle>
            <Badge variant="secondary" className="px-3 py-1 bg-blue-100 text-blue-700">
              12 sugestões
            </Badge>
          </div>
          <CardDescription>
            Oportunidades de negativação identificadas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-100 text-center">
                <p className="text-2xl font-bold text-blue-600">R$ 450</p>
                <p className="text-xs text-blue-700">Economia mensal potencial</p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 text-center">
                <p className="text-2xl font-bold text-gray-600">156</p>
                <p className="text-xs text-gray-700">Cliques desperdiçados</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Termos irrelevantes:</span>
                <span className="font-medium text-black">8 encontrados</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Alto CPA sem conversão:</span>
                <span className="font-medium text-black">4 encontrados</span>
              </div>
            </div>

            <div className="pt-2">
              <Button 
                onClick={() => navigate("/dashboard/search-terms")}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white h-10"
              >
                Analisar Termos
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Widget de Estrutura de Grupos */}
      <Card className="bg-white rounded-2xl shadow-xl border-l-4 border-purple-500 hover:shadow-2xl transition-all duration-300">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2 text-black">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Target className="h-5 w-5 text-purple-600" />
              </div>
              Estrutura de Grupos
            </CardTitle>
            <Badge variant="outline" className="px-3 py-1 border-amber-200 text-amber-700">
              5 problemas
            </Badge>
          </div>
          <CardDescription>
            Análise da estrutura de palavras-chave
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 bg-green-50 rounded-lg border border-green-100 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <p className="text-xl font-bold text-green-600">15</p>
                </div>
                <p className="text-xs text-green-700">Grupos OK</p>
              </div>
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-100 text-center">
                <div className="flex items-center justify-center gap-1 mb-1">
                  <AlertTriangle className="h-4 w-4 text-amber-600" />
                  <p className="text-xl font-bold text-amber-600">5</p>
                </div>
                <p className="text-xs text-amber-700">Precisam atenção</p>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Intenções mistas:</span>
                <span className="font-medium text-black">3 grupos</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-600">Marcas concorrentes:</span>
                <span className="font-medium text-black">2 grupos</span>
              </div>
            </div>

            <div className="pt-2">
              <Button 
                onClick={() => navigate("/dashboard/ad-groups")}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white h-10"
              >
                Revisar Estrutura
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewFeaturesWidgets;
