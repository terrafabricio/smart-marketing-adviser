
import React, { useState } from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
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
import { Search, Filter, Settings, List, Download } from "lucide-react";
import SearchTermModal from "@/components/Dashboard/SearchTermModal";

const SearchTermsPage = () => {
  const [selectedTerms, setSelectedTerms] = useState<string[]>([]);
  const [selectedTerm, setSelectedTerm] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  // Mock data para termos sugeridos
  const suggestedTerms = [
    {
      id: "1",
      term: "curso gratis",
      campaign: "Campanha Cursos Online",
      adGroup: "Grupo Cursos Premium",
      clicks: 156,
      cost: 234.50,
      conversions: 0,
      cpa: "N/A",
      ctr: "2.1%",
      reason: "Alto custo sem conversões"
    },
    {
      id: "2", 
      term: "download ilegal",
      campaign: "Campanha Software",
      adGroup: "Grupo Licenças",
      clicks: 89,
      cost: 145.20,
      conversions: 0,
      cpa: "N/A",
      ctr: "1.8%",
      reason: "Termo irrelevante"
    },
    {
      id: "3",
      term: "tutorial youtube",
      campaign: "Campanha Cursos Online", 
      adGroup: "Grupo Treinamentos",
      clicks: 67,
      cost: 89.30,
      conversions: 1,
      cpa: "R$ 89,30",
      ctr: "3.2%",
      reason: "CPA acima da meta"
    }
  ];

  const handleSelectTerm = (termId: string) => {
    setSelectedTerms(prev => 
      prev.includes(termId) 
        ? prev.filter(id => id !== termId)
        : [...prev, termId]
    );
  };

  const handleSelectAll = () => {
    setSelectedTerms(
      selectedTerms.length === suggestedTerms.length 
        ? [] 
        : suggestedTerms.map(term => term.id)
    );
  };

  const handleTermClick = (term: any) => {
    setSelectedTerm(term);
    setShowModal(true);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 pb-8">
        <div className="mb-10">
          <h1 className="text-2xl font-semibold text-foreground mb-2">
            Análise de Termos de Pesquisa
          </h1>
          <p className="text-gray-500">
            Identifique e negative termos irrelevantes para otimizar suas campanhas
          </p>
        </div>

        {/* Filtros e Ações */}
        <Card className="bg-white rounded-2xl shadow-lg">
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <CardTitle className="text-lg">Filtros e Ações</CardTitle>
                <CardDescription>
                  Filtre e gerencie os termos sugeridos para negativação
                </CardDescription>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <List className="h-4 w-4 mr-2" />
                  Lista Negativa
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="h-4 w-4 mr-2" />
                  Configurações
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Pesquisar termos..."
                  className="w-full pl-10"
                />
              </div>
              <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Campanha" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as campanhas</SelectItem>
                  <SelectItem value="cursos">Campanha Cursos Online</SelectItem>
                  <SelectItem value="software">Campanha Software</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Razão" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as razões</SelectItem>
                  <SelectItem value="high-cost">Alto custo</SelectItem>
                  <SelectItem value="irrelevant">Irrelevante</SelectItem>
                  <SelectItem value="high-cpa">CPA alto</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {selectedTerms.length > 0 && (
              <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg mb-4">
                <span className="text-sm font-medium">
                  {selectedTerms.length} termos selecionados
                </span>
                <div className="flex gap-2">
                  <Button size="sm" className="bg-red-600 hover:bg-red-700">
                    Adicionar como Negativo
                  </Button>
                  <Button size="sm" variant="outline">
                    Ignorar Selecionados
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Tabela de Termos Sugeridos */}
        <Card className="bg-white rounded-2xl shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Badge variant="secondary" className="bg-red-100 text-red-700">
                {suggestedTerms.length}
              </Badge>
              Termos Sugeridos para Negativação
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">
                      <Checkbox
                        checked={selectedTerms.length === suggestedTerms.length}
                        onCheckedChange={handleSelectAll}
                      />
                    </TableHead>
                    <TableHead>Termo</TableHead>
                    <TableHead>Campanha</TableHead>
                    <TableHead>Grupo de Anúncios</TableHead>
                    <TableHead className="text-right">Cliques</TableHead>
                    <TableHead className="text-right">Custo</TableHead>
                    <TableHead className="text-right">Conversões</TableHead>
                    <TableHead className="text-right">CPA</TableHead>
                    <TableHead className="text-right">CTR</TableHead>
                    <TableHead>Razão</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {suggestedTerms.map((term) => (
                    <TableRow 
                      key={term.id} 
                      className="cursor-pointer hover:bg-gray-50"
                      onClick={() => handleTermClick(term)}
                    >
                      <TableCell onClick={(e) => e.stopPropagation()}>
                        <Checkbox
                          checked={selectedTerms.includes(term.id)}
                          onCheckedChange={() => handleSelectTerm(term.id)}
                        />
                      </TableCell>
                      <TableCell className="font-medium">{term.term}</TableCell>
                      <TableCell>{term.campaign}</TableCell>
                      <TableCell>{term.adGroup}</TableCell>
                      <TableCell className="text-right">{term.clicks}</TableCell>
                      <TableCell className="text-right">R$ {term.cost.toFixed(2)}</TableCell>
                      <TableCell className="text-right">{term.conversions}</TableCell>
                      <TableCell className="text-right">{term.cpa}</TableCell>
                      <TableCell className="text-right">{term.ctr}</TableCell>
                      <TableCell>
                        <Badge 
                          variant="outline" 
                          className={
                            term.reason.includes("Alto custo") ? "border-red-200 text-red-700" :
                            term.reason.includes("irrelevante") ? "border-gray-200 text-gray-700" :
                            "border-amber-200 text-amber-700"
                          }
                        >
                          {term.reason}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Modal de Detalhes do Termo */}
        {showModal && selectedTerm && (
          <SearchTermModal
            term={selectedTerm}
            isOpen={showModal}
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </DashboardLayout>
  );
};

export default SearchTermsPage;
