
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
import { Search, AlertTriangle, CheckCircle, Target, Eye } from "lucide-react";
import AdGroupDetailModal from "@/components/Dashboard/AdGroupDetailModal";

const AdGroupsPage = () => {
  const [selectedAdGroup, setSelectedAdGroup] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  // Mock data para grupos de anúncios
  const adGroups = [
    {
      id: "1",
      name: "Produtos Premium",
      campaign: "Campanha E-commerce",
      status: "needs-attention",
      keywordCount: 15,
      issues: ["Intenções comerciais mistas", "Palavras-chave conflitantes"],
      keywords: [
        { keyword: "comprar produto premium", intent: "commercial" },
        { keyword: "produto premium preço", intent: "commercial" },
        { keyword: "o que é produto premium", intent: "informational" },
        { keyword: "melhor produto premium 2024", intent: "informational" },
        { keyword: "produto premium barato", intent: "commercial" }
      ]
    },
    {
      id: "2",
      name: "Cursos Online",
      campaign: "Campanha Educação",
      status: "ok",
      keywordCount: 12,
      issues: [],
      keywords: []
    },
    {
      id: "3",
      name: "Software de Gestão",
      campaign: "Campanha B2B",
      status: "needs-attention", 
      keywordCount: 8,
      issues: ["Marcas concorrentes incluídas"],
      keywords: [
        { keyword: "software gestão empresarial", intent: "commercial" },
        { keyword: "melhor software gestão", intent: "commercial" },
        { keyword: "software concorrente X", intent: "competitor" },
        { keyword: "alternativa software Y", intent: "competitor" }
      ]
    },
    {
      id: "4",
      name: "Treinamentos Corporativos",
      campaign: "Campanha Educação",
      status: "ok",
      keywordCount: 20,
      issues: [],
      keywords: []
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ok":
        return (
          <Badge variant="outline" className="border-green-200 text-green-700">
            <CheckCircle className="h-3 w-3 mr-1" />
            OK
          </Badge>
        );
      case "needs-attention":
        return (
          <Badge variant="outline" className="border-amber-200 text-amber-700">
            <AlertTriangle className="h-3 w-3 mr-1" />
            Requer Atenção
          </Badge>
        );
      default:
        return null;
    }
  };

  const handleViewDetails = (adGroup: any) => {
    setSelectedAdGroup(adGroup);
    setShowModal(true);
  };

  const okGroups = adGroups.filter(group => group.status === "ok");
  const problemGroups = adGroups.filter(group => group.status === "needs-attention");

  return (
    <DashboardLayout>
      <div className="space-y-6 pb-8">
        <div className="mb-10">
          <h1 className="text-2xl font-semibold text-foreground mb-2">
            Análise da Estrutura de Grupos de Anúncios
          </h1>
          <p className="text-gray-500">
            Identifique grupos com mistura de intenções de palavras-chave para melhorar a performance
          </p>
        </div>

        {/* Cards de Resumo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-green-100 rounded-full">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{okGroups.length}</p>
                  <p className="text-sm text-gray-500">Grupos Bem Estruturados</p>
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
                  <p className="text-2xl font-bold text-gray-900">{problemGroups.length}</p>
                  <p className="text-sm text-gray-500">Grupos com Problemas</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white rounded-2xl shadow-lg">
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-blue-100 rounded-full">
                  <Target className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{adGroups.length}</p>
                  <p className="text-sm text-gray-500">Total de Grupos</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filtros */}
        <Card className="bg-white rounded-2xl shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">Filtros</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Pesquisar grupos..."
                  className="w-full pl-10"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Campanha" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as campanhas</SelectItem>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="education">Educação</SelectItem>
                  <SelectItem value="b2b">B2B</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos os status</SelectItem>
                  <SelectItem value="ok">OK</SelectItem>
                  <SelectItem value="needs-attention">Requer Atenção</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Tabela de Grupos de Anúncios */}
        <Card className="bg-white rounded-2xl shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg">Grupos de Anúncios</CardTitle>
            <CardDescription>
              Clique em um grupo para ver detalhes dos problemas estruturais
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome do Grupo</TableHead>
                    <TableHead>Campanha</TableHead>
                    <TableHead className="text-center">Palavras-chave</TableHead>
                    <TableHead className="text-center">Status da Análise</TableHead>
                    <TableHead>Problemas Identificados</TableHead>
                    <TableHead className="text-center">Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {adGroups.map((group) => (
                    <TableRow key={group.id} className="hover:bg-gray-50">
                      <TableCell className="font-medium">{group.name}</TableCell>
                      <TableCell>{group.campaign}</TableCell>
                      <TableCell className="text-center">{group.keywordCount}</TableCell>
                      <TableCell className="text-center">
                        {getStatusBadge(group.status)}
                      </TableCell>
                      <TableCell>
                        {group.issues.length > 0 ? (
                          <div className="space-y-1">
                            {group.issues.map((issue, index) => (
                              <Badge key={index} variant="outline" className="text-xs mr-1">
                                {issue}
                              </Badge>
                            ))}
                          </div>
                        ) : (
                          <span className="text-gray-400 text-sm">Nenhum problema</span>
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleViewDetails(group)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                          Ver Detalhes
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Modal de Detalhes */}
        {showModal && selectedAdGroup && (
          <AdGroupDetailModal
            adGroup={selectedAdGroup}
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </DashboardLayout>
  );
};

export default AdGroupsPage;
