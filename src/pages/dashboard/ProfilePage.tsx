
import React from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ProfilePage = () => {
  const { user } = useAuth();
  
  const getInitials = (name: string) => {
    if (!name) return "U";
    const parts = name.split(/\s+/);
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Perfil</h1>
      <p className="text-muted-foreground mb-6">
        Gerencie suas informações pessoais e preferências
      </p>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Informações Pessoais</CardTitle>
            <CardDescription>
              Atualize suas informações pessoais
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={user?.user_metadata.avatar_url} />
                  <AvatarFallback className="text-lg">{getInitials(user?.user_metadata.name || user?.email || "")}</AvatarFallback>
                </Avatar>
                <Button variant="outline">Alterar foto</Button>
              </div>
              
              <div className="grid gap-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Nome completo</Label>
                    <Input id="name" defaultValue={user?.user_metadata.name || ""} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" defaultValue={user?.email || ""} disabled />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="company">Empresa</Label>
                    <Input id="company" defaultValue={user?.user_metadata.company || ""} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefone</Label>
                    <Input id="phone" defaultValue={user?.user_metadata.phone || ""} />
                  </div>
                </div>
              </div>
              
              <Button>Salvar alterações</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default ProfilePage;
