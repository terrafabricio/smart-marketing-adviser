
import React, { useState, useEffect } from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bot, Send, BarChart3, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

interface AnalysisResult {
  id: string;
  title: string;
  description: string;
  score: number;
  type: "good" | "warning" | "critical";
}

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const AiAnalysisPage = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResults, setAnalysisResults] = useState<AnalysisResult[]>([]);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      text: "Olá! Sou a IA de análise do AdVisor-AI. Acabei de analisar todos os dados do seu dashboard. Posso explicar qualquer resultado ou responder suas dúvidas sobre as análises.",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isChatLoading, setIsChatLoading] = useState(false);

  const runAnalysis = async () => {
    setIsAnalyzing(true);
    
    // Simular análise da IA
    setTimeout(() => {
      const mockResults: AnalysisResult[] = [
        {
          id: "1",
          title: "Desempenho Geral das Campanhas",
          description: "Suas campanhas estão com performance 23% acima da média do setor. O CTR médio de 3.2% indica alta relevância dos anúncios.",
          score: 85,
          type: "good"
        },
        {
          id: "2",
          title: "Otimização de Orçamento",
          description: "Identifiquei uma oportunidade de redistribuir 15% do orçamento das campanhas de menor performance para maximizar o ROI.",
          score: 65,
          type: "warning"
        },
        {
          id: "3",
          title: "Segmentação de Público",
          description: "A segmentação por idade 25-34 anos apresenta custo por conversão 40% menor. Recomendo aumentar investimento neste grupo.",
          score: 92,
          type: "good"
        },
        {
          id: "4",
          title: "Palavras-chave Negativas",
          description: "Detectei 12 termos que estão gerando cliques irrelevantes. Adicionar como palavras-chave negativas pode economizar 8% do orçamento.",
          score: 45,
          type: "critical"
        }
      ];
      
      setAnalysisResults(mockResults);
      setIsAnalyzing(false);
    }, 3000);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setChatMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsChatLoading(true);

    // Simular resposta da IA
    setTimeout(() => {
      const aiResponses = [
        "Baseado na análise dos dados, essa tendência se deve principalmente ao aumento do engajamento mobile, que cresceu 34% no último mês.",
        "Essa métrica está relacionada à otimização automática de lances que implementei. Os algoritmos identificaram os horários de maior conversão.",
        "O padrão que você observou é comum quando há mudanças sazonais. Recomendo ajustar as estratégias de bidding para esse período.",
        "Essa variação está dentro do esperado. Os dados históricos mostram comportamento similar nos últimos 3 trimestres.",
        "Identifiquei que essa melhoria está diretamente ligada às otimizações de público-alvo que foram aplicadas automaticamente."
      ];

      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];

      const aiMessage: ChatMessage = {
        id: Date.now().toString(),
        text: randomResponse,
        isUser: false,
        timestamp: new Date(),
      };

      setChatMessages((prev) => [...prev, aiMessage]);
      setIsChatLoading(false);
    }, 1500);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "good": return <CheckCircle className="h-5 w-5 text-green-600" />;
      case "warning": return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
      case "critical": return <AlertTriangle className="h-5 w-5 text-red-600" />;
      default: return <BarChart3 className="h-5 w-5" />;
    }
  };

  useEffect(() => {
    runAnalysis();
  }, []);

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Análise com IA</h1>
            <p className="text-muted-foreground">
              Análise inteligente dos seus dados de campanha com insights personalizados
            </p>
          </div>
          <Button 
            onClick={runAnalysis}
            disabled={isAnalyzing}
            className="bg-advisor-purple hover:bg-advisor-vivid-purple"
          >
            <Bot className="h-4 w-4 mr-2" />
            {isAnalyzing ? "Analisando..." : "Nova Análise"}
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Resultados da Análise */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Resultados da Análise
            </h2>
            
            {isAnalyzing ? (
              <Card className="p-6">
                <div className="flex items-center justify-center space-x-2">
                  <Bot className="h-6 w-6 text-advisor-purple animate-pulse" />
                  <span>Analisando seus dados...</span>
                </div>
                <div className="mt-4 space-y-2">
                  <div className="h-2 bg-gray-200 rounded animate-pulse"></div>
                  <div className="h-2 bg-gray-200 rounded animate-pulse w-4/5"></div>
                  <div className="h-2 bg-gray-200 rounded animate-pulse w-3/5"></div>
                </div>
              </Card>
            ) : (
              <div className="space-y-4">
                {analysisResults.map((result) => (
                  <Card key={result.id} className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {getTypeIcon(result.type)}
                        <h3 className="font-medium">{result.title}</h3>
                      </div>
                      <span className={`text-sm font-semibold ${getScoreColor(result.score)}`}>
                        {result.score}/100
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{result.description}</p>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Chat com IA */}
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-4">
              <Bot className="h-5 w-5" />
              Chat com Analista IA
            </h2>
            
            <Card className="flex-1 flex flex-col h-[600px]">
              <div className="flex-1 overflow-auto p-4 space-y-4">
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.isUser
                          ? "bg-advisor-purple text-white"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                  </div>
                ))}
                {isChatLoading && (
                  <div className="flex justify-start">
                    <div className="max-w-[80%] rounded-lg p-3 bg-muted text-foreground animate-pulse">
                      <div className="flex space-x-2">
                        <div className="h-2 w-2 rounded-full bg-advisor-purple"></div>
                        <div className="h-2 w-2 rounded-full bg-advisor-purple"></div>
                        <div className="h-2 w-2 rounded-full bg-advisor-purple"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-4 border-t flex gap-2">
                <Input
                  placeholder="Pergunte sobre as análises..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                  className="flex-1"
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-advisor-purple hover:bg-advisor-vivid-purple"
                  size="icon"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default AiAnalysisPage;
