import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'react-router-dom';
import { agencyConfig } from '../config/agency';
import { services } from '../config/services';
import { packages } from '../config/packages';
import { CheckCircle2 } from 'lucide-react';

type FormData = {
  nome: string;
  whatsapp: string;
  empresa: string;
  segmento: string;
  cidade: string;
  servicoDesejado: string;
  investimento: string;
  mensagem: string;
};

export function Budget() {
  const [searchParams] = useSearchParams();
  const servicoId = searchParams.get('servico');
  const pacoteId = searchParams.get('pacote');
  const planoId = searchParams.get('plano');
  
  const [submitted, setSubmitted] = useState(false);

  let initialService = '';
  if (servicoId) {
    const s = services.find(s => s.id === servicoId);
    if (s) initialService = `Serviço: ${s.name}`;
  } else if (pacoteId) {
    const p = packages.find(p => p.id === pacoteId);
    if (p) initialService = `Pacote: ${p.name}`;
  } else if (planoId) {
    initialService = `Plano Mensal`;
  }

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      servicoDesejado: initialService
    }
  });

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-brand-dark min-h-screen pt-32 pb-24 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <div className="w-20 h-20 bg-brand-accent shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:scale-105/10 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle2 size={40} className="text-brand-accent" />
          </div>
          <h1 className="text-4xl md:text-5xl font-heading font-black mb-6 text-brand-light">RECEBEMOS SEU PROJETO.</h1>
          <p className="text-lg text-gray-400 mb-10">
            Agora já sabemos por onde começar. Nossa equipe entrará em contato em breve pelo WhatsApp fornecido.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={agencyConfig.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="bg-[#111111] text-brand-light hover:text-[#0a0a0a] px-8 py-4 rounded-full font-black text-lg hover:bg-brand-accent shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:scale-105 transition-colors"
            >
              FALAR NO WHATSAPP
            </a>
            <a
              href="/servicos"
              className="bg-transparent border border-white text-brand-light px-8 py-4 rounded-full font-black text-lg hover:bg-white/5 transition-colors"
            >
              VOLTAR AOS SERVIÇOS
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-brand-dark min-h-screen pb-24">
      <section className="bg-[#111111] text-brand-light pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6">
              VAMOS TIRAR SUA IDEIA <span className="text-brand-accent">DO PAPEL.</span>
            </h1>
            <p className="text-lg text-gray-400">
              Preencha o formulário abaixo para recebermos as informações iniciais e começarmos a desenhar seu projeto.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-2xl border border-white/30 shadow-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-brand-light mb-2">Nome Completo *</label>
                <input 
                  {...register("nome", { required: true })} 
                  className="w-full bg-white/5 border border-white/30 rounded-full px-4 py-3 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors" 
                  placeholder="Seu nome"
                />
                {errors.nome && <span className="text-red-500 text-xs mt-1">Campo obrigatório</span>}
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-brand-light mb-2">WhatsApp *</label>
                <input 
                  {...register("whatsapp", { required: true })} 
                  className="w-full bg-white/5 border border-white/30 rounded-full px-4 py-3 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors" 
                  placeholder="(00) 00000-0000"
                />
                {errors.whatsapp && <span className="text-red-500 text-xs mt-1">Campo obrigatório</span>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-light mb-2">Empresa / Negócio</label>
                <input 
                  {...register("empresa")} 
                  className="w-full bg-white/5 border border-white/30 rounded-full px-4 py-3 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors" 
                  placeholder="Nome do seu negócio"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-light mb-2">Segmento</label>
                <select 
                  {...register("segmento")} 
                  className="w-full bg-white/5 border border-white/30 rounded-full px-4 py-3 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors appearance-none"
                >
                  <option value="">Selecione...</option>
                  <option value="Restaurante/Food">Restaurante / Delivery</option>
                  <option value="Saude/BemEstar">Saúde / Bem-Estar / Clínica</option>
                  <option value="Comercio/Varejo">Comércio / Loja</option>
                  <option value="Servicos">Prestador de Serviços</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-light mb-2">Cidade/Estado</label>
                <input 
                  {...register("cidade")} 
                  className="w-full bg-white/5 border border-white/30 rounded-full px-4 py-3 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors" 
                  placeholder="Ex: São Paulo - SP"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-brand-light mb-2">Investimento Previsto *</label>
                <select 
                  {...register("investimento", { required: true })} 
                  className="w-full bg-white/5 border border-white/30 rounded-full px-4 py-3 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors appearance-none"
                >
                  <option value="">Selecione a faixa...</option>
                  <option value="Ate 500">Até R$ 500</option>
                  <option value="500 a 1500">R$ 500 – 1.500</option>
                  <option value="1500 a 3000">R$ 1.500 – 3.000</option>
                  <option value="3000 a 5000">R$ 3.000 – 5.000</option>
                  <option value="Mais de 5000">Mais de R$ 5.000</option>
                </select>
                {errors.investimento && <span className="text-red-500 text-xs mt-1">Campo obrigatório</span>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-brand-light mb-2">Serviço/Pacote de Interesse</label>
              <input 
                {...register("servicoDesejado")} 
                className="w-full bg-white/5 border border-white/30 rounded-full px-4 py-3 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors" 
                placeholder="Ex: Landing Page, Pacote Presença Local, etc."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-brand-light mb-2">Conte mais sobre o que precisa</label>
              <textarea 
                {...register("mensagem")} 
                rows={4}
                className="w-full bg-white/5 border border-white/30 rounded-full px-4 py-3 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent transition-colors resize-none" 
                placeholder="Qual o principal objetivo do projeto?"
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-[#111111] text-brand-light hover:text-[#0a0a0a] py-4 rounded-full font-black text-lg hover:bg-brand-accent shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:scale-105 transition-colors mt-4"
            >
              RECEBER PROPOSTA
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
