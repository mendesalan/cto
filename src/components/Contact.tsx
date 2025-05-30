"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contato"
      className="py-20 md:py-28 bg-gradient-to-br from-emerald-600 to-emerald-700 text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Chega de promessas vazias.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl mb-10 max-w-2xl mx-auto text-emerald-100"
          >
            Vamos conversar e montar algo do jeito certo? Agende uma consulta
            gratuita de 30 minutos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6"
          >
            <Link
              href="https://api.whatsapp.com/send?phone=5511961525971&text=Oi%20Alan%2C%20vi%20seus%20servi%C3%A7os%20e%20quero%20entender%20como%20voc%C3%AA%20pode%20me%20ajudar%20com%20meu%20projeto%20digital."
              className="bg-white text-emerald-700 font-semibold px-6 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-colors flex items-center justify-center"
            >
              <FaWhatsapp className="w-6 h-6 mr-3" />
              <span>Falar comigo no WhatsApp</span>
            </Link>

            <Link
              href="mailto:meuctodigital@gmail.com"
              className="border-2 border-white text-white font-semibold px-6 py-4 rounded-lg hover:bg-white hover:text-emerald-700 transition-colors flex items-center justify-center"
            >
              <FaEnvelope className="w-5 h-5 mr-3" />
              <span>Enviar email</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 text-emerald-100 text-sm"
          >
            <p>Respondo em até 24 horas, geralmente bem menos.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
