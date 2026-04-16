import React from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle2, TrendingUp, Search, Calendar, Heart, Award, Shield, Monitor, Share2, Lightbulb } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function DezDicasManicureSucesso() {
  const dicas = [
    { num: 1, title: "Capacitação é o Alicerce", content: "Muitas começam por conta própria, mas a técnica correta te poupa tempo e evita machucar clientes. O melhor começo é buscar um bom curso de manicure online para aprender biossegurança, higienização e as técnicas certas sem sair de casa." },
    { num: 2, title: "Equipamentos de Qualidade", content: "Bons alicates e estufas não são despesas, são investimentos. Ferramentas malcuidadas estragam a esmaltação e transmitem desleixo." },
    { num: 3, title: "Especialização em Cutilagem", content: "Esse é o segredo das unhas curtinhas que parecem grandes. Uma cutícula funda e bem tirada levanta a autoestima da cliente e fideliza na primeira sessão!" },
    { num: 4, title: "Faça um Trabalho Completo", content: "Apenas mãos não enche agenda o mês todo. Fazer um curso de manicure e pedicure que aborde o tratamento de spa dos pés te diferencia enormemente das concorrentes do bairro." },
    { num: 5, title: "Organização é Dinheiro", content: "Tenha um controle rígido da sua agenda de horários e dos seus gastos com reposição de materiais." },
    { num: 6, title: "Limpeza Fala Mais Alto", content: "Tudo precisa estar impecável. Embalagens esterilizadas abrindo na frente da cliente mostram um profissionalismo inquestionável." },
    { num: 7, title: "Marketing Nas Redes Sociais", content: "Sua vitrine é o Instagram. Poste fotos bem iluminadas do 'antes e depois' das unhas, dando foco nos detalhes da esmaltação e nos brilhos." },
    { num: 8, title: "Atenção a Decoração de Unhas", content: "Estar antenada nas tendências (adesivos, pedrarias, francesinhas diferentes) é crucial para as clientes jovens e modernas." },
    { num: 9, title: "Mimos que Fidelizam", content: "Uma massagem com creme na finalização, um café gostoso ou uma balinha no espaço de atendimento fazem com que ela sinta saudades de voltar." },
    { num: 10, title: "Atualização Sem Fim", content: "O mercado da beleza nunca para. Lançou uma técnica nova? Corra para estudar e trazer o serviço atualizado para seu espaço." }
  ];

  return (
    <article className="pt-32 pb-24 bg-white">
      <SEO 
        title="10 Dicas para se Tornar uma Manicure de Sucesso" 
        description="As 10 dicas para se tornar uma manicure de sucesso! Como fazer curso de manicure online, fidelizar clientes, criar decoração de unhas impecável e crescer." 
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Segredos da Profissão</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
            Descubra as <span className="text-secondary">10 Dicas para se Tornar uma Manicure de Sucesso</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Quer transformar seu negócio de unhas, ter a agenda repleta de horários marcados e dobrar seu faturamento? Confira este passo a passo prático para alavancar hoje.
          </p>
          <img 
            src="https://i.imgur.com/JxZH0He.jpeg" 
            alt="Dicas para se tornar uma Manicure de Sucesso" 
            className="rounded-[2.5rem] shadow-xl w-full max-h-[400px] object-cover mb-12"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="grid gap-6 mb-16">
          {dicas.map((dica, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex gap-4 items-start"
            >
              <div className="bg-primary text-secondary font-extrabold w-12 h-12 flex items-center justify-center rounded-xl text-xl shrink-0">
                {dica.num}
              </div>
              <div>
                <h3 className="text-xl font-bold text-primary mb-2">{dica.title}</h3>
                <p className="text-gray-600">{dica.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary text-white p-10 rounded-[2.5rem] text-center"
        >
          <Lightbulb className="w-12 h-12 text-gold mx-auto mb-6" />
          <h3 className="text-2xl font-bold mb-4">Comece Aplicar a Dica Nº 1!</h3>
          <p className="mb-8 text-gray-300">Entre para o mundo das manicures mais requisitadas do país estudando do conforto do seu quarto.</p>
          <a href="/conteudo" className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-hover text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105">
            Quero Me Destacar <CheckCircle2 className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </article>
  );
}
