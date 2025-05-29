
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
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface Campaign {
  id: string;
  name: string;
  startDate: Date;
  type: string;
  budget: number;
  status: "active" | "paused";
  summary: string;
}

const mockDetailedCampaigns: Campaign[] = [
  {
    id: "1",
    name: "Campanha Black Friday",
    startDate: new Date(2024, 10, 1),
    type: "Busca",
    budget: 5000,
    status: "active",
    summary: "CTR: 3.2% | CPC: R$ 1.50",
  },
  {
    id: "2",
    name: "Produtos de Verão",
    startDate: new Date(2024, 9, 15),
    type: "Display",
    budget: 3000,
    status: "active",
    summary: "Impressões: 45.2k | CPM: R$ 12.80",
  },
  {
    id: "3",
    name: "Lançamento Nova Coleção",
    startDate: new Date(2024, 9, 20),
    type: "Shopping",
    budget: 8000,
    status: "paused",
    summary: "ROAS: 4.2x | Conversões: 156",
  },
  {
    id: "4",
    name: "Promoção Final de Ano",
    startDate: new Date(2024, 11, 1),
    type: "Performance Max",
    budget: 10000,
    status: "active",
    summary: "CPA: R$ 25.30 | Taxa Conv: 2.8%",
  },
  {
    id: "5",
    name: "Campanha Volta às Aulas",
    startDate: new Date(2024, 1, 10),
    type: "Vídeo",
    budget: 4500,
    status: "paused",
    summary: "Visualizações: 125k | CPV: R$ 0.45",
  },
];

const DetailedCampaignList = () => {
  return (
    <div className="bg-white rounded-lg border">
      <div className="p-6 border-b">
        <h3 className="text-xl font-semibold text-gray-900">Todas as Campanhas</h3>
        <p className="text-sm text-gray-600 mt-1">
          Lista completa de campanhas da sua conta
        </p>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome da Campanha</TableHead>
            <TableHead>Data de Início</TableHead>
            <TableHead>Tipo</TableHead>
            <TableHead>Orçamento</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Resumo</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockDetailedCampaigns.map((campaign) => (
            <TableRow key={campaign.id} className="hover:bg-gray-50">
              <TableCell className="font-medium">{campaign.name}</TableCell>
              <TableCell>
                {formatDistanceToNow(campaign.startDate, {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </TableCell>
              <TableCell>{campaign.type}</TableCell>
              <TableCell>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(campaign.budget)}
              </TableCell>
              <TableCell>
                <Badge
                  variant={campaign.status === "active" ? "default" : "secondary"}
                  className={
                    campaign.status === "active"
                      ? "bg-green-100 text-green-800 hover:bg-green-200"
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }
                >
                  {campaign.status === "active" ? "Ativa" : "Pausada"}
                </Badge>
              </TableCell>
              <TableCell className="text-sm text-gray-600">
                {campaign.summary}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DetailedCampaignList;
