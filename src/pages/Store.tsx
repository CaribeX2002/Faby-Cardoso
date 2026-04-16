import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingCart, Star, ShieldCheck, Truck, ExternalLink, X, Plus, Minus, Trash2, AlertCircle, Heart } from 'lucide-react';
import { SEO } from '../components/SEO';

const products = [
  { id: 1, title: "Toalha Descartável Manicure Depil Skin 20x30", price: "R$ 24,00", category: "Cuidados e tratamento", badge: "Frete Grátis", link: "https://meli.la/2Bf9PUD", image1: "https://http2.mlstatic.com/D_Q_NP_961984-MLA83564724683_042025-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_940852-MLU75094865990_032024-F.webp" },
  { id: 2, title: "Kit 6 Esmaltes Para Unhas Francesinha Impala", price: "R$ 35,90", category: "Esmalte e decoração", badge: "Frete Grátis", link: "https://meli.la/1wbabSW", image1: "https://http2.mlstatic.com/D_Q_NP_714379-MLU74198761428_012024-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_614418-MLA80142790206_112024-F.webp" },
  { id: 3, title: "Kit 10 Esmaltes Risque Vermelhos Clássicos", price: "R$ 55,90", category: "Esmalte e decoração", badge: "Frete Grátis", link: "https://meli.la/1KFSewb", image1: "https://http2.mlstatic.com/D_Q_NP_650188-MLB97575713219_112025-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_755406-MLB95153992420_102025-F.webp" },
  { id: 4, title: "Kit 6 Esmaltes Impala Coleção Perolado Cintilante", price: "R$ 35,90", category: "Esmalte e decoração", badge: "Frete Grátis", link: "https://meli.la/1gxJeUW", image1: "https://http2.mlstatic.com/D_Q_NP_751940-MLB97904175024_112025-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_841838-MLB82628059024_032025-F.webp" },
  { id: 5, title: "Kit 10 Esmaltes Impala Nude Cruelty-Free", price: "R$ 52,90", category: "Esmalte e decoração", badge: "Frete Grátis", link: "https://meli.la/2fXEDhF", image1: "https://http2.mlstatic.com/D_Q_NP_683200-MLA105989637223_012026-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_771310-MLA98387569297_112025-F.webp" },
  { id: 6, title: "Kit 30 Esmaltes Impala Atacado Coleção Cores", price: "R$ 138,60", category: "Esmalte e decoração", badge: "Frete Grátis", link: "https://meli.la/1o23VZe", image1: "https://http2.mlstatic.com/D_Q_NP_611517-MLA97088272110_112025-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_707689-MLA97088192508_112025-F.webp" },
  { id: 7, title: "Kit Com 15 Esmaltes Risqué Hipoalergênicos", price: "R$ 78,90", category: "Esmalte e decoração", badge: "Frete Grátis", link: "https://meli.la/1Spxvjc", image1: "https://http2.mlstatic.com/D_Q_NP_867869-MLA97464713531_112025-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_663670-MLB75492375451_032024-F.webp" },
  { id: 8, title: "Kit 20 Esmaltes Risque Clássicos Hipoalergenicos", price: "R$ 118,83", category: "Esmalte e decoração", badge: "Frete Grátis", link: "https://meli.la/1gmbCbL", image1: "https://http2.mlstatic.com/D_Q_NP_789313-MLB99492985997_112025-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_737372-MLB83279193950_042025-F.webp" },
  { id: 9, title: "Kit 30 Esmaltes Risque Clássicos Mais Vendidos", price: "R$ 154,75", category: "Esmalte e decoração", badge: "Frete Grátis", link: "https://meli.la/1a1fASY", image1: "https://http2.mlstatic.com/D_Q_NP_916001-MLB83707208355_042025-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_666726-MLB83706963877_042025-F.webp" },
  { id: 10, title: "Solução Hemostática Hemoliq - Maquira", price: "R$ 31,90", category: "Cuidados e tratamento", badge: "Frete Grátis", link: "https://meli.la/2z1bFrQ", image1: "https://http2.mlstatic.com/D_Q_NP_665346-MLB69777492133_062023-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_951062-MLB79378190946_092024-F.webp" },
  { id: 11, title: "Pó Hemostático Adstringente Lapsan 20g", price: "R$ 36,09", category: "Cuidados e tratamento", badge: "", link: "https://meli.la/17iX1gA", image1: "https://http2.mlstatic.com/D_Q_NP_873026-MLB49924643158_052022-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_833657-MLB71255445032_082023-F.webp" },
  { id: 12, title: "Kit Spa Dos Pés Produtos Profissionais", price: "R$ 157,90", category: "Cuidados e tratamento", badge: "Frete Grátis", link: "https://meli.la/1BWeu8Q", image1: "https://http2.mlstatic.com/D_Q_NP_668247-MLB79024303684_092024-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_616826-MLA79264609283_092024-F.webp" },
  { id: 13, title: "Repos Removedor De Esmalte Com Acetona Kit 12un", price: "R$ 59,99", category: "Cuidados e tratamento", badge: "Frete Grátis", link: "https://meli.la/1kRKs4S", image1: "https://http2.mlstatic.com/D_Q_NP_856230-MLA93335063712_092025-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_856230-MLA93335063712_092025-F.webp" },
  { id: 14, title: "Kit Spa Dos Pés Amaciante Para Cutículas E Calosidades", price: "R$ 38,99", category: "Cuidados e tratamento", badge: "Frete Grátis", link: "https://meli.la/2PuAu4X", image1: "https://http2.mlstatic.com/D_Q_NP_814662-MLA87788904670_072025-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_618315-MLA87789069860_072025-F.webp" },
  { id: 15, title: "Removedor De Cutículas - 500g Repós", price: "R$ 27,17", category: "Cuidados e tratamento", badge: "Frete Grátis", link: "https://meli.la/1Ztw5ty", image1: "https://http2.mlstatic.com/D_Q_NP_803574-MLA92610993871_092025-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_715308-MLA92611984995_092025-F.webp" },
  { id: 16, title: "Repos Amaciante de Cutículas e Calosidades 1,1L", price: "R$ 44,99", category: "Cuidados e tratamento", badge: "Frete Grátis", link: "https://meli.la/1tNZ8Nd", image1: "https://http2.mlstatic.com/D_Q_NP_957446-MLA108487746758_032026-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_897756-MLA108487776240_032026-F.webp" },
  { id: 17, title: "Apoio Suporte Para Pernas Spa Dos Pés", price: "R$ 268,90", category: "Móveis e utilidades", badge: "Frete Grátis", link: "https://meli.la/12JaSe8", image1: "https://http2.mlstatic.com/D_Q_NP_984038-MLU75962829535_042024-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_984038-MLU75962829535_042024-F.webp" },
  { id: 18, title: "Suporte Tripé Manicure Apoio Das Pernas", price: "R$ 78,90", category: "Móveis e utilidades", badge: "Frete Grátis", link: "https://meli.la/2vsSWai", image1: "https://http2.mlstatic.com/D_Q_NP_881731-MLB107729082587_022026-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_901849-MLB107729082583_022026-F.webp" },
  { id: 19, title: "Mbm Decor Suporte Tripé Manicure Apoio Pernas", price: "R$ 63,98", category: "Móveis e utilidades", badge: "Frete Grátis", link: "https://meli.la/1d2R7rB", image1: "https://http2.mlstatic.com/D_Q_NP_659674-MLU78442156285_082024-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_787054-MLU78441894555_082024-F.webp" },
  { id: 20, title: "Carrinho Luxxuria Móveis Auxiliar Salão 2 Gavetas", price: "R$ 799,00", category: "Móveis e utilidades", badge: "Frete Grátis", link: "https://meli.la/1C6nBQg", image1: "https://http2.mlstatic.com/D_Q_NP_903990-MLA87720905013_072025-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_944409-MLA87391189492_072025-F.webp" },
  { id: 21, title: "Apoio De Mão Punho Manicure Unha Gel/fibra", price: "R$ 49,73", category: "Móveis e utilidades", badge: "Frete Grátis", link: "https://meli.la/33aXPEZ", image1: "https://http2.mlstatic.com/D_Q_NP_948761-MLB93415081925_092025-F-apoio-de-mo-punho-manicure-unha-gelfibra.webp", image2: "https://http2.mlstatic.com/D_Q_NP_834205-MLB75639829044_042024-F-apoio-de-mo-punho-manicure-unha-gelfibra.webp" },
  { id: 22, title: "Apoio De Mão Punho Manicure Unha Gel Fibra", price: "R$ 47,47", category: "Móveis e utilidades", badge: "Frete Grátis", link: "https://meli.la/2M7oqko", image1: "https://http2.mlstatic.com/D_Q_NP_821472-MLB89132025842_082025-F-apoio-de-mo-punho-manicure-unha-gel-fibra.webp", image2: "https://http2.mlstatic.com/D_Q_NP_654257-MLB80513117520_112024-F-apoio-de-mo-punho-manicure-unha-gel-fibra.webp" },
  { id: 23, title: "Cirandinha Ciranda Cadeira Manicure", price: "R$ 473,77", category: "Móveis e utilidades", badge: "Frete Grátis", link: "https://meli.la/1oXhQdM", image1: "https://http2.mlstatic.com/D_Q_NP_867046-MLB81974859782_022025-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_669542-MLB81974958106_022025-F.webp" },
  { id: 24, title: "Ciranda Cirandinha Cadeira Manicure", price: "R$ 570,37", category: "Móveis e utilidades", badge: "", link: "https://meli.la/28w8tHi", image1: "https://http2.mlstatic.com/D_Q_NP_937215-MLB95028995626_102025-F-ciranda-cirandinha-cadeira-manicure.webp", image2: "https://http2.mlstatic.com/D_Q_NP_708789-MLB82429389731_022025-F-ciranda-cirandinha-cadeira-manicure.webp" },
  { id: 25, title: "Nicho Expositor Esmaltes Grande Manicure", price: "R$ 111,11", category: "Móveis e utilidades", badge: "Frete Grátis", link: "https://meli.la/1S1RQAY", image1: "https://http2.mlstatic.com/D_Q_NP_809819-MLB91283476711_082025-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_793911-MLB90892777186_082025-F.webp" },
  { id: 26, title: "Kit 2x Nichos Suporte Para Prateleira Expositor", price: "R$ 189,99", category: "Móveis e utilidades", badge: "Frete Grátis", link: "https://meli.la/2W1z35Z", image1: "https://http2.mlstatic.com/D_Q_NP_925542-MLA110079837897_042026-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_731306-MLA110079460209_042026-F.webp" },
  { id: 27, title: "Mesa Manicure Em L Com Armário Mesinha", price: "R$ 349,25", category: "Móveis e utilidades", badge: "", link: "https://meli.la/1BFQYWD", image1: "https://http2.mlstatic.com/D_Q_NP_621354-MLA93558213072_102025-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_702260-MLA93558311142_102025-F.webp" },
  { id: 28, title: "Kit Lixa Elétrica De Pé 10 Em 1 Aparelho", price: "R$ 76,53", category: "Equipamentos e Luminárias", badge: "Frete Grátis", link: "https://meli.la/2oeqfmY", image1: "https://http2.mlstatic.com/D_Q_NP_759029-MLA106814479232_022026-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_632657-MLA106814192498_022026-F.webp" },
  { id: 29, title: "Kit Completo Unhas Gel Lixadeira Porquinho + Cabine", price: "R$ 392,64", category: "Equipamentos e Luminárias", badge: "Frete Grátis", link: "https://meli.la/2WnyqLN", image1: "https://http2.mlstatic.com/D_Q_NP_702304-MLA88939389130_082025-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_958238-MLA89295420366_082025-F.webp" },
  { id: 30, title: "6 X Espátula Empurrador Duplex Cutícula Profissional", price: "R$ 110,16", category: "Cutelaria e cortadores", badge: "Frete Grátis", link: "https://meli.la/2p6GqxB", image1: "https://http2.mlstatic.com/D_Q_NP_889703-MLB91276979179_082025-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_903703-MLB90886052684_082025-F.webp" },
  { id: 31, title: "Kit Alicate + Palito + Empurrador Inox 778EP", price: "R$ 51,10", category: "Cutelaria e cortadores", badge: "Frete Grátis", link: "https://meli.la/1mmaY8X", image1: "https://http2.mlstatic.com/D_Q_NP_986027-MLA84557683664_052025-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_688868-MLA84856294991_052025-F.webp" },
  { id: 32, title: "Kit 3 Alicates Inox Cutícula Afiado 777 Profissional", price: "R$ 97,05", category: "Cutelaria e cortadores", badge: "Frete Grátis", link: "https://meli.la/2pwwjdX", image1: "https://http2.mlstatic.com/D_Q_NP_796386-MLB89174207738_082025-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_655131-MLB84423880287_052025-F.webp" },
  { id: 33, title: "Jogo Manicure Com Estojo Aveludado 7 Peças", price: "R$ 256,90", category: "Cutelaria e cortadores", badge: "Frete Grátis", link: "https://meli.la/1TvmuT3", image1: "https://http2.mlstatic.com/D_Q_NP_836802-MLB46180047395_052021-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_639713-MLB46350686984_062021-F.webp" },
  { id: 34, title: "Kit Alicate Cutícula 777 Mundial Profissional C/ 6unid", price: "R$ 161,60", category: "Cutelaria e cortadores", badge: "Frete Grátis", link: "https://meli.la/2VCHTEv", image1: "https://http2.mlstatic.com/D_Q_NP_638886-MLA84850272201_052025-F.webp", image2: "https://http2.mlstatic.com/D_Q_NP_773825-MLA84552079776_052025-F.webp" }
];

