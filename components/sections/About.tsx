import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-[#F2F9F9] relative scroll-mt-20">
      <div className="container mx-auto px-4">
        {/* Título unificado no gradiente azul água conforme solicitado */}
        <div className="mb-12 md:mb-20 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight px-2"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01a7aa] to-[#40ced0]">Minha História</span>, 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#01a7aa] to-[#40ced0] block md:inline mt-2 md:mt-0">Sua Inspiração</span>
          </motion.h2>
          <div className="h-2 w-32 bg-gradient-to-r from-[#01a7aa] to-[#40ced0] mx-auto rounded-full" />
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
             <div className="relative max-w-sm md:max-w-md mx-auto">
                <img 
                  src="https://res.cloudinary.com/dxhlvrach/image/upload/v1763784486/CarineSouza_brks39.jpg" 
                  alt="Carine Souza" 
                  className="rounded-tr-[4rem] rounded-bl-[4rem] md:rounded-tr-[5rem] md:rounded-bl-[5rem] shadow-2xl w-full object-cover z-10 relative grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-32 h-32 md:w-40 md:h-40 bg-[#01a7aa] rounded-full opacity-20 -z-0 blur-2xl"></div>
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
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden">
              <Quote className="absolute -top-4 -left-4 text-[#01a7aa] opacity-10 w-24 h-24 rotate-180" />
              
              <div className="relative z-10 space-y-6">
                <p className="text-gray-800 leading-relaxed font-bold text-xl md:text-2xl">
                  Meu nome é Carine Souza, sou casada e tenho três filhos. Fui confeiteira, tenho curso Técnico em RH e hoje vivo essa linda missão como Terapeuta Especialista no Universo Emocional Feminino 🌷
                </p>

                <div className="py-4">
                  <p className="italic text-gray-500 font-serif text-2xl md:text-3xl leading-relaxed border-l-4 border-[#01a7aa]/30 pl-6">
                    "Eu fui uma criança rejeitada pelo meu pai desde o meu primeiro ano de vida..."
                  </p>
                </div>

                <p className="leading-relaxed font-medium text-lg md:text-xl text-gray-700">
                  Cresci em um lar cheio de agitação, sem atenção, amor e carinho da minha mãe. 
                  Sofri com as feridas emocionais do abandono, rejeição e injustiça.
                </p>
                
                <p className="font-bold text-gray-900 text-xl md:text-2xl bg-[#01a7aa]/5 p-4 rounded-2xl border-l-4 border-[#01a7aa]">
                  Sou uma sobrevivente! Hoje aprendi a viver!
                </p>
                
                <p className="leading-relaxed font-medium text-lg md:text-xl text-gray-700">
                  Encontrei a minha cura na <strong className="text-[#01a7aa]">Terapia Integrativa</strong>! E hoje estou aqui para acolher a sua história e te ajudar em seu <span className="text-[#aa750b] font-bold">Processo de Autocura Emocional 🍃</span>
                </p>
              </div>

              <div className="mt-12 flex items-center gap-4">
                <div className="h-px bg-gray-100 flex-1"></div>
                <span className="font-serif font-bold text-2xl text-gray-900">Carine Souza</span>
                <div className="h-px bg-gray-100 flex-1"></div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;