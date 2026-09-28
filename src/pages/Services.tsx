import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { services, ServiceCategory } from '../config/services';
import { agencyConfig } from '../config/agency';
import { ArrowRight, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const categories: ServiceCategory[] = ['Todos', 'Conteúdo', 'Web', 'Apps', 'Automação', 'Design', 'Áudio'];

export function Services() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (searchParams.get('filter') as ServiceCategory) || 'Todos';
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>(initialCategory);

  const filteredServices = activeCategory === 'Todos' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  const handleCategoryChange = (category: ServiceCategory) => {
    setActiveCategory(category);
    if (category === 'Todos') {
      setSearchParams({});
    } else {
      setSearchParams({ filter: category });
    }
  };

  return (
    <div className="bg-brand-dark min-h-screen pb-24">
      {/* HEADER */}
      <section className="bg-[#111111] text-brand-light pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6">
                TUDO QUE SEU NEGÓCIO PRECISA.<br />
                <span className="text-brand-accent">SEM CONTRATAR CINCO FORNECEDORES.</span>
              </h1>
              <p className="text-lg text-gray-400">
                Marketing, design e tecnologia rápida. Projetos expressos com entrega inicial em até 5 dias úteis.
              </p>
            </div>
            <div className="shrink-0">
              <Link
                to="/simulador"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/15 border border-brand-accent/40 text-brand-light px-6 py-3.5 rounded-2xl font-bold transition-all shadow-lg group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-accent text-[#0a0a0a] flex items-center justify-center font-black group-hover:scale-105 transition-transform">
                  <TrendingUp size={20} />
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-black text-brand-accent uppercase tracking-wider">Novo • Simulador</div>
                  <div className="text-sm font-bold flex items-center gap-1">
                    Calcular ROI do Projeto <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="sticky top-[80px] z-30 bg-brand-dark/90 backdrop-blur-md border-b border-white/30 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex overflow-x-auto hide-scrollbar gap-2 pb-2">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-semibold transition-colors ${
                  activeCategory === category
                    ? 'bg-[#111111] text-brand-light'
                    : 'bg-white/5 text-brand-light hover:bg-white/5'
                }`}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-16 container mx-auto px-4 md:px-6">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredServices.map(service => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={service.id}
                id={`service-card-${service.id}`}
                className="group bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl p-5 flex flex-col hover:border-brand-accent hover:shadow-lg transition-all"
              >
                {/* SERVICE ILLUSTRATION */}
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-black/60 border border-white/15 group-hover:border-brand-accent/60 transition-colors shadow-inner">
                  <img
                    src={service.image}
                    alt={service.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/20 to-transparent"></div>
                  
                  {service.isPopular && (
                    <div className="absolute top-3 right-3 bg-brand-accent shadow-[0_0_15px_rgba(255,215,0,0.4)] text-[#0a0a0a] text-xs font-black px-3 py-1 rounded-full flex items-center gap-1">
                      <Sparkles size={12} /> MAIS BUSCADO
                    </div>
                  )}

                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md text-xs font-bold text-brand-accent px-2.5 py-1 rounded-md border border-brand-accent/30">
                    ⚡ {service.deliveryTime}
                  </div>

                  <div className="absolute bottom-2.5 left-3 bg-[#111111]/90 backdrop-blur-md text-xs font-bold text-brand-light px-2.5 py-1 rounded-md border border-white/15">
                    {service.category.toUpperCase()}
                  </div>
                </div>
                
                <h3 className="text-2xl font-heading font-black mb-2">{service.name}</h3>
                <p className="text-gray-400 text-sm mb-5 min-h-[48px]">{service.description}</p>
                
                <div className="mb-6">
                  <div className="text-3xl font-heading font-black text-brand-light mb-1">R$ {service.price}</div>
                  <div className="text-sm font-medium text-brand-accent">{service.deliveryTime}</div>
                </div>

                <div className="flex-1 mb-8">
                  <div className="font-semibold text-sm mb-3">O que inclui:</div>
                  <ul className="space-y-2">
                    {service.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <CheckCircle2 size={16} className="text-brand-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto flex flex-col gap-3">
                  <Link
                    to={`/orcamento?servico=${service.id}`}
                    className="w-full text-center bg-[#111111] text-brand-light hover:text-[#0a0a0a] py-3 rounded-full font-semibold hover:bg-brand-accent shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:scale-105 transition-colors"
                  >
                    QUERO ESTE SERVIÇO
                  </Link>
                  <a
                    href={`${agencyConfig.whatsappLink}?text=${encodeURIComponent(`Olá! Quero saber mais sobre o serviço: ${service.name} (R$ ${service.price})`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full text-center border border-white text-brand-light py-3 rounded-full font-semibold hover:bg-white/5 transition-colors text-sm"
                  >
                    TIRAR DÚVIDA
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredServices.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            Nenhum serviço encontrado para esta categoria.
          </div>
        )}
      </section>

      {/* CTA SECTION */}
      <section className="container mx-auto px-4 md:px-6 mt-10">
        <div className="bg-brand-accent shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:scale-105 rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-light mb-4">
              NÃO ACHOU O QUE PRECISA?
            </h2>
            <p className="text-brand-light/80 font-medium text-lg">
              Podemos montar uma solução ou pacote específico para o momento do seu negócio.
            </p>
          </div>
          <Link
            to="/orcamento"
            className="bg-[#111111] text-brand-light px-8 py-4 rounded-full font-black text-lg hover:bg-brand-dark hover:text-brand-light transition-colors shrink-0"
          >
            MONTAR PACOTE
          </Link>
        </div>
      </section>
    </div>
  );
}
