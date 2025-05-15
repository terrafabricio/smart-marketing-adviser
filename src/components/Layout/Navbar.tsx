
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Bot, LogIn, LogOut, Settings, User } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const getInitials = (name: string) => {
    if (!name) return "U";
    const parts = name.split(/\s+/);
    if (parts.length === 1) return parts[0][0].toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center space-x-2">
            <span className="neon-text text-2xl font-bold">AdVisor-AI</span>
          </Link>
        </div>
        
        {isDesktop ? (
          <nav className="flex items-center gap-6">
            {!user ? (
              <>
                <Link to="/features" className="text-muted-foreground hover:text-foreground transition-colors">
                  Recursos
                </Link>
                <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Preços
                </Link>
                <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sobre
                </Link>
                <Link to="/login">
                  <Button variant="outline" size="sm" className="mr-2">
                    <LogIn className="h-4 w-4 mr-2" />
                    Entrar
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button size="sm" className="bg-advisor-purple hover:bg-advisor-vivid-purple">
                    <User className="h-4 w-4 mr-2" />
                    Cadastre-se
                  </Button>
                </Link>
              </>
            ) : (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.user_metadata.avatar_url} />
                      <AvatarFallback>{getInitials(user.user_metadata.name || user.email || "")}</AvatarFallback>
                    </Avatar>
                    <span className="hidden md:inline-block">
                      {user.user_metadata.name || user.email?.split('@')[0] || "Usuário"}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard" className="cursor-pointer">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="cursor-pointer">Perfil</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings" className="cursor-pointer">
                      <Settings className="h-4 w-4 mr-2" />
                      Configurações
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="cursor-pointer text-red-500 focus:text-red-500">
                    <LogOut className="h-4 w-4 mr-2" />
                    Sair
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}
          </nav>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="ghost">
                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              {!user ? (
                <>
                  <DropdownMenuItem asChild>
                    <Link to="/features">Recursos</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/pricing">Preços</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/about">Sobre</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/login">Entrar</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/signup">Cadastre-se</Link>
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuItem asChild>
                    <Link to="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/profile">Perfil</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/settings">Configurações</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="text-red-500 focus:text-red-500">
                    Sair
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>
    </header>
  );
};

export default Navbar;
