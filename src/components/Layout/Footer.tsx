
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-gray-50 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
          <div>
            <h4 className="text-md font-semibold mb-4 text-advisor-purple">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sobre-nos" className="text-muted-foreground hover:text-advisor-purple transition-colors">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-muted-foreground hover:text-advisor-purple transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/carreiras" className="text-muted-foreground hover:text-advisor-purple transition-colors">
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-md font-semibold mb-4 text-advisor-purple">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/termos-de-uso" className="text-muted-foreground hover:text-advisor-purple transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/politica-de-privacidade" className="text-muted-foreground hover:text-advisor-purple transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/politica-de-cookies" className="text-muted-foreground hover:text-advisor-purple transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} AdVisor-AI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
