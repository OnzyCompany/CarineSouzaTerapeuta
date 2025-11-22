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
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-[#7FE7DC] to-[#FFB6C1] text-gray-800 hover:shadow-lg hover:brightness-105 border border-transparent",
    secondary: "bg-white text-gray-800 shadow-md hover:shadow-lg border border-gray-100",
    outline: "bg-transparent border-2 border-[#7FE7DC] text-gray-700 hover:bg-[#7FE7DC]/10",
    white: "bg-white text-[#5EC7BC] hover:text-[#F06292] shadow-lg hover:shadow-xl font-bold"
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-10 py-4 text-lg font-bold tracking-wide"
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