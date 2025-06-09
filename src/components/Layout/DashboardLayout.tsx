
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
import { 
  BarChart3, 
  LayoutDashboard, 
  Lightbulb, 
  Settings, 
  Users, 
  Bot, 
  Search,
  Bell,
  Target,
  Filter
} from "lucide-react";
import AlertNotifications from "../Dashboard/AlertNotifications";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardSidebar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  return (
    <Sidebar className="bg-advisor-dark-purple border-r-0">
      <div className="bg-advisor-dark-purple rounded-r-2xl min-h-full">
        <SidebarHeader className="flex items-center justify-center py-4">
          <span className="text-[#8AFF72] text-xl font-bold">AdVisor-AI</span>
        </SidebarHeader>
        <SidebarContent className="px-3 pb-20">
          <SidebarGroup>
            <SidebarGroupLabel className="text-gray-400 text-xs uppercase tracking-wider mb-3">Principal</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-1">
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className={`text-sidebar-foreground hover:bg-advisor-purple/10 hover:text-white transition-colors duration-200 rounded-lg ${isActive('/dashboard') && !isActive('/dashboard/') ? 'bg-advisor-purple/20 text-white' : ''}`}>
                    <a href="/dashboard" className="flex items-center gap-3 px-3 py-2">
                      <LayoutDashboard className="h-4 w-4" />
                      <span className="font-medium text-sm">Dashboard</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className={`text-sidebar-foreground hover:bg-advisor-purple/10 hover:text-white transition-colors duration-200 rounded-lg ${isActive('/dashboard/campaigns') ? 'bg-advisor-purple/20 text-white' : ''}`}>
                    <a href="/dashboard/campaigns" className="flex items-center gap-3 px-3 py-2">
                      <BarChart3 className="h-4 w-4" />
                      <span className="font-medium text-sm">Campanhas</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup className="mt-4">
            <SidebarGroupLabel className="text-gray-400 text-xs uppercase tracking-wider mb-3">Otimização IA</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-1">
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className={`text-sidebar-foreground hover:bg-advisor-purple/10 hover:text-white transition-colors duration-200 rounded-lg ${isActive('/dashboard/recommendations') ? 'bg-advisor-purple/20 text-white' : ''}`}>
                    <a href="/dashboard/recommendations" className="flex items-center gap-3 px-3 py-2">
                      <Lightbulb className="h-4 w-4" />
                      <span className="font-medium text-sm">Recomendações IA</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className={`text-sidebar-foreground hover:bg-advisor-purple/10 hover:text-white transition-colors duration-200 rounded-lg ${isActive('/dashboard/search-terms') ? 'bg-advisor-purple/20 text-white' : ''}`}>
                    <a href="/dashboard/search-terms" className="flex items-center gap-3 px-3 py-2">
                      <Search className="h-4 w-4" />
                      <span className="font-medium text-sm">Termos de Pesquisa</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className={`text-sidebar-foreground hover:bg-advisor-purple/10 hover:text-white transition-colors duration-200 rounded-lg ${isActive('/dashboard/ad-groups') ? 'bg-advisor-purple/20 text-white' : ''}`}>
                    <a href="/dashboard/ad-groups" className="flex items-center gap-3 px-3 py-2">
                      <Target className="h-4 w-4" />
                      <span className="font-medium text-sm">Estrutura de Grupos</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className={`text-sidebar-foreground hover:bg-advisor-purple/10 hover:text-white transition-colors duration-200 rounded-lg ${isActive('/dashboard/alerts') ? 'bg-advisor-purple/20 text-white' : ''}`}>
                    <a href="/dashboard/alerts" className="flex items-center gap-3 px-3 py-2">
                      <Bell className="h-4 w-4" />
                      <span className="font-medium text-sm">Alertas Performance</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className={`text-sidebar-foreground hover:bg-advisor-purple/10 hover:text-white transition-colors duration-200 rounded-lg ${isActive('/dashboard/ai-analysis') ? 'bg-advisor-purple/20 text-white' : ''}`}>
                    <a href="/dashboard/ai-analysis" className="flex items-center gap-3 px-3 py-2">
                      <Bot className="h-4 w-4" />
                      <span className="font-medium text-sm">Análise com IA</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>

          <SidebarGroup className="mt-6">
            <SidebarGroupLabel className="text-gray-400 text-xs uppercase tracking-wider mb-3">Configurações</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu className="space-y-1">
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className={`text-sidebar-foreground hover:bg-advisor-purple/10 hover:text-white transition-colors duration-200 rounded-lg ${isActive('/dashboard/profile') ? 'bg-advisor-purple/20 text-white' : ''}`}>
                    <a href="/dashboard/profile" className="flex items-center gap-3 px-3 py-2">
                      <Users className="h-4 w-4" />
                      <span className="font-medium text-sm">Perfil</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className={`text-sidebar-foreground hover:bg-advisor-purple/10 hover:text-white transition-colors duration-200 rounded-lg ${isActive('/dashboard/settings') ? 'bg-advisor-purple/20 text-white' : ''}`}>
                    <a href="/dashboard/settings" className="flex items-center gap-3 px-3 py-2">
                      <Settings className="h-4 w-4" />
                      <span className="font-medium text-sm">Configurações</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
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
    return <div className="flex h-screen items-center justify-center bg-advisor-soft-purple">Carregando...</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <div className="eduplex-theme">
      <SidebarProvider>
        <div className="flex min-h-screen w-full bg-advisor-soft-purple">
          <DashboardSidebar />
          <div className="flex flex-col flex-1">
            <header className="bg-transparent px-6 py-4">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-semibold text-foreground">
                    Bem-vindo de volta, {user?.user_metadata?.name?.split(' ')[0] || 'Usuário'} 👋
                  </h1>
                  <p className="text-sm text-gray-500 mt-1">Vamos analisar o desempenho das suas campanhas hoje</p>
                </div>
                <div className="flex items-center gap-4">
                  <AlertNotifications />
                  <div className="bg-white rounded-full shadow-sm px-4 py-2 w-full max-w-sm border border-gray-200 focus-within:ring-2 focus-within:ring-[#8AFF72]/20">
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
              </div>
            </header>
            <main className="flex-1 px-6">
              <div className="max-w-7xl mx-auto">
                {children}
              </div>
            </main>
            <Footer />
          </div>
          <div className="fixed bottom-4 left-4 z-50 scale-75">
            <AiChatButton />
          </div>
        </div>
      </SidebarProvider>
    </div>
  );
};

export default DashboardLayout;
