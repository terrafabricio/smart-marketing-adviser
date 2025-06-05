
import React, { useState } from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Bell, 
  Settings, 
  Archive, 
  MoreHorizontal,
  AlertTriangle,
  TrendingDown,
  TrendingUp,
  DollarSign,
  Eye,
  EyeOff
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AlertDetailModal from "@/components/Dashboard/AlertDetailModal";

const AlertsPage = () => {
  const [selectedAlert, setSelectedAlert] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  // Mock data para alertas
  const alerts = [
    {
      id: "1",
      title: "CPA Alto - Campanha Principal",
      description: "CPA aumentou 45% nas últimas 24h, atingindo R$ 125,50",
      timestamp: "2024-01-15T14:30:00Z",
      level: "campaign",
      metric: "CPA",
      priority: "high",
      status: "unread",
      campaign: "Campanha Principal",
      previousValue: 86.50,
      currentValue: 125.50,
      threshold: 100.00,
      variation: "+45%"
    },
    {
      id: "2",
      title: "CTR Baixo - Grupo Mobile",
      description: "CTR caiu para 1.2%, abaixo da meta de 2.5%",
      timestamp: "2024-01-15T12:15:00Z",
      level: "adgroup",
      metric: "CTR",
      priority: "medium",
      status: "unread",
      campaign: "Campanha Mobile",
      adGroup: "Grupo Mobile Premium",
      previousValue: 2.8,
      currentValue: 1.2,
      threshold: 2.5,
      variation: "-57%"
    },
    {
      id: "3",
      title: "Orçamento Esgotado",
      description: "Campanha Black Friday atingiu 100% do orçamento diário",
      timestamp: "2024-01-15T10:00:00Z",
      level: "campaign",
      metric: "Budget",
      priority: "high",
      status: "read",
      campaign: "Campanha Black Friday",
      previousValue: 85,
      currentValue: 100,
      threshold: 95,
      variation: "+18%"
    },
    {
      id: "4",
      title: "Impressões Baixas - Palavra-chave",
      description: "Palavra-chave 'software gestão' com apenas 15 impressões hoje",
      timestamp: "2024-01-15T09:30:00Z",
      level: "keyword",
      metric: "Impressions",
      priority: "low",
      status: "read",
      campaign: "Campanha B2B",
      keyword: "software gestão",
      previousValue: 150,
      currentValue: 15,
      threshold: 50,
      variation: "-90%"
    }
  ];

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return <Badge variant="destructive">Alta</Badge>;
      case "medium":
        return <Badge variant="outline" className="border-amber-200 text-amber-700">Média</Badge>;
      case "low":
        return <Badge variant="outline" className="border-blue-200 text-blue-700">Baixa</Badge>;
      default:
        return null;
    }
  };

  const getMetricIcon = (metric: string) => {
    switch (metric) {
      case "CPA":
      case "Budget":
        return <DollarSign className="h-4 w-4" />;
      case "CTR":
        return <TrendingDown className="h-4 w-4" />;
      case "Impressions":
        return <TrendingUp className="h-4 w-4" />;
      default:
        return <AlertTriangle className="h-4 w-4" />;
    }
  };

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString('pt-BR');
  };

  const handleViewAlert = (alert: any) => {
    setSelectedAlert(alert);
    setShowModal(true);
  };

  const handleToggleRead = (alertId: string) => {
    console.log(`Toggling read status for alert ${alertId}`);
    // Implementar lógica para marcar como lido/não lido
  };

  const handleArchive = (alertId: string) => {
    console.log(`Archiving alert ${alertId}`);
    // Implementar lógica para arquivar
  };

  const unreadAlerts = alerts.filter(alert => alert.status === "unread");
  const highPriorityAlerts = alerts.filter(alert => alert.priority === "high");

  return (
    <DashboardLayout>
      <div className="space-y-6 pb-8">
        <div className="mb-10">
          <h1 className="text-2xl font-semibold text-foreground mb-2">
            Alertas de Performance
          </h1>
          <p className="text-gray-500">
            Monitore mudanças significativas no desempenho das suas campanhas
          </p>
        </div>

        {/* Cards de Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-red-100 rounded-full">
                  <Bell className="h-6 w-6 text-red-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{unreadAlerts.length}</p>
                  <p className="text-sm text-gray-500">Alertas Não Lidos</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-amber-100 rounded-full">
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{highPriorityAlerts.length}</p>
                  <p className="text-sm text-gray-500">Alta Prioridade</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Bell className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{alerts.length}</p>
                  <p className="text-sm text-gray-500">Total de Alertas</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filtros e Ações */}
        <Card className="bg-white rounded-2xl shadow-lg">
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <CardTitle className="text-lg">Filtros e Ações</CardTitle>
                <CardDescription>
                  Filtre e gerencie seus alertas de performance
                </CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Configurar Alertas
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Pesquisar alertas..."
                  className="w-full pl-10"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-[150px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos</SelectItem>
                  <SelectItem value="unread">Não lidos</SelectItem>
                  <SelectItem value="read">Lidos</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-[150px]">
                  <SelectValue placeholder="Prioridade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas</SelectItem>
                  <SelectItem value="high">Alta</SelectItem>
                  <SelectItem value="medium">Média</SelectItem>
                  <SelectItem value="low">Baixa</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-[150px]">
                  <SelectValue placeholder="Métrica" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas</SelectItem>
                  <SelectItem value="CPA">CPA</SelectItem>
                  <SelectItem value="CTR">CTR</SelectItem>
                  <SelectItem value="Budget">Orçamento</SelectItem>
                  <SelectItem value="Impressions">Impressões</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Tabela de Alertas */}
        <Card className="bg-white rounded-2xl shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">Lista de Alertas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Status</TableHead>
                    <TableHead>Data/Hora</TableHead>
                    <TableHead>Nível</TableHead>
                    <TableHead>Métrica</TableHead>
                    <TableHead>Descrição</TableHead>
                    <TableHead>Prioridade</TableHead>
                    <TableHead>Variação</TableHead>
                    <TableHead className="text-center">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {alerts.map((alert) => (
                    <TableRow 
                      key={alert.id} 
                      className={`hover:bg-gray-50 cursor-pointer ${
                        alert.status === "unread" ? "bg-blue-50" : ""
                      }`}
                      onClick={() => handleViewAlert(alert)}
                    >
                      <TableCell>
                        {alert.status === "unread" ? (
                          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        ) : (
                          <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                        )}
                      </TableCell>
                      <TableCell className="text-sm">
                        {formatTimestamp(alert.timestamp)}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-xs">
                          {alert.level === "campaign" ? "Campanha" : 
                           alert.level === "adgroup" ? "Grupo" : "Palavra-chave"}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getMetricIcon(alert.metric)}
                          <span className="text-sm">{alert.metric}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <p className="font-medium text-sm">{alert.title}</p>
                          <p className="text-xs text-gray-500 line-clamp-1">{alert.description}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        {getPriorityBadge(alert.priority)}
                      </TableCell>
                      <TableCell>
                        <Badge 
                          variant="outline" 
                          className={
                            alert.variation.startsWith("+") 
                              ? "border-red-200 text-red-700" 
                              : "border-green-200 text-green-700"
                          }
                        >
                          {alert.variation}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-center" onClick={(e) => e.stopPropagation()}>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem onClick={() => handleToggleRead(alert.id)}>
                              {alert.status === "unread" ? (
                                <>
                                  <EyeOff className="h-4 w-4 mr-2" />
                                  Marcar como lido
                                </>
                              ) : (
                                <>
                                  <Eye className="h-4 w-4 mr-2" />
                                  Marcar como não lido
                                </>
                              )}
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleArchive(alert.id)}>
                              <Archive className="h-4 w-4 mr-2" />
                              Arquivar
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Modal de Detalhes */}
        {showModal && selectedAlert && (
          <AlertDetailModal
            alert={selectedAlert}
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </DashboardLayout>
  );
};

export default AlertsPage;
