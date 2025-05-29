
import React from "react";
import StaticPageLayout from "@/components/Layout/StaticPageLayout";
import { Cookie, Settings, BarChart, UserCheck } from "lucide-react";

const CookiesPage = () => {
  return (
    <StaticPageLayout title="Política de Cookies">
      <div className="space-y-8">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Utilizamos cookies e tecnologias similares para melhorar sua experiência, analisar uso da plataforma 
          e oferecer recomendações mais precisas.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex items-start gap-4 p-4 bg-card rounded-lg border">
            <Cookie className="h-8 w-8 text-advisor-purple mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Cookies Essenciais</h3>
              <p className="text-sm text-muted-foreground">
                Necessários para o funcionamento básico da plataforma
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-card rounded-lg border">
            <BarChart className="h-8 w-8 text-advisor-purple mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Cookies Analíticos</h3>
              <p className="text-sm text-muted-foreground">
                Nos ajudam a entender como você usa nossa plataforma
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-card rounded-lg border">
            <UserCheck className="h-8 w-8 text-advisor-purple mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Cookies de Personalização</h3>
              <p className="text-sm text-muted-foreground">
                Permitem oferecermos recomendações mais relevantes
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-card rounded-lg border">
            <Settings className="h-8 w-8 text-advisor-purple mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Gerenciar Preferências</h3>
              <p className="text-sm text-muted-foreground">
                Você pode controlar os cookies nas configurações do navegador
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-advisor-purple">Tipos de Cookies que Utilizamos</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-advisor-purple pl-4">
                <h4 className="font-semibold mb-1">Cookies de Sessão</h4>
                <p className="text-sm text-muted-foreground">
                  Temporários, removidos quando você fecha o navegador. Essenciais para manter sua sessão ativa.
                </p>
              </div>
              
              <div className="border-l-4 border-advisor-purple pl-4">
                <h4 className="font-semibold mb-1">Cookies Persistentes</h4>
                <p className="text-sm text-muted-foreground">
                  Permanecem no seu dispositivo por um período específico para lembrar suas preferências.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-advisor-purple">Como Gerenciar Cookies</h2>
            <p className="text-muted-foreground mb-4">
              Você pode gerenciar suas preferências de cookies nas configurações do navegador ou 
              em nosso painel de privacidade. Note que desabilitar certos cookies pode afetar 
              a funcionalidade da plataforma.
            </p>
            
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
              <p className="text-sm text-amber-800">
                <strong>Importante:</strong> Leia nossa política completa para saber como usamos 
                cada tipo de cookie e como isso beneficia sua experiência na plataforma.
              </p>
            </div>
          </section>
        </div>
      </div>
    </StaticPageLayout>
  );
};

export default CookiesPage;
