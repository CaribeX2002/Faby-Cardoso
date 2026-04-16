import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { BookOpen, TrendingUp, Calculator, Palette, Scissors, Sparkles, Navigation, Lightbulb, Box, Layers, PlayCircle, ArrowRight } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function BlogIndex() {
  const posts = [
    {
      path: "/diferenca-manicure-nail-designer",
      title: "Manicure x Nail Designer",
      description: "Descubra a diferença estrutural entre as profissões e qual caminho seguir para o seu sucesso.",
      icon: <Scissors className="w-6 h-6 text-secondary" />,
      category: "Carreira"
    },
    {
      path: "/como-ser-nail-designer",
      title: "Como se Tornar Nail Designer",
      description: "O guia completo com passo a passo para dominar as técnicas de alongamento.",
      icon: <Navigation className="w-6 h-6 text-secondary" />,
      category: "Guia"
    },
    {
      path: "/10-dicas-manicure-sucesso",
      title: "10 Dicas de Sucesso",
      description: "Coloque em prática essas 10 dicas e se destaque na sua região rapidamente.",
      icon: <Lightbulb className="w-6 h-6 text-secondary" />,
      category: "Dicas"
    },
    {
      path: "/produtos-essenciais-manicure",
      title: "Produtos Essenciais",
      description: "Lista de materiais indispensáveis para oferecer o melhor atendimento possível.",
      icon: <Box className="w-6 h-6 text-secondary" />,
      category: "Materiais"
    },
    {
      path: "/guia-alongamento-unhas",
      title: "Tudo Sobre Alongamentos",
      description: "Conheça mais sobre as famosas técnicas de Fibra de Vidro e Gel.",
      icon: <Layers className="w-6 h-6 text-secondary" />,
      category: "Técnica"
    },
    {
      path: "/estrategias-lucro",
      title: "5 Segredos para Lucrar Mais",
      description: "Fidelize clientes e aumente exponencialmente a renda do seu espaço.",
      icon: <TrendingUp className="w-6 h-6 text-secondary" />,
      category: "Negócios"
    },
    {
      path: "/precificacao",
      title: "Guia de Precificação",
      description: "Aprenda a valorizar seu serviço calculando os seus custos fixos e variáveis.",
      icon: <Calculator className="w-6 h-6 text-secondary" />,
      category: "Negócios"
    },
    {
      path: "/dicas-decoracao",
      title: "Unhas Decoradas",
      description: "Guia definitivo para criar designs de unhas que lotam agendas.",
      icon: <Palette className="w-6 h-6 text-secondary" />,
      category: "Arte"
    },
    {
      path: "/cutilagem-e-decoracao",
      title: "Cutilagem Perfeita",
      description: "Os segredos de uma base bem feita para melhorar o acabamento das decorações.",
      icon: <Sparkles className="w-6 h-6 text-secondary" />,
      category: "Técnica"
    },
    {
      path: "/materiais-iniciante",
      title: "Materiais para Iniciantes",
      description: "O que comprar para começar gastando pouco, mas com qualidade.",
      icon: <BookOpen className="w-6 h-6 text-secondary" />,
      category: "Materiais"
    },
    {
      path: "/galeria-inspiracao",
      title: "Galeria de Inspiração",
      description: "Mais de 40 fotos exclusivas com os melhores trabalhos para servir de molde.",
      icon: <PlayCircle className="w-6 h-6 text-secondary" />,
      category: "Inspiração"
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <SEO 
        title="Blog e Dicas de Manicure | Faby Cardoso" 
        description="Acesse o nosso blog exclusivo e leia sobre unhas de gel, cutilagem, materiais, precificação e muito mais. Torne-se uma profissional completa!" 
      />
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Central de Conteúdo</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
            Dicas & <span className="text-secondary">Blog</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Mergulhe no universo da beleza das unhas. Reunimos as melhores dicas, estratégias e aulas para ajudar na sua carreira.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link 
                to={post.path}
                className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:border-gold/30 transition-all flex flex-col h-full group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-primary/5 p-4 rounded-2xl group-hover:scale-110 transition-transform">
                    {post.icon}
                  </div>
                  <span className="bg-gray-100 text-gray-500 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-primary mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-500 mb-6 line-clamp-3 flex-grow">
                  {post.description}
                </p>
                <div className="flex items-center gap-2 text-secondary font-bold group-hover:translate-x-2 transition-transform mt-auto">
                  Ler artigo <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
