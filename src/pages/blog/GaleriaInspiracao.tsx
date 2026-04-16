import React from 'react';
import { motion } from 'motion/react';
import { Heart, Share2, Download } from 'lucide-react';
import { SEO } from '../../components/SEO';

export default function GaleriaInspiracao() {
  const imageUrls = [
    "https://i.imgur.com/aNdvC2p.jpeg",
    "https://i.imgur.com/LwiIsfR.jpeg",
    "https://i.imgur.com/cB5bdDv.jpeg",
    "https://i.imgur.com/h4uZ15h.jpeg",
    "https://i.imgur.com/Ak39iWx.jpeg",
    "https://i.imgur.com/Z3l1kmd.jpeg",
    "https://i.imgur.com/96sP3TV.jpeg",
    "https://i.imgur.com/qhpALWt.jpeg",
    "https://i.imgur.com/B66q4yB.jpeg",
    "https://i.imgur.com/RO9qKJx.jpeg",
    "https://i.imgur.com/FUTOt20.jpeg",
    "https://i.imgur.com/W2cEoXJ.jpeg",
    "https://i.imgur.com/WaMPuUp.jpeg",
    "https://i.imgur.com/dlLqQNs.jpeg",
    "https://i.imgur.com/hkVRYsb.jpeg",
    "https://i.imgur.com/KqbyJGD.jpeg",
    "https://i.imgur.com/MZ84t35.jpeg",
    "https://i.imgur.com/2hAu30Y.jpeg",
    "https://i.imgur.com/pfiTra1.jpeg",
    "https://i.imgur.com/V6BS1IZ.jpeg",
    "https://i.imgur.com/RSGKgNJ.jpeg",
    "https://i.imgur.com/i34MbeW.jpeg",
    "https://i.imgur.com/5Kt6iBR.jpeg",
    "https://i.imgur.com/GucgBKt.jpeg",
    "https://i.imgur.com/H7WddPv.jpeg",
    "https://i.imgur.com/HyfpCHX.jpeg",
    "https://i.imgur.com/v2WpDNb.jpeg",
    "https://i.imgur.com/kxyZN92.jpeg",
    "https://i.imgur.com/MdHZjak.jpeg"
  ];

  const images = imageUrls.map((url, i) => ({
    id: i,
    url,
    title: `Design de Unha #${i + 1}`
  }));

  return (
    <div className="pt-32 pb-24 bg-gray-50">
      <SEO 
        title="Galeria de Inspiração de Unhas | Faby Cardoso" 
        description="Galeria de inspiração para unhas perfeita! Veja mais de 40 fotos de unhas decoradas e cutilagem em nosso catálogo e tenha ideias criativas para suas clientes." 
      />
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Inspiração Diária</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
            Galeria de Inspiração: <span className="text-secondary">Designs Exclusivos</span> para se Apaixonar
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Explore nossa curadoria de unhas decoradas, cutilagens impecáveis e tendências reais feitas por Faby Cardoso.
          </p>
        </motion.div>

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {images.map((image) => (
            <motion.div 
              key={image.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group rounded-3xl overflow-hidden shadow-lg bg-white"
            >
              <img 
                src={image.url} 
                alt={image.title} 
                className="w-full h-auto transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h4 className="text-white font-bold mb-4">{image.title}</h4>
                <div className="flex gap-4">
                  <button className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-secondary transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-secondary transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                  <button className="bg-white/20 backdrop-blur-md p-2 rounded-full text-white hover:bg-secondary transition-colors">
                    <Download className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-primary text-white p-12 rounded-[3rem] text-center">
          <h2 className="text-3xl font-bold mb-6">Quer aprender a fazer unhas assim?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Transforme sua paixão em profissão. Aprenda do zero ao avançado com quem entende do assunto.
          </p>
          <a href="/#cursos" className="inline-block bg-gold text-primary px-10 py-4 rounded-full font-bold uppercase tracking-wider transition-all hover:bg-gold/90 shadow-gold">
            Quero Começar Agora
          </a>
        </div>
      </div>
    </div>
  );
}
