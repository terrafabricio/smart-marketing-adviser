
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

const COLORS = ["#8AFF72", "#DCCAFF", "#A855F7", "#06B6D4", "#F59E0B"];

const Charts = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <Card className="eduplex-card" aria-label="Gráfico de desempenho ao longo do tempo">
        <CardHeader>
          <CardTitle className="text-lg font-medium text-gray-900">Desempenho ao longo do tempo</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[60vh] lg:h-80">
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
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="name" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    borderColor: "#E5E7EB",
                    borderRadius: "12px",
                    color: "#1F2937",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="impressions"
                  stroke="#8AFF72"
                  strokeWidth={3}
                  activeDot={{ r: 6, fill: "#8AFF72" }}
                />
                <Line type="monotone" dataKey="cliques" stroke="#DCCAFF" strokeWidth={3} />
                <Line type="monotone" dataKey="conversoes" stroke="#A855F7" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="eduplex-card" aria-label="Gráfico de conversões por tipo de campanha">
        <CardHeader>
          <CardTitle className="text-lg font-medium text-gray-900">Conversões por tipo de campanha</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[60vh] lg:h-80">
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
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="name" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    borderColor: "#E5E7EB",
                    borderRadius: "12px",
                    color: "#1F2937",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                  }}
                />
                <Bar dataKey="valor" fill="#8AFF72" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="eduplex-card" aria-label="Gráfico de distribuição por canal">
        <CardHeader>
          <CardTitle className="text-lg font-medium text-gray-900">Distribuição por canal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[60vh] lg:h-80">
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
                    backgroundColor: "white",
                    borderColor: "#E5E7EB",
                    borderRadius: "12px",
                    color: "#1F2937",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="eduplex-card" aria-label="Gráfico de tendência de conversões">
        <CardHeader>
          <CardTitle className="text-lg font-medium text-gray-900">Tendência de conversões</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[60vh] lg:h-80">
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
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="name" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    borderColor: "#E5E7EB",
                    borderRadius: "12px",
                    color: "#1F2937",
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="conversoes"
                  stroke="#8AFF72"
                  fill="#DCCAFF"
                  fillOpacity={0.6}
                  strokeWidth={3}
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
