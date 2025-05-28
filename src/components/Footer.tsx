"use client";

import Link from "next/link";
import { FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";

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
                  href="#sobre"
                  className="hover:text-white transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="#servicos"
                  className="hover:text-white transition-colors"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="#depoimentos"
                  className="hover:text-white transition-colors"
                >
                  Depoimentos
                </Link>
              </li>
              <li>
                <Link
                  href="#contato"
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
                <FaPhone className="w-4 h-4 mr-2" />
                <a
                  href="tel:+5500000000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  (00) 00000-0000
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          &copy; {new Date().getFullYear()} Alan Mendes. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
