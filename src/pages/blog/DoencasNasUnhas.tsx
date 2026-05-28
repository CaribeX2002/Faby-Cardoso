import React from 'react';
import { motion } from 'motion/react';
import { AlertCircle, Eye, Hand } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function DoencasNasUnhas() {
  const steps = [
    {
      icon: <Eye className="text-secondary" />,
      title: "Como Identificar",
      content: "Se a unha apresenta uma coloração diferente (esverdeada, amarelada forte) ou descolamentos repentinos próximos ao eponíquio, trata-se de um alerta vermelho."
    },
    {
      icon: <AlertCircle className="text-secondary" />,
      title: "A Diferença entre Onicomicose e Infiltração",
      content: "Uma simples infiltração que reteve umidade gera uma mancha verde inofensiva chamada pseudomonas (bactéria). Fungos agressivos mudam a textura da unha e demoram meses para sarar."
    },
    {
      icon: <Hand className="text-secondary" />,
      title: "Negue o Procedimento!",
      content: "Nenhuma técnica deve cobrir uma unha afetada por fungos. Sua função é negar cordialmente o serviço e indicar que a cliente procure um podólogo ou dermatologista responsável."
    }
  ];

  return (
    <article className="pt-32 pb-24 bg-white">
      <SEO 
        title="Guia de Doenças nas Unhas (Para Manicures) | Faby Cardoso" 
        description="Saiba reconhecer anomalias e fungos nas unhas naturais das clientes. Prevenção e responsabilidade na hora do atendimento." 
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Saúde</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
            Doenças nas <span className="text-secondary">Unhas Nativas</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Nenhum alongamento ou química pode ser colocada em unhas adoecidas. Aprenda a reconhecer as principais patologias e proteja a saúde de todas as clientes da mesa.
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
