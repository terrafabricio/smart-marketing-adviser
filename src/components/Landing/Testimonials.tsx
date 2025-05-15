
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const testimonials = [
  {
    quote: "O AdVisor-AI transformou completamente nossa estratégia de marketing digital. As recomendações da IA nos ajudaram a reduzir o CPA em 32% em apenas um mês.",
    author: "Ana Silva",
    company: "Marketing Manager, TechStartup"
  },
  {
    quote: "A integração entre Google Ads e WhatsApp nos deu uma visão completa da jornada do cliente que nunca tivemos antes. Impressionante!",
    author: "Carlos Mendes",
    company: "CEO, Agência Digital"
  },
  {
    quote: "O assistente virtual é como ter um consultor de marketing 24/7. Ele responde nossas dúvidas com base em nossos próprios dados. Incrível!",
    author: "Patrícia Oliveira",
    company: "CMO, E-commerce Brasil"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos <span className="neon-text">clientes</span> dizem
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Empresas que já utilizam o AdVisor-AI estão transformando seus resultados
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-border bg-card hover:shadow-lg hover:border-advisor-purple/50 transition-all duration-300 card-hover">
              <CardContent className="pt-6">
                <div className="mb-4 text-advisor-purple">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.605 6C13.4037 6 14.8647 6.63214 15.988 7.89643C17.1113 9.16071 17.673 10.6607 17.673 12.3964C17.673 15.8964 15.8743 18.4643 12.277 20.1H9.21C9.96033 19.0714 10.5467 17.8964 10.969 16.575C11.3913 15.2536 11.605 13.8857 11.605 12.4714C11.605 11.9321 11.5673 11.3804 11.492 10.8161H6V6H11.605ZM23 6V10.8161H17.508C17.4327 11.3804 17.395 11.9321 17.395 12.4714C17.395 13.8857 17.6087 15.2536 18.031 16.575C18.4533 17.8964 19.0397 19.0714 19.79 20.1H16.723C13.1257 18.4643 11.327 15.8964 11.327 12.3964C11.327 10.6607 11.8887 9.16071 13.012 7.89643C14.1353 6.63214 15.5963 6 17.395 6H23Z" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-lg italic mb-6">{testimonial.quote}</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start border-t pt-4">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-sm text-muted-foreground">{testimonial.company}</div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
