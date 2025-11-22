import React from 'react';
import { Instagram, MapPin, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          
          {/* Column 1: Brand */}
          <div className="space-y-8">
            <h3 className="text-4xl font-serif font-bold text-gray-900">
              Carine<span className="text-[#7FE7DC]">Souza</span>
            </h3>
            <p className="text-gray-600 leading-relaxed font-medium max-w-xs text-lg">
              Cuidar da Saúde Mental é um ato de Amor Próprio. Especialista em Terapia Integrativa e autoestima feminina.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://www.instagram.com/s.carinesouza" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-4 rounded-full shadow-md hover:shadow-xl text-white transition-all duration-300 hover:-translate-y-2 bg-gradient-to-tr from-[#f09433] via-[#bc1888] to-[#2cc6c6]"
                aria-label="Siga-nos no Instagram"
              >
                <Instagram size={28} />
              </a>
            </div>
          </div>

          {/* Column 2: Links */}
          <div className="space-y-8">
            <h4 className="font-bold text-gray-900 text-xl font-serif">Navegação</h4>
            <ul className="space-y-4">
              {['Sobre Mim', 'Serviços', 'Palestras', 'FAQ', 'Contato'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-600 hover:text-[#7FE7DC] transition-colors font-medium text-lg">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-8">
            <h4 className="font-bold text-gray-900 text-xl font-serif">Onde Me Encontrar</h4>
            <div className="flex items-start space-x-4 text-gray-600">
              <MapPin className="w-7 h-7 mt-1 text-[#7FE7DC] shrink-0" />
              <span className="font-medium text-lg">Rua Manoel Monteiro, 40<br/>Maracás, Bahia</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-600">
              <Clock className="w-7 h-7 text-[#7FE7DC] shrink-0" />
              <span className="font-medium text-lg">Seg - Sex: 07h às 18h</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-12 flex flex-col md:flex-row justify-between items-center text-base text-gray-500 font-medium">
          <p className="mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} <a href="https://www.instagram.com/s.carinesouza" target="_blank" rel="noopener noreferrer" className="hover:text-[#FFB6C1] transition-colors font-bold">Carine Souza</a>. Todos os direitos reservados.
          </p>
          <p>
            Desenvolvido por <a href="https://www.instagram.com/onzy.company" target="_blank" rel="noopener noreferrer" className="hover:text-[#8A2BE2] transition-colors font-bold">Onzy Company</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;