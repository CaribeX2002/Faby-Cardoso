import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, Star, Layers, ShoppingCart } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function UnhasPosticasRealistas() {
  const steps = [
    {
      icon: <Star className="text-secondary" />,
      title: "1. Escolher a Tip Correta",
      content: "O segredo de uma unha postiça realista começa na escolha do formato e curvatura da tip. Ela deve encaixar perfeitamente de um lado ao outro da lâmina natural sem fazer pressão excessiva."
    },
    {
      icon: <Layers className="text-secondary" />,
      title: "2. Preparação Impecável",
      content: "Assim como no alongamento convencional, a lâmina natural precisa ser higienizada e preparada para receber a cola ou o gel base, garantindo maior durabilidade."
    },
    {
      icon: <Sparkles className="text-secondary" />,
      title: "3. Transição Invisível",
      content: "Lixar a área da cutícula e fazer o nivelamento da tip com a unha natural é o truque principal para remover a marcação de 'unha colada' e dar um aspecto natural ao procedimento."
    }
  ];

  return (
    <article className="pt-32 pb-24 bg-white">
      <SEO 
        title="Unhas Postiças Realistas | Faby Cardoso" 
        description="Aprenda as melhores técnicas para transformar a unha postiça tradicional em um alongamento duradouro e realista." 
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Técnica</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
            O Segredo das <span className="text-secondary">Unhas Postiças Realistas</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            As unhas postiças realistas são uma excelente alternativa aos alongamentos de gel e fibra. Conheça as técnicas para deixá-las com aspecto profissional e natural.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?auto=format&fit=crop&q=80&w=800" 
            alt="Aplicando unhas postiças com naturalidade" 
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

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary text-white p-10 rounded-[2.5rem] text-center"
        >
          <ShoppingCart className="w-12 h-12 text-gold mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4">Pronta Para a Próxima Etapa?</h3>
          <p className="mb-8 text-gray-300">Conheça nossos cursos de especialização e aprenda essas e outras técnicas com maestria.</p>
          <a href="/conteudo" className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-hover text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105">
            Ver Cursos Disponíveis <CheckCircle2 className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </article>
  );
}
