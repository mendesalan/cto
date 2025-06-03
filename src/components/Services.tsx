"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaDraftingCompass,
  FaLaptopCode,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    icon: <FaSearch className="w-6 h-6" />,
    title: "Diagnóstico Técnico",
    description:
      "Análise especializada de propostas, fornecedores e tecnologias que você está considerando para seu projeto digital.",
    info: "1 reunião + PDF com insights",
    color: "blue",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    borderColor: "border-blue-500",
    linkColor: "text-blue-600 hover:text-blue-800",
  },
  {
    icon: <FaDraftingCompass className="w-6 h-6" />,
    title: "Consultoria de Construção",
    description:
      "Planejamento completo de app ou plataforma digital, com roadmap técnico detalhado e arquitetura escalável.",
    info: "Sessões + plano técnico",
    color: "emerald",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    borderColor: "border-emerald-500",
    linkColor: "text-emerald-600 hover:text-emerald-800",
  },
  {
    icon: <FaLaptopCode className="w-6 h-6" />,
    title: "CTO on Demand",
    description:
      "Acompanhamento contínuo do seu projeto técnico com suporte estratégico e visão de C-level para seu negócio digital.",
    info: "Assinatura mensal",
    color: "purple",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
    borderColor: "border-purple-500",
    linkColor: "text-purple-600 hover:text-purple-800",
  },
];

const Services = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="servicos" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Serviços de Arquitetura de Software
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Serviços especializados em <strong>CTO on demand</strong> e{" "}
            <strong>consultoria técnica</strong> para transformar suas ideias em
            soluções digitais escaláveis
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.article
              key={index}
              variants={item}
              className={`bg-white rounded-2xl shadow-lg p-8 border-t-4 ${service.borderColor} hover:shadow-xl transition-shadow`}
            >
              <div
                className={`${service.iconBg} ${service.iconColor} w-16 h-16 rounded-full flex items-center justify-center mb-6`}
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold mb-4 text-gray-900">
                {service.title}
              </h3>

              <p className="mb-6 text-gray-600">{service.description}</p>

              <div className="flex items-center mb-4 text-gray-500">
                <span className="text-sm">{service.info}</span>
              </div>

              <Link
                href="#contato"
                className={`inline-flex items-center ${service.linkColor} font-medium transition-colors`}
                aria-label={`Saiba mais sobre ${service.title}`}
              >
                Saiba mais <FaArrowRight className="ml-2 w-3 h-3" />
              </Link>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
