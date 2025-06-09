"use client";

import Link from "next/link";
import {
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">
              meuCTOdigital.com
            </h3>
            <p className="mb-4">
              Arquitetura de software e consultoria técnica para infoprodutores
              e negócios digitais.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/mendesalan/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/meuctodigital/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#sobre"
                  className="hover:text-white transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="/#servicos"
                  className="hover:text-white transition-colors"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="/#depoimentos"
                  className="hover:text-white transition-colors"
                >
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link
                  href="/#contato"
                  className="hover:text-white transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contato</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaEnvelope className="w-4 h-4 mr-2" />
                <a
                  href="mailto:meuctodigital@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  meuctodigital@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="w-4 h-4 mr-2" />
                <a
                  href="https://api.whatsapp.com/send?phone=5511961525971&text=Oi%20Alan%2C%20vi%20seus%20servi%C3%A7os%20e%20quero%20entender%20como%20voc%C3%AA%20pode%20me%20ajudar%20com%20meu%20projeto%20digital."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  (11) 96152-5971
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <div className="space-y-1">
            <p>&copy; 2025 Alan Mendes. Todos os direitos reservados.</p>
            <p>CNPJ: 29.919.910/0001-54</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
