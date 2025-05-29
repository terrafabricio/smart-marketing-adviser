
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
import { BarChart3, Home, LayoutDashboard, Lightbulb, PieChart, Settings, Users, Bot, Search } from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardSidebar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <Sidebar className="bg-[#1F1F3F] border-r-0">
      <div className="bg-[#1F1F3F] rounded-r-2xl min-h-full">
        <SidebarHeader className="flex items-center justify-center py-6">
          <span className="text-[#8AFF72] text-xl font-bold">AdVisor-AI</span>
        </SidebarHeader>
        <SidebarContent className="px-3">
          <SidebarGroup>
            <SidebarGroupLabel className="text-gray-400 text-xs uppercase tracking-wider mb-4">Principal</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-2">
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className={`eduplex-sidebar-item ${isActive('/dashboard') ? 'eduplex-sidebar-item-active' : ''}`}>
                    <a href="/dashboard" className="flex items-center gap-3 px-4 py-3">
                      <LayoutDashboard className="h-5 w-5" />
                      <span className="font-medium">Dashboard</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className={`eduplex-sidebar-item ${isActive('/dashboard/campaigns') ? 'eduplex-sidebar-item-active' : ''}`}>
                    <a href="/dashboard/campaigns" className="flex items-center gap-3 px-4 py-3">
                      <BarChart3 className="h-5 w-5" />
                      <span className="font-medium">Campanhas</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className={`eduplex-sidebar-item ${isActive('/dashboard/analytics') ? 'eduplex-sidebar-item-active' : ''}`}>
                    <a href="/dashboard/analytics" className="flex items-center gap-3 px-4 py-3">
                      <PieChart className="h-5 w-5" />
                      <span className="font-medium">Analytics</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className={`eduplex-sidebar-item ${isActive('/dashboard/recommendations') ? 'eduplex-sidebar-item-active' : ''}`}>
                    <a href="/dashboard/recommendations" className="flex items-center gap-3 px-4 py-3">
                      <Lightbulb className="h-5 w-5" />
                      <span className="font-medium">Recomendações IA</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className={`eduplex-sidebar-item ${isActive('/dashboard/ai-analysis') ? 'eduplex-sidebar-item-active' : ''}`}>
                    <a href="/dashboard/ai-analysis" className="flex items-center gap-3 px-4 py-3">
                      <Bot className="h-5 w-5" />
                      <span className="font-medium">Análise com IA</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup className="mt-8">
            <SidebarGroupLabel className="text-gray-400 text-xs uppercase tracking-wider mb-4">Configurações</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-2">
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className={`eduplex-sidebar-item ${isActive('/dashboard/profile') ? 'eduplex-sidebar-item-active' : ''}`}>
                    <a href="/dashboard/profile" className="flex items-center gap-3 px-4 py-3">
                      <Users className="h-5 w-5" />
                      <span className="font-medium">Perfil</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className={`eduplex-sidebar-item ${isActive('/dashboard/settings') ? 'eduplex-sidebar-item-active' : ''}`}>
                    <a href="/dashboard/settings" className="flex items-center gap-3 px-4 py-3">
                      <Settings className="h-5 w-5" />
                      <span className="font-medium">Configurações</span>
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
      </div>
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
    return <div className="flex h-screen items-center justify-center bg-[#F3F0FF]">Carregando...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="eduplex-theme">
      <SidebarProvider>
        <div className="flex min-h-screen w-full bg-[#F3F0FF]">
          <DashboardSidebar />
          <div className="flex flex-col flex-1">
            <header className="bg-transparent px-6 py-4">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-semibold text-gray-900">
                    Bem-vindo de volta, {user?.user_metadata?.name?.split(' ')[0] || 'Usuário'} 👋
                  </h1>
                  <p className="text-sm text-gray-500 mt-1">Vamos analisar o desempenho das suas campanhas hoje</p>
                </div>
                <div className="eduplex-search-bar">
                  <div className="flex items-center gap-2">
                    <Search className="h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Pesquisar campanhas..."
                      className="flex-1 border-0 outline-none bg-transparent text-gray-700 placeholder-gray-400"
                    />
                  </div>
                </div>
              </div>
            </header>
            <main className="flex-1 px-6">
              <div className="max-w-7xl mx-auto">
                {children}
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
