import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Palette, Layers } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function EsmaltacaoEmGel() {
  const steps = [
    {
      icon: <Layers className="text-secondary" />,
      title: "1. A Preparação é a Chave",
      content: "Assim como no alongamento, usar a broca diamantada para levantar e retirar peles mortas do eponíquio é vital. O gel não pode encostar de forma alguma na cutícula."
    },
    {
      icon: <Palette className="text-secondary" />,
      title: "2. Camadas Finas",
      content: "Esqueça a aplicação de esmalte comum! No gel, o excesso gera rugosidade e faz o produto descascar facilmente. Pincele camadas finas e leve à cabine."
    },
    {
      icon: <Sparkles className="text-secondary" />,
      title: "3. Top Coat Flexível vs Viscoso",
      content: "Para unha natural, é ideal o uso de um Top Coat flexível acompanhado do prep para que ele consiga se movimentar com a flexibilidade da unha sem trincar."
    }
  ];

  return (
    <article className="pt-32 pb-24 bg-white">
      <SEO 
        title="Esmaltação em Gel Perfeita | Faby Cardoso" 
        description="Passe da esmaltação comum aos serviços premium com durabilidade máxima e brilho intenso da esmaltação em gel." 
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Técnica</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
            Segredos da <span className="text-secondary">Esmaltação em Gel</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Com durabilidade de até 20 dias intacta, a esmaltação em gel tornou-se o serviço preferido das clientes exigentes nos salões.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80&w=800"
            alt="Mãos com esmaltação em gel" 
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
