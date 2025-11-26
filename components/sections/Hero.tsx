import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const handleWhatsAppClick = () => {
    const message = "Ol%C3%A1%20Carine!%20Vim%20pelo%20site%20e%20gostaria%20de%20agendar%20uma%20sess%C3%A3o.";
    window.open(`https://wa.me/553499057458?text=${message}`, '_blank');
  };

  return (
    <section 
      id="hero" 
      ref={ref}
      // Changed min-h-screen to min-h-[100dvh] for mobile browser support
      className="relative min-h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden pt-20 bg-primary-cream supports-[min-height:100dvh]:min-h-[100dvh]"
    >
      {/* Background with Gradients */}
      <motion.div 
        style={{ y: yBg }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white via-[#E0F7FA]/50 to-[#FCE4EC]/50" />
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-[#7FE7DC]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FFB6C1]/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="container mx-auto px-4 z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          style={{ y: yText }}
          className="text-center md:text-left space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-2 px-4 rounded-full bg-white shadow-sm text-[#4DB6AC] font-bold tracking-wide text-sm mb-4 border border-[#7FE7DC]/30">
              TERAPIA INTEGRATIVA & SAÚDE EMOCIONAL
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight drop-shadow-sm">
              Cuidar da <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5EC7BC] to-[#F06292]">Saúde Mental</span> é um ato de Amor Próprio 🤍
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-700 max-w-lg mx-auto md:mx-0 font-normal leading-relaxed"
          >
            Especialista em gestão Emocional e Autoestima.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Button variant="primary" size="lg" onClick={handleWhatsAppClick}>
              Agende sua Sessão
            </Button>
            <Button variant="secondary" size="lg" onClick={() => document.getElementById('services')?.scrollIntoView()}>
              Conheça meu trabalho
            </Button>
          </motion.div>
        </motion.div>

        {/* Image/Visual Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative w-[400px] h-[550px] mx-auto">
             {/* Decorative Blobs */}
             <div className="absolute -top-6 -left-6 w-full h-full bg-[#7FE7DC] rounded-[2rem] opacity-40 rotate-[-6deg] animate-pulse-slow" />
             <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#FFB6C1] rounded-[2rem] opacity-40 rotate-[6deg]" />
             
             {/* Main Image Container */}
             <div className="absolute inset-0 bg-white rounded-[2rem] shadow-2xl overflow-hidden border-4 border-white">
                <img 
                  src="https://res.cloudinary.com/dxhlvrach/image/upload/v1763780546/8ca3e57a-87c7-4ae7-91f4-22670ae7a258_n8tqst.jpg" 
                  alt="Carine Souza Terapeuta" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;