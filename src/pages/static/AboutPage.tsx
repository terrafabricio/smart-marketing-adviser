
import React from "react";
import StaticPageLayout from "@/components/Layout/StaticPageLayout";

const AboutPage = () => {
  return (
    <StaticPageLayout title="Sobre nós">
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground leading-relaxed">
          AdVisor-AI é a plataforma de análise de campanhas do Google Ads impulsionada por inteligência artificial. 
          Nossa missão é fornecer insights acionáveis em tempo real para maximizar seu ROI.
        </p>
        
        <p className="text-muted-foreground leading-relaxed">
          Com métricas claras e recomendações automatizadas, ajudamos anunciantes a economizar tempo e 
          otimizar orçamentos de forma inteligente. Nossa tecnologia avançada analisa padrões complexos 
          em seus dados de campanhas e oferece sugestões personalizadas para melhorar o desempenho.
        </p>

        <div className="bg-advisor-purple/5 p-6 rounded-lg border border-advisor-purple/20">
          <h2 className="text-2xl font-semibold mb-4 text-advisor-purple">Nossa Visão</h2>
          <p className="text-muted-foreground">
            Democratizar o acesso a análises avançadas de marketing digital, permitindo que empresas 
            de todos os tamanhos possam competir no mercado digital com estratégias baseadas em dados 
            e inteligência artificial.
          </p>
        </div>
      </div>
    </StaticPageLayout>
  );
};

export default AboutPage;
