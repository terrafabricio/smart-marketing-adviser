
import React from "react";
import StaticPageLayout from "@/components/Layout/StaticPageLayout";

const TermsPage = () => {
  return (
    <StaticPageLayout title="Termos de Uso">
      <div className="space-y-6">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Ao utilizar o AdVisor-AI, você concorda com nossos termos de serviço.
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-advisor-purple">1. Aceitação dos Termos</h2>
            <p className="text-muted-foreground">
              Ao acessar e usar a plataforma AdVisor-AI, você aceita estar vinculado a estes Termos de Uso. 
              Se você não concorda com qualquer parte destes termos, não deve usar nossos serviços.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-advisor-purple">2. Uso da Plataforma</h2>
            <p className="text-muted-foreground">
              As informações geradas têm caráter informativo e não substituem decisões de especialistas. 
              O uso da plataforma deve seguir as leis aplicáveis e nossas diretrizes de uso.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-advisor-purple">3. Responsabilidades do Usuário</h2>
            <p className="text-muted-foreground">
              Você é responsável por manter a confidencialidade de suas credenciais de acesso e por todas 
              as atividades que ocorrem em sua conta. Deve notificar-nos imediatamente sobre qualquer 
              uso não autorizado de sua conta.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3 text-advisor-purple">4. Limitação de Responsabilidade</h2>
            <p className="text-muted-foreground">
              Nossa plataforma fornece análises e recomendações baseadas em dados, mas não garantimos 
              resultados específicos. As decisões finais sobre campanhas de marketing são de 
              responsabilidade do usuário.
            </p>
          </section>

          <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
            <p className="text-sm text-amber-800">
              <strong>Importante:</strong> Consulte detalhes completos em nossa política interna ou 
              entre em contato conosco para esclarecimentos sobre estes termos.
            </p>
          </div>
        </div>
      </div>
    </StaticPageLayout>
  );
};

export default TermsPage;
