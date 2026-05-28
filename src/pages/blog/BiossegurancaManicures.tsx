import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, Shield, Heart, ShoppingCart } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function BiossegurancaManicures() {
  const steps = [
    {
      icon: <Shield className="text-secondary" />,
      title: "1. Autoclave ou Estufa?",
      content: "Para uma esterilização 100% segura, a autoclave é o equipamento recomendado pela Anvisa. A estufa, devido à instabilidade de temperatura térmica, tem caído em desuso nos espaços modernos e seguros."
    },
    {
      icon: <Heart className="text-secondary" />,
      title: "2. EPIs Essenciais",
      content: "O uso de luvas descartáveis, máscara e óculos de proteção previne a inalação de pó de unhas e protege contra o contágio de microrganismos durante o lixamento."
    },
    {
      icon: <Sparkles className="text-secondary" />,
      title: "3. Descarte Correto",
      content: "Lixas e palitos de madeira não devem ser reutilizados em hipótese alguma. O não cumprimento do descarte adequado é uma das maiores causas de transmissão de doenças entre clientes."
    }
  ];

  return (
    <article className="pt-32 pb-24 bg-white">
      <SEO 
        title="Biossegurança para Manicures | Faby Cardoso" 
        description="Aprenda sobre esterilização, descarte de materiais e o uso de EPIs para trabalhar com segurança em sua esmalteria." 
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Segurança e Saúde</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
            Guia Completo de <span className="text-secondary">Biossegurança</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Trabalhar com estética exige responsabilidade e respeito à saúde do cliente. Entenda a importância dos processos de esterilização.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800" 
            alt="Ferramentas cirúrgicas esterilizadas" 
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
