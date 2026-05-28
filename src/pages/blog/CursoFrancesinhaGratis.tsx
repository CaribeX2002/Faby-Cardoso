import React from 'react';
import { motion } from 'motion/react';
import { PlayCircle, CheckCircle2 } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function CursoFrancesinhaGratis() {
  return (
    <article className="pt-32 pb-24 bg-white">
      <SEO 
        title="Curso Gratuito de Unha Francesinha | Faby Cardoso" 
        description="Aprenda a fazer a francesinha perfeita e sem manchas com esta aula completa e 100% gratuita com a Faby Cardoso." 
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Aula Gratuita</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
            Curso Gratuito de <span className="text-secondary">Unha Francesinha</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            A francesinha é a decoração mais pedida nos salões e também o maior terror das manicures. Assista a esta aula grátis com a Faby Cardoso e aprenda o traço perfeito sem manchas!
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl relative bg-black"
        >
          <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/w-CI9vgQ4ss" 
            title="Curso Gratuito Unha Francesinha Faby Cardoso" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </motion.div>

        <div className="space-y-8 mb-16">
          <motion.section 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
              <div className="bg-white p-2 rounded-lg shadow-sm">
                <PlayCircle className="text-secondary" />
              </div>
              O Que Você Verá Nesta Aula
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              A francesinha exige precisão, escolha correta de esmaltes e técnica para não manchar. Neste vídeo, você verá:
            </p>
            <ul className="list-none space-y-3">
              {[
                "Quais os melhores esmaltes para fazer o traço do sorriso.",
                "Como não deixar o fundo da francesinha manchado ou amarelado.",
                "A postura da mão e do pincel para o traço sair super reto.",
                "Dica extra de finalização transparente sem marcar o esmalte claro."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.section>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary text-white p-10 rounded-[2.5rem] text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Dominou a Francesinha?</h3>
          <p className="mb-8 text-gray-300">Conheça nossos cursos completos! Aprenda do básico ao avançado em unhas decoradas, cutilagem, e blindagem com certificado válido.</p>
          <a href="/conteudo" className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-hover text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105">
            Ver Todos os Cursos Premium <CheckCircle2 className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </article>
  );
}
