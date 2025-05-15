
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Edit, Wand } from "lucide-react";

const statusColors = {
  active: "bg-green-500/10 text-green-500 border-green-500/20",
  paused: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
  ended: "bg-red-500/10 text-red-500 border-red-500/20",
  draft: "bg-blue-500/10 text-blue-500 border-blue-500/20",
};

const campaignsData = [
  {
    id: 1,
    name: "Campanha de Pesquisa - Produtos Premium",
    platform: "Google Ads",
    status: "active",
    budget: "R$ 500,00/dia",
    impressions: "45.792",
    clicks: "3.421",
    ctr: "7.5%",
    conversions: "285",
    cpa: "R$ 35,42",
  },
  {
    id: 2,
    name: "Campanha de Remarketing - Abandono de Carrinho",
    platform: "Gmail",
    status: "active",
    budget: "R$ 300,00/dia",
    impressions: "28.451",
    clicks: "2.187",
    ctr: "7.7%",
    conversions: "198",
    cpa: "R$ 29,85",
  },
  {
    id: 3,
    name: "Campanha de Promoção - Black Friday",
    platform: "WhatsApp",
    status: "paused",
    budget: "R$ 800,00/dia",
    impressions: "92.341",
    clicks: "5.862",
    ctr: "6.3%",
    conversions: "412",
    cpa: "R$ 41,18",
  },
  {
    id: 4,
    name: "Campanha de Vídeo - Lançamento de Produto",
    platform: "Google Ads",
    status: "draft",
    budget: "R$ 650,00/dia",
    impressions: "0",
    clicks: "0",
    ctr: "0%",
    conversions: "0",
    cpa: "R$ 0,00",
  },
  {
    id: 5,
    name: "Campanha de Display - Branding",
    platform: "Google Ads",
    status: "ended",
    budget: "R$ 250,00/dia",
    impressions: "125.782",
    clicks: "3.892",
    ctr: "3.1%",
    conversions: "142",
    cpa: "R$ 45,83",
  },
];

const CampaignTable = () => {
  return (
    <div className="mb-8">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-2xl font-bold">Campanhas</h2>
          <p className="text-muted-foreground">
            Visão geral de todas as suas campanhas ativas e anteriores
          </p>
        </div>
        <Button className="bg-advisor-purple hover:bg-advisor-vivid-purple">
          Nova Campanha
        </Button>
      </div>
      
      <div className="border rounded-md">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Campanha</TableHead>
              <TableHead>Plataforma</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Orçamento</TableHead>
              <TableHead>Impressões</TableHead>
              <TableHead>Cliques</TableHead>
              <TableHead>CTR</TableHead>
              <TableHead>Conversões</TableHead>
              <TableHead>CPA</TableHead>
              <TableHead>Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {campaignsData.map((campaign) => (
              <TableRow key={campaign.id}>
                <TableCell className="font-medium">{campaign.name}</TableCell>
                <TableCell>{campaign.platform}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={statusColors[campaign.status as keyof typeof statusColors]}
                  >
                    {campaign.status === "active"
                      ? "Ativa"
                      : campaign.status === "paused"
                      ? "Pausada"
                      : campaign.status === "ended"
                      ? "Finalizada"
                      : "Rascunho"}
                  </Badge>
                </TableCell>
                <TableCell>{campaign.budget}</TableCell>
                <TableCell>{campaign.impressions}</TableCell>
                <TableCell>{campaign.clicks}</TableCell>
                <TableCell>{campaign.ctr}</TableCell>
                <TableCell>{campaign.conversions}</TableCell>
                <TableCell>{campaign.cpa}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button size="icon" variant="ghost">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost">
                      <Wand className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default CampaignTable;
