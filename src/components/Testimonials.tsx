"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    content:
      "Já tinha perdido dinheiro com duas empresas de TI. O Alan foi o primeiro cara que me explicou de forma clara o que dava pra fazer e o que era enrolação.",
    author: "João Silva",
    role: "Lançador digital",
    initial: "J",
    bgColor: "bg-blue-100",
    textColor: "text-blue-700",
  },
  {
    content:
      "Depois de meses sem avançar com minha plataforma, o Alan me ajudou a encontrar os profissionais certos e definir um plano realista. Melhor investimento que fiz.",
    author: "Maria Costa",
    role: "Criadora de conteúdo",
    initial: "M",
    bgColor: "bg-emerald-100",
    textColor: "text-emerald-700",
  },
  {
    content:
      "A experiência dele com tecnologia realmente faz diferença. Não só me mostrou a solução certa, mas evitou que eu gastasse com ferramentas que não precisava.",
    author: "Pedro Oliveira",
    role: "Empreendedor digital",
    initial: "P",
    bgColor: "bg-purple-100",
    textColor: "text-purple-700",
  },
];

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            O que os clientes dizem
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                ))}
              </div>

              <blockquote className="text-gray-600 italic mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </blockquote>

              <div className="flex items-center">
                <div
                  className={`${testimonial.bgColor} ${testimonial.textColor} w-10 h-10 rounded-full flex items-center justify-center font-bold mr-4`}
                >
                  {testimonial.initial}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
