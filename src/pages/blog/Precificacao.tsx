import React from 'react';
import { motion } from 'motion/react';
import { Calculator, Search, Star, Box, RefreshCw, Calendar, Megaphone, CheckCircle } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function Precificacao() {
  const points = [
    {
      icon: <Calculator className="text-secondary" />,
      title: "1. Mapeamento de Custos",
      content: "O primeiro passo é a clareza financeira. Liste todos os seus insumos (esmaltes, lixas, descartáveis) e suas despesas operacionais (aluguel, energia, internet). Não esqueça de incluir o valor do seu tempo e o investimento em sua formação constante."
    },
    {
      icon: <Search className="text-secondary" />,
      title: "2. Análise de Mercado Local",
      content: "Observe a média de preços na sua região, mas não se torne escrava dela. Use as redes sociais para entender o posicionamento de suas colegas e identifique onde você pode se destacar com seus diferenciais exclusivos."
    },
    {
      icon: <Star className="text-secondary" />,
      title: "3. Valorização Profissional",
      content: "Preço baixo demais pode sinalizar falta de qualidade. Se você utiliza materiais premium e oferece um atendimento de elite, seu preço deve refletir isso. Clientes que buscam excelência estão dispostas a pagar o valor justo por um serviço superior."
    },
    {
      icon: <Box className="text-secondary" />,
      title: "4. Estruturação de Pacotes",
      content: "Facilite a decisão da cliente criando níveis de serviço. Desde uma esmaltação básica até protocolos completos com cutilagem avançada e nail art. Isso aumenta a percepção de valor e incentiva o consumo de serviços mais rentáveis."
    },
    {
      icon: <RefreshCw className="text-secondary" />,
      title: "5. Revisão Periódica",
      content: "O mercado e os custos mudam. Reavalie sua tabela de preços regularmente, especialmente após concluir novas especializações. Sua evolução profissional deve ser acompanhada por um ajuste correspondente em seus honorários."
    },
    {
      icon: <Calendar className="text-secondary" />,
      title: "6. Estratégia de Agenda Lotada",
      content: "Ter o preço certo é apenas metade da equação; você precisa de demanda constante. Investir em marketing e técnicas de captação é vital. O curso 'Agenda Lotada para Manicures' ensina exatamente como unir técnica e marketing para transformar sua carreira."
    },
    {
      icon: <Megaphone className="text-secondary" />,
      title: "7. Comunicação Transparente",
      content: "Divulgue seus valores de forma profissional e clara. Seja através de um catálogo digital ou nas suas redes sociais, a transparência gera confiança e atrai o público que realmente valoriza seu trabalho."
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <SEO 
        title="Como Cobrar pelo Seu Serviço | Faby Cardoso" 
        description="Aprenda a precificar seu trabalho de manicure e pare de perder dinheiro! Entenda seus custos, valorize sua unha decorada e conquiste clientes que pagam mais." 
      />
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Gestão e Lucratividade</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
            Como Definir Preços que <span className="text-secondary">Valorizam seu Talento</span>
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Precificar corretamente é a base de um negócio sustentável. Aprenda a equilibrar seus custos com o valor que você entrega para se destacar no mercado de manicure.
          </p>
        </motion.div>

        <div className="space-y-8">
          {points.map((point, index) => (
            <motion.section 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-[2rem] border border-gray-100"
            >
              <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                {point.icon}
                {point.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {point.content}
              </p>
            </motion.section>
          ))}

          <div className="bg-secondary/5 p-10 rounded-[3rem] border-2 border-dashed border-secondary/20 text-center mt-12">
            <CheckCircle className="w-12 h-12 text-secondary mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-primary mb-4">Leve seu negócio para o próximo nível!</h3>
            <p className="mb-8 text-gray-600">
              Definir preços é apenas o começo da sua jornada de sucesso. Aprenda a se posicionar como uma autoridade e conquiste a independência financeira que você merece.
            </p>
            <a href="/#cursos" className="btn-hover-effect inline-block bg-primary text-white px-10 py-4 rounded-full font-bold uppercase tracking-wider transition-all hover:bg-black">
              Começar Minha Especialização
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
