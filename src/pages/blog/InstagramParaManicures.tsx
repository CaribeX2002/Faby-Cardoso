import React from 'react';
import { motion } from 'motion/react';
import { Instagram, TrendingUp, Users } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function InstagramParaManicures() {
  const steps = [
    {
      icon: <Users className="text-secondary" />,
      title: "Humanização do Perfil",
      content: "As pessoas se conectam com pessoas. Mostre seu rosto, um pouco dos bastidores do salão e conte sua rotina nos stories."
    },
    {
      icon: <Instagram className="text-secondary" />,
      title: "O Famoso 'Reels'",
      content: "Para aumentar seu alcance e impactar pessoas que não te seguem, grave transições de 'antes e depois' da cutilagem usando as músicas em alta (trends)."
    },
    {
      icon: <TrendingUp className="text-secondary" />,
      title: "Consistência é Vital",
      content: "Postar uma vez por mês não cria conexão. Tente postar fotos dos resultados ao longo da semana e apareça no story todos os dias de trabalho, lembrando que possui horários disponíveis."
    }
  ];

  return (
    <article className="pt-32 pb-24 bg-white">
      <SEO 
        title="Instagram para Manicures | Faby Cardoso" 
        description="Aprenda estratégias valiosas para usar o Instagram como a maior ferramenta de captação orgânica de novos clientes para seu salão." 
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Redes Sociais</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
            Lotando a Agenda Pelo <span className="text-secondary">Instagram</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Dicas práticas e aplicáveis hoje para turbinar o seu alcance, interagir com seu público e transformar curtidas em marcações de horário.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800" 
            alt="Instagram feed" 
            className="rounded-[2.5rem] shadow-xl w-full max-h-[400px] object-cover mb-12"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="space-y-8 mb-16">
          {steps.map((step, index) => (
            <motion.section 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                <div className="bg-white p-2 rounded-lg shadow-sm">{step.icon}</div>
                {step.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                {step.content}
              </p>
            </motion.section>
          ))}
        </div>
      </div>
    </article>
  );
}
