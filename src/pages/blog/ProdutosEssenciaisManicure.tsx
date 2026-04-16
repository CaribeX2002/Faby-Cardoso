import React from 'react';
import { motion } from 'motion/react';
import { Star, CheckCircle2, Box, ShoppingBag, Truck, Gift } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function ProdutosEssenciaisManicure() {
  const materiais = [
    {
      title: "Descartáveis e Biossegurança",
      content: "Máscaras, luvas, lixas de uso único e toalhas descartáveis. É impossível ser levada a sério sem os padrões mínimos de higiene. A saúde da sua cliente e a sua vêm em primeiro lugar."
    },
    {
      title: "As Ferramentas Metálicas",
      content: "Todo bom atendimento exige alicates de ponta (prefira os de inox que podem ser esterilizados na autoclave), espátulas mistas e tesourinhas finas para quem faz alongamento. São, de fato, os itens essenciais de material para manicure profissional."
    },
    {
      title: "Amolecedores e Prep",
      content: "O famoso 'repós', cremes esfoliantes, removedores de esmalte sem acetona perigosa e líquidos preparadores (desidratadores e primers). Sem isso, a cutilagem sofre e a esmaltação não dura."
    },
    {
      title: "Kits de Esmaltação",
      content: "Uma cartela de cores viva e extensa atrai muita clientela! Investir em bons kits para manicure, que tragam diversas opções de nudes clássicos, vermelhos sensuais e glitters, aumenta radicalmente suas chances de entregar a exata unha que a cliente salvou do Pinterest."
    }
  ];

  return (
    <article className="pt-32 pb-24 bg-white">
      <SEO 
        title="Produtos para Manicure e Pedicure Essenciais | Faby Cardoso" 
        description="Conheça os produtos para manicure e pedicure indispensáveis no seu dia a dia. Descubra os melhores kits para manicure para turbinar seus atendimentos hoje." 
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Guia de Compras</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
            Quais são os <span className="text-secondary">Produtos para Manicure</span> Essenciais no Atendimento?
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Bateu aquela dúvida de o que comprar para não jogar dinheiro fora? Listamos o que não pode faltar de jeito nenhum na sua mesa profissional de trabalho!
          </p>
          <img 
            src="https://i.imgur.com/gUmhfgC.jpeg" 
            alt="Produtos profissionais organizados em uma loja de manicure" 
            className="rounded-[2.5rem] shadow-xl w-full max-h-[400px] object-cover mb-12"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {materiais.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-100 p-8 rounded-3xl hover:shadow-lg transition-shadow"
            >
              <div className="bg-primary/5 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                <Box className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {item.content}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary to-gray-900 text-white rounded-[3rem] p-12 text-center md:text-left flex flex-col md:flex-row items-center gap-12"
        >
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Tudo em um só lugar!</h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Cansada de comprar errado? Na nossa loja de manicure completa você encontra meus produtos preferidos a preços acessíveis, inclusive os melhores produtos para manicure e pedicure com segurança e entrega rápida para sua cidade.
            </p>
            <a 
              href="/loja" 
              className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-hover text-white font-bold py-4 px-8 rounded-full transition-transform hover:scale-105"
            >
              <ShoppingBag className="w-5 h-5" />
              Visitar a Loja Oficial
            </a>
          </div>
        </motion.div>
      </div>
    </article>
  );
}
