import React from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

const SettingsPage = () => {
  return (
    <DashboardLayout>
      <h1 className="text-3xl font-bold mb-6">Configurações</h1>
      <p className="text-muted-foreground mb-6">
        Gerencie suas preferências de conta e configurações
      </p>

      <Tabs defaultValue="account">
        <TabsList className="mb-6">
          <TabsTrigger value="account">Conta</TabsTrigger>
          <TabsTrigger value="notifications">Notificações</TabsTrigger>
          <TabsTrigger value="api">API & Integrações</TabsTrigger>
        </TabsList>
        
        <TabsContent value="account">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Segurança da Conta</CardTitle>
                <CardDescription>
                  Gerencie suas configurações de segurança
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Autenticação de dois fatores</h4>
                      <p className="text-sm text-muted-foreground">Adicione uma camada extra de segurança</p>
                    </div>
                    <Button variant="outline">Configurar</Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Alterar senha</h4>
                      <p className="text-sm text-muted-foreground">Atualize sua senha periodicamente</p>
                    </div>
                    <Button variant="outline">Alterar</Button>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium">Sessões ativas</h4>
                      <p className="text-sm text-muted-foreground">Gerenciar dispositivos conectados</p>
                    </div>
                    <Button variant="outline">Visualizar</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Preferências de Idioma</CardTitle>
                <CardDescription>
                  Escolha seu idioma preferido
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="language">Idioma</Label>
                    <select id="language" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                      <option value="pt-BR">Português (Brasil)</option>
                      <option value="en-US">English (US)</option>
                      <option value="es">Español</option>
                    </select>
                  </div>
                  <Button>Salvar preferências</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Configurações de Notificações</CardTitle>
              <CardDescription>
                Escolha como deseja receber notificações
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Notificações por email</h4>
                    <p className="text-sm text-muted-foreground">Receba atualizações sobre suas campanhas</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Relatórios semanais</h4>
                    <p className="text-sm text-muted-foreground">Receba um resumo semanal do desempenho</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Alertas de desempenho</h4>
                    <p className="text-sm text-muted-foreground">Notificações quando o desempenho cair</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium">Newsletter</h4>
                    <p className="text-sm text-muted-foreground">Novidades e dicas sobre marketing digital</p>
                  </div>
                  <Switch />
                </div>
                
                <Button>Salvar preferências</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="api">
          <Card>
            <CardHeader>
              <CardTitle>Chaves de API</CardTitle>
              <CardDescription>
                Gerencie suas chaves de API para integrações
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Chave de API</Label>
                  <div className="flex gap-2">
                    <Input value="••••••••••••••••••••••••••••••" readOnly className="font-mono" />
                    <Button variant="outline">Mostrar</Button>
                    <Button variant="outline">Copiar</Button>
                  </div>
                  <p className="text-sm text-muted-foreground">Última utilização: há 3 dias</p>
                </div>
                
                <div className="flex flex-col gap-2">
                  <Button variant="destructive">Revogar chave</Button>
                  <Button>Gerar nova chave</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
};

export default SettingsPage;
