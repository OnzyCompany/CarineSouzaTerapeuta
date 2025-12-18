import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, alignment = 'center' }) => {
  return (
    <div className={`mb-10 md:mb-16 ${alignment === 'center' ? 'text-center' : 'text-left'} px-4`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4 leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`flex flex-col ${alignment === 'center' ? 'items-center' : 'items-start'}`}
        >
          <p className={`text-gray-600 max-w-2xl text-lg md:text-xl font-medium leading-relaxed ${alignment === 'center' ? 'mx-auto text-center' : 'text-left'}`}>
            {subtitle}
          </p>
          <div className={`h-1.5 w-24 bg-gradient-to-r from-[#01a7aa] to-[#dbaf45] mt-6 rounded-full ${alignment === 'left' ? 'self-start' : ''}`} />
        </motion.div>
      )}
    </div>
  );
};

export default SectionHeading;