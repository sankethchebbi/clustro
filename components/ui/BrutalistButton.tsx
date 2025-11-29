import React from 'react';
import { motion } from 'framer-motion';

interface BrutalistButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

const BrutalistButton: React.FC<BrutalistButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "font-sans font-bold uppercase tracking-wider py-4 px-8 border-2 border-black transition-all duration-200 relative focus:outline-none";
  
  const variants = {
    primary: "bg-clustro-accent text-black hover:bg-white shadow-brutal hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]",
    secondary: "bg-black text-white hover:bg-gray-800 shadow-brutal hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]",
    outline: "bg-transparent text-black hover:bg-black hover:text-white shadow-brutal hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]"
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default BrutalistButton;