"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    question: "O que me diferencia de uma agência de desenvolvimento?",
    answer:
      "Não sou uma agência, sou um profissional experiente que atua como seu parceiro técnico. Não tenho interesse em vender mais horas ou ferramentas desnecessárias - meu foco é trazer clareza e resultados reais para seu negócio digital.",
  },
  {
    question: "Como funciona o processo de trabalho?",
    answer:
      "Começamos com uma conversa para entender seus objetivos. A partir daí, desenvolvemos um plano personalizado com base no tipo de solução que você precisa. Todo o processo é transparente, com comunicação clara e entregas definidas.",
  },
  {
    question: "Você também desenvolve o software?",
    answer:
      "Meu papel principal é o de arquiteto e consultor, mas tenho uma rede de desenvolvedores de confiança. Posso supervisionar a implementação do seu projeto garantindo que seja executado conforme o planejado e dentro dos padrões de qualidade.",
  },
  {
    question: "Quanto custa contratar seus serviços?",
    answer:
      "Os preços variam de acordo com o tipo de serviço e a complexidade do projeto. Ofereço desde consultorias pontuais até acompanhamento contínuo como CTO. Entre em contato para conversarmos sobre suas necessidades específicas e receber uma proposta personalizada.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      className="py-20 md:py-28 bg-gray-50"
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            Perguntas Frequentes sobre CTO on Demand
          </motion.h2>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-4"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span
                  className="text-left font-medium text-gray-900"
                  itemProp="name"
                >
                  {faq.question}
                </span>
                <span className="text-emerald-600 ml-4">
                  {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                </span>
              </button>

              {activeIndex === index && (
                <motion.div
                  id={`faq-answer-${index}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white px-6 py-5 rounded-b-lg shadow-md -mt-1 text-gray-600"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">{faq.answer}</div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
