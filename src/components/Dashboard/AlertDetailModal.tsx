
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  AlertTriangle, 
  TrendingDown, 
  TrendingUp, 
  DollarSign, 
  Calendar,
  Target,
  Eye,
  Archive
} from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface AlertDetailModalProps {
  alert: {
    id: string;
    title: string;
    description: string;
    timestamp: string;
    level: string;
    metric: string;
    priority: string;
    status: string;
    campaign: string;
    adGroup?: string;
    keyword?: string;
    previousValue: number;
    currentValue: number;
    threshold: number;
    variation: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const AlertDetailModal: React.FC<AlertDetailModalProps> = ({ alert, isOpen, onClose }) => {
  // Mock data para o gráfico de tendência
  const trendData = [
    { date: "15/01", value: alert.previousValue * 0.9 },
    { date: "16/01", value: alert.previousValue * 0.95 },
    { date: "17/01", value: alert.previousValue },
    { date: "18/01", value: alert.previousValue * 1.1 },
    { date: "19/01", value: alert.previousValue * 1.2 },
    { date: "20/01", value: alert.currentValue }
  ];

  const getMetricIcon = (metric: string) => {
    switch (metric) {
      case "CPA":
      case "Budget":
        return <DollarSign className="h-5 w-5 text-red-600" />;
      case "CTR":
        return <TrendingDown className="h-5 w-5 text-amber-600" />;
      case "Impressions":
        return <TrendingUp className="h-5 w-5 text-blue-600" />;
      default:
        return <AlertTriangle className="h-5 w-5 text-gray-600" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-600 bg-red-50";
      case "medium":
        return "text-amber-600 bg-amber-50";
      case "low":
        return "text-blue-600 bg-blue-50";
      default:
        return "text-gray-600 bg-gray-50";
    }
  };

  const formatValue = (value: number, metric: string) => {
    switch (metric) {
      case "CPA":
        return `R$ ${value.toFixed(2)}`;
      case "CTR":
        return `${value.toFixed(1)}%`;
      case "Budget":
        return `${value.toFixed(0)}%`;
      case "Impressions":
        return value.toString();
      default:
        return value.toString();
    }
  };

  const getCauses = (metric: string) => {
    switch (metric) {
      case "CPA":
        return [
          "Aumento na concorrência nas palavras-chave",
          "Queda na qualidade dos anúncios",
          "Mudanças no comportamento do público-alvo",
          "Problemas na página de destino"
        ];
      case "CTR":
        return [
          "Anúncios desatualizados ou pouco atrativos",
          "Concorrência com anúncios mais relevantes",
          "Palavras-chave com baixa intenção de compra",
          "Segmentação inadequada do público"
        ];
      case "Budget":
        return [
          "Aumento no volume de pesquisas",
          "Elevação nos CPCs das palavras-chave",
          "Expansão da segmentação geográfica",
          "Novos concorrentes no mercado"
        ];
      default:
        return ["Análise mais detalhada necessária"];
    }
  };

  const getSuggestions = (metric: string) => {
    switch (metric) {
      case "CPA":
        return [
          "Revisar e otimizar palavras-chave de baixo desempenho",
          "Testar novos textos de anúncios mais relevantes",
          "Ajustar lances baseados na performance",
          "Analisar e melhorar a página de destino"
        ];
      case "CTR":
        return [
          "Criar anúncios mais atrativos e relevantes",
          "Revisar correspondência de palavras-chave",
          "Testar diferentes chamadas para ação",
          "Segmentar público de forma mais específica"
        ];
      case "Budget":
        return [
          "Considerar aumentar o orçamento diário",
          "Redistribuir orçamento entre campanhas",
          "Pausar palavras-chave de baixo desempenho",
          "Ajustar cronograma de exibição dos anúncios"
        ];
      default:
        return ["Consulte nossa equipe de especialistas"];
    }
  };

  const handleMarkAsRead = () => {
    console.log(`Marking alert ${alert.id} as read`);
    onClose();
  };

  const handleArchive = () => {
    console.log(`Archiving alert ${alert.id}`);
    onClose();
  };

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('pt-BR');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {getMetricIcon(alert.metric)}
            {alert.title}
          </DialogTitle>
          <DialogDescription>
            {formatTimestamp(alert.timestamp)} • {alert.campaign}
            {alert.adGroup && ` • ${alert.adGroup}`}
            {alert.keyword && ` • "${alert.keyword}"`}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Informações Principais */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown className="h-4 w-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-500">Valor Anterior</span>
                </div>
                <p className="text-2xl font-bold">{formatValue(alert.previousValue, alert.metric)}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-4 w-4 text-red-600" />
                  <span className="text-sm font-medium text-gray-500">Valor Atual</span>
                </div>
                <p className="text-2xl font-bold text-red-600">
                  {formatValue(alert.currentValue, alert.metric)}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-500">Meta/Limite</span>
                </div>
                <p className="text-2xl font-bold text-blue-600">
                  {formatValue(alert.threshold, alert.metric)}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Detalhes do Alerta */}
          <Card className={`${getPriorityColor(alert.priority)} border-l-4`}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold">Detalhes do Alerta</h3>
                <Badge variant="outline" className={getPriorityColor(alert.priority)}>
                  Prioridade {alert.priority === "high" ? "Alta" : alert.priority === "medium" ? "Média" : "Baixa"}
                </Badge>
              </div>
              <p className="text-sm">{alert.description}</p>
              <div className="mt-3 flex items-center gap-4 text-sm">
                <span>Variação: <strong>{alert.variation}</strong></span>
                <span>Nível: <strong>
                  {alert.level === "campaign" ? "Campanha" : 
                   alert.level === "adgroup" ? "Grupo de Anúncios" : "Palavra-chave"}
                </strong></span>
              </div>
            </CardContent>
          </Card>

          {/* Gráfico de Tendência */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4">Tendência dos Últimos 6 Dias</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={trendData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value: number) => [formatValue(value, alert.metric), alert.metric]}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#8B5CF6" 
                      strokeWidth={2}
                      dot={{ fill: "#8B5CF6", strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Possíveis Causas */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                Possíveis Causas
              </h3>
              <ul className="space-y-2">
                {getCauses(alert.metric).map((cause, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm">
                    <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 flex-shrink-0"></span>
                    {cause}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Sugestões */}
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2 text-blue-800">
                <TrendingUp className="h-4 w-4" />
                Sugestões de Otimização
              </h3>
              <ul className="space-y-2">
                {getSuggestions(alert.metric).map((suggestion, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-blue-800">
                    <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                    {suggestion}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <DialogFooter className="gap-2">
          {alert.status === "unread" && (
            <Button variant="outline" onClick={handleMarkAsRead}>
              <Eye className="h-4 w-4 mr-2" />
              Marcar como Lido
            </Button>
          )}
          <Button variant="outline" onClick={handleArchive}>
            <Archive className="h-4 w-4 mr-2" />
            Arquivar
          </Button>
          <Button onClick={onClose}>
            Fechar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AlertDetailModal;
