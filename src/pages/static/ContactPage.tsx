
import React from "react";
import StaticPageLayout from "@/components/Layout/StaticPageLayout";
import { Mail, MessageCircle, Phone } from "lucide-react";

const ContactPage = () => {
  return (
    <StaticPageLayout title="Contato">
      <div className="space-y-8">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Entre em contato conosco! Estamos aqui para ajudar você a maximizar o potencial 
          das suas campanhas de marketing digital.
        </p>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-start gap-4 p-4 bg-card rounded-lg border">
              <Mail className="h-6 w-6 text-advisor-purple mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">contato@lumedigital.online</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Resposta em até 24 horas
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-card rounded-lg border">
              <MessageCircle className="h-6 w-6 text-advisor-purple mt-1" />
              <div>
                <h3 className="font-semibold mb-2">Suporte Técnico</h3>
                <p className="text-muted-foreground">
                  Para questões técnicas e ajuda com a plataforma
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Disponível de segunda a sexta, das 9h às 18h
                </p>
              </div>
            </div>
          </div>

          <div className="bg-advisor-purple/5 p-6 rounded-lg border border-advisor-purple/20">
            <h3 className="text-xl font-semibold mb-4 text-advisor-purple">
              Precisa de uma demonstração?
            </h3>
            <p className="text-muted-foreground mb-4">
              Agende uma apresentação personalizada da plataforma AdVisor-AI 
              e descubra como podemos ajudar sua empresa.
            </p>
            <p className="text-sm text-muted-foreground">
              Entre em contato por email e nossa equipe retornará em breve 
              para agendar uma sessão.
            </p>
          </div>
        </div>
      </div>
    </StaticPageLayout>
  );
};

export default ContactPage;
