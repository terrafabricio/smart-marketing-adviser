
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-8 bg-advisor-light-gray text-advisor-medium-gray">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <Link to="/sobre-nos" className="hover:text-advisor-purple transition-colors">
            Sobre nós
          </Link>
          <Link to="/contato" className="hover:text-advisor-purple transition-colors">
            Contato
          </Link>
          <Link to="/carreiras" className="hover:text-advisor-purple transition-colors">
            Carreiras
          </Link>
        </div>
        <div className="flex flex-col space-y-2">
          <Link to="/termos-de-uso" className="hover:text-advisor-purple transition-colors">
            Termos de Uso
          </Link>
          <Link to="/politica-de-privacidade" className="hover:text-advisor-purple transition-colors">
            Política de Privacidade
          </Link>
          <Link to="/politica-de-cookies" className="hover:text-advisor-purple transition-colors">
            Política de Cookies
          </Link>
        </div>
      </div>
      <p className="mt-6 text-center text-sm">© 2025 AdVisor-AI. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
