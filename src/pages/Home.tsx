import React from 'react';
import { ShieldCheck, BookOpen, CheckCircle2, Award, Star, Clock, ChevronDown, Play, FileText, Gift } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="inicio" className="relative pt-40 pb-24 md:pt-56 md:pb-32 bg-primary overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <span className="inline-block bg-gold/10 text-gold border border-gold/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                Especialização Online
              </span>
              <h1 className="text-4xl md:text-[3.5rem] font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                Domine a <span className="text-secondary">Cutilagem Perfeita</span> e Lote sua Agenda
              </h1>
              <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Aprenda as melhores técnicas com Faby Cardoso e torne-se uma profissional de sucesso, reconhecida e valorizada pelas suas clientes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 items-center lg:items-start justify-center lg:justify-start">
                <a href="#cursos" className="btn-hover-effect bg-secondary hover:bg-secondary-hover text-white px-8 py-4 rounded-full font-bold text-lg uppercase tracking-wider transition-all shadow-magenta animate-pulse-custom">
                  Quero me Especializar Agora
                </a>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <ShieldCheck className="text-secondary w-5 h-5" />
                  Compra 100% Segura via Hotmart
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative max-w-xl mx-auto lg:max-w-none"
            >
              <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img src="https://www.cursomanicure.com/wp-content/uploads/2023/10/faby-cardoso-curso-1.jpg" alt="Faby Cardoso" className="w-full h-auto" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold rounded-3xl -z-0"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beginner Course Section */}
      <section id="iniciantes" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-2 block">Lançamento Exclusivo</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6">
              Formação Completa: <span className="text-secondary">Iniciante ao Avançado</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-3xl mx-auto">
              O curso mais completo da Faby Cardoso, destinado a quem nunca trabalhou na área e deseja sair do zero absoluto até as especializações mais avançadas.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <BookOpen className="text-secondary w-6 h-6" />
                O que você vai aprender:
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Manicure + Pedicure + Decoração',
                  'Guia da Manicure Iniciante',
                  'Biossegurança Completa',
                  'Precificação de Serviços',
                  'Alongamento Fibra de Vidro',
                  'Alongamento em Gel',
                  'Gestão de Salão de Sucesso',
                  'Marketing e Divulgação'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <CheckCircle2 className="text-secondary w-5 h-5 shrink-0" />
                    <span className="font-medium text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-primary text-white p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                  <Award className="w-20 h-20" />
                </div>
                <h4 className="text-xl font-bold text-gold mb-4">Incluso na Formação:</h4>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <Star className="text-gold w-4 h-4" /> 9 Apostilas Profissionais em PDF
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <Star className="text-gold w-4 h-4" /> Agenda da Manicure com Controle Financeiro
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gray-300">
                    <Star className="text-gold w-4 h-4" /> 30 Frases Irresistíveis para Redes Sociais
                  </li>
                  <li className="flex items-center gap-2 text-sm text-gold font-bold">
                    <Clock className="w-4 h-4" /> ACESSO VITALÍCIO
                  </li>
                </ul>
                <a href="#cursos" className="btn-hover-effect block w-full bg-gold text-primary text-center py-4 rounded-full font-bold uppercase tracking-wider hover:bg-gold/90 transition-all shadow-gold animate-pulse-gold">
                  QUERO SER ALUNA
                </a>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-secondary/10 rounded-[2rem] blur-2xl group-hover:bg-secondary/20 transition-all"></div>
                <div className="relative bg-white p-2 rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden">
                  <div className="aspect-video bg-black rounded-3xl overflow-hidden relative">
                    <iframe src="https://player.vimeo.com/video/346248454?h=92fe828c36" className="absolute inset-0 w-full h-full" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                  </div>
                </div>
                <div className="mt-8 flex justify-center">
                  <img src="https://www.cursomanicure.com/wp-content/uploads/2025/12/Apostilas-ok.webp" alt="Apostilas do Curso" className="max-w-xs md:max-w-md drop-shadow-2xl animate-float" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section id="metodo" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
              Conheça o <span className="text-secondary">Método Faby Cardoso Cutilagem Perfeita</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Assista ao vídeo abaixo e descubra como transformar seus atendimentos com técnicas de cutilagem e esmaltação impecáveis.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-white p-2 rounded-3xl shadow-2xl border border-gray-200 overflow-hidden">
              <iframe src="https://www.youtube.com/embed/S2VNfJ-I4KI" title="Apresentação do Curso" className="w-full h-full rounded-2xl" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section id="certificado" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="perspective-1000">
              <img src="https://www.cursomanicure.com/wp-content/uploads/2025/07/certificado-faby-cardoso-2025.jpg" alt="Certificado Faby Cardoso" className="rounded-lg shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-[5px] border-white transition-transform duration-500 hover:scale-105" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6 leading-tight">
                Certificado de Conclusão <span className="text-secondary">Incluso</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Ao finalizar o curso, você receberá um lindo certificado de participação com seu nome, pronto para imprimir e emoldurar no seu espaço de atendimento.
              </p>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-secondary/10 text-secondary w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">✓</div>
                  <div>
                    <strong className="text-primary block">Comprova sua especialização</strong>
                    <span className="text-gray-500">e dedicação à profissão.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-secondary/10 text-secondary w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">✓</div>
                  <div>
                    <strong className="text-primary block">Passa mais credibilidade</strong>
                    <span className="text-gray-500">e confiança para as suas clientes.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-secondary/10 text-secondary w-8 h-8 rounded-full flex items-center justify-center shrink-0 font-bold">✓</div>
                  <div>
                    <strong className="text-primary block">Válido em todo o território nacional</strong>
                    <span className="text-gray-500">como curso livre de capacitação.</span>
                  </div>
                </li>
              </ul>
              <a href="#cursos" className="btn-hover-effect inline-block mt-10 bg-gold text-primary px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:shadow-gold transition-all animate-pulse-gold">
                Garantir meu Certificado
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="cursos" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary mb-6">
              Escolha o <span className="text-secondary">Plano Ideal</span> para Você
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Invista na sua carreira com condições especiais. Acesso imediato após a confirmação do pagamento.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {/* Plano Básico */}
            <div className="bg-white p-10 rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all flex flex-col h-full">
              <h3 className="text-xl font-bold text-primary mb-6">Básico (Cutilagem)</h3>
              <div className="mb-8">
                <div className="text-secondary text-4xl font-extrabold">6x R$ 11,07</div>
                <div className="text-gray-400 text-sm mt-2">ou R$ 59,00 à vista</div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow border-t border-gray-100 pt-8">
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle2 className="text-secondary w-4 h-4" /> Curso de Cutilagem</li>
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle2 className="text-secondary w-4 h-4" /> Acesso vitalício</li>
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle2 className="text-secondary w-4 h-4" /> Certificado</li>
                <li className="flex items-center gap-2 text-sm text-gray-300 line-through">Sem Apostilas</li>
                <li className="flex items-center gap-2 text-sm text-gray-300 line-through">Sem Aulas Bônus</li>
              </ul>
              <a href="https://go.hotmart.com/M105111783P?ap=c838" target="_blank" rel="noopener noreferrer" className="btn-hover-effect bg-primary text-white text-center py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-black transition-colors animate-pulse-custom">
                Quero o Básico
              </a>
            </div>

            {/* Formação Completa do Zero */}
            <div className="bg-primary p-10 rounded-[2rem] border-2 border-gold shadow-gold hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col h-full relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-primary px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap">
                MAIS ESCOLHIDO 🏆
              </div>
              <h3 className="text-xl font-bold text-gold mb-6">Formação Completa do Zero</h3>
              <div className="mb-8">
                <div className="text-secondary text-4xl font-extrabold">12x R$ 15,41</div>
                <div className="text-gray-400 text-sm mt-2">ou R$ 149,00 à vista</div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow border-t border-white/10 pt-8">
                <li className="flex items-center gap-2 text-sm text-white font-bold"><CheckCircle2 className="text-gold w-4 h-4" /> Manicure + Pedicure</li>
                <li className="flex items-center gap-2 text-sm text-white font-bold"><CheckCircle2 className="text-gold w-4 h-4" /> Unhas Decoradas</li>
                <li className="flex items-center gap-2 text-sm text-white font-bold"><CheckCircle2 className="text-gold w-4 h-4" /> Alongamento Fibra/Gel</li>
                <li className="flex items-center gap-2 text-sm text-gold font-bold"><CheckCircle2 className="text-gold w-4 h-4" /> Acesso Vitalício</li>
              </ul>
              <a href="https://go.hotmart.com/O105214840X?ap=b895" target="_blank" rel="noopener noreferrer" className="btn-hover-effect bg-gold text-primary text-center py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-gold/90 transition-colors animate-pulse-gold">
                QUERO SER ALUNA
              </a>
            </div>

            {/* VIP Cutilagem */}
            <div className="bg-white p-10 rounded-[2rem] border-2 border-secondary shadow-magenta hover:shadow-2xl hover:-translate-y-2 transition-all flex flex-col h-full relative">
              <h3 className="text-xl font-bold text-primary mb-6">VIP Cutilagem</h3>
              <div className="mb-8">
                <div className="text-secondary text-4xl font-extrabold">10x R$ 11,90</div>
                <div className="text-gray-400 text-sm mt-2">ou R$ 99,00 à vista</div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow border-t border-gray-100 pt-8">
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle2 className="text-secondary w-4 h-4" /> Curso Completo Cutilagem</li>
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle2 className="text-secondary w-4 h-4" /> Acesso Vitalício</li>
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle2 className="text-secondary w-4 h-4" /> Certificado Profissional</li>
                <li className="flex items-center gap-2 text-sm text-gray-800 font-bold"><CheckCircle2 className="text-secondary w-4 h-4" /> 9 Apostilas Exclusivas</li>
              </ul>
              <a href="https://go.hotmart.com/M105111783P?ap=00a8" target="_blank" rel="noopener noreferrer" className="btn-hover-effect bg-secondary text-white text-center py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-secondary-hover transition-colors animate-pulse-custom">
                Quero o VIP
              </a>
            </div>

            {/* Intermediário */}
            <div className="bg-white p-10 rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all flex flex-col h-full">
              <h3 className="text-xl font-bold text-primary mb-6">Intermediário (Cutilagem)</h3>
              <div className="mb-8">
                <div className="text-secondary text-4xl font-extrabold">10x R$ 9,49</div>
                <div className="text-gray-400 text-sm mt-2">ou R$ 79,00 à vista</div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow border-t border-gray-100 pt-8">
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle2 className="text-secondary w-4 h-4" /> Curso Completo Cutilagem</li>
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle2 className="text-secondary w-4 h-4" /> Acesso Vitalício</li>
                <li className="flex items-center gap-2 text-sm text-gray-600"><CheckCircle2 className="text-secondary w-4 h-4" /> Certificado Profissional</li>
                <li className="flex items-center gap-2 text-sm text-gray-800 font-bold"><CheckCircle2 className="text-secondary w-4 h-4" /> Com Apostilas</li>
              </ul>
              <a href="https://go.hotmart.com/M105111783P?ap=101e" target="_blank" rel="noopener noreferrer" className="btn-hover-effect bg-primary text-white text-center py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-black transition-colors animate-pulse-custom">
                Quero o Intermediário
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Content Section */}
      <section id="materiais" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
              O que você vai <span className="text-secondary">Receber</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Materiais complementares projetados para acelerar seus resultados (Disponíveis nos planos superiores).
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-12 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-2xl transition-all">
              <div className="text-5xl mb-6">📕</div>
              <h3 className="text-2xl font-bold text-primary mb-6">Apostilas Exclusivas</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-lg">👉</span>
                  <span className="text-gray-600"><strong className="text-primary">Agenda da Manicure VIP:</strong> Organize seus horários e otimize seu tempo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-lg">👉</span>
                  <span className="text-gray-600"><strong className="text-primary">Biossegurança:</strong> Proteja você e suas clientes com as melhores práticas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-lg">👉</span>
                  <span className="text-gray-600"><strong className="text-primary">Atração de Clientes:</strong> Estratégias de marketing para lotar sua agenda.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-12 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-2xl transition-all">
              <div className="text-5xl mb-6">🎁</div>
              <h3 className="text-2xl font-bold text-primary mb-6">Aulas Bônus</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-lg">👉</span>
                  <span className="text-gray-600"><strong className="text-primary">Esfoliação dos Pés:</strong> Técnica especial para oferecer um atendimento completo.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-lg">👉</span>
                  <span className="text-gray-600"><strong className="text-primary">Reparação de Unha Quebrada:</strong> Saiba como consertar unhas danificadas e fidelizar clientes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-secondary text-lg">👉</span>
                  <span className="text-gray-600"><strong className="text-primary">Fotos Perfeitas:</strong> Descubra os segredos do melhor ângulo e edição para arrasar! 📸</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Gallery */}
          <div id="galeria" className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg group">
              <img src="https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" alt="Trabalho 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg group">
              <img src="https://i.ibb.co/4gFwyd7w/31956933-270852386791220-9086006368409747456-n.png" alt="Trabalho 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg group">
              <img src="https://i.ibb.co/1tgN4NT4/5-1.jpg" alt="Trabalho 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg group">
              <img src="https://i.ibb.co/XZPDKbGf/32083652-270697940139998-1691476164045963264-n.jpg" alt="Trabalho 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section id="garantia" className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
            <img src="https://www.cursomanicure.com/wp-content/uploads/2023/10/7-dias-garantia-1.png" alt="Garantia de 7 Dias" className="w-56 h-auto drop-shadow-[0_20px_30px_rgba(212,175,55,0.2)] animate-float" />
            <div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                Garantia Incondicional de <span className="text-gold">7 Dias</span>
              </h2>
              <div className="text-gray-300 text-lg leading-relaxed space-y-4">
                <p>Eu acredito que posso te ajudar a mudar de vida, confio no meu método, mas ainda assim te dou um período experimental.</p>
                <p>Ofereço para você garantia de qualidade do curso de manicure e pedicure incondicional de forma a garantir sua satisfação.</p>
                <p className="text-gold font-bold text-xl">Caso o curso não atenda sua expectativa, basta entrar em contato e eu devolvo 100% do seu dinheiro. Risco Zero!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
              Dúvidas <span className="text-secondary">Frequentes</span>
            </h2>
          </div>
          
          <div className="max-w-3xl mx-auto">
            {[
              { q: "O curso é presencial ou online?", a: "O curso é 100% online! Você pode aprender no seu ritmo, de qualquer lugar, apenas com um celular ou computador com acesso à internet. 🎥✨" },
              { q: "Qual a diferença entre o curso de R$ 59 e o de R$ 149?", a: "✔ Básico (R$ 59): Focado em técnicas de cutilagem e esmaltação, incluindo certificado. ✔ Formação Iniciante (R$ 149): O curso mais completo! Ensina desde o zero absoluto, inclui Manicure, Pedicure, Decoração, Alongamentos (Fibra/Gel), 9 apostilas, guia da iniciante e acesso vitalício. É a formação ideal para quem quer começar uma carreira de sucesso. 🏆💎" },
              { q: "Quanto tempo leva para concluir o curso e pegar o certificado?", a: "O curso é feito no seu ritmo! Você pode concluir em poucos dias ou semanas. Assim que finalizar todas as aulas, o certificado é liberado automaticamente dentro da plataforma. 🏅" },
              { q: "Sou iniciante do zero. Vou conseguir aprender?", a: "Com certeza! O curso foi criado pensando também em quem nunca fez unha antes. As aulas são detalhadas, práticas (passo a passo, dedo por dedo) e gravadas em alta qualidade. 🎯" },
              { q: "Tenho medo de comprar e ser golpe. É confiável?", a: "Entendemos sua preocupação! O curso é vendido pela Hotmart, a maior plataforma de cursos da América Latina, 100% segura. ✅ Assim que o pagamento for aprovado, você recebe acesso imediato no seu e-mail." }
            ].map((item, index) => (
              <div key={index} className="mb-4 border border-gray-200 rounded-xl overflow-hidden bg-white">
                <details className="group">
                  <summary className="flex justify-between items-center p-5 cursor-pointer list-none font-semibold text-primary text-lg">
                    {item.q}
                    <ChevronDown className="text-secondary transition-transform group-open:rotate-180" />
                  </summary>
                  <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                    {item.a}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
