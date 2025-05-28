"use client";

import { motion } from "framer-motion";
import { FaTimesCircle, FaCheckCircle } from "react-icons/fa";

const ProblemsSolutions = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="problemas" className="py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white"
          >
            Problemas & Soluções
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {/* Problems Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-red-500 h-full"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Você já passou por isso?
              </h3>
            </div>

            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-5"
            >
              <motion.li variants={item} className="flex items-center">
                <FaTimesCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="ml-3 text-gray-700">
                  Gastos com tech que você nem precisava.
                </span>
              </motion.li>
              <motion.li variants={item} className="flex items-center">
                <FaTimesCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="ml-3 text-gray-700">
                  Agência que promete e não entrega.
                </span>
              </motion.li>
              <motion.li variants={item} className="flex items-center">
                <FaTimesCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="ml-3 text-gray-700">
                  Desenvolvedores que somem.
                </span>
              </motion.li>
              <motion.li variants={item} className="flex items-center">
                <FaTimesCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                <span className="ml-3 text-gray-700">
                  Prazos infinitos e zero entregas.
                </span>
              </motion.li>
            </motion.ul>
          </motion.div>

          {/* Solutions Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 border-t-4 border-emerald-500 h-full"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Você precisa de:
              </h3>
            </div>

            <motion.ul
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="space-y-5"
            >
              <motion.li variants={item} className="flex items-center">
                <FaCheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="ml-3 text-gray-700">
                  Apoio para revisar o que te prometem.
                </span>
              </motion.li>
              <motion.li variants={item} className="flex items-center">
                <FaCheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="ml-3 text-gray-700">
                  Um projeto que realmente sai do papel.
                </span>
              </motion.li>
              <motion.li variants={item} className="flex items-center">
                <FaCheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="ml-3 text-gray-700">
                  Arquitetura escalável e com propósito.
                </span>
              </motion.li>
              <motion.li variants={item} className="flex items-center">
                <FaCheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <span className="ml-3 text-gray-700">
                  Um técnico que fala sua língua
                </span>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSolutions;
