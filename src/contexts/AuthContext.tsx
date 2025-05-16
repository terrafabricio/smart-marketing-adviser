
import React, { createContext, useContext, useEffect, useState } from "react";
import { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";

type AuthContextType = {
  user: User | null;
  session: Session | null;
  isLoading: boolean;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        setIsLoading(false);
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setIsLoading(false);
    }).catch(error => {
      console.error("Error retrieving auth session:", error);
      setIsLoading(false);
      // If there's an authenticated user when an error occurs, redirect to dashboard
      if (user) {
        window.location.href = "/dashboard";
      }
    });

    // Global error handler to redirect to dashboard when an auth error occurs for logged-in users
    const handleError = (event: ErrorEvent) => {
      if (user && !isLoading) {
        console.error("Application error:", event.error);
        // Only redirect on auth-related errors or critical application errors
        if (event.error?.toString().includes("auth") || 
            event.error?.toString().includes("session") ||
            event.error?.toString().includes("permission")) {
          window.location.href = "/dashboard";
        }
      }
    };

    window.addEventListener('error', handleError);

    return () => {
      subscription.unsubscribe();
      window.removeEventListener('error', handleError);
    };
  }, [user, isLoading]);

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error("Error signing out:", error);
      // Redirect to dashboard if the user is still authenticated
      if (user) {
        window.location.href = "/dashboard";
      }
    }
  };

  return (
    <AuthContext.Provider value={{ user, session, isLoading, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
