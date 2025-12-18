import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  const whatsappUrl = "https://wa.me/553499057458?text=Ol%C3%A1%20Carine!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20a%20Terapia.";

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#aa750b] to-[#dbaf45] rounded-full shadow-2xl cursor-pointer group"
      aria-label="Fale conosco no WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#dbaf45] animate-ping opacity-40"></span>
      <div className="relative z-10">
        <MessageCircle className="w-8 h-8 text-white fill-white" />
      </div>
      
      {/* Tooltip */}
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white px-4 py-2 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
        <p className="text-gray-800 font-bold text-sm">Agende sua sessão</p>
        <div className="absolute top-1/2 -right-2 -translate-y-1/2 w-4 h-4 bg-white transform rotate-45"></div>
      </div>
    </motion.a>
  );
};

export default FloatingWhatsApp;