import React from 'react';
import { motion } from 'motion/react';
import { HeartHandshake, Map, Star } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function AtendimentoAoCliente() {
  const steps = [
    {
      icon: <HeartHandshake className="text-secondary" />,
      title: "Receptividade Além da Técnica",
      content: "Cumprimentar com um sorriso e oferecer água ou um café assim que a cliente chega muda instantaneamente o clima do local."
    },
    {
      icon: <Map className="text-secondary" />,
      title: "A Jornada do Agendamento",
      content: "Uma jornada fácil via link na bio para marcações automatizadas transparece profissionalismo e facilita o acesso ao seu estabelecimento quando a cliente tem pressa."
    },
    {
      icon: <Star className="text-secondary" />,
      title: "Atenção ao Retorno",
      content: "No dia seguinte ao primeiro atendimento, enviar uma breve mensagem via aplicativo de chat perguntando 'Como ficaram as unhas, estão confortáveis?' comprova seu interesse no bem estar, fidelizando no mesmo instante."
    }
  ];

  return (
    <article className="pt-32 pb-24 bg-white">
      <SEO 
        title="Excelência no Atendimento da Manicure | Faby Cardoso" 
        description="Fidelização vai muito além de unhas bonitas. Entenda a psicologia do atendimento incrível de salão." 
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Negócios</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
            Encantando <span className="text-secondary">Clientes</span> Todo Dia
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Concorrentes podem copiar as unhas que você faz, mas não podem copiar a forma com que você cria conexões reais.
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
