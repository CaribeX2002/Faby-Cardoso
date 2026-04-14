import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import HowItWorks from './pages/HowItWorks';
import EstrategiasLucro from './pages/blog/EstrategiasLucro';
import Precificacao from './pages/blog/Precificacao';
import DicasDecoracao from './pages/blog/DicasDecoracao';
import CutilagemDurabilidade from './pages/blog/CutilagemDurabilidade';
import GaleriaInspiracao from './pages/blog/GaleriaInspiracao';
import MateriaisIniciante from './pages/blog/MateriaisIniciante';
import Store from './pages/Store';

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/conteudo" element={<Courses />} />
          <Route path="/como-funciona" element={<HowItWorks />} />
          <Route path="/estrategias-lucro" element={<EstrategiasLucro />} />
          <Route path="/precificacao" element={<Precificacao />} />
          <Route path="/dicas-decoracao" element={<DicasDecoracao />} />
          <Route path="/cutilagem-e-decoracao" element={<CutilagemDurabilidade />} />
          <Route path="/materiais-iniciante" element={<MateriaisIniciante />} />
          <Route path="/galeria-inspiracao" element={<GaleriaInspiracao />} />
          <Route path="/loja" element={<Store />} />
        </Routes>
      </Layout>
    </Router>
  );
}
