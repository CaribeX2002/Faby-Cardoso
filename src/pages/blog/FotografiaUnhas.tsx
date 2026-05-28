import React from 'react';
import { motion } from 'motion/react';
import { Camera, Sun, Smartphone } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function FotografiaUnhas() {
  const steps = [
    {
      icon: <Sun className="text-secondary" />,
      title: "A Iluminação é Tudo",
      content: "Uma softbox ou ring light posicionada lateralmente evita sombras agressivas. Se possível, posicione a mão em luz indireta do sol para realçar ainda mais as cores marcantes."
    },
    {
      icon: <Smartphone className="text-secondary" />,
      title: "Limpe as Lentes!",
      content: "Algo tão simples é constantemente esquecido. Limpe a lente do celular antes de fotografar. O pó de unha borra a captação e reduz a nitidez da imagem drasticamente."
    },
    {
      icon: <Camera className="text-secondary" />,
      title: "Posicionamento das Mãos",
      content: "Evite posições rígidas, chamadas de 'garras'. Peça para a cliente relaxar as mãos sobre um fundo texturizado ou abraçar levemente o frasco do esmalte ou um acessório bonito."
    }
  ];

  return (
    <article className="pt-32 pb-24 bg-white">
      <SEO 
        title="Dicas de Fotografia de Unhas | Faby Cardoso" 
        description="Faça as unhas do seu portfólio brilharem nas redes sociais através das melhores práticas de fotos e composição com o celular." 
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Marketing</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
            Fotos Incríveis de <span className="text-secondary">Nail Art</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Um bom trabalho não atrai clientes se as fotos não fizerem jus a ele. Aprenda a tirar fotos com aspecto profissional utilizando apenas o seu smartphone.
          </p>
          <img 
            src="https://images.unsplash.com/photo-1614213031086-63e5210c43d3?auto=format&fit=crop&q=80&w=800" 
            alt="Pessoa tirando foto das unhas" 
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
