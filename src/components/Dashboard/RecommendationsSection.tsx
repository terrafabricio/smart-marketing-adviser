
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, ArrowRight, Wand } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";

interface RecommendationCardProps {
  title: string;
  description: string;
  impact: string;
  difficulty: string;
}

const RecommendationCard: React.FC<RecommendationCardProps> = ({
  title,
  description,
  impact,
  difficulty,
}) => {
  const { toast } = useToast();

  const handleApply = () => {
    toast({
      title: "Recomendação aplicada!",
      description: "A otimização foi aplicada com sucesso.",
      variant: "default",
    });
  };

  return (
    <Card className="border border-border bg-card hover:shadow-lg transition-all card-hover">
      <CardHeader className="pb-2">
        <div className="flex items-start gap-2">
          <Lightbulb className="h-5 w-5 text-advisor-purple mt-1" />
          <div>
            <CardTitle>{title}</CardTitle>
            <CardDescription className="mt-1">{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div>
            <p className="text-sm text-muted-foreground">Impacto estimado</p>
            <p className="font-medium">{impact}</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Dificuldade</p>
            <p className="font-medium">{difficulty}</p>
          </div>
        </div>
      </CardContent>
      <Separator />
      <CardFooter className="pt-4">
        <div className="flex justify-between w-full">
          <Button variant="outline" size="sm">
            Ver detalhes
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            onClick={handleApply}
            className="bg-advisor-purple hover:bg-advisor-vivid-purple"
            size="sm"
          >
            <Wand className="mr-2 h-4 w-4" />
            Aplicar
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

const RecommendationsSection = () => {
  const recommendations = [
    {
      title: "Aumentar orçamento em campanhas de alto desempenho",
      description:
        "Três campanhas mostraram ROAS acima de 4x. Recomendamos aumentar o orçamento diário em 20%.",
      impact: "Potencial de +15% em conversões",
      difficulty: "Baixa",
    },
    {
      title: "Otimizar segmentação de audiência no Gmail",
      description:
        "Suas campanhas de Gmail podem ser mais eficazes com segmentação baseada em interesses similares.",
      impact: "Potencial de -10% em CPA",
      difficulty: "Média",
    },
    {
      title: "Melhorar CTR com novos textos de anúncios",
      description:
        "Seus anúncios de pesquisa estão com CTR abaixo da média do setor. Sugerimos novos textos com mais apelo emocional.",
      impact: "Potencial de +25% em CTR",
      difficulty: "Média",
    },
    {
      title: "Integrar WhatsApp ao funil de conversão",
      description:
        "Adicionar botões de WhatsApp aos anúncios e landing pages pode aumentar significativamente as taxas de conversão.",
      impact: "Potencial de +30% em interações",
      difficulty: "Alta",
    },
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-2xl font-bold">Recomendações da IA</h2>
        <div className="bg-advisor-purple/20 text-advisor-purple px-2 py-1 rounded text-xs font-medium">
          4 novas
        </div>
      </div>
      <p className="text-muted-foreground mb-6">
        Sugestões inteligentes baseadas na análise dos seus dados
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {recommendations.map((recommendation, index) => (
          <RecommendationCard
            key={index}
            title={recommendation.title}
            description={recommendation.description}
            impact={recommendation.impact}
            difficulty={recommendation.difficulty}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendationsSection;
