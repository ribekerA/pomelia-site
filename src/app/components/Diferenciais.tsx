"use client";
import { motion } from "framer-motion";

const difs = [
  "Filhotes 100% Spitz Alemão Anão, padrão CBKC",
  "Socialização e entrega em todo Brasil",
  "Criatório familiar, sem canil comercial",
  "Pedigree, vacinas e laudo de saúde",
  "Suporte vitalício ao tutor",
  "Atendimento personalizado para cada família",
  "Transparência, compromisso e ética",
  "Mais de 5.000 avaliações reais",
];

export default function Diferenciais() {
  return (
    <section className="bg-yellow-100 py-8">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {difs.map((dif, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="flex items-start mb-3 text-lg"
          >
            <span className="mr-2 text-yellow-700 text-xl font-bold">✓</span>
            {dif}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
