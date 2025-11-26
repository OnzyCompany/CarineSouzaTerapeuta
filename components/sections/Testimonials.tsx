import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Iniciou o processo terapêutico com muita dificuldade para dormir, sentia muito medo de morrer e não criar os filhos. Ela se entregou em sua jornada e após as primeiras sessões, fazendo o seu Autocuidado diário, conseguiu regular os pensamentos ansiosos. No final do processo conquistou direcionamento profissional e gestão Emocional.",
    author: "Paciente A",
    role: "Gestão Emocional"
  },
  {
    id: 2,
    text: "Estava num quadro muito ansioso, no processo aprendeu a se autoconhecer e entender os gatilhos. Com autoestima elevada.",
    author: "Paciente B",
    role: "Ansiedade e Autoestima"
  },
  {
    id: 3,
    text: "Não conseguia aceitar o amor do companheiro, muito cansaço mental por conta das demandas do trabalho. No processo, entendeu a razão dessa dificuldade em aceitar esse amor e resgatou. Ampliou a sua gama de conhecimento e desenvolvimento profissional.",
    author: "Paciente C",
    role: "Relacionamento e Carreira"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-[#FFF0F5]">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Histórias de Transformação" 
          subtitle="Relatos reais de quem permitiu-se viver o processo de autocura."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col relative hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute -top-5 left-8 bg-[#7FE7DC] p-3 rounded-full shadow-md">
                <Quote className="text-white w-6 h-6 fill-current" />
              </div>
              
              <div className="flex gap-1 mb-6 mt-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-[#FFB6C1] fill-current" />
                ))}
              </div>

              <p className="text-gray-600 italic leading-relaxed font-medium mb-6 flex-grow text-lg">
                "{testimonial.text}"
              </p>
              
              <div className="pt-6 border-t border-gray-100">
                <p className="font-serif font-bold text-gray-900 text-xl">{testimonial.author}</p>
                <p className="text-[#5EC7BC] font-medium text-sm uppercase tracking-wide mt-1">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;