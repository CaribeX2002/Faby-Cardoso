import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, ShoppingBag, Layers, Share2, Calendar, Award } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function EstrategiasLucro() {
  const strategies = [
    {
      icon: <Award className="w-8 h-8 text-secondary" />,
      title: "Domínio de Técnicas Avançadas",
      description: "O mercado valoriza quem entrega resultados diferenciados. Invista em especializações como esmaltação em gel, nail art moderna e alongamentos de alto padrão. Quanto maior sua expertise técnica, maior será o valor percebido (e o preço) do seu serviço."
    },
    {
      icon: <ShoppingBag className="w-8 h-8 text-secondary" />,
      title: "Revenda de Produtos e Home Care",
      description: "Não limite seus ganhos apenas à mão de obra. Ofereça itens complementares como hidratantes, kits de manutenção para casa e esmaltes premium. Exponha esses produtos de forma atraente e oriente suas clientes sobre a importância do cuidado diário."
    },
    {
      icon: <Layers className="w-8 h-8 text-secondary" />,
      title: "Criação de Combos e Menus Premium",
      description: "Estimule o aumento do ticket médio através de pacotes inteligentes. Combine serviços básicos com diferenciais (ex: Cutilagem + Nail Art) para incentivar a cliente a consumir mais em uma única visita, otimizando seu tempo e faturamento."
    },
    {
      icon: <Share2 className="w-8 h-8 text-secondary" />,
      title: "Autoridade nas Redes Sociais",
      description: "Transforme seu Instagram em uma vitrine de luxo. Publique transformações reais (antes e depois), compartilhe o feedback positivo de suas clientes e mostre os bastidores do seu profissionalismo. Para dominar essa área, o treinamento 'Agenda Lotada para Manicures' é o caminho ideal."
    },
    {
      icon: <Calendar className="w-8 h-8 text-secondary" />,
      title: "Calendário de Ofertas Estratégicas",
      description: "Aproveite o fluxo de datas comemorativas como Natal, Ano Novo e Dia das Mães. Crie campanhas exclusivas, mimos para clientes fiéis ou descontos progressivos para garantir que sua agenda esteja sempre cheia nos períodos de maior demanda."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <SEO 
        title="Estratégias de Lucro para Manicures | Faby Cardoso" 
        description="Segredos para lucrar como manicure e lotar sua agenda! Descubra 5 estratégias rápidas para fidelizar clientes e turbinar sua renda hoje. Leia e aplique já!" 
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Evolução Profissional</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
            5 Estratégias para <span className="text-secondary">Aumentar seus Ganhos</span> e Crescer como Manicure
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Para faturar mais, não basta apenas trabalhar mais horas; é preciso trabalhar de forma inteligente. Confira práticas essenciais que podem transformar sua realidade financeira na profissão.
          </p>
          <img 
            src="https://i.imgur.com/6o68SQ8.jpeg" 
            alt="Estratégias de Lucro para Manicures" 
            className="rounded-[2.5rem] shadow-xl w-full max-h-[400px] object-cover mb-12"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="space-y-12 mb-16">
          {strategies.map((strategy, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row gap-8 items-center bg-gray-50 p-8 rounded-[2rem] border border-gray-100"
            >
              <div className="bg-white p-6 rounded-2xl shadow-sm shrink-0">
                {strategy.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">{strategy.title}</h3>
                <p className="text-gray-600 leading-relaxed">{strategy.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-primary text-white p-12 rounded-[3rem] text-center">
          <h2 className="text-3xl font-bold mb-6">Pronta para o próximo nível?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            O sucesso na manicure exige a união entre técnica impecável, criatividade e visão de negócio. Invista na sua capacitação e veja sua carreira decolar.
          </p>
          <a href="/#cursos" className="inline-block bg-secondary hover:bg-secondary-hover text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all">
            Quero me Especializar com Faby Cardoso
          </a>
        </div>
      </div>
    </div>
  );
}
