
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronRight, UserPlus, LogIn } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-gradient opacity-90 z-0"></div>
      <div className="container mx-auto px-4 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in">
            <span className="neon-text">IA</span> para potencializar suas{" "}
            <span className="neon-text">campanhas de marketing</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in delay-100">
            Integre dados do Google Ads, Gmail e WhatsApp. Receba recomendações inteligentes 
            e otimize suas campanhas com a ajuda da nossa plataforma impulsionada por IA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-200">
            <Link to="/signup">
              <Button className="w-full sm:w-auto bg-advisor-purple hover:bg-advisor-vivid-purple text-lg py-6 px-8">
                <UserPlus className="mr-2 h-5 w-5" />
                Registre-se
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" className="w-full sm:w-auto text-lg py-6 px-8">
                <LogIn className="mr-2 h-5 w-5" />
                Fazer Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default Hero;
