
import React from "react";
import { Bot, BarChart, MessageCircle, Link as LinkIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: <Bot className="h-10 w-10 text-advisor-purple" />,
    title: "Recomendações Inteligentes",
    description: "Receba sugestões personalizadas baseadas em seus dados de campanha para maximizar ROI e engajamento."
  },
  {
    icon: <BarChart className="h-10 w-10 text-advisor-bright-blue" />,
    title: "Análise Unificada",
    description: "Visualize dados de Google Ads, Gmail e WhatsApp em um único dashboard para insights completos."
  },
  {
    icon: <MessageCircle className="h-10 w-10 text-advisor-bright-orange" />,
    title: "Assistente Virtual",
    description: "Faça perguntas em linguagem natural e receba respostas baseadas em seus dados de marketing."
  },
  {
    icon: <LinkIcon className="h-10 w-10 text-advisor-purple" />,
    title: "Integrações Simplificadas",
    description: "Conecte suas contas com poucos cliques e mantenha todas as suas campanhas sincronizadas."
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Recursos <span className="neon-text">Poderosos</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Transforme sua abordagem ao marketing digital com ferramentas inovadoras e inteligência artificial.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border bg-card hover:shadow-lg hover:border-advisor-purple/50 transition-all duration-300 card-hover">
              <CardHeader className="pb-2">
                <div className="mb-4">{feature.icon}</div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
