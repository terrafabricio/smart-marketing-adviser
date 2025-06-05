
import React, { useState } from "react";
import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";

const AlertNotifications = () => {
  const navigate = useNavigate();
  const [unreadCount] = useState(3); // Mock data

  // Mock alerts data
  const recentAlerts = [
    {
      id: "1",
      title: "CPA Alto - Campanha Principal",
      description: "CPA aumentou 45% nas últimas 24h",
      time: "há 2 horas",
      priority: "high" as const,
      isUnread: true
    },
    {
      id: "2", 
      title: "CTR Baixo - Grupo Mobile",
      description: "CTR caiu para 1.2% (meta: 2.5%)",
      time: "há 4 horas",
      priority: "medium" as const,
      isUnread: true
    },
    {
      id: "3",
      title: "Orçamento Esgotado",
      description: "Campanha Black Friday atingiu limite",
      time: "há 6 horas", 
      priority: "high" as const,
      isUnread: false
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "text-red-600";
      case "medium": return "text-amber-600";
      default: return "text-gray-600";
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80">
        <div className="px-4 py-2 border-b">
          <h4 className="font-semibold">Alertas de Performance</h4>
          <p className="text-sm text-gray-500">{unreadCount} não lidos</p>
        </div>
        
        <div className="max-h-96 overflow-y-auto">
          {recentAlerts.map((alert) => (
            <DropdownMenuItem 
              key={alert.id} 
              className="flex flex-col items-start p-4 cursor-pointer hover:bg-gray-50"
              onClick={() => navigate(`/dashboard/alerts/${alert.id}`)}
            >
              <div className="flex items-start justify-between w-full">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className={`font-medium ${getPriorityColor(alert.priority)}`}>
                      {alert.title}
                    </span>
                    {alert.isUnread && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
                  <p className="text-xs text-gray-400 mt-1">{alert.time}</p>
                </div>
              </div>
            </DropdownMenuItem>
          ))}
        </div>
        
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          className="justify-center font-medium text-advisor-purple cursor-pointer"
          onClick={() => navigate("/dashboard/alerts")}
        >
          Ver todos os alertas
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AlertNotifications;
