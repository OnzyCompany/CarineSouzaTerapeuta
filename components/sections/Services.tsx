import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { User, Monitor, Sparkles, Users, HeartHandshake } from 'lucide-react';

const services = [
  {
    id: 'presencial',
    title: 'Terapia Presencial',
    description: 'Atendimento acolhedor em consultório privado em Vazante MG. Um ambiente seguro para sua transformação.',
    icon: User,
  },
  {
    id: 'online',
    title: 'Terapia Online',
    description: 'O mesmo acolhimento e profissionalismo no conforto da sua casa. Atendimento via videochamada.',
    icon: Monitor,
  },
  {
    id: 'bem-estar',
    title: 'Momentos de Bem-Estar',
    description: 'Sessões especiais focadas em relaxamento, Equilíbrio emocional e conexão interior.',
    icon: Sparkles,
  },
  {
    id: 'workshops',
    title: 'Workshops',
    description: 'Encontros em grupo focados em temas como saúde mental, autoestima e inteligência emocional.',
    icon: Users,
  },
  {
    id: 'vivencias',
    title: 'Vivências Terapêuticas',
    description: 'Experiências marcadas por um momento de bem estar, conhecimento e conexão com sua essência.',
    icon: HeartHandshake,
  }
];

const Services: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Como Posso Te Ajudar" 
          subtitle="Modalidades de atendimento desenhadas para sua necessidade."
        />

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-[#F8FAFC] p-8 rounded-2xl shadow-sm border border-gray-200 group hover:border-[#01a7aa] transition-all duration-300 hover:bg-white hover:shadow-xl flex flex-col"
            >
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md border border-gray-100">
                <service.icon className="w-8 h-8 text-[#01a7aa] group-hover:text-[#dbaf45] transition-colors" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed font-medium text-lg flex-grow">{service.description}</p>
              
              <div className="w-full h-1.5 bg-gradient-to-r from-[#01a7aa] to-[#dbaf45] mt-6 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-full"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;