"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaCheckCircle,
  FaArrowRight,
  FaCalendarCheck,
  FaSearch,
  FaDraftingCompass,
  FaLaptopCode,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
} from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CTOOnDemandPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-20 md:pt-32 md:pb-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                CTO on Demand
              </h1>
              <p className="mt-6 text-xl text-gray-300 leading-relaxed">
                Liderança técnica estratégica quando você precisa, sem os custos
                de um CTO full-time. Tenha ao seu lado um{" "}
                <strong>CTO experiente</strong> para tomar as decisões certas no
                momento certo.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/#contato"
                  className="px-6 py-3 bg-emerald-600 text-white rounded-md shadow-lg hover:bg-emerald-700 inline-flex items-center transition-colors"
                >
                  <FaCalendarCheck className="mr-2" />
                  Agendar Conversa Grátis
                </Link>

                <Link
                  href="#como-funciona"
                  className="px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-gray-900 inline-flex items-center transition-colors"
                >
                  Como Funciona
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:block relative"
            >
              <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="CTO on Demand - Liderança técnica estratégica para startups e empresas digitais"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-emerald-600 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
              <div className="absolute -top-6 -right-6 w-36 h-36 bg-purple-600 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* O que é CTO on Demand */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              O que é CTO on Demand?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto"
            >
              É um serviço onde você tem acesso a um{" "}
              <strong>Chief Technology Officer</strong> experiente de forma
              flexível, pagando apenas pelo tempo que precisar. Ideal para
              negócios que precisam de direcionamento técnico estratégico.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Perfeito para:
              </h3>
              <div className="space-y-4">
                {[
                  "Startups que precisam de direcionamento técnico mas ainda não podem custear um CTO full-time",
                  "Empresas em crescimento que precisam validar decisões técnicas importantes",
                  "Negócios digitais que querem evitar erros custosos de arquitetura",
                  "Infoprodutores que precisam de orientação para escalar tecnicamente",
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <FaCheckCircle className="text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-50 rounded-2xl p-8">
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  💡 Diferencial:
                </h4>
                <p className="text-gray-700 leading-relaxed">
                  Não somos uma agência que quer vender mais horas. Somos{" "}
                  <strong>parceiros estratégicos</strong> focados em resolver
                  seus problemas técnicos de forma eficiente, com visão de
                  C-level e experiência comprovada em projetos escaláveis.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section id="como-funciona" className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              Como funciona o CTO on Demand?
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Diagnóstico",
                description:
                  "Analisamos sua situação atual e identificamos os principais desafios técnicos",
                icon: <FaSearch className="w-6 h-6" />,
                color: "emerald",
              },
              {
                step: "2",
                title: "Estratégia",
                description:
                  "Criamos um plano técnico alinhado com seus objetivos de negócio",
                icon: <FaDraftingCompass className="w-6 h-6" />,
                color: "blue",
              },
              {
                step: "3",
                title: "Execução",
                description:
                  "Acompanhamos a implementação garantindo qualidade e eficiência",
                icon: <FaLaptopCode className="w-6 h-6" />,
                color: "purple",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className={`${
                    item.color === "emerald"
                      ? "bg-emerald-100"
                      : item.color === "blue"
                      ? "bg-blue-100"
                      : "bg-purple-100"
                  } w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <div
                    className={`${
                      item.color === "emerald"
                        ? "text-emerald-600"
                        : item.color === "blue"
                        ? "text-blue-600"
                        : "text-purple-600"
                    }`}
                  >
                    {item.icon}
                  </div>
                </div>
                <div
                  className={`text-2xl font-bold ${
                    item.color === "emerald"
                      ? "text-emerald-600"
                      : item.color === "blue"
                      ? "text-blue-600"
                      : "text-purple-600"
                  } mb-2`}
                >
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços inclusos */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              O que está incluído no CTO on Demand?
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "🎯 Estratégia Técnica",
                items: [
                  "Definição de arquitetura de software",
                  "Escolha de tecnologias adequadas",
                  "Roadmap técnico detalhado",
                  "Análise de viabilidade técnica",
                ],
                color: "emerald",
              },
              {
                title: "👥 Liderança de Equipe",
                items: [
                  "Orientação para desenvolvedores",
                  "Code review e boas práticas",
                  "Definição de processos",
                  "Mentoria técnica",
                ],
                color: "blue",
              },
              {
                title: "🔍 Diagnóstico Técnico",
                items: [
                  "Auditoria de código existente",
                  "Identificação de gargalos",
                  "Análise de segurança",
                  "Recomendações de melhorias",
                ],
                color: "purple",
              },
              {
                title: "📈 Escalabilidade",
                items: [
                  "Planejamento de crescimento",
                  "Otimização de performance",
                  "Arquitetura escalável",
                  "Monitoramento e alertas",
                ],
                color: "gray",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-2xl shadow-lg p-8 border-t-4 ${
                  service.color === "emerald"
                    ? "border-emerald-500"
                    : service.color === "blue"
                    ? "border-blue-500"
                    : service.color === "purple"
                    ? "border-purple-500"
                    : "border-gray-500"
                } hover:shadow-xl transition-shadow`}
              >
                <h3 className="text-xl font-semibold mb-6 text-gray-900">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <FaCheckCircle className="text-emerald-600 mt-1 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que escolher */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-900"
            >
              Por que escolher nosso CTO on Demand?
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: <FaShieldAlt className="w-8 h-8" />,
                title: "Experiência Comprovada",
                description:
                  "Mais de 10 anos como Solutions Architect, tendo participado de projetos desde startups até grandes corporações.",
              },
              {
                icon: <FaChartLine className="w-8 h-8" />,
                title: "Custo-Benefício",
                description:
                  "Tenha acesso a expertise de CTO sem os custos de salário full-time, benefícios e encargos trabalhistas.",
              },
              {
                icon: <FaUsers className="w-8 h-8" />,
                title: "Foco no Resultado",
                description:
                  "Não somos uma agência - somos parceiros focados em resolver seus problemas técnicos de forma eficiente.",
              },
              {
                icon: <FaArrowRight className="w-8 h-8" />,
                title: "Flexibilidade",
                description:
                  "Contrate por projeto, por período ou sob demanda. Você define o modelo que faz mais sentido para seu negócio.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start"
              >
                <div className="bg-emerald-100 text-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mr-6 flex-shrink-0">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Pronto para ter um CTO trabalhando para você?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Vamos conversar sobre seus desafios técnicos e como posso ajudar
              seu negócio digital a crescer com segurança.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/#contato"
                className="px-8 py-4 bg-emerald-600 text-white rounded-md shadow-lg hover:bg-emerald-700 inline-flex items-center text-lg font-semibold transition-colors"
              >
                <FaCalendarCheck className="mr-2" />
                Agendar Conversa
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
