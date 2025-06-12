"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image
              src="/cto-digital.png"
              alt="meuCTOdigital.com"
              width={160}
              height={60}
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/#sobre"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="/#problemas"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Problemas
            </Link>
            <Link
              href="/#servicos"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="/cto-on-demand"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              CTO on Demand
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/#depoimentos"
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
              Depoimentos
            </Link>
            <Link
              href="/#contato"
              className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 transition-colors"
            >
              Agendar Conversa
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-white border-t border-gray-100"
        >
          <div className="px-4 py-4 space-y-3">
            <Link
              href="/#sobre"
              className="block py-2 text-gray-700 hover:text-emerald-600"
              onClick={toggleMenu}
            >
              Sobre
            </Link>
            <Link
              href="/#problemas"
              className="block py-2 text-gray-700 hover:text-emerald-600"
              onClick={toggleMenu}
            >
              Problemas
            </Link>
            <Link
              href="/#servicos"
              className="block py-2 text-gray-700 hover:text-emerald-600"
              onClick={toggleMenu}
            >
              Serviços
            </Link>
            <Link
              href="/cto-on-demand"
              className="block py-2 text-gray-700 hover:text-emerald-600"
              onClick={toggleMenu}
            >
              CTO on Demand
            </Link>
            <Link
              href="/blog"
              className="block py-2 text-gray-700 hover:text-emerald-600"
              onClick={toggleMenu}
            >
              Blog
            </Link>
            <Link
              href="/#depoimentos"
              className="block py-2 text-gray-700 hover:text-emerald-600"
              onClick={toggleMenu}
            >
              Depoimentos
            </Link>
            <Link
              href="/#contato"
              className="block py-2 text-emerald-600 font-medium"
              onClick={toggleMenu}
            >
              Agendar Conversa
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navbar;
