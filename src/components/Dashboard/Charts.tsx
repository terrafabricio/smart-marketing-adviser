
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Data mocks
const performanceData = [
  { name: "Jan", impressions: 40000, cliques: 2400, conversoes: 400 },
  { name: "Fev", impressions: 30000, cliques: 1398, conversoes: 210 },
  { name: "Mar", impressions: 20000, cliques: 9800, conversoes: 290 },
  { name: "Abr", impressions: 27800, cliques: 3908, conversoes: 350 },
  { name: "Mai", impressions: 18900, cliques: 4800, conversoes: 480 },
  { name: "Jun", impressions: 23900, cliques: 3800, conversoes: 420 },
  { name: "Jul", impressions: 34900, cliques: 4300, conversoes: 380 },
];

const conversionData = [
  { name: "Pesquisa", valor: 4000 },
  { name: "Display", valor: 3000 },
  { name: "Gmail", valor: 2000 },
  { name: "WhatsApp", valor: 2780 },
  { name: "Vídeo", valor: 1890 },
];

const channelData = [
  { name: "Google Ads", valor: 59 },
  { name: "WhatsApp", valor: 28 },
  { name: "Gmail", valor: 13 },
];

const COLORS = ["#9b87f5", "#1EAEDB", "#F97316", "#7E69AB", "#6E59A5"];

const Charts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <Card className="border border-border bg-card hover:shadow-lg transition-all card-hover">
        <CardHeader>
          <CardTitle>Desempenho ao longo do tempo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={performanceData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1A1F2C",
                    borderColor: "#333",
                    color: "#fff",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="impressions"
                  stroke="#9b87f5"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="cliques" stroke="#1EAEDB" />
                <Line type="monotone" dataKey="conversoes" stroke="#F97316" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="border border-border bg-card hover:shadow-lg transition-all card-hover">
        <CardHeader>
          <CardTitle>Conversões por tipo de campanha</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={conversionData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1A1F2C",
                    borderColor: "#333",
                    color: "#fff",
                  }}
                />
                <Bar dataKey="valor" fill="#9b87f5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="border border-border bg-card hover:shadow-lg transition-all card-hover">
        <CardHeader>
          <CardTitle>Distribuição por canal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={channelData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) =>
                    `${name}: ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="valor"
                >
                  {channelData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1A1F2C",
                    borderColor: "#333",
                    color: "#fff",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="border border-border bg-card hover:shadow-lg transition-all card-hover">
        <CardHeader>
          <CardTitle>Tendência de conversões</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={performanceData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1A1F2C",
                    borderColor: "#333",
                    color: "#fff",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="conversoes"
                  stroke="#9b87f5"
                  fill="#9b87f5"
                  fillOpacity={0.3}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Charts;
