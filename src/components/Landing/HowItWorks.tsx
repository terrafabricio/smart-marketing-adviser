
import React from "react";

const steps = [
  {
    number: "01",
    title: "Conecte suas plataformas",
    description: "Integramos com Google Ads, Gmail e WhatsApp para centralizar todos os seus dados de marketing."
  },
  {
    number: "02",
    title: "Visualize seus dados",
    description: "Dashboard unificado apresenta métricas-chave, gráficos interativos e insights visuais."
  },
  {
    number: "03",
    title: "Receba recomendações",
    description: "Nossa IA analisa padrões e sugere ajustes específicos para otimizar seus resultados."
  },
  {
    number: "04",
    title: "Implemente melhorias",
    description: "Aplique as recomendações com um clique ou peça ao assistente virtual mais detalhes."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-advisor-dark-purple">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como <span className="neon-text">Funciona</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Um processo simples para transformar seus dados em insights acionáveis e resultados reais.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative p-6 rounded-lg border border-border bg-card hover:border-advisor-purple/50 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-advisor-purple mb-4 opacity-50">{step.number}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6L15 12L9 18" stroke="#9b87f5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
