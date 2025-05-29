"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaBullseye,
  FaCogs,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const About = () => {
  return (
    <section id="sobre" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/aboutme.jpeg"
                alt="Alan Mendes"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -z-10 -bottom-6 -right-6 w-64 h-64 bg-emerald-100 rounded-full"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Sobre mim
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              <strong>Solutions Architect</strong> com mais de 5 anos
              transformando ideias em sistemas escaláveis. Já ajudei empresas
              como Accenture, DBC Company e startups internacionais a definir
              estratégias tecnológicas que geram resultados reais.
            </p>

            <p className="text-base text-gray-600 leading-relaxed mb-8">
              Especialista em arquiteturas de software, otimização de
              performance e seleção de tecnologias. Atuo como consultor técnico
              confiável para auditar propostas, evitar gastos desnecessários e
              traduzir objetivos de negócio em planos técnicos claros.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-emerald-600">
                  <FaCheckCircle className="w-5 h-5" />
                </div>
                <span className="ml-4 text-gray-700">
                  Experiência comprovada em grandes empresas
                </span>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                  <FaBullseye className="w-5 h-5" />
                </div>
                <span className="ml-4 text-gray-700">
                  Estratégia técnica que gera ROI
                </span>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0 w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                  <FaCogs className="w-5 h-5" />
                </div>
                <span className="ml-4 text-gray-700">
                  Arquiteturas escaláveis e performáticas
                </span>
              </div>
            </div>

            <div className="flex space-x-5">
              <a
                href="https://www.linkedin.com/in/mendesalan/"
                className="text-gray-500 hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>

              <a
                href="https://github.com/mendesalan"
                className="text-gray-500 hover:text-gray-800 transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
