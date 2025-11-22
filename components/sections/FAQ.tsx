import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "O que é Terapia Integrativa?",
    answer: "A Terapia Integrativa é uma abordagem que une diferentes técnicas terapêuticas para tratar o ser humano como um todo: mente, corpo e emoções. Diferente da terapia tradicional que foca apenas na fala, utilizamos ferramentas que acessam o inconsciente e promovem uma cura mais profunda."
  },
  {
    question: "Você atende por plano de saúde?",
    answer: "Atualmente meus atendimentos são particulares. No entanto, forneço recibo para que você possa solicitar o reembolso junto ao seu convênio, caso seu plano ofereça essa modalidade."
  },
  {
    question: "Qual a duração de cada sessão?",
    answer: "As sessões têm duração média de 50 minutos a 1 hora. Esse é o tempo ideal para trabalharmos as questões trazidas e realizarmos as intervenções necessárias com qualidade."
  },
  {
    question: "Como funciona o atendimento online?",
    answer: "O atendimento online acontece via videochamada (Google Meet ou WhatsApp Video). Possui a mesma eficácia do presencial, com a comodidade de você ser atendida no conforto da sua casa. É necessário apenas um local privado e boa conexão com internet."
  },
  {
    question: "Você atende homens?",
    answer: "Sim! Embora meu foco principal seja a saúde emocional da mulher e autoestima feminina, também atendo homens (adolescentes e jovens adultos de 11 a 25 anos) e realizo terapia de casal."
  }
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Dúvidas Frequentes" 
          subtitle="Esclareça as principais questões sobre o processo terapêutico."
        />

        <div className="max-w-3xl mx-auto mt-12">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className={`w-full flex items-center justify-between p-6 md:p-8 rounded-xl text-left transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-[#F0F4F8] shadow-sm' 
                    : 'bg-white border border-gray-100 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-5">
                  <HelpCircle className={`w-7 h-7 ${activeIndex === index ? 'text-[#7FE7DC]' : 'text-gray-400'}`} />
                  <span className={`font-serif font-semibold text-xl ${activeIndex === index ? 'text-gray-900' : 'text-gray-700'}`}>
                    {faq.question}
                  </span>
                </div>
                <div className={`p-2 rounded-full ${activeIndex === index ? 'bg-white text-[#7FE7DC] shadow-sm' : 'bg-gray-100 text-gray-500'}`}>
                  {activeIndex === index ? <Minus size={24} /> : <Plus size={24} />}
                </div>
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 md:p-8 pt-2 pl-16 md:pl-20 text-gray-600 leading-relaxed font-medium text-lg border-l-2 border-[#7FE7DC] ml-6 md:ml-8 mt-2">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;