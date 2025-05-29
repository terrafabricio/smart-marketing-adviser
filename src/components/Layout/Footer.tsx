
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white shadow-[0_-1px_3px_0_rgba(0,0,0,0.1)] py-6 mt-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-6">
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-900">Empresa</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/sobre-nos" className="text-gray-500 hover:text-[#8AFF72] transition-colors">
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-500 hover:text-[#8AFF72] transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/carreiras" className="text-gray-500 hover:text-[#8AFF72] transition-colors">
                  Carreiras
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-900">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/termos-de-uso" className="text-gray-500 hover:text-[#8AFF72] transition-colors">
                  Termos de Uso
                </Link>
              </li>
              <li>
                <Link to="/politica-de-privacidade" className="text-gray-500 hover:text-[#8AFF72] transition-colors">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/politica-de-cookies" className="text-gray-500 hover:text-[#8AFF72] transition-colors">
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} AdVisor-AI. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
