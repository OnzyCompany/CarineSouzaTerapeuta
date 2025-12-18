import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    // Gradiente puramente dourado com sombra no texto para visibilidade
    primary: "bg-gradient-to-r from-[#aa750b] to-[#dbaf45] text-white hover:shadow-xl hover:brightness-110 border-0 shadow-md [text-shadow:_0_1px_2px_rgba(0,0,0,0.5)]",
    secondary: "bg-white text-gray-800 shadow-md hover:shadow-lg border border-gray-100",
    outline: "bg-transparent border-2 border-[#01a7aa] text-gray-700 hover:bg-[#01a7aa]/10",
    white: "bg-white text-[#01a7aa] hover:text-[#dbaf45] shadow-lg hover:shadow-xl font-bold"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-10 py-4 text-lg tracking-wide"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? 'w-full' : ''} 
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;