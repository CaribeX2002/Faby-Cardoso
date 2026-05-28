import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Droplets, Smile } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function SpaDosPes() {
  const steps = [
    {
      icon: <Droplets className="text-secondary" />,
      title: "Hidratação Profunda",
      content: "O uso de emolientes adequados e esfoliação remove as células mortas e trata calosidades, renovando a aparência dos pés."
    },
    {
      icon: <Leaf className="text-secondary" />,
      title: "Uso de Óleos e Sais Místicos",
      content: "Os óleos essenciais não só hidratam como proporcionam uma experiência olfativa. Sais de banho em água morna aumentam o relaxamento muscular."
    },
    {
      icon: <Smile className="text-secondary" />,
      title: "Massagem Relaxante",
      content: "A cereja do bolo é a massagem (reflexologia básica). Ela fideliza a cliente que busca um momento de autocuidado após uma longa semana."
    }
  ];

  return (
    <article className="pt-32 pb-24 bg-white">
      <SEO 
        title="Receita de Spa dos Pés Lucrativo | Faby Cardoso" 
        description="Como montar e incluir o serviço de Spa dos Pés em seu catálogo, trazendo encanto e retorno financeiro." 
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Bem-Estar & Negócios</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
            Como Lucrar com <span className="text-secondary">Spa dos Pés</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Um dos serviços que mais tem ganhado adeptos nos últimos anos: transforma pés secos e cansados enquanto triplica seu faturamento diário.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800" 
            alt="Relaxante Spa dos Pés" 
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
