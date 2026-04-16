import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, MessageCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', path: '/#inicio' },
    { name: 'Iniciantes', path: '/#iniciantes' },
    { name: 'O Método', path: '/#metodo' },
    { name: 'Certificado', path: '/#certificado' },
    { name: 'Planos', path: '/#cursos' },
    { name: 'Blog & Dicas', path: '/blog', isRouterLink: true },
    { name: 'Loja Oficial', path: '/loja', isRouterLink: true },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 py-3 border-b border-white/5' : 'bg-black/85 py-4'
      } backdrop-blur-sm`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <img src="https://i.ibb.co/9kLhCsmy/favicon.png" alt="Logo Faby Cardoso" className="h-9 w-auto" />
          <div className="text-white font-extrabold text-xl tracking-tight">
            Faby<span className="text-secondary">Cardoso</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            link.isRouterLink ? (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-0.5 bg-secondary w-0 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ) : (
              <a
                key={link.path}
                href={link.path}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 h-0.5 bg-secondary w-0 group-hover:w-full transition-all duration-300"></span>
              </a>
            )
          ))}

          <a 
            href="https://wa.me/5581995194622?text=Olá!%20Vim%20através%20do%20site." 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all hover:-translate-y-0.5 shadow-lg shadow-green-500/20"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white"
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-black/95 border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                link.isRouterLink ? (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="font-medium text-lg text-gray-300 hover:text-white"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.path}
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="font-medium text-lg text-gray-300 hover:text-white"
                  >
                    {link.name}
                  </a>
                )
              ))}
              <a 
                href="https://wa.me/5581995194622?text=Olá!%20Vim%20através%20do%20site." 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 py-3 rounded-full text-center font-bold flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
