import React from 'react';
import { motion } from 'motion/react';
import { Armchair, Hand, Activity } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function ErgonomiaManicure() {
  const steps = [
    {
      icon: <Armchair className="text-secondary" />,
      title: "Uma Cadeira Regulável",
      content: "Uma boa cadeira que possua regulagem de altura e ótimo estofamento, garantindo que o seu joelho fique alinhado abaixo do quadril, aliviará drasticamente a pressão da bacia na coluna lombar."
    },
    {
      icon: <Hand className="text-secondary" />,
      title: "Cuidado com o Tendão",
      content: "O uso indevido e rígido do motor e dos alicates gera movimentos repetitivos que inflamam (LER/DORT). Tente descansar a mão nos braços da mesa em momentos que puder."
    },
    {
      icon: <Activity className="text-secondary" />,
      title: "Pausas para Alongamento",
      content: "A cada duas clientes atendidas, levante, beba água e alongue o pescoço, punhos e a lombar. 5 minutos salvam você de doenças laborais irreversíveis no futuro."
    }
  ];

  return (
    <article className="pt-32 pb-24 bg-white">
      <SEO 
        title="Saúde da Manicure e Ergonomia | Faby Cardoso" 
        description="Pare de sentir dores extremas no final do expediente longo de um salão, corrigindo postura e investindo na sua saúde laborativa." 
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Bem-Estar</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
            Saúde & Postura: <span className="text-secondary">Ergonomia</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Sua coluna tem um limite. Manicures que negligenciam um ambiente de trabalho ergonômico perdem gradualmente sua capacidade e paixão pela profissão por conta das dores crônicas.
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
