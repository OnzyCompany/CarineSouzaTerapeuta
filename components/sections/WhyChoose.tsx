import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, ShieldCheck, BrainCircuit } from 'lucide-react';

const features = [
  { icon: Heart, title: "Atendimento Humanizado", text: "Acolhimento real e sensível à sua dor." },
  { icon: BrainCircuit, title: "Terapia Integrativa", text: "Visão completa: mente, corpo e emoções." },
  { icon: Star, title: "Foco em Autoestima", text: "Especialista em reconstruir o amor próprio." },
  { icon: ShieldCheck, title: "Sigilo & Ética", text: "Ambiente seguro e totalmente confidencial." },
];

const WhyChoose: React.FC = () => {
  return (
    <section className="py-20 bg-primary-offwhite border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="flex flex-col items-center text-center p-10 bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-b-4 border-transparent hover:border-[#7FE7DC]"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#7FE7DC] to-[#5EC7BC] rounded-full flex items-center justify-center text-white mb-6 shadow-lg shadow-[#7FE7DC]/30">
                <feature.icon size={36} />
              </div>
              <h3 className="font-bold text-gray-900 text-2xl mb-4 font-serif">{feature.title}</h3>
              <p className="text-gray-600 font-medium leading-relaxed text-lg">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;