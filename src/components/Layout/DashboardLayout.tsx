
import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AiChatButton from "../AiChat/AiChatButton";
import { useAuth } from "@/contexts/AuthContext";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarHeader,
  SidebarFooter
} from "@/components/ui/sidebar";
import { BarChart3, Home, LayoutDashboard, Lightbulb, PieChart, Settings, Users, Bot } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center justify-center py-4">
        <span className="neon-text text-lg font-bold">AdVisor-AI</span>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Principal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Dashboard">
                  <a href="/dashboard">
                    <LayoutDashboard />
                    <span>Dashboard</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Campanhas">
                  <a href="/dashboard/campaigns">
                    <BarChart3 />
                    <span>Campanhas</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Analytics">
                  <a href="/dashboard/analytics">
                    <PieChart />
                    <span>Analytics</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Análise com IA">
                  <a href="/dashboard/ai-analysis">
                    <Bot />
                    <span>Análise com IA</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Configurações</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Perfil">
                  <a href="/dashboard/profile">
                    <Users />
                    <span>Perfil</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Configurações">
                  <a href="/dashboard/settings">
                    <Settings />
                    <span>Configurações</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <AiChatButton />
      </SidebarFooter>
    </Sidebar>
  );
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isLoading && !user) {
      navigate("/login");
    }
  }, [user, isLoading, navigate]);

  if (isLoading) {
    return <div className="flex h-screen items-center justify-center">Carregando...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full light-theme">
        <DashboardSidebar />
        <div className="flex flex-col flex-1">
          <Navbar />
          <main className="flex-1 p-4 md:p-8">{children}</main>
          <Footer />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
