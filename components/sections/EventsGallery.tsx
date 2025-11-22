import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';

const events = [
  { 
    id: 1, 
    src: 'https://res.cloudinary.com/dxhlvrach/image/upload/v1763782314/Imagem_do_WhatsApp_de_2025-11-20_%C3%A0_s_15.22.34_4c922995_su7khx.jpg', 
    title: 'Palestras Impactantes', 
    type: 'Evento',
    description: 'Levando conhecimento e acolhimento sobre saúde emocional para a comunidade.'
  },
  { 
    id: 2, 
    src: 'https://res.cloudinary.com/dxhlvrach/image/upload/v1763782328/Imagem_do_WhatsApp_de_2025-11-20_%C3%A0_s_15.22.39_53798cd8_z34emt.jpg', 
    title: 'Reconhecimento Profissional', 
    type: 'Homenagem',
    description: 'Gratidão pelo carinho e reconhecimento da minha trajetória profissional.'
  },
  { 
    id: 3, 
    src: 'https://res.cloudinary.com/dxhlvrach/image/upload/v1763782314/Imagem_do_WhatsApp_de_2025-11-20_%C3%A0_s_15.22.36_81c75425_bgrjoz.jpg', 
    title: 'Acolhimento Humanizado', 
    type: 'Social',
    description: 'Cuidado e atenção especial em todas as fases da vida.'
  },
  { 
    id: 4, 
    src: 'https://res.cloudinary.com/dxhlvrach/image/upload/v1763782314/Imagem_do_WhatsApp_de_2025-11-20_%C3%A0_s_15.22.33_f4914182_k6lwqu.jpg', 
    title: 'Setembro Amarelo', 
    type: 'Palestra',
    description: 'Conscientização sobre a valorização da vida e prevenção.'
  },
  { 
    id: 5, 
    src: 'https://res.cloudinary.com/dxhlvrach/image/upload/v1763782314/Imagem_do_WhatsApp_de_2025-11-20_%C3%A0_s_15.22.37_407a5148_rlscxb.jpg', 
    title: 'Vínculos de Afeto', 
    type: 'Encontro',
    description: 'Momentos de troca e gratidão com quem confia no meu trabalho.'
  },
];

const EventsGallery: React.FC = () => {
  return (
    <section id="events" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Palestras e Eventos" 
          subtitle="Momentos de conexão, aprendizado e transformação coletiva."
        />

        {/* Masonry Layout using CSS Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 mt-12 space-y-6">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid relative rounded-2xl overflow-hidden group shadow-lg cursor-pointer bg-gray-100 mb-6"
            >
              {/* Image maintains natural aspect ratio with w-full h-auto */}
              <img 
                src={event.src} 
                alt={event.title} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 block"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-[#7FE7DC] text-sm font-bold uppercase tracking-wider mb-2">{event.type}</span>
                <h3 className="text-white font-serif font-medium text-2xl mb-2">{event.title}</h3>
                <p className="text-gray-200 text-base font-medium leading-snug">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsGallery;