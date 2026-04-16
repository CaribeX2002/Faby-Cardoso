import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Shield, Droplets, Scissors, MousePointer2, ShoppingCart, CheckCircle2 } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function CutilagemDurabilidade() {
  const sections = [
    {
      icon: <Scissors className="text-secondary" />,
      title: "Qualidade e Afiação do Alicate",
      content: "O sucesso começa na ferramenta. Um alicate sem corte dificulta a precisão e pode causar ferimentos. Minha recomendação absoluta é o Alicate Mundial 777: ele mantém a afiação por muito mais tempo e permite um corte contínuo e seguro, essencial para um acabamento profissional."
    },
    {
      icon: <Droplets className="text-secondary" />,
      title: "Preparação com Amolecedores",
      content: "Nunca inicie a cutilagem em pele seca. Cutículas hidratadas e macias são muito mais fáceis de desgrudar e remover. Para casos de ressecamento extremo, o kit AMOLECE é meu aliado número um, garantindo que a pele fique pronta para o procedimento sem esforço."
    },
    {
      icon: <MousePointer2 className="text-secondary" />,
      title: "O Papel Vital da Espátula",
      content: "A espátula deve ser usada para desgrudar a cutícula da lâmina, não para 'raspar' com força. Recomendo passar a espátula suavemente mais de uma vez. Dica de ouro: evite amolar a espátula para não criar quinas que possam machucar a matriz da unha."
    },
    {
      icon: <Shield className="text-secondary" />,
      title: "Técnica Correta de Manuseio",
      content: "Muitas manicures erram ao usar a parte de trás do alicate. O segredo está na posição vertical: use a ponta para contornar a unha e abrir as laterais com precisão. Isso evita o desconforto da cliente e garante aquela cutilagem funda e limpa que todos amam."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <SEO 
        title="Cutilagem Perfeita e Durabilidade | Faby Cardoso" 
        description="Cutilagem e durabilidade andam juntas! Domine o preparo da unha para evitar que o esmalte descasque, garantindo clientes mais satisfeitos com resultados VIP." 
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Técnica Profissional</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
            A Arte da <span className="text-secondary">Cutilagem Perfeita</span>: Segurança e Estética
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed mb-8">
            Uma manicure excepcional começa na preparação. Dominar a cutilagem é garantir o conforto da sua cliente e a base perfeita para qualquer decoração duradoura.
          </p>

          <div className="relative w-full overflow-hidden rounded-[2.5rem] shadow-xl mb-12 aspect-video">
            <iframe 
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/SJIS84jaAvI?si=jTet8ffDn9MNqXg0" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen>
            </iframe>
          </div>

        </motion.div>

        <div className="space-y-8 mb-16">
          {sections.map((section, index) => (
            <motion.section 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                <div className="bg-white p-2 rounded-lg shadow-sm">{section.icon}</div>
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {section.content}
              </p>
            </motion.section>
          ))}
        </div>

        <div className="bg-primary text-white p-10 rounded-[3rem] mb-16">
          <h3 className="text-2xl font-bold mb-6 text-gold flex items-center gap-3">
            <CheckCircle2 className="w-8 h-8" />
            Por que investir em qualidade?
          </h3>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Sua técnica é 50% do resultado; os outros 50% são os materiais que você utiliza. Trabalhar com ferramentas de elite como o Mundial 777 e produtos eficazes como o kit AMOLECE não é gasto, é investimento na sua autoridade e na satisfação da sua cliente.
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {["Corte Preciso", "Menos Risco de Lesões", "Maior Durabilidade", "Conforto Total"].map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl">
                <div className="w-2 h-2 bg-gold rounded-full" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-secondary/5 p-12 rounded-[3.5rem] border-2 border-dashed border-secondary/20">
          <ShoppingCart className="w-12 h-12 text-secondary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-primary mb-6">Materiais que eu Recomendo</h2>
          <p className="text-gray-600 mb-10 max-w-xl mx-auto">
            Em minha loja online, selecionei a dedo os produtos que uso diariamente em meus atendimentos. Garanta os melhores alicates, espátulas e amolecedores para o seu salão.
          </p>
          <Link to="/materiais-iniciante" className="btn-hover-effect inline-block bg-primary text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider transition-all hover:bg-black">
            Ver Minha Seleção de Materiais
          </Link>
        </div>
      </div>
    </div>
  );
}
