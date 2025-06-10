
import React from "react";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Bell, DollarSign, TrendingDown, TrendingUp } from "lucide-react";

const SettingsPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6 pb-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-black mb-2">Configurações</h1>
          <p className="text-gray-600">
            Gerencie suas preferências de conta e configurações de alertas
          </p>
        </div>

        <Tabs defaultValue="account">
          <TabsList className="mb-6">
            <TabsTrigger value="account">Conta</TabsTrigger>
            <TabsTrigger value="notifications">Notificações</TabsTrigger>
            <TabsTrigger value="alerts">Alertas</TabsTrigger>
            <TabsTrigger value="api">API & Integrações</TabsTrigger>
          </TabsList>
          
          <TabsContent value="account">
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-black">Segurança da Conta</CardTitle>
                  <CardDescription>
                    Gerencie suas configurações de segurança
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-black">Autenticação de dois fatores</h4>
                        <p className="text-sm text-muted-foreground">Adicione uma camada extra de segurança</p>
                      </div>
                      <Button variant="outline">Configurar</Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-black">Alterar senha</h4>
                        <p className="text-sm text-muted-foreground">Atualize sua senha periodicamente</p>
                      </div>
                      <Button variant="outline">Alterar</Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-black">Sessões ativas</h4>
                        <p className="text-sm text-muted-foreground">Gerenciar dispositivos conectados</p>
                      </div>
                      <Button variant="outline">Visualizar</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-black">Preferências de Idioma</CardTitle>
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
                <CardTitle className="text-black">Configurações de Notificações</CardTitle>
                <CardDescription>
                  Escolha como deseja receber notificações
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-black">Notificações por email</h4>
                      <p className="text-sm text-muted-foreground">Receba atualizações sobre suas campanhas</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-black">Relatórios semanais</h4>
                      <p className="text-sm text-muted-foreground">Receba um resumo semanal do desempenho</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-black">Alertas de desempenho</h4>
                      <p className="text-sm text-muted-foreground">Notificações quando o desempenho cair</p>
                    </div>
                    <Switch defaultChecked />
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-black">Newsletter</h4>
                      <p className="text-sm text-muted-foreground">Novidades e dicas sobre marketing digital</p>
                    </div>
                    <Switch />
                  </div>
                  
                  <Button>Salvar preferências</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-black flex items-center gap-2">
                    <Bell className="h-5 w-5 text-advisor-purple" />
                    Configurações de Alertas
                  </CardTitle>
                  <CardDescription>
                    Defina quando você deseja ser notificado sobre mudanças na performance
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* CPA Alerts */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-green-600" />
                        <h4 className="font-medium text-black">Alertas de CPA</h4>
                        <Badge variant="secondary">Ativo</Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-6">
                        <div className="space-y-2">
                          <Label htmlFor="cpa-threshold">Limite de CPA (R$)</Label>
                          <Input
                            id="cpa-threshold"
                            type="number"
                            placeholder="100,00"
                            defaultValue="100"
                          />
                          <p className="text-xs text-gray-500">Alertar quando CPA exceder este valor</p>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cpa-increase">Aumento percentual (%)</Label>
                          <Input
                            id="cpa-increase"
                            type="number"
                            placeholder="30"
                            defaultValue="30"
                          />
                          <p className="text-xs text-gray-500">Alertar quando CPA aumentar mais que</p>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* CTR Alerts */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-blue-600" />
                        <h4 className="font-medium text-black">Alertas de CTR</h4>
                        <Badge variant="secondary">Ativo</Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-6">
                        <div className="space-y-2">
                          <Label htmlFor="ctr-threshold">CTR mínimo (%)</Label>
                          <Input
                            id="ctr-threshold"
                            type="number"
                            step="0.1"
                            placeholder="2.0"
                            defaultValue="2.0"
                          />
                          <p className="text-xs text-gray-500">Alertar quando CTR cair abaixo de</p>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="ctr-decrease">Queda percentual (%)</Label>
                          <Input
                            id="ctr-decrease"
                            type="number"
                            placeholder="25"
                            defaultValue="25"
                          />
                          <p className="text-xs text-gray-500">Alertar quando CTR diminuir mais que</p>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Budget Alerts */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <TrendingDown className="h-4 w-4 text-orange-600" />
                        <h4 className="font-medium text-black">Alertas de Orçamento</h4>
                        <Badge variant="secondary">Ativo</Badge>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-6">
                        <div className="space-y-2">
                          <Label htmlFor="budget-threshold">Limite de gasto (%)</Label>
                          <Input
                            id="budget-threshold"
                            type="number"
                            placeholder="90"
                            defaultValue="90"
                          />
                          <p className="text-xs text-gray-500">Alertar quando gastar mais que % do orçamento diário</p>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="impressions-threshold">Impressões mínimas</Label>
                          <Input
                            id="impressions-threshold"
                            type="number"
                            placeholder="100"
                            defaultValue="100"
                          />
                          <p className="text-xs text-gray-500">Alertar quando impressões ficarem abaixo de</p>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    {/* Notification Settings */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-black">Preferências de Notificação</h4>
                      <div className="space-y-3 ml-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-black">Email imediato</p>
                            <p className="text-sm text-gray-500">Receber email assim que um alerta for disparado</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-black">Resumo diário</p>
                            <p className="text-sm text-gray-500">Receber resumo dos alertas do dia às 18h</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-black">Notificação no dashboard</p>
                            <p className="text-sm text-gray-500">Mostrar alertas no ícone de sino</p>
                          </div>
                          <Switch defaultChecked />
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <Button className="bg-advisor-purple hover:bg-advisor-vivid-purple">
                        Salvar Configurações de Alertas
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="api">
            <Card>
              <CardHeader>
                <CardTitle className="text-black">Chaves de API</CardTitle>
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
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
