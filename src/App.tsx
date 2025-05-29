
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

// Static pages
import AboutPage from "./pages/static/AboutPage";
import ContactPage from "./pages/static/ContactPage";
import CareersPage from "./pages/static/CareersPage";
import TermsPage from "./pages/static/TermsPage";
import PrivacyPage from "./pages/static/PrivacyPage";
import CookiesPage from "./pages/static/CookiesPage";

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
            <Route path="/sobre-nos" element={<AboutPage />} />
            <Route path="/contato" element={<ContactPage />} />
            <Route path="/carreiras" element={<CareersPage />} />
            <Route path="/termos-de-uso" element={<TermsPage />} />
            <Route path="/politica-de-privacidade" element={<PrivacyPage />} />
            <Route path="/politica-de-cookies" element={<CookiesPage />} />
            
            {/* Legacy routes */}
            <Route path="/features" element={<ComingSoonPage />} />
            <Route path="/pricing" element={<ComingSoonPage />} />
            <Route path="/about" element={<Navigate to="/sobre-nos" replace />} />
            <Route path="/contact" element={<Navigate to="/contato" replace />} />
            <Route path="/careers" element={<Navigate to="/carreiras" replace />} />
            <Route path="/terms" element={<Navigate to="/termos-de-uso" replace />} />
            <Route path="/privacy" element={<Navigate to="/politica-de-privacidade" replace />} />
            <Route path="/cookies" element={<Navigate to="/politica-de-cookies" replace />} />
            <Route path="/support" element={<ComingSoonPage />} />
            <Route path="/integrations/:platform" element={<ComingSoonPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
