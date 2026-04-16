import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Layers, Fingerprint, BookOpen, Clock, Heart } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function GuiaAlongamentoUnhas() {
  const conteudos = [
    {
      icon: <Layers className="w-6 h-6 text-secondary" />,
      title: "O Universo do Gel",
      content: "O gel modelador oferece flexibilidade e muita naturalidade para construir unhas resistentes. Porém, você vai precisar entender os pontos de tensão celular. Escolher um curso de unha em gel online é perfeito para focar pausadamente nas curvaturas 'C', e repetir sem medo até o alongamento nascer perfeito."
    },
    {
      icon: <Fingerprint className="w-6 h-6 text-secondary" />,
      title: "O Boom da Fibra de Vidro",
      content: "As famintas por naturalidade máxima amam a fibra! Os finos fios de vidro, quando selados com o gel, dão uma resistência incrível contra pancadas do dia-a-dia. As clientes imploram por isso! E fazer o seu curso de unha em fibra abre instantaneamente as portas desse mercado hiperlucrativo."
    },
    {
      icon: <Clock className="w-6 h-6 text-secondary" />,
      title: "O Segredo da Manutenção Esculpida",
      content: "Ganhar dinheiro de verdade com alongamento vem da fidelização pela Manutenção Mão de Ouro, e não apenas no dia em que foi colocado. Você cobrará quase o mesmo valor para retocar e reconstruir a base em sua cliente daqui a 30 dias."
    }
  ];

  return (
    <article className="pt-32 pb-24 bg-white">
      <SEO 
        title="Tudo Sobre Curso de Unha em Gel e Fibra | Faby Cardoso" 
        description="Quer aprender alongamento? Um bom curso de unha em gel online e curso de unha em fibra é a chave para o sucesso. Aprenda as técnicas mais pedidas do mercado." 
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Especialização em Alongamento</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
            Descubra Tudo sobre <span className="text-secondary">Alongamento de Unhas</span> em Gel e Fibra
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Se você quer elevar seu ticket médio de forma brutal e ganhar como as maiores autoridades do setor, dominar os polímeros de extensão de placa unguial não é opcional, é obrigatório.
          </p>
          <img 
            src="https://i.imgur.com/70QU3a5.jpeg" 
            alt="Profissional alongando unhas impecáveis" 
            className="rounded-[2.5rem] shadow-xl w-full max-h-[400px] object-cover mb-12"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="space-y-6 mb-16">
          {conteudos.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white border-2 border-gray-100 p-8 rounded-3xl flex flex-col md:flex-row gap-6 items-start hover:border-gold/30 transition-colors"
            >
              <div className="bg-primary/5 p-4 rounded-full">
                {item.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-secondary to-pink-500 p-1 rounded-[2.5rem]"
        >
          <div className="bg-white rounded-[2.4rem] p-10 text-center">
            <Sparkles className="w-12 h-12 text-secondary mx-auto mb-6" />
            <h3 className="text-3xl font-extrabold text-primary mb-6">Mude o Nível do Seu Trabalho</h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Um ótimo curso de manicure tradicional é o ponto de partida ideal para garantir uma cutilagem funda que dê acabamento à sua fibra. Quando você amarra a cutilagem perfeita contornando o gel recém lixado, o resultado visual final é de prender totalmente o olhar!
            </p>
            <a 
              href="/conteudo" 
              className="bg-primary hover:bg-black text-white px-8 py-4 rounded-full font-bold transition-all inline-flex items-center gap-2 transform hover:scale-105"
            >
               Saber Mais Sobre Cursos
            </a>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
