
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
import { AlertTriangle, TrendingDown, DollarSign, MousePointer } from "lucide-react";

interface SearchTermModalProps {
  term: {
    term: string;
    campaign: string;
    adGroup: string;
    clicks: number;
    cost: number;
    conversions: number;
    cpa: string;
    ctr: string;
    reason: string;
  };
  isOpen: boolean;
  onClose: () => void;
}

const SearchTermModal: React.FC<SearchTermModalProps> = ({ term, isOpen, onClose }) => {
  const handleAddAsNegative = (matchType: "exact" | "phrase") => {
    console.log(`Adding "${term.term}" as ${matchType} negative keyword`);
    // Aqui implementaria a lógica para adicionar como palavra negativa
    onClose();
  };

  const handleIgnore = () => {
    console.log(`Ignoring term "${term.term}"`);
    // Aqui implementaria a lógica para ignorar o termo
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-600" />
            Detalhes do Termo: "{term.term}"
          </DialogTitle>
          <DialogDescription>
            Analise os dados detalhados e decida a ação para este termo de pesquisa
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Informações Básicas */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-500">Campanha</label>
              <p className="font-medium">{term.campaign}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Grupo de Anúncios</label>
              <p className="font-medium">{term.adGroup}</p>
            </div>
          </div>

          {/* Métricas */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <MousePointer className="h-4 w-4 text-blue-600" />
                  <span className="text-sm font-medium text-gray-500">Cliques</span>
                </div>
                <p className="text-2xl font-bold">{term.clicks}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-medium text-gray-500">Custo</span>
                </div>
                <p className="text-2xl font-bold">R$ {term.cost.toFixed(2)}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <TrendingDown className="h-4 w-4 text-red-600" />
                  <span className="text-sm font-medium text-gray-500">Conversões</span>
                </div>
                <p className="text-2xl font-bold">{term.conversions}</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-500">CTR</span>
                </div>
                <p className="text-2xl font-bold">{term.ctr}</p>
              </CardContent>
            </Card>
          </div>

          {/* Razão da Sugestão */}
          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                <span className="font-medium text-amber-800">Razão da Sugestão</span>
              </div>
              <p className="text-amber-800">{term.reason}</p>
              {term.conversions === 0 && (
                <p className="text-sm text-amber-700 mt-2">
                  Este termo gerou {term.clicks} cliques custando R$ {term.cost.toFixed(2)} sem gerar nenhuma conversão.
                </p>
              )}
            </CardContent>
          </Card>

          {/* CPA Análise */}
          {term.cpa !== "N/A" && (
            <Card className="bg-red-50 border-red-200">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-medium text-red-800">CPA Atual</span>
                    <p className="text-2xl font-bold text-red-600">{term.cpa}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-red-700">Meta: R$ 50,00</span>
                    <Badge variant="destructive" className="block mt-1">
                      78% acima da meta
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={handleIgnore}>
            Ignorar
          </Button>
          <Button 
            variant="outline" 
            onClick={() => handleAddAsNegative("phrase")}
            className="border-red-200 text-red-700 hover:bg-red-50"
          >
            Adicionar como Frase Negativa
          </Button>
          <Button 
            onClick={() => handleAddAsNegative("exact")}
            className="bg-red-600 hover:bg-red-700"
          >
            Adicionar como Exata Negativa
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default SearchTermModal;
