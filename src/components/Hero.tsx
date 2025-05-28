"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaCalendarCheck } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="pt-28 pb-20 md:pt-32 md:pb-24 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Construa seu negócio digital com segurança e evite prejuízos.
            </h1>

            <p className="mt-6 text-xl text-gray-300 leading-relaxed">
              Sou o seu CTO que transforma suas ideias em soluções reais com
              visão estratégica de C-level, evitando que você perca tempo e
              dinheiro com decisões técnicas equivocadas.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="#contato"
                className="px-6 py-3 bg-emerald-600 text-white rounded-md shadow-lg hover:bg-emerald-700 inline-flex items-center transition-colors"
              >
                <FaCalendarCheck className="mr-2" />
                Agende uma conversa grátis
              </Link>

              <Link
                href="#servicos"
                className="px-6 py-3 border border-white text-white rounded-md hover:bg-white hover:text-gray-900 inline-flex items-center transition-colors"
              >
                Ver serviços
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
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                alt="Arquiteto de Software"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="absolute -bottom-6 -left-6 w-36 h-36 bg-emerald-600 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob"></div>
            <div className="absolute -top-6 -right-6 w-36 h-36 bg-blue-600 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
