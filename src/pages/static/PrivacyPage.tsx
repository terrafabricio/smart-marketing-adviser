
import React from "react";
import StaticPageLayout from "@/components/Layout/StaticPageLayout";
import { Shield, Lock, Eye, UserCheck } from "lucide-react";

const PrivacyPage = () => {
  return (
    <StaticPageLayout title="Política de Privacidade">
      <div className="space-y-8">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Levamos sua privacidade a sério. Esta política explica como coletamos, usamos e protegemos suas informações.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex items-start gap-4 p-4 bg-card rounded-lg border">
            <Shield className="h-8 w-8 text-advisor-purple mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Coleta de Dados</h3>
              <p className="text-sm text-muted-foreground">
                Coletamos apenas dados necessários para fornecer serviços personalizados
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-card rounded-lg border">
            <Lock className="h-8 w-8 text-advisor-purple mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Proteção</h3>
              <p className="text-sm text-muted-foreground">
                Protegemos suas informações com técnicas avançadas de criptografia
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-card rounded-lg border">
            <Eye className="h-8 w-8 text-advisor-purple mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Transparência</h3>
              <p className="text-sm text-muted-foreground">
                Você tem controle total sobre seus dados e pode acessá-los a qualquer momento
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-card rounded-lg border">
            <UserCheck className="h-8 w-8 text-advisor-purple mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Seus Direitos</h3>
              <p className="text-sm text-muted-foreground">
                Você pode solicitar correção, exclusão ou portabilidade de seus dados
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-advisor-purple">Compartilhamento de Dados</h2>
            <p className="text-muted-foreground">
              Não compartilhamos dados pessoais com terceiros, exceto quando exigido por lei ou 
              para prestação de serviços essenciais da plataforma com nossos parceiros de confiança.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-advisor-purple">Retenção de Dados</h2>
            <p className="text-muted-foreground">
              Mantemos seus dados apenas pelo tempo necessário para fornecer nossos serviços 
              ou conforme exigido por lei. Você pode solicitar a exclusão de seus dados a qualquer momento.
            </p>
          </section>

          <div className="bg-advisor-purple/5 p-6 rounded-lg border border-advisor-purple/20">
            <h3 className="text-xl font-semibold mb-2 text-advisor-purple">Contato para Questões de Privacidade</h3>
            <p className="text-muted-foreground">
              Para dúvidas sobre nossa política de privacidade ou para exercer seus direitos sobre 
              dados pessoais, entre em contato conosco através do email: contato@lumedigital.online
            </p>
          </div>
        </div>
      </div>
    </StaticPageLayout>
  );
};

export default PrivacyPage;
