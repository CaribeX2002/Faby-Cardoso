import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Play, FileText, Gift } from 'lucide-react';

export default function Courses() {
  const modules = [
    {
      title: "Módulo 1: Fundamentos e Biossegurança",
      items: ["Apresentação dos materiais", "Esterilização correta", "Anatomia da unha", "Doenças das unhas"]
    },
    {
      title: "Módulo 2: Cutilagem Perfeita",
      items: ["Técnica de corte contínuo", "Cutilagem funda sem bife", "Cutilagem em pés", "Remoção de cutículas grossas"]
    },
    {
      title: "Módulo 3: Esmaltação e Finalização",
      items: ["Esmaltação sem manchas", "Francesinha perfeita", "Aplicação de adesivos", "Secagem rápida"]
    },
    {
      title: "Módulo 4: Especializações",
      items: ["Alongamento em Gel", "Fibra de Vidro", "Blindagem de unhas", "Banho de cristal"]
    }
  ];

  return (
    <div className="pt-32 pb-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">O que você vai aprender</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
            Conteúdo Detalhado dos <span className="text-secondary">Cursos</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Nossa grade curricular foi desenhada para levar você do absoluto zero ao nível profissional em tempo recorde.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {modules.map((module, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100"
            >
              <h3 className="text-xl font-bold text-primary mb-6 flex items-center gap-3">
                <Play className="text-secondary w-5 h-5" />
                {module.title}
              </h3>
              <ul className="space-y-4">
                {module.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <CheckCircle2 className="text-secondary w-4 h-4 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="bg-primary rounded-[3rem] p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-10">
            <Gift className="w-32 h-32" />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-8 text-gold">Materiais Complementares Inclusos</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <FileText className="text-gold w-8 h-8 shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">9 Apostilas em PDF</h4>
                  <p className="text-gray-400 text-sm">Material didático completo para consulta offline a qualquer momento.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Gift className="text-gold w-8 h-8 shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">Aulas Bônus</h4>
                  <p className="text-gray-400 text-sm">Conteúdos extras sobre marketing, fotos e gestão de clientes.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-gold w-8 h-8 shrink-0" />
                <div>
                  <h4 className="font-bold mb-2">Certificado Digital</h4>
                  <p className="text-gray-400 text-sm">Certificado válido em todo Brasil liberado após a conclusão.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
