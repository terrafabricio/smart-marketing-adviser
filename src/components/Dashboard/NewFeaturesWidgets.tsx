
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Bell, Search, Target, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const NewFeaturesWidgets = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      {/* Widget de Alertas de Performance */}
      <Card className="bg-white rounded-2xl shadow-xl">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <Bell className="h-5 w-5 text-advisor-purple" />
              Alertas Recentes
            </CardTitle>
            <Badge variant="destructive" className="px-2 py-1">
              3 novos
            </Badge>
          </div>
          <CardDescription>
            Mudanças significativas detectadas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-2 bg-red-50 rounded-lg">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  CPA Alto - Campanha Principal
                </p>
                <p className="text-xs text-gray-500">há 2 horas</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2 bg-amber-50 rounded-lg">
              <TrendingUp className="h-4 w-4 text-amber-600" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  CTR Baixo - Grupo Mobile
                </p>
                <p className="text-xs text-gray-500">há 4 horas</p>
              </div>
            </div>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full mt-4"
            onClick={() => navigate("/dashboard/alerts")}
          >
            Ver Todos os Alertas
          </Button>
        </CardContent>
      </Card>

      {/* Widget de Termos de Pesquisa */}
      <Card className="bg-white rounded-2xl shadow-xl">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <Search className="h-5 w-5 text-advisor-purple" />
              Termos para Negativação
            </CardTitle>
            <Badge variant="secondary" className="px-2 py-1 bg-advisor-purple/10 text-advisor-purple">
              12 sugestões
            </Badge>
          </div>
          <CardDescription>
            Identificados esta semana
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium">"curso gratis"</p>
                <p className="text-xs text-gray-500">R$ 234 gasto, 0 conversões</p>
              </div>
              <Badge variant="outline" className="text-xs">
                Alto CPA
              </Badge>
            </div>
            <div className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
              <div>
                <p className="text-sm font-medium">"download ilegal"</p>
                <p className="text-xs text-gray-500">56 cliques, 0 conversões</p>
              </div>
              <Badge variant="outline" className="text-xs">
                Irrelevante
              </Badge>
            </div>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full mt-4"
            onClick={() => navigate("/dashboard/search-terms")}
          >
            Analisar Termos
          </Button>
        </CardContent>
      </Card>

      {/* Widget de Estrutura de Grupos */}
      <Card className="bg-white rounded-2xl shadow-xl">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <Target className="h-5 w-5 text-advisor-purple" />
              Estrutura de Grupos
            </CardTitle>
            <Badge variant="outline" className="px-2 py-1">
              5 problemas
            </Badge>
          </div>
          <CardDescription>
            Grupos com intenções mistas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-2 bg-amber-50 rounded-lg">
              <AlertTriangle className="h-4 w-4 text-amber-600" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  Grupo "Produtos Premium"
                </p>
                <p className="text-xs text-gray-500">Intenções comerciais mistas</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-2 bg-green-50 rounded-lg">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  45 grupos bem estruturados
                </p>
                <p className="text-xs text-gray-500">Sem problemas detectados</p>
              </div>
            </div>
          </div>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full mt-4"
            onClick={() => navigate("/dashboard/ad-groups")}
          >
            Analisar Estrutura
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default NewFeaturesWidgets;
