import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Palette, Scissors, Brush, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function DicasDecoracao() {
  const tips = [
    {
      icon: <ShieldCheck className="text-secondary" />,
      title: "Preparação Impecável",
      content: "O segredo de uma arte duradoura começa na base. Utilize amolecedores de qualidade, faça o afastamento correto das cutículas e prepare a lâmina com lixamento adequado. Nunca pule a base protetora; ela é essencial para a saúde da unha e aderência do design."
    },
    {
      icon: <Palette className="text-secondary" />,
      title: "Cores e Estilo Personalizado",
      content: "A escolha da paleta deve refletir a personalidade da cliente e a ocasião. Tons neutros e nudes transmitem sofisticação discreta, enquanto cores vibrantes e detalhes ousados são ideais para eventos marcantes e clientes que amam se destacar."
    },
    {
      icon: <Scissors className="text-secondary" />,
      title: "Ferramental de Alta Performance",
      content: "Não economize em ferramentas. Alicates amolados, espátulas de precisão e bons removedores garantem um acabamento limpo. O uso de um extra-brilho de qualidade é o toque final indispensável para selar o design e proteger contra riscos."
    },
    {
      icon: <Brush className="text-secondary" />,
      title: "Exploração e Criatividade",
      content: "A nail art é um campo infinito. Pratique técnicas variadas como o efeito aquarela, carimbos (estampagem) e a aplicação estratégica de pedrarias. A experimentação constante é o que levará você à perfeição e à criação de um estilo único."
    },
    {
      icon: <Sparkles className="text-secondary" />,
      title: "Segredo de Durabilidade",
      content: "Para um acabamento profissional que dura semanas, minha técnica favorita é aplicar três camadas finas de esmalte, mantendo a mão leve para evitar bolinhas. Finalize sempre com uma camada generosa de extra-brilho para um efeito vitrificado."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Arte e Criatividade</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
            Guia para Criar <span className="text-secondary">Unhas Decoradas</span> Deslumbrantes
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Unhas decoradas são a expressão máxima da personalidade. Com paciência e as técnicas certas, você pode transformar cada atendimento em uma obra de arte única.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[3rem] overflow-hidden shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Unhas Decoradas Profissionais" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">A Arte nos Detalhes</h3>
            <p className="text-gray-600">
              Ser uma nail designer de sucesso exige mais do que apenas pintar unhas; exige visão artística e domínio técnico. Cada camada conta uma história.
            </p>
            <ul className="space-y-3">
              {["Técnicas de Traço Fino", "Aplicação de Joias", "Degradês Perfeitos", "Esmaltação em Gel"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                  <CheckCircle2 className="text-secondary w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          {tips.map((tip, index) => (
            <motion.section 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 hover:shadow-md transition-shadow"
            >
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                <div className="bg-white p-2 rounded-lg shadow-sm">{tip.icon}</div>
                {tip.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {tip.content}
              </p>
            </motion.section>
          ))}
        </div>

        <div className="mt-20 text-center bg-primary text-white p-12 rounded-[3.5rem]">
          <h2 className="text-3xl font-bold mb-6">Inspire-se e Crie!</h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            A prática leva à perfeição. Explore nossa galeria completa para encontrar sua próxima inspiração e começar a criar designs surpreendentes hoje mesmo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/galeria-inspiracao" className="btn-hover-effect inline-block bg-secondary text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider transition-all hover:bg-secondary-hover">
              Ver Galeria (+40 Fotos)
            </a>
            <a href="/#cursos" className="inline-block border-2 border-white/20 text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider transition-all hover:bg-white/10">
              Aprender Técnicas Avançadas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
