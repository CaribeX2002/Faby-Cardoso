import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-3 mb-4">
            <img src="https://i.ibb.co/9kLhCsmy/favicon.png" alt="Logo Faby Cardoso" className="h-12 w-auto" />
            <div className="text-white font-extrabold text-2xl tracking-tight">
              Faby<span className="text-secondary">Cardoso</span>
            </div>
          </div>
          <p className="text-gray-500 max-w-md">
            Transformando vidas através do embelezamento das unhas e capacitação profissional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16 text-center border-t border-white/10 pt-16">
          <div>
            <h4 className="text-secondary font-bold uppercase tracking-widest text-xs mb-6">Dicas & Blog</h4>
            <ul className="space-y-4">
              <li><Link to="/estrategias-lucro" className="text-gray-400 hover:text-white text-sm transition-colors">5 Segredos para Lucrar Mais</Link></li>
              <li><Link to="/precificacao" className="text-gray-400 hover:text-white text-sm transition-colors">Guia de Precificação Profissional</Link></li>
              <li><Link to="/dicas-decoracao" className="text-gray-400 hover:text-white text-sm transition-colors">Dicas de Unhas Decoradas</Link></li>
              <li><Link to="/cutilagem-e-decoracao" className="text-gray-400 hover:text-white text-sm transition-colors">Cutilagem e Durabilidade</Link></li>
              <li><Link to="/materiais-iniciante" className="text-gray-400 hover:text-white text-sm transition-colors">Materiais para Iniciantes</Link></li>
              <li><Link to="/galeria-inspiracao" className="text-gray-400 hover:text-white text-sm transition-colors">Galeria de Inspiração (+40 Fotos)</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-secondary font-bold uppercase tracking-widest text-xs mb-6">Navegação</h4>
            <ul className="space-y-4">
              <li><a href="/#inicio" className="text-gray-400 hover:text-white text-sm transition-colors">Início</a></li>
              <li><a href="/#iniciantes" className="text-gray-400 hover:text-white text-sm transition-colors">Iniciantes</a></li>
              <li><a href="/#metodo" className="text-gray-400 hover:text-white text-sm transition-colors">O Método</a></li>
              <li><a href="/#cursos" className="text-gray-400 hover:text-white text-sm transition-colors">Planos</a></li>
              <li><Link to="/loja" className="text-gray-400 hover:text-white text-sm transition-colors">Loja Oficial</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-secondary font-bold uppercase tracking-widest text-xs mb-6">Institucional</h4>
            <ul className="space-y-4">
              <li><Link to="/sobre" className="text-gray-400 hover:text-white text-sm transition-colors">Quem é Faby?</Link></li>
              <li><Link to="/conteudo" className="text-gray-400 hover:text-white text-sm transition-colors">Conteúdo</Link></li>
              <li><Link to="/como-funciona" className="text-gray-400 hover:text-white text-sm transition-colors">Como Funciona</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 text-center">
          <div className="flex justify-center mb-8">
            <a 
              href="https://wa.me/5581995194622?text=Olá!%20Vim%20através%20do%20site." 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#25D366] transition-colors"
            >
              <MessageCircle className="w-8 h-8" />
            </a>
          </div>
          <p className="text-gray-600 text-sm">
            &copy; {currentYear} Curso de Cutilagem Faby Cardoso. Todos os direitos reservados.
          </p>
          <p className="text-gray-700 text-[10px] mt-4 uppercase tracking-widest">
            Este site não é afiliado ao Facebook ou a qualquer entidade do Facebook.
          </p>
        </div>
      </div>
    </footer>
  );
}
