import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#F2F9F9] relative">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Minha História, Sua Inspiração" 
          subtitle="Conheça a jornada por trás da profissional que irá lhe acolher."
        />

        <div className="flex flex-col lg:flex-row gap-16 items-center mt-12">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
             <div className="relative">
                <img 
                  src="https://res.cloudinary.com/dxhlvrach/image/upload/v1763784486/CarineSouza_brks39.jpg" 
                  alt="Carine Souza" 
                  className="rounded-tr-[5rem] rounded-bl-[5rem] shadow-2xl w-full max-w-md mx-auto object-cover z-10 relative grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Graphic element */}
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#7FE7DC] rounded-full opacity-20 -z-0 blur-2xl"></div>
             </div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white p-10 rounded-2xl border border-gray-200 shadow-xl relative">
              <Quote className="absolute top-6 left-6 text-[#FFB6C1] opacity-50 w-12 h-12 rotate-180" />
              
              <div className="prose prose-lg text-gray-800 relative z-10 pl-4 font-sans">
                <p className="mb-6 leading-relaxed font-medium text-lg md:text-xl text-gray-700">
                  Meu nome é Carine Souza, sou casada e tenho três filhos. Fui confeiteira, tenho curso Técnico em RH e hoje vivo essa linda missão como Terapeuta Especialista no Universo Emocional Feminino 🌷
                </p>

                <p className="mb-6 italic text-gray-600 font-serif text-2xl md:text-3xl leading-relaxed">
                  "Eu fui uma criança rejeitada pelo meu pai desde o meu primeiro ano de vida..."
                </p>
                <p className="mb-6 leading-relaxed font-medium text-lg md:text-xl text-gray-700">
                  Cresci em um lar cheio de agitação, sem atenção, amor e carinho da minha mãe (somente minha avó me acolhia). 
                  Sofri com as feridas emocionais do abandono, rejeição e injustiça.
                </p>
                <p className="font-bold text-gray-900 text-xl md:text-2xl mb-6 bg-gradient-to-r from-[#7FE7DC]/20 to-transparent p-3 rounded-lg inline-block">
                  Sou uma sobrevivente! Hoje aprendi a viver!
                </p>
                <p className="leading-relaxed font-medium text-lg md:text-xl text-gray-700">
                  Repeti vários padrões de comportamento e sofri com baixa autoestima por anos. 
                  Encontrei a minha cura na <strong className="text-[#5EC7BC]">Terapia Integrativa</strong>! E hoje estou aqui para acolher a sua história e te ajudar em seu <span className="text-[#F06292] font-bold">Processo de Autocura Emocional 🍃</span>
                </p>
              </div>

              <div className="mt-12 flex items-center gap-4">
                <div className="h-0.5 bg-gray-200 flex-1"></div>
                <span className="font-serif font-bold text-2xl text-gray-900">Carine Souza</span>
                <div className="h-0.5 bg-gray-200 flex-1"></div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;