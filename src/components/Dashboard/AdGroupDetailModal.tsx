
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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, Target, Info, TrendingUp } from "lucide-react";

interface AdGroupDetailModalProps {
  adGroup: {
    name: string;
    campaign: string;
    status: string;
    keywordCount: number;
    issues: string[];
    keywords: Array<{
      keyword: string;
      intent: string;
    }>;
  };
  isOpen: boolean;
  onClose: () => void;
}

const AdGroupDetailModal: React.FC<AdGroupDetailModalProps> = ({ adGroup, isOpen, onClose }) => {
  const getIntentColor = (intent: string) => {
    switch (intent) {
      case "commercial":
        return "border-green-200 text-green-700 bg-green-50";
      case "informational":
        return "border-blue-200 text-blue-700 bg-blue-50";
      case "competitor":
        return "border-red-200 text-red-700 bg-red-50";
      default:
        return "border-gray-200 text-gray-700 bg-gray-50";
    }
  };

  const getIntentLabel = (intent: string) => {
    switch (intent) {
      case "commercial":
        return "Comercial";
      case "informational":
        return "Informacional";
      case "competitor":
        return "Concorrente";
      default:
        return intent;
    }
  };

  const groupedKeywords = adGroup.keywords.reduce((acc, keyword) => {
    if (!acc[keyword.intent]) {
      acc[keyword.intent] = [];
    }
    acc[keyword.intent].push(keyword);
    return acc;
  }, {} as Record<string, Array<{ keyword: string; intent: string }>>);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-advisor-purple" />
            Detalhes do Grupo: "{adGroup.name}"
          </DialogTitle>
          <DialogDescription>
            {adGroup.campaign} • {adGroup.keywordCount} palavras-chave
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Problemas Identificados */}
          {adGroup.issues.length > 0 && (
            <Card className="bg-amber-50 border-amber-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-amber-600" />
                  Problemas Identificados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {adGroup.issues.map((issue, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-white rounded-lg">
                      <AlertTriangle className="h-4 w-4 text-amber-600 mt-0.5" />
                      <div>
                        <p className="font-medium text-amber-800">{issue}</p>
                        {issue.includes("intenções") && (
                          <p className="text-sm text-amber-700 mt-1">
                            Este grupo mistura palavras-chave com intenções diferentes, o que pode reduzir a relevância dos anúncios e impactar negativamente o Quality Score.
                          </p>
                        )}
                        {issue.includes("concorrentes") && (
                          <p className="text-sm text-amber-700 mt-1">
                            Palavras-chave de marcas concorrentes podem gerar cliques irrelevantes e aumentar o CPC desnecessariamente.
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Análise de Palavras-chave por Intenção */}
          {adGroup.keywords.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Info className="h-5 w-5 text-blue-600" />
                  Análise de Palavras-chave por Intenção
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(groupedKeywords).map(([intent, keywords]) => (
                    <div key={intent} className="space-y-2">
                      <h4 className="font-medium flex items-center gap-2">
                        <Badge className={getIntentColor(intent)}>
                          {getIntentLabel(intent)}
                        </Badge>
                        <span className="text-sm text-gray-500">
                          ({keywords.length} palavras-chave)
                        </span>
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {keywords.map((keyword, index) => (
                          <div key={index} className="p-2 bg-gray-50 rounded text-sm">
                            {keyword.keyword}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Recomendações */}
          {adGroup.issues.length > 0 && (
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                  Recomendações
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {adGroup.issues.some(issue => issue.includes("intenções")) && (
                    <div className="p-3 bg-white rounded-lg">
                      <h5 className="font-medium text-blue-800 mb-2">
                        Separar por Intenção de Pesquisa
                      </h5>
                      <p className="text-sm text-blue-700 mb-2">
                        Crie grupos separados para cada tipo de intenção:
                      </p>
                      <ul className="text-sm text-blue-700 space-y-1 ml-4">
                        <li>• Grupo "Produtos Premium - Comercial" para palavras de compra</li>
                        <li>• Grupo "Produtos Premium - Informacional" para pesquisas educativas</li>
                      </ul>
                    </div>
                  )}
                  
                  {adGroup.issues.some(issue => issue.includes("concorrentes")) && (
                    <div className="p-3 bg-white rounded-lg">
                      <h5 className="font-medium text-blue-800 mb-2">
                        Remover Marcas Concorrentes
                      </h5>
                      <p className="text-sm text-blue-700">
                        Considere adicionar marcas concorrentes como palavras-chave negativas ou movê-las para um grupo específico com anúncios comparativos.
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Grupo OK */}
          {adGroup.issues.length === 0 && (
            <Card className="bg-green-50 border-green-200">
              <CardContent className="p-6 text-center">
                <div className="flex flex-col items-center gap-3">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-green-800">Grupo Bem Estruturado</h3>
                    <p className="text-sm text-green-700 mt-1">
                      Este grupo não apresenta problemas estruturais detectados pela nossa análise.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Fechar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AdGroupDetailModal;
