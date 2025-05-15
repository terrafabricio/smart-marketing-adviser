
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const CallToAction = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Pré-cadastro realizado!",
        description: "Obrigado pelo interesse. Entraremos em contato em breve.",
        variant: "default",
      });
      setEmail("");
      setName("");
    }, 1500);
  };

  return (
    <section className="py-20 bg-purple-gradient text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para revolucionar seu marketing digital?
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Faça seu pré-cadastro hoje e seja um dos primeiros a experimentar o poder da IA aplicada ao marketing.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="space-y-4">
              <Input
                type="text"
                placeholder="Seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-white/10 border-white/20 placeholder:text-white/60 text-white"
              />
              <Input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 placeholder:text-white/60 text-white"
              />
              <Button 
                type="submit" 
                className="w-full py-6 text-lg bg-white text-advisor-purple hover:bg-white/90"
                disabled={isLoading}
              >
                {isLoading ? "Processando..." : "Garanta sua vaga"}
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-70">
              Sem compromisso. Você poderá cancelar a qualquer momento.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
