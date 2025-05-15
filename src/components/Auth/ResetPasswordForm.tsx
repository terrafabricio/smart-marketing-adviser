
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const ResetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast({
        title: "Email enviado!",
        description: "Confira sua caixa de entrada para instruções de recuperação.",
        variant: "default",
      });
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md border-border bg-card">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Recuperar senha</CardTitle>
        <CardDescription>
          Enviaremos instruções para redefinir sua senha
        </CardDescription>
      </CardHeader>
      <CardContent>
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-advisor-purple hover:bg-advisor-vivid-purple"
              disabled={isLoading}
            >
              {isLoading ? "Enviando..." : "Enviar instruções"}
            </Button>
          </form>
        ) : (
          <div className="space-y-4">
            <div className="bg-advisor-purple/10 p-4 rounded-md border border-advisor-purple/30">
              <p className="text-sm">
                Instruções de recuperação de senha foram enviadas para <strong>{email}</strong>. 
                Por favor, verifique sua caixa de entrada e siga as instruções fornecidas.
              </p>
            </div>
            <Button
              className="w-full"
              variant="outline"
              onClick={() => setIsSubmitted(false)}
            >
              Tentar outro email
            </Button>
          </div>
        )}
        
        <div className="mt-6 text-center">
          <p className="text-sm text-muted-foreground">
            Lembrou sua senha?{" "}
            <Link
              to="/login"
              className="text-advisor-purple hover:text-advisor-vivid-purple underline underline-offset-4"
            >
              Voltar para o login
            </Link>
          </p>
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <p className="text-xs text-muted-foreground w-full text-center">
          Se precisar de ajuda adicional, entre em contato com nosso{" "}
          <Link to="/support" className="underline underline-offset-4">
            Suporte
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default ResetPasswordForm;
