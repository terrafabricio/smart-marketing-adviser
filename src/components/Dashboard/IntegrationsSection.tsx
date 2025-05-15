
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface IntegrationCardProps {
  name: string;
  icon: React.ReactNode;
  status: "connected" | "disconnected" | "pending";
  description: string;
  recommendation?: string;
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({
  name,
  icon,
  status,
  description,
  recommendation,
}) => {
  const statusColors = {
    connected: "bg-green-500/10 text-green-500 border-green-500/20",
    disconnected: "bg-red-500/10 text-red-500 border-red-500/20",
    pending: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  };

  const statusLabels = {
    connected: "Conectado",
    disconnected: "Desconectado",
    pending: "Pendente",
  };

  return (
    <Card className="border border-border bg-card hover:shadow-lg transition-all card-hover">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 flex items-center justify-center rounded-full bg-advisor-purple/10">
              {icon}
            </div>
            <CardTitle>{name}</CardTitle>
          </div>
          <Badge
            variant="outline"
            className={statusColors[status]}
          >
            {statusLabels[status]}
          </Badge>
        </div>
        <CardDescription className="mt-2">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {recommendation && (
          <div className="bg-advisor-purple/10 p-3 rounded-md border border-advisor-purple/30 mb-4">
            <div className="flex items-start gap-2">
              <svg className="h-5 w-5 text-advisor-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-sm">{recommendation}</p>
            </div>
          </div>
        )}
        
        <Button
          className={
            status === "connected"
              ? "w-full bg-destructive hover:bg-destructive/90"
              : "w-full bg-advisor-purple hover:bg-advisor-vivid-purple"
          }
        >
          <Link className="h-4 w-4 mr-2" />
          {status === "connected" ? "Desconectar" : "Conectar"}
        </Button>
      </CardContent>
    </Card>
  );
};

const IntegrationsSection = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-2 mb-4">
        <h2 className="text-2xl font-bold">Integrações</h2>
      </div>
      <p className="text-muted-foreground mb-6">
        Conecte suas plataformas de marketing para obter insights completos
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <IntegrationCard
          name="Google Ads"
          icon={
            <svg className="h-5 w-5 text-advisor-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
            </svg>
          }
          status="connected"
          description="Integre suas campanhas do Google Ads para análise completa e otimização automática."
        />
        
        <IntegrationCard
          name="Gmail"
          icon={
            <svg className="h-5 w-5 text-advisor-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
          status="disconnected"
          description="Analise campanhas de email, taxas de abertura e conversões diretamente do Gmail."
          recommendation="Nossa IA sugere conectar o Gmail para melhorar as recomendações de marketing por email."
        />
        
        <IntegrationCard
          name="WhatsApp"
          icon={
            <svg className="h-5 w-5 text-advisor-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          }
          status="pending"
          description="Integre conversas e campanhas do WhatsApp Business para uma visão completa do cliente."
        />
      </div>
    </div>
  );
};

export default IntegrationsSection;
