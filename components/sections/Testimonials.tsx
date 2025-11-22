import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { MessageSquareQuote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-[#FFF0F5]">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Depoimentos" 
          subtitle="O que dizem quem já passou pelo processo terapêutico."
        />

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto bg-white rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-xl border border-gray-100"
        >
          <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-[#7FE7DC] to-[#FFB6C1]" />
          
          <MessageSquareQuote className="mx-auto w-20 h-20 text-[#FFB6C1] mb-8 opacity-60" />
          
          <h3 className="text-3xl md:text-4xl font-serif text-gray-800 mb-8">Transformando Vidas</h3>
          <p className="text-gray-600 italic mb-12 text-xl md:text-2xl leading-relaxed font-medium max-w-3xl mx-auto">
            "Em breve, compartilharei aqui histórias reais de superação e autocura de pacientes que transformaram suas vidas através da Terapia Integrativa."
          </p>
          
          <div className="flex justify-center gap-3">
            <span className="w-4 h-4 rounded-full bg-[#FFB6C1]"></span>
            <span className="w-4 h-4 rounded-full bg-gray-200"></span>
            <span className="w-4 h-4 rounded-full bg-gray-200"></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;