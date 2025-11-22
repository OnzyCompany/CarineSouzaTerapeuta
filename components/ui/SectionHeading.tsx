import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle, alignment = 'center' }) => {
  return (
    <div className={`mb-12 ${alignment === 'center' ? 'text-center' : 'text-left'}`}>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-serif font-semibold text-gray-800 mb-3"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          <p className={`text-gray-600 max-w-2xl ${alignment === 'center' ? 'mx-auto' : ''}`}>
            {subtitle}
          </p>
          <div className={`h-1 w-20 bg-gradient-to-r from-[#7FE7DC] to-[#FFB6C1] mt-4 rounded-full ${alignment === 'left' ? 'self-start' : ''}`} />
        </motion.div>
      )}
    </div>
  );
};

export default SectionHeading;