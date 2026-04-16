import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Scissors, Package, ShieldCheck, Sparkles, ShoppingCart, CheckCircle2, Briefcase } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function MateriaisIniciante() {
  const categories = [
    {
      icon: <Scissors className="text-secondary" />,
      title: "Ferramentas de Corte e Preparação",
      content: "Para começar com o pé direito, você precisa de ferramentas que não te deixem na mão. O Alicate Mundial 777 é o padrão ouro para iniciantes e profissionais. Além dele, uma boa espátula de aço inox (não amolada) e lixas de gramatura 100/180 são indispensáveis."
    },
    {
      icon: <Package className="text-secondary" />,
      title: "Insumos e Descartáveis",
      content: "Segurança e higiene são prioridades. Tenha sempre em mãos: algodão de boa absorção, removedor de esmaltes sem acetona (agride menos a unha), palitos de laranjeira ou inox e, claro, luvas e máscaras descartáveis para sua proteção e da cliente."
    },
    {
      icon: <ShieldCheck className="text-secondary" />,
      title: "Químicos e Preparadores",
      content: "A durabilidade da esmaltação começa aqui. Você precisará de um bom amolecedor de cutículas (como o kit AMOLECE), álcool 70% para higienização, uma base fortalecedora de qualidade e um extra-brilho (top coat) que garanta o acabamento vitrificado."
    },
    {
      icon: <Briefcase className="text-secondary" />,
      title: "Organização do Espaço",
      content: "Mesmo que atenda em domicílio, a organização passa profissionalismo. Uma maleta resistente ou um carrinho organizador ajudam a manter tudo em ordem. Toalhas brancas limpas ou descartáveis também dão um toque de capricho ao atendimento."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <SEO 
        title="Materiais para Iniciantes em Cutilagem | Faby Cardoso" 
        description="Começando agora na profissão de manicure? Descubra a lista completa de ferramentas e materiais para iniciar seus atendimentos com baixo investimento." 
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Guia para Iniciantes</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
            Materiais e Ferramentas <span className="text-secondary">Essenciais</span> para Começar
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Está começando agora e não sabe o que comprar? Preparei uma lista completa com tudo o que você precisa para iniciar seus atendimentos com profissionalismo e segurança.
          </p>
          <img 
            src="https://i.imgur.com/fIhysKU.jpeg" 
            alt="Materiais e Ferramentas Essenciais" 
            className="rounded-[2.5rem] shadow-xl w-full max-h-[400px] object-cover mb-12"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <div className="space-y-8 mb-16">
          {categories.map((category, index) => (
            <motion.section 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                <div className="bg-white p-2 rounded-lg shadow-sm">{category.icon}</div>
                {category.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {category.content}
              </p>
            </motion.section>
          ))}
        </div>

        <div className="bg-primary text-white p-10 rounded-[3rem] mb-16">
          <h3 className="text-2xl font-bold mb-6 text-gold flex items-center gap-3">
            <Sparkles className="w-8 h-8" />
            Dica de Ouro da Faby
          </h3>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Não tente comprar tudo de uma vez se o orçamento estiver apertado. Comece pelo básico de ALTA QUALIDADE. É melhor ter um alicate excelente do que cinco ruins que machucam a cliente. À medida que os primeiros lucros entrarem, você reinveste em cores novas e decorações.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Invista em Biossegurança", "Qualidade sobre Quantidade", "Organização é Marketing", "Pratique com Bons Produtos"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl">
                <CheckCircle2 className="text-gold w-5 h-5" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-secondary/5 p-12 rounded-[3.5rem] border-2 border-dashed border-secondary/20">
          <ShoppingCart className="w-12 h-12 text-secondary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-primary mb-6">Monte seu Kit Conosco</h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            Quer facilitar sua vida? Na minha loja, montei kits prontos para iniciantes com os mesmos materiais que eu uso e recomendo em meus cursos.
          </p>
          <Link to="/loja" className="btn-hover-effect inline-block bg-primary text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider transition-all hover:bg-black">
            Ver Kits para Iniciantes
          </Link>
        </div>
      </div>
    </div>
  );
}