const categories = ["Todas as Categorias", "Móveis e utilidades", "Equipamentos e Luminárias", "Esmalte e decoração", "Cuidados e tratamento", "Cutelaria e cortadores"];

export default function Store() {
  const [activeCategory, setActiveCategory] = useState("Todas as Categorias");
  const [cartItems, setCartItems] = useState<any[]>(() => {
    const saved = localStorage.getItem('fabyShopCart');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return [];
      }
    }
    return [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [showCheckoutToast, setShowCheckoutToast] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 16;

  useEffect(() => {
    localStorage.setItem('fabyShopCart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (showCheckoutToast) {
      const timer = setTimeout(() => setShowCheckoutToast(false), 8000);
      return () => clearTimeout(timer);
    }
  }, [showCheckoutToast]);

  const filteredProducts = activeCategory === "Todas as Categorias" 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const addToCart = (product: any) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartTotal = cartItems.reduce((total, item) => {
    const price = parseFloat(item.price.replace('R$ ', '').replace(',', '.'));
    return total + (price * item.quantity);
  }, 0);

  return (
    <div className="pb-24 bg-gray-50 min-h-screen relative">
      <SEO 
        title="Loja Oficial | Faby Cardoso" 
        description="Loja para manicures completa! Encontre materiais para cutilagem, esmaltes, kits iniciais e ferramentas profissionais com desconto especial para a área." 
      />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-primary overflow-hidden">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-gold/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 bg-gold/10 text-gold border border-gold/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              <ShoppingCart className="w-4 h-4" />
              Vitrine de Produtos
            </span>
            <h1 className="text-4xl md:text-[4rem] font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Faby <span className="text-secondary">Shop</span>
            </h1>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium">
              Os melhores produtos, ferramentas e equipamentos selecionados a dedo para você brilhar nos seus atendimentos e encantar suas clientes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Trust Indicators */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-30 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="hidden md:flex gap-8">
            <div className="flex items-center gap-2 text-gray-600"><ShieldCheck className="w-5 h-5 text-green-500" /><span className="font-medium text-sm">Compra Segura</span></div>
            <div className="flex items-center gap-2 text-gray-600"><Truck className="w-5 h-5 text-blue-500" /><span className="font-medium text-sm">Entrega Rápida</span></div>
          </div>
          <button 
            onClick={() => setIsCartOpen(true)}
            className="flex items-center gap-2 bg-secondary text-white px-6 py-2.5 rounded-full font-bold hover:bg-secondary/90 transition-colors ml-auto"
          >
            <ShoppingCart className="w-5 h-5" />
            Meu Carrinho ({cartItems.reduce((acc, item) => acc + item.quantity, 0)})
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setCurrentPage(1);
              }}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-md scale-105'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Warning Disclaimer */}
        <div className="bg-amber-50 border border-amber-200 text-amber-800 px-5 py-4 rounded-2xl flex items-start gap-3 mb-12 max-w-4xl mx-auto shadow-sm">
          <AlertCircle className="w-6 h-6 shrink-0 mt-0.5 text-amber-600" />
          <p className="text-sm leading-relaxed">
            <strong className="font-bold">Aviso Importante:</strong> Os valores e a disponibilidade de frete grátis podem sofrer alterações sem aviso prévio. Como somos parceiros afiliados, sempre confirme o valor final e as condições de entrega diretamente no site do Mercado Livre antes de concluir sua compra.
          </p>
        </div>

        {/* Product Grid */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {currentProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col overflow-hidden"
              >
                <div className="relative aspect-square overflow-hidden bg-gray-100">
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full z-10 shadow-md">
                      {product.badge}
                    </div>
                  )}
                  <img src={product.image2} alt="Detalhe" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                  <img src={product.image1} alt={product.title} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0" referrerPolicy="no-referrer" />
                </div>

                <div className="p-5 flex flex-col flex-grow">
                  <div className="text-xs text-secondary font-bold uppercase tracking-wider mb-2">{product.category}</div>
                  <h3 className="text-base font-bold text-primary line-clamp-2 mb-3 flex-grow">{product.title}</h3>
                  <div className="text-2xl font-extrabold text-primary mb-4">{product.price}</div>
                  
                  <div className="flex gap-2 mt-auto">
                    <button 
                      onClick={() => addToCart(product)}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-primary font-bold py-2.5 rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
                      title="Adicionar ao Carrinho"
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                    <a 
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-[3] bg-primary hover:bg-black text-white font-bold py-2.5 rounded-xl transition-colors text-sm flex items-center justify-center gap-2"
                    >
                      Comprar Agora
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-12">
            <button 
              onClick={() => {
                setCurrentPage(prev => Math.max(prev - 1, 1));
                window.scrollTo({ top: 400, behavior: 'smooth' });
              }}
              disabled={currentPage === 1}
              className="px-6 py-2 rounded-full font-bold transition-all bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Anterior
            </button>
            <span className="text-gray-600 font-medium">
              Página {currentPage} de {totalPages}
            </span>
            <button 
              onClick={() => {
                setCurrentPage(prev => Math.min(prev + 1, totalPages));
                window.scrollTo({ top: 400, behavior: 'smooth' });
              }}
              disabled={currentPage === totalPages}
              className="px-6 py-2 rounded-full font-bold transition-all bg-primary text-white hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Próxima
            </button>
          </div>
        )}
      </div>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-primary text-white">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <ShoppingCart className="w-6 h-6 text-gold" /> Meu Carrinho
                </h2>
                <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {cartItems.length === 0 ? (
                  <div className="text-center text-gray-500 mt-10">
                    <ShoppingCart className="w-16 h-16 mx-auto mb-4 opacity-20" />
                    <p>Seu carrinho está vazio.</p>
                  </div>
                ) : (
                  cartItems.map(item => (
                    <div key={item.id} className="flex gap-4 border-b border-gray-100 pb-6">
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="relative block shrink-0 group">
                        <img src={item.image1} alt={item.title} className="w-20 h-20 object-cover rounded-lg border border-gray-200 transition-opacity group-hover:opacity-80" />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                          <ExternalLink className="w-6 h-6 text-white" />
                        </div>
                      </a>
                      <div className="flex-1">
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors group">
                          <h4 className="text-sm font-bold text-primary line-clamp-2 mb-1 group-hover:underline">{item.title}</h4>
                        </a>
                        <div className="text-secondary font-bold mb-2">{item.price}</div>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3 bg-gray-50 rounded-lg border border-gray-200 px-2 py-1">
                            <button onClick={() => updateQuantity(item.id, -1)} className="text-gray-500 hover:text-primary"><Minus className="w-4 h-4" /></button>
                            <span className="font-bold text-sm w-4 text-center">{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.id, 1)} className="text-gray-500 hover:text-primary"><Plus className="w-4 h-4" /></button>
                          </div>
                          <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600 p-2">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {cartItems.length > 0 && (
                <div className="p-6 border-t border-gray-100 bg-gray-50 relative">
                  <AnimatePresence>
                    {showCheckoutToast && (
                      <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute bottom-[110%] left-4 right-4 bg-white rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] border border-pink-100 p-5 z-50"
                      >
                        <div className="flex items-start gap-3">
                          <div className="bg-pink-100 p-2 rounded-full shrink-0 mt-0.5">
                            <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
                          </div>
                          <div>
                            <h4 className="font-bold text-primary mb-1">Obrigada pelo seu apoio! 💖</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">
                              Como somos parceiros afiliados, a compra é feita com total segurança direto no Mercado Livre. 
                              <strong className="text-primary"> Clique na foto ou nome de cada item</strong> acima para concluir sua compra.
                            </p>
                          </div>
                          <button onClick={() => setShowCheckoutToast(false)} className="text-gray-400 hover:text-gray-600 shrink-0">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        {/* Decorative triangle pointing down */}
                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-pink-100 rotate-45"></div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="bg-amber-50 text-amber-800 p-3 rounded-xl flex items-start gap-2 mb-5 text-xs border border-amber-100">
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-600" />
                    <p>Os valores e frete podem sofrer alterações. Confirme no link final do Mercado Livre.</p>
                  </div>
                  
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-gray-600 font-medium">Total estimado:</span>
                    <span className="text-2xl font-extrabold text-primary">
                      R$ {cartTotal.toFixed(2).replace('.', ',')}
                    </span>
                  </div>
                  <button 
                    onClick={() => setShowCheckoutToast(true)}
                    className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-4 rounded-xl transition-colors text-lg shadow-lg shadow-secondary/30"
                  >
                    Finalizar Compra
                  </button>
                  <p className="text-xs text-center text-gray-500 mt-4">
                    Você será redirecionado para o Mercado Livre para concluir o pagamento com segurança.
                  </p>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

