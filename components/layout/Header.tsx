import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre Mim', href: '#about' },
  { label: 'Serviços', href: '#services' },
  { label: 'Palestras', href: '#events' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Contato', href: '#contact' },
];

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    // Primeiro fechamos o menu mobile se estiver aberto
    setMobileMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Pequeno delay para permitir que o menu mobile comece a fechar e não atrapalhe o cálculo da posição
      setTimeout(() => {
        const headerOffset = 100; // Ajustado para bater com o scroll-padding do HTML
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 50);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-1' : 'bg-transparent py-2'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#hero" 
          onClick={(e) => handleNavClick(e, '#hero')}
          className="relative z-10 block cursor-pointer transition-transform hover:scale-105"
        >
          <img 
            src="https://res.cloudinary.com/dxhlvrach/image/upload/v1766075026/Terapeuta_20251218_132103_0000_hr9cm4.png" 
            alt="Carine Souza Logo" 
            className={`
              transition-all duration-500 object-contain
              ${isScrolled ? 'h-16 md:h-20' : 'h-24 md:h-32'} 
              w-auto
            `}
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-10">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-bold text-gray-800 hover:text-[#01a7aa] transition-colors relative group cursor-pointer uppercase tracking-widest"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#dbaf45] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-gray-800 focus:outline-none p-3 hover:bg-gray-100 rounded-full transition-colors z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? <X size={36} /> : <Menu size={36} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-40 lg:hidden flex flex-col justify-center items-center"
          >
            <div className="flex flex-col space-y-8 text-center">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-900 font-serif font-bold text-3xl hover:text-[#01a7aa] cursor-pointer tracking-tight transition-colors"
                >
                  {item.label}
                </a>
              ))}
              
              <div className="pt-10">
                 <img 
                    src="https://res.cloudinary.com/dxhlvrach/image/upload/v1766075026/Terapeuta_20251218_132103_0000_hr9cm4.png" 
                    alt="Logo" 
                    className="h-20 mx-auto opacity-50"
                 />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;