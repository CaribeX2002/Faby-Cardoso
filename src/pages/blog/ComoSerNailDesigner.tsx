import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, Navigation, Target, Layers, ShoppingCart } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function ComoSerNailDesigner() {
  const steps = [
    {
      icon: <Navigation className="text-secondary" />,
      title: "1. Comece pela Base Perfeita",
      content: "Antes de pensar em grandes alongamentos estruturados, é obrigatório saber preparar bem a lâmina natural. A retenção do gel depende de uma unha limpa e bem polida. Invista em aperfeiçoamento da base antes das camadas artificiais."
    },
    {
      icon: <Layers className="text-secondary" />,
      title: "2. Invista no Curso Certo",
      content: "A internet está cheia de tutoriais, mas para se profissionalizar, você precisa de um método validado. Um bom curso de unha em gel online ensinará desde a química dos produtos até o lixamento técnico. Posteriormente, complementar sua grade com um curso de unha em fibra aumenta substancialmente seu cardápio de serviços."
    },
    {
      icon: <Target className="text-secondary" />,
      title: "3. Pratique, Pratique e Pratique!",
      content: "A excelência vem da repetição. No começo, o gel pode escorrer ou o acabamento ficar irregular, mas isso é normal. Quem faz um curso de nail designer online no formato EAD tem a enorme vantagem de pausar, rever a aula quantas vezes precisar e copiar o movimento da instrutora."
    },
    {
      icon: <Sparkles className="text-secondary" />,
      title: "4. Domine a Decoração de Unhas (Nail Art)",
      content: "Encapsuladas, babyboomer, francesa reversa... O que realmente agrega valor monetário ao seu trabalho como designer é a arte. A decoração de unhas eleva seu serviço a um produto de alto padrão que as clientes amam pagar."
    }
  ];

  return (
    <article className="pt-32 pb-24 bg-white">
      <SEO 
        title="Como se Tornar Nail Designer de Sucesso | Faby Cardoso" 
        description="Aprenda como se tornar nail designer! Invista em um curso de nail designer online, domine técnicas de alongamento de unhas e lote sua agenda de clientes." 
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Especialização e Carreira</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
            O Guia Completo de <span className="text-secondary">Como se Tornar Nail Designer</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Trabalhar com alongamentos transformou a realidade financeira de milhares de mulheres. Conheça a jornada para dominar essa arte com muito brilho e faturamento.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800" 
            alt="Nail Designer em ação fazendo unhas de gel" 
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
          <p className="mb-8 text-gray-300">Construa sua base sólida na cutilagem para entregar resultados impressionantes aos seus clientes de alongamento.</p>
          <a href="/conteudo" className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-hover text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105">
            Ver Opções de Qualificação <CheckCircle2 className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </article>
  );
}
