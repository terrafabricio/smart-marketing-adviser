
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        toast({
          title: "Erro no login",
          description: "Verifique suas credenciais e tente novamente.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Login realizado com sucesso!",
          description: "Bem-vindo de volta ao AdVisor-AI",
        });
        navigate("/dashboard");
      }
    } catch (error) {
      toast({
        title: "Erro no login",
        description: "Verifique suas credenciais e tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1A2E] to-[#F3F0FF] relative">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-lg"></div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
        <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl px-8 py-10 max-w-sm w-full">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <Link to="/" className="inline-block mb-4">
              <h1 className="text-3xl font-bold text-white">AdVisor-AI</h1>
            </Link>
            <h2 className="text-2xl font-semibold text-white mb-2">Bem-vindo de volta!</h2>
            <p className="text-advisor-soft-purple">Entre na sua conta para continuar</p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-advisor-neutral-gray" />
              <input
                type="email"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-full bg-white/20 placeholder-advisor-neutral-gray text-white pl-12 pr-4 py-3 focus:bg-white/30 focus:outline-none transition-all duration-300"
                required
                aria-label="E-mail"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-advisor-neutral-gray" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-full bg-white/20 placeholder-advisor-neutral-gray text-white pl-12 pr-12 py-3 focus:bg-white/30 focus:outline-none transition-all duration-300"
                required
                aria-label="Senha"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-advisor-neutral-gray hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-advisor-soft-purple">
                <input type="checkbox" className="mr-2 rounded" />
                Lembrar de mim
              </label>
              <Link 
                to="/reset-password" 
                className="text-advisor-soft-purple hover:text-advisor-vivid-purple transition-colors"
              >
                Esqueceu a senha?
              </Link>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              className="w-full rounded-full bg-[#8AFF72] text-gray-900 font-medium px-6 py-3 hover:scale-105 transition-transform duration-300"
              disabled={isLoading}
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>

            {/* Sign up link */}
            <div className="text-center text-sm mt-6">
              <span className="text-advisor-soft-purple">Não tem uma conta? </span>
              <Link 
                to="/signup" 
                className="text-advisor-soft-purple hover:text-advisor-vivid-purple transition-colors font-medium"
              >
                Criar conta
              </Link>
            </div>
          </form>
        </div>
      </div>

      {/* Back to Home */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Link 
          to="/" 
          className="text-sm text-advisor-soft-purple hover:text-white transition-colors"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
