import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Monitor, Clock, MessageCircle, CreditCard, Mail } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "1. Inscrição Segura",
      description: "Escolha seu plano e realize o pagamento via Hotmart. É rápido e 100% seguro."
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "2. Acesso Imediato",
      description: "Você receberá um e-mail com seus dados de acesso à plataforma de estudos no mesmo instante."
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "3. Assista as Aulas",
      description: "Acesse pelo celular, tablet ou computador. Assista quantas vezes quiser, no seu tempo."
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "4. Suporte e Dúvidas",
      description: "Tire suas dúvidas diretamente na plataforma ou em nossos canais de suporte exclusivos."
    }
  ];

  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Passo a Passo</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
            Como Funciona o <span className="text-secondary">Curso Online?</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Aprender online é a forma mais eficiente e moderna de se especializar hoje em dia. Veja como é simples começar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-xl transition-all"
            >
              <div className="bg-secondary/10 text-secondary w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-primary mb-4">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8">Vantagens de Estudar Online</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="bg-gold/10 text-gold p-2 rounded-lg shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Flexibilidade Total</h4>
                  <p className="text-gray-500 text-sm">Estude de manhã, de tarde ou de madrugada. Você faz o seu horário.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-gold/10 text-gold p-2 rounded-lg shrink-0">
                  <Smartphone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Acesso em Qualquer Lugar</h4>
                  <p className="text-gray-500 text-sm">Leve suas aulas no bolso. Otimize seu tempo assistindo no transporte ou nos intervalos.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="bg-gold/10 text-gold p-2 rounded-lg shrink-0">
                  <CreditCard className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary">Melhor Custo-Benefício</h4>
                  <p className="text-gray-500 text-sm">Sem gastos com deslocamento ou alimentação. Investimento focado apenas no seu aprendizado.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative">
            <div className="bg-primary rounded-[3rem] p-8 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Estudando online" 
                className="rounded-[2rem] w-full h-auto opacity-80"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-[200px]">
                <div className="text-secondary font-bold text-2xl mb-1">100%</div>
                <div className="text-xs text-gray-500 font-medium">Digital e Prático</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
