import { Link } from 'react-router-dom';
import { packages, recurringPlans } from '../config/packages';
import { CheckCircle2 } from 'lucide-react';

export function Packages() {
  return (
    <div className="bg-brand-dark min-h-screen pb-24">
      {/* HEADER */}
      <section className="bg-[#111111] text-brand-light pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6">
            PACOTES <span className="text-brand-accent">INTELIGENTES.</span>
          </h1>
          <p className="text-lg text-gray-400">
            Combinações de serviços pensadas para resolver problemas reais de pequenos negócios.
          </p>
        </div>
      </section>

      {/* ONE OFF PACKAGES */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="group bg-white/5 backdrop-blur-sm border border-white/20 p-6 md:p-8 rounded-2xl flex flex-col hover:border-brand-accent hover:shadow-xl transition-all relative">
              {pkg.badge && (
                <div className="absolute -top-3 left-8 bg-[#111111] text-brand-light text-xs font-black px-4 py-1.5 rounded-full border border-white/10 z-10">
                  {pkg.badge}
                </div>
              )}

              {/* Package Illustration */}
              <div className="w-full aspect-[16/9] rounded-xl overflow-hidden mb-6 bg-black/40 border border-white/10 relative">
                <img
                  src={pkg.image}
                  alt={pkg.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                <div>
                  <h3 className="text-3xl font-heading font-black mb-2">{pkg.name}</h3>
                  <p className="text-gray-400 text-base max-w-sm">{pkg.description}</p>
                </div>
                <div className="shrink-0 bg-white/5 p-4 rounded-xl text-center md:text-right border border-white/20">
                  <div className="text-sm font-medium text-gray-400 mb-1">Pacote completo</div>
                  <div className="text-4xl font-black font-heading text-brand-light mb-1">R$ {pkg.price}</div>
                  <div className="text-sm text-brand-accent font-medium">{pkg.deliveryTime}</div>
                </div>
              </div>

              <div className="mb-10 bg-brand-dark p-6 rounded-xl border border-white/20">
                <div className="font-semibold text-brand-light mb-4">O pacote inclui:</div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pkg.includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400 font-medium">
                      <CheckCircle2 size={20} className="text-brand-accent shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto">
                <Link
                  to={`/orcamento?pacote=${pkg.id}`}
                  className="w-full inline-block text-center bg-[#111111] text-brand-light hover:text-[#0a0a0a] py-4 rounded-full font-black text-lg hover:bg-brand-accent shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:scale-105 transition-colors"
                >
                  QUERO ESTE PACOTE
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* RECURRING PLAN */}
      <section className="py-24 bg-[#111111] text-brand-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-black mb-4">RECORRÊNCIA MENSAL</h2>
            <p className="text-gray-400">Para negócios que precisam de criação constante.</p>
          </div>
          
          <div className="max-w-3xl mx-auto bg-[#111111] border border-white/10 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:scale-105/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            {recurringPlans.map(plan => (
              <div key={plan.id} className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1">
                  <h3 className="text-3xl font-heading font-black mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-8">{plan.description}</p>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="text-brand-accent shrink-0" />
                        <span className="font-medium text-brand-light/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-gray-400 italic">{plan.note}</p>
                </div>
                
                <div className="w-full md:w-auto shrink-0 flex flex-col items-center">
                  <div className="text-gray-400 font-medium mb-2">Investimento</div>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-5xl font-heading font-black text-brand-light">R$ {plan.price}</span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                  <div className="text-sm text-brand-accent font-medium mb-8 text-center">{plan.deliveryTime}</div>
                  
                  <Link
                    to={`/orcamento?plano=${plan.id}`}
                    className="w-full bg-brand-accent shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:scale-105 hover:bg-brand-accent-hover text-[#0a0a0a] py-4 px-8 rounded-full font-black text-center transition-colors"
                  >
                    ASSINAR PLANO
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
