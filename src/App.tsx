
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import NotFoundPage from "./pages/NotFoundPage";
import ComingSoonPage from "./pages/ComingSoonPage";
import { AuthProvider } from "./contexts/AuthContext";

// Dashboard pages
import DashboardIndex from "./pages/dashboard/DashboardIndex";
import CampaignsPage from "./pages/dashboard/CampaignsPage";
import AnalyticsPage from "./pages/dashboard/AnalyticsPage";
import IntegrationsPage from "./pages/dashboard/IntegrationsPage";
import ProfilePage from "./pages/dashboard/ProfilePage";
import SettingsPage from "./pages/dashboard/SettingsPage";
import RecommendationsPage from "./pages/dashboard/RecommendationsPage";
import AiAnalysisPage from "./pages/dashboard/AiAnalysisPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes with dark theme */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/reset-password" element={<ResetPasswordPage />} />
            
            {/* Dashboard routes with light theme */}
            <Route path="/dashboard" element={<DashboardIndex />} />
            <Route path="/dashboard/campaigns" element={<CampaignsPage />} />
            <Route path="/dashboard/analytics" element={<AnalyticsPage />} />
            <Route path="/dashboard/ai-analysis" element={<AiAnalysisPage />} />
            <Route path="/dashboard/integrations" element={<IntegrationsPage />} />
            <Route path="/dashboard/profile" element={<ProfilePage />} />
            <Route path="/dashboard/settings" element={<SettingsPage />} />
            <Route path="/dashboard/recommendations" element={<RecommendationsPage />} />
            
            {/* Static pages */}
            <Route path="/features" element={<ComingSoonPage />} />
            <Route path="/pricing" element={<ComingSoonPage />} />
            <Route path="/about" element={<ComingSoonPage />} />
            <Route path="/contact" element={<ComingSoonPage />} />
            <Route path="/careers" element={<ComingSoonPage />} />
            <Route path="/terms" element={<ComingSoonPage />} />
            <Route path="/privacy" element={<ComingSoonPage />} />
            <Route path="/cookies" element={<ComingSoonPage />} />
            <Route path="/support" element={<ComingSoonPage />} />
            <Route path="/integrations/:platform" element={<ComingSoonPage />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
