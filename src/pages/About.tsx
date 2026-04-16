import React from 'react';
import { motion } from 'motion/react';
import { Star, Award, Users, Heart } from 'lucide-react';
import { SEO } from '../components/SEO';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <SEO 
        title="Quem é Faby Cardoso?" 
        description="Faby Cardoso é a Maior Instrutora de Manicures do Brasil. Conheça a trajetória da especialista em cutilagem, esmaltação e mude de vida com seu método único!" 
      />
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://i.imgur.com/792vr2U.jpeg" 
                alt="Faby Cardoso" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-full h-full bg-secondary/10 rounded-[2.5rem] -z-10"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">A Instrutora</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-8 leading-tight">
              Quem é <span className="text-secondary">Faby Cardoso?</span>
            </h1>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Faby Cardoso é uma das maiores referências em manicure e pedicure no Brasil. Com anos de experiência prática e milhares de alunas formadas, ela desenvolveu um método único focado em resultados reais.
              </p>
              <p>
                Sua jornada começou como a de muitas outras profissionais: com o desejo de conquistar independência financeira e oferecer o melhor para sua família através da arte das unhas.
              </p>
              <p>
                Hoje, Faby dedica sua vida a ensinar não apenas a técnica, mas como transformar a profissão de manicure em um negócio lucrativo e respeitado.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-12">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <Users className="text-secondary w-8 h-8 mb-4" />
                <div className="text-2xl font-bold text-primary">+100k</div>
                <div className="text-sm text-gray-500">Alunas Formadas</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <Star className="text-gold w-8 h-8 mb-4" />
                <div className="text-2xl font-bold text-primary">9 anos</div>
                <div className="text-sm text-gray-500">De Experiência</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-primary">Nossos Valores</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8 text-secondary" />,
                title: "Paixão pelo Ensino",
                description: "Acreditamos que o conhecimento transforma vidas e nos dedicamos a entregar o melhor conteúdo sempre."
              },
              {
                icon: <Award className="w-8 h-8 text-secondary" />,
                title: "Excelência Técnica",
                description: "Não aceitamos menos que a perfeição em cada detalhe da cutilagem e esmaltação."
              },
              {
                icon: <Star className="w-8 h-8 text-secondary" />,
                title: "Sucesso das Alunas",
                description: "O nosso maior prêmio é ver nossas alunas conquistando sua independência e lotando suas agendas."
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center"
              >
                <div className="flex justify-center mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-primary mb-4">{value.title}</h3>
                <p className="text-gray-500">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
