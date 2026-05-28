import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Clock, Box } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function BlindagemDeUnhas() {
  const steps = [
    {
      icon: <Box className="text-secondary" />,
      title: "O Que é Blindagem?",
      content: "Também conhecida como 'banho de gel e capa base', a blindagem usa produtos autonivelantes na própria placa natural, conferindo a dureza necessária sem aumentar o tamanho da unha."
    },
    {
      icon: <Clock className="text-secondary" />,
      title: "A Promessa de Durabilidade",
      content: "Diferente de esmaltes convencionais que podem lascar no dia seguinte, as unhas blindadas podem durar semanas impecáveis e servem de fundo fixador ideal para colorações em gel."
    },
    {
      icon: <ShieldCheck className="text-secondary" />,
      title: "Manutenção Saudável",
      content: "Quando for necessário remover, nunca arranque o produto 'a seco'. É necessário lixar apenas a transição do crescimento (manutenção corretiva), preservando a lâmina natural intacta."
    }
  ];

  return (
    <article className="pt-32 pb-24 bg-white">
      <SEO 
        title="Blindagem e Banho de Gel nas Unhas | Faby Cardoso" 
        description="As unhas naturais das suas clientes estão quebrando à toa? Descubra tudo que precisa saber antes de ofertar blindagem." 
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Técnica</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
            Descubra a <span className="text-secondary">Blindagem de Gel</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Um dos serviços mais queridinhos por mulheres de unhas frágeis. Com resultados potentes e muito naturais.
          </p>
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
