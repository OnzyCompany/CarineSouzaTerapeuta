import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { MessageCircle, Instagram, Mail, Facebook } from 'lucide-react';

const CTA: React.FC = () => {
  const handleWhatsAppClick = () => {
    const message = "Ol%C3%A1%20Carine!%20Estou%20pronta%20para%20dar%20o%20primeiro%20passo%20e%20gostaria%20de%20agendar%20uma%20sess%C3%A3o.";
    window.open(`https://wa.me/553499057458?text=${message}`, '_blank');
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#7FE7DC] to-[#FFB6C1] opacity-90" />
      
      {/* Decorative Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 drop-shadow-md leading-tight">
            Pronto(a) para dar o primeiro passo?
          </h2>
          
          <p className="text-xl md:text-2xl font-medium mb-10 opacity-95 max-w-2xl mx-auto leading-relaxed">
            Agende sua primeira sessão com condições especiais e comece hoje seu processo de autocura.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="inline-block"
          >
            <Button 
              variant="white" 
              size="lg" 
              onClick={handleWhatsAppClick}
              className="mb-12"
            >
              <MessageCircle className="mr-2 w-6 h-6" />
              Falar no WhatsApp
            </Button>
          </motion.div>

          <div className="flex justify-center items-center gap-8 pt-8 border-t border-white/30 max-w-sm mx-auto">
            <a 
              href="https://wa.me/553499057458" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-transform hover:scale-110"
              aria-label="WhatsApp"
            >
              <MessageCircle size={32} strokeWidth={1.5} />
            </a>
            <a 
              href="https://www.instagram.com/s.carinesouza" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-transform hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={32} strokeWidth={1.5} />
            </a>
            <a 
              href="https://www.facebook.com/share/1CccKjLjrD/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 transition-transform hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook size={32} strokeWidth={1.5} />
            </a>
            <a 
              href="mailto:carinesouza3319@gmail.com" 
              className="text-white hover:text-white/80 transition-transform hover:scale-110"
              aria-label="Email"
            >
              <Mail size={32} strokeWidth={1.5} />
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default CTA;