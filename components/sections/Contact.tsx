import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { MapPin, Clock, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-[#F4F7FA]">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Informações de Contato" 
          subtitle="Localização e horários de atendimento."
        />

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden max-w-5xl mx-auto mt-12 flex flex-col lg:flex-row">
          
          {/* Info Side */}
          <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center bg-white">
            
            <div className="space-y-12">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-start gap-6"
              >
                <div className="p-5 bg-[#E0F2F1] rounded-2xl text-[#009688] shadow-sm shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-xl mb-1">Endereço</p>
                  <p className="text-gray-700 font-medium text-lg leading-relaxed">
                    Rua Manoel Monteiro, 40<br />
                    Maracás, Bahia
                  </p>
                </div>
              </motion.div>

              <motion.div 
                 whileHover={{ x: 5 }}
                 className="flex items-start gap-6"
              >
                <div className="p-5 bg-[#E0F2F1] rounded-2xl text-[#009688] shadow-sm shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-xl mb-1">Horário de Atendimento</p>
                  <p className="text-gray-700 font-medium text-lg">Segunda a Sexta: 07h às 18h</p>
                </div>
              </motion.div>

              <motion.div 
                 whileHover={{ x: 5 }}
                 className="flex items-start gap-6"
              >
                <div className="p-5 bg-[#E0F2F1] rounded-2xl text-[#009688] shadow-sm shrink-0">
                  <MessageCircle size={28} />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-xl mb-1">WhatsApp</p>
                  <p className="text-gray-700 font-medium text-lg">
                    Dúvidas e Informações Administrativas
                  </p>
                  <a 
                    href="https://wa.me/553499057458?text=Ol%C3%A1,%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20localiza%C3%A7%C3%A3o."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#009688] font-bold mt-2 inline-block hover:underline"
                  >
                    (34) 9905-7458
                  </a>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Map Side */}
          <div className="lg:w-1/2 bg-gray-200 relative min-h-[450px]">
             <iframe 
                title="Mapa Maracás"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.8966054043286!2d-40.4311!3d-13.4436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDI2JzM3LjAiUyA0MMKwMjUnNTIuMCJX!5e0!3m2!1sen!2sbr!4v1600000000000!5m2!1sen!2sbr" 
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', inset: 0 }} 
                loading="lazy"
                className="filter grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;