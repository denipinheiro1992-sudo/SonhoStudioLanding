import { Link } from 'react-router-dom';
import { services } from '../config/services';
import { TrendingUp, ArrowRight } from 'lucide-react';

export function Prices() {
  return (
    <div className="bg-brand-dark min-h-screen pb-24">
      {/* HEADER */}
      <section className="bg-[#111111] text-brand-light pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6">
            PREÇOS <span className="text-brand-accent">TRANSPARENTES.</span>
          </h1>
          <p className="text-lg text-gray-400">
            Acreditamos que se o serviço é bom, o preço não precisa ser escondido. Veja os valores iniciais de cada serviço.
          </p>
        </div>
      </section>

      {/* TABLE */}
      <section className="py-16 container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-white/5">
                <th className="p-4 border-b border-white/30 font-heading font-black text-brand-light">Serviço</th>
                <th className="p-4 border-b border-white/30 font-heading font-black text-brand-light">Prazo (1ª Entrega)</th>
                <th className="p-4 border-b border-white/30 font-heading font-black text-brand-light">Entregáveis (Resumo)</th>
                <th className="p-4 border-b border-white/30 font-heading font-black text-brand-light">A Partir De</th>
                <th className="p-4 border-b border-white/30 font-heading font-black text-brand-light"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 bg-white/5 backdrop-blur-sm border border-white/10">
              {services.map((service) => (
                <tr key={service.id} className="hover:bg-white/5 transition-colors group">
                  <td className="p-4 font-semibold text-brand-light">
                    {service.name}
                    <div className="text-xs text-gray-400 font-medium lg:hidden mt-1">{service.category}</div>
                  </td>
                  <td className="p-4 text-sm text-gray-400">{service.deliveryTime}</td>
                  <td className="p-4 text-sm text-gray-400 max-w-[200px] truncate">{service.includes.join(', ')}</td>
                  <td className="p-4 font-black text-lg text-brand-light">R$ {service.price}</td>
                  <td className="p-4 text-right">
                    <Link
                      to={`/orcamento?servico=${service.id}`}
                      className="inline-block bg-[#111111] text-brand-light px-4 py-2 rounded text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100"
                    >
                      PEDIR
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="max-w-5xl mx-auto mt-6 text-sm text-gray-400 text-right">
          * Valores podem variar de acordo com integrações complexas ou produção extensa de conteúdo.
        </div>
      </section>
      
      {/* CTAS */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Simulator Card */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 border border-brand-accent/40 rounded-2xl p-8 md:p-10 flex flex-col justify-between shadow-xl">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-accent/20 text-brand-accent text-xs font-black px-3 py-1 rounded-full mb-4 border border-brand-accent/30">
                <TrendingUp size={14} /> FERRAMENTA INTERATIVA
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-black mb-3">Estime o Retorno (ROI)</h2>
              <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed">
                Quer saber quanto suas vendas aumentam e em quanto tempo o projeto se paga? Use nossa calculadora gratuita e descubra agora.
              </p>
            </div>
            <Link
              to="/simulador"
              className="inline-flex items-center justify-center gap-2 bg-brand-accent text-[#0a0a0a] px-6 py-3.5 rounded-full font-black text-base hover:bg-brand-accent-hover shadow-[0_0_20px_rgba(255,215,0,0.3)] transition-all"
            >
              SIMULAR RETORNO EM 30S <ArrowRight size={16} />
            </Link>
          </div>

          {/* Packages Card */}
          <div className="bg-white/5 border border-white/20 rounded-2xl p-8 md:p-10 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 text-gray-300 text-xs font-black px-3 py-1 rounded-full mb-4">
                COMBOS COM DESCONTO
              </div>
              <h2 className="text-2xl md:text-3xl font-heading font-black mb-3">Pacotes Completos</h2>
              <p className="text-gray-400 text-sm md:text-base mb-6 leading-relaxed">
                Combinações estratégicas com desconto especial para você colocar todo o digital do seu negócio no ar de uma vez.
              </p>
            </div>
            <Link
              to="/pacotes"
              className="inline-flex items-center justify-center gap-2 bg-[#111111] border border-white/30 text-brand-light px-6 py-3.5 rounded-full font-bold text-base hover:bg-white/10 transition-colors"
            >
              VER PACOTES <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
