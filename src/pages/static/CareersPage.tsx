
import React from "react";
import StaticPageLayout from "@/components/Layout/StaticPageLayout";
import { Briefcase, Users, Trophy } from "lucide-react";

const CareersPage = () => {
  return (
    <StaticPageLayout title="Carreiras">
      <div className="space-y-8">
        <p className="text-lg text-muted-foreground leading-relaxed">
          Junte-se ao time AdVisor-AI! Buscamos talentos apaixonados por tecnologia, 
          marketing digital e inteligência artificial.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="text-center p-6 bg-card rounded-lg border">
            <Users className="h-12 w-12 text-advisor-purple mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Ambiente Colaborativo</h3>
            <p className="text-sm text-muted-foreground">
              Trabalhe em equipe com profissionais talentosos em um ambiente inovador
            </p>
          </div>

          <div className="text-center p-6 bg-card rounded-lg border">
            <Trophy className="h-12 w-12 text-advisor-purple mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Aprendizado Contínuo</h3>
            <p className="text-sm text-muted-foreground">
              Invista no seu desenvolvimento com treinamentos e certificações
            </p>
          </div>

          <div className="text-center p-6 bg-card rounded-lg border">
            <Briefcase className="h-12 w-12 text-advisor-purple mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Plano de Carreira</h3>
            <p className="text-sm text-muted-foreground">
              Cresça profissionalmente com um plano de carreira estruturado
            </p>
          </div>
        </div>

        <div className="bg-advisor-purple/5 p-6 rounded-lg border border-advisor-purple/20">
          <h2 className="text-2xl font-semibold mb-4 text-advisor-purple">Como se candidatar</h2>
          <p className="text-muted-foreground mb-4">
            Oferecemos ambiente colaborativo, aprendizado contínuo e plano de carreira estruturado. 
            Valorizamos a diversidade e a inovação em nossa equipe.
          </p>
          <p className="text-muted-foreground">
            <strong>Envie seu currículo para:</strong> recrutamento@advisor-ai.com
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Inclua uma carta de apresentação explicando por que você gostaria de fazer parte da nossa equipe.
          </p>
        </div>
      </div>
    </StaticPageLayout>
  );
};

export default CareersPage;
