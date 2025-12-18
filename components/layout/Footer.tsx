import React from 'react';
import { Instagram, Facebook, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          
          {/* Column 1: Brand */}
          <div className="space-y-10">
            <div className="block">
              <img 
                src="https://res.cloudinary.com/dxhlvrach/image/upload/v1766075026/Terapeuta_20251218_132103_0000_hr9cm4.png" 
                alt="Carine Souza Logo" 
                className="h-24 md:h-36 w-auto object-contain -ml-2"
              />
            </div>
            <p className="text-gray-600 leading-relaxed font-bold max-w-xs text-xl">
              Especialista em Gestão Emocional e Autoestima.
            </p>
            <div className="flex space-x-5 pt-2">
              <a 
                href="https://www.instagram.com/s.carinesouza" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full shadow-lg hover:shadow-2xl text-white transition-all duration-300 hover:-translate-y-2 bg-gradient-to-tr from-[#f09433] via-[#bc1888] to-[#2cc6c6]"
                aria-label="Siga-nos no Instagram"
              >
                <Instagram size={30} />
              </a>
              <a 
                href="https://www.facebook.com/share/1CccKjLjrD/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full shadow-lg hover:shadow-2xl text-white transition-all duration-300 hover:-translate-y-2 bg-gradient-to-tr from-[#1877F2] to-[#0b53b8]"
                aria-label="Curta nossa página no Facebook"
              >
                <Facebook size={30} />
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="space-y-10">
            <h4 className="font-bold text-gray-900 text-2xl font-serif">Navegação</h4>
            <ul className="space-y-5">
              {['Sobre Mim', 'Serviços', 'Palestras', 'FAQ', 'Contato'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-[#01a7aa] transition-colors font-bold text-xl">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-10">
            <h4 className="font-bold text-gray-900 text-2xl font-serif">Onde Me Encontrar</h4>
            <div className="flex items-start space-x-5 text-gray-600">
              <MapPin className="w-8 h-8 mt-1 text-[#01a7aa] shrink-0" />
              <span className="font-bold text-xl leading-relaxed">Rua Manoel Monteiro, 40<br/>Bairro Novo Horizonte<br/>Vazante - MG</span>
            </div>
            <div className="flex items-center space-x-5 text-gray-600">
              <Clock className="w-8 h-8 text-[#01a7aa] shrink-0" />
              <span className="font-bold text-xl">Seg - Sex: 07h às 18h</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-12 flex flex-col md:flex-row justify-between items-center text-base text-gray-500 font-bold">
          <p className="mb-4 md:mb-0 text-center md:text-left text-lg">
            &copy; {new Date().getFullYear()} <a href="https://www.instagram.com/s.carinesouza" target="_blank" rel="noopener noreferrer" className="hover:text-[#dbaf45] transition-colors font-black uppercase">Carine Souza</a>.
          </p>
          <p className="text-center md:text-right text-lg">
            Desenvolvido por <a href="https://www.instagram.com/onzy.company" target="_blank" rel="noopener noreferrer" className="hover:text-[#8A2BE2] transition-colors font-black uppercase">Onzy Company</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;