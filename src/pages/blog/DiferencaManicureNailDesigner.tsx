import React from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle2, Scissors, Palette, Award, BookOpen } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function DiferencaManicureNailDesigner() {
  const points = [
    {
      icon: <Scissors className="text-secondary" />,
      title: "O Foco da Manicure Tradicional",
      content: "Uma manicure tradicional foca na saúde e estética natural da unha. O dia a dia envolve a especialização em cutilagem, hidratação, esmaltação e massagens nas mãos. Para se destacar, um curso de manicure focado nessas técnicas de preparação e limpeza é o primeiro e mais importante passo na profissão.",
      image: "https://i.imgur.com/TGL45b2.png"
    },
    {
      icon: <Palette className="text-secondary" />,
      title: "O Foco da Nail Designer",
      content: "O nail designer ('designer de unhas') vai além do natural, utilizando técnicas avançadas de arquitetura e alongamentos (gel, fibra de vidro, acrílico). Além do alicate, o domínio de alongamentos, manutenção e a decoração de unhas encapsuladas fazem parte de sua rotina. Para dominar estas técnicas, realizar um curso de nail designer online é o melhor caminho.",
      image: "https://i.imgur.com/I9piOKV.jpeg"
    },
    {
      icon: <Award className="text-secondary" />,
      title: "Complementares, Não Concorrentes",
      content: "A verdade é que as duas profissões se complementam! Toda excelente nail designer precisa antes dominar a arte da cutilagem perfeita. Fazer um curso de manicure e pedicure online oferece a base perfeita antes de saltar para as estruturas artificiais."
    }
  ];

  return (
    <article className="pt-32 pb-24 bg-white">
      <SEO 
        title="Qual a Diferença Entre Nail Designer e Manicure?" 
        description="Entenda a diferença entre nail designer e manicure! Descubra como a especialização em cutilagem e técnicas de alongamento podem valorizar seu trabalho." 
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Guia de Profissões</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
            Qual a Diferença Entre <span className="text-secondary">Nail Designer e Manicure?</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Essa é uma das maiores dúvidas de quem está começando. Entender o papel de cada uma vai te ajudar a escolher os melhores rumos e treinamentos para sua carreira decolar.
          </p>
        </motion.div>

        <div className="space-y-8 mb-16">
          {points.map((point, index) => (
            <motion.section 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 flex flex-col md:flex-row items-center gap-8"
            >
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                  <div className="bg-white p-2 rounded-lg shadow-sm">{point.icon}</div>
                  {point.title}
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {point.content}
                </p>
              </div>
              {point.image && (
                <div className="flex-1 w-full">
                  <img 
                    src={point.image} 
                    alt={point.title}
                    className="rounded-[2rem] shadow-lg w-full max-h-[350px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </motion.section>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary text-white p-10 rounded-[2.5rem] text-center"
        >
          <BookOpen className="w-12 h-12 text-gold mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4">Dê o Primeiro Passo Hoje!</h3>
          <p className="mb-8 text-gray-300">Construa sua fundação com a Maior Instrutora do Brasil de forma 100% online.</p>
          <a href="https://go.hotmart.com/M105111783P?ap=101e" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-hover text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105">
            Quero Me Profissionalizar <CheckCircle2 className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </article>
  );
}
