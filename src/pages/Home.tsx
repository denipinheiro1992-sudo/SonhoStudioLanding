import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Globe, ShieldCheck, CheckCircle2, ChevronDown, Star, Quote, Sparkles, TrendingUp, Monitor, Disc3 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { packages } from '../config/packages';
import { agencyConfig } from '../config/agency';
import { serviceImages } from '../config/images';
import fotoInstrutor from '../assets/images/foto-instrutor-1.jpeg';
import fotoVinicius from '../assets/images/foto-instrutor-2.jpeg';

export function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const testimonials = [
    {
      name: "Carlos Eduardo",
      role: "Proprietário, Pizzaria Bella Napoli",
      comment: "O cardápio digital e os Reels entregues pela Sonho Studio mudaram nosso volume de pedidos no delivery em poucas semanas. Atendimento rápido e sem burocracia!",
      rating: 5,
      emoji: "🍕"
    },
    {
      name: "Dra. Juliana Mendes",
      role: "Fisioterapeuta e Clínica JM",
      comment: "Minha landing page e o sistema de agendamento ficaram prontos em tempo recorde. Meus pacientes elogiam a facilidade para marcar horários.",
      rating: 5,
      emoji: "✨"
    },
    {
      name: "Marcos Vinicius",
      role: "Gerente, Loja Veste Bem",
      comment: "Contratei o Social Pack e vídeos curtos. Finalmente nossa presença digital tem a cara de uma empresa profissional e organizada. Recomendo muito!",
      rating: 5,
      emoji: "🚀"
    }
  ];

  const faqs = [
    {
      question: "⏱️ Como funciona o prazo de entrega express?",
      answer: "Nossos projetos são entregues entre 2 a 5 dias úteis, dependendo da complexidade. Trabalhamos com escopos objetivos e diretos para garantir agilidade sem perder qualidade."
    },
    {
      question: "💳 Como é realizado o pagamento?",
      answer: "Trabalhamos com condições facilitadas: sinal de 50% no início do projeto e os 50% restantes apenas na entrega final e aprovação. Aceitamos PIX, transferência e cartão."
    },
    {
      question: "🇧🇷 Vocês atendem clientes fora da minha cidade?",
      answer: "Sim! 100% do nosso atendimento é digital e remoto, permitindo atender com excelência pequenos negócios e empreendedores em todo o Brasil."
    },
    {
      question: "🎨 Preciso ter logotipo ou identidade visual pronta?",
      answer: "Não obrigatoriamente. Podemos trabalhar com o que você já tem ou criar adaptações e elementos visuais profissionais para elevar o nível da sua marca desde o primeiro dia."
    },
    {
      question: "🔄 E se eu precisar de ajustes na entrega?",
      answer: "Todos os nossos serviços e pacotes incluem revisões estipuladas para garantir que o resultado final fique exatamente como você idealizou para o seu negócio."
    }
  ];

  return (
    <div id="home-page-container" className="flex flex-col">
      {/* HERO SECTION */}
      <section id="hero-section" className="relative pt-20 pb-20 lg:pt-32 lg:pb-32 overflow-hidden bg-brand-dark min-h-[640px] flex items-center">
        {/* Fundo de imagens/ilustrações ocupando toda a extensão da seção Hero */}
        <div
          id="hero-services-bg-backdrop"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none"
        >
          {/* Grade/Mosaico abrangente preenchendo toda a seção */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 w-full h-full opacity-60 md:opacity-65 transform -rotate-1 scale-105 filter saturate-125 contrast-105">
            <div className="space-y-3 sm:space-y-4">
              <img src={serviceImages.landingPageMacbook} alt="" className="w-full h-44 sm:h-52 object-cover rounded-2xl border border-white/10 shadow-xl" />
              <img src={serviceImages.cardapioDigitalBurger} alt="" className="w-full h-48 sm:h-56 object-cover rounded-2xl border border-white/10 shadow-xl" />
              <img src={serviceImages.arteBannerSocial} alt="" className="w-full h-40 sm:h-48 object-cover rounded-2xl border border-white/10 shadow-xl" />
            </div>
            <div className="space-y-3 sm:space-y-4 -mt-8">
              <img src={serviceImages.socialPackGrid} alt="" className="w-full h-48 sm:h-56 object-cover rounded-2xl border border-white/10 shadow-xl" />
              <img src={serviceImages.reelsShortsApp} alt="" className="w-full h-48 sm:h-56 object-cover rounded-2xl border border-white/10 shadow-xl" />
              <img src={serviceImages.fotosIaTratamento} alt="" className="w-full h-44 sm:h-52 object-cover rounded-2xl border border-white/10 shadow-xl" />
            </div>
            <div className="space-y-3 sm:space-y-4">
              <img src={serviceImages.atendimentoWhatsappIa} alt="" className="w-full h-44 sm:h-52 object-cover rounded-2xl border border-white/10 shadow-xl" />
              <img src={serviceImages.catalogoDigitalVinhos} alt="" className="w-full h-48 sm:h-56 object-cover rounded-2xl border border-white/10 shadow-xl" />
              <img src={serviceImages.deliveryCozinhaPedidos} alt="" className="w-full h-40 sm:h-48 object-cover rounded-2xl border border-white/10 shadow-xl" />
            </div>
            <div className="hidden sm:block space-y-3 sm:space-y-4 -mt-6">
              <img src={serviceImages.gestaoPedidosMercado} alt="" className="w-full h-48 sm:h-56 object-cover rounded-2xl border border-white/10 shadow-xl" />
              <img src={serviceImages.identidadeVisualBranding} alt="" className="w-full h-44 sm:h-52 object-cover rounded-2xl border border-white/10 shadow-xl" />
              <img src={serviceImages.agendamentoClinicaApp} alt="" className="w-full h-48 sm:h-56 object-cover rounded-2xl border border-white/10 shadow-xl" />
            </div>
            <div className="hidden lg:block space-y-3 sm:space-y-4">
              <img src={serviceImages.equipeSonhoStudio} alt="" className="w-full h-48 sm:h-56 object-cover rounded-2xl border border-white/10 shadow-xl" />
              <img src={serviceImages.estudioAudioJingle} alt="" className="w-full h-44 sm:h-52 object-cover rounded-2xl border border-white/10 shadow-xl" />
              <img src={serviceImages.landingPageMacbook} alt="" className="w-full h-48 sm:h-56 object-cover rounded-2xl border border-white/10 shadow-xl" />
            </div>
          </div>

          {/* Gradientes para garantir contraste impecável e transição suave */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/60"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-transparent to-brand-dark"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl"
            >
              <div className="inline-block border border-brand-accent/30 px-4 py-1.5 rounded-full text-xs font-black tracking-widest mb-6 bg-brand-accent/10 text-brand-accent">
                MARKETING + DESIGN + TECNOLOGIA
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black leading-[1.1] mb-6 text-brand-light uppercase tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]">
                SEU NEGÓCIO<br />
                MERECE PARECER<br />
                <span className="text-brand-accent inline-block">MAIOR.</span>
              </h1>
              <p className="text-lg md:text-2xl text-white mb-10 max-w-xl leading-relaxed text-pretty font-medium drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                Criamos sites, vídeos, conteúdo, aplicativos, chatbots e automações para pequenos negócios venderem mais e parecerem profissionais no digital.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <Link
                  id="hero-cta-orcamento"
                  to="/orcamento"
                  className="bg-brand-accent shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:scale-105 hover:bg-brand-accent-hover text-[#0a0a0a] px-8 py-4 rounded-full font-semibold flex justify-center items-center gap-2 transition-all text-lg"
                >
                  COMEÇAR MEU PROJETO
                  <ArrowRight size={20} />
                </Link>
                <Link
                  id="hero-cta-simulador"
                  to="/simulador"
                  className="bg-white/10 hover:bg-white/15 border border-brand-accent/40 text-brand-light px-8 py-4 rounded-full font-semibold flex justify-center items-center gap-2 transition-all text-lg group"
                >
                  <TrendingUp size={18} className="text-brand-accent group-hover:scale-110 transition-transform" />
                  SIMULADOR DE ROI
                </Link>
                <Link
                  id="hero-cta-precos"
                  to="/precos"
                  className="bg-transparent border border-white text-brand-light hover:bg-[#111111] hover:text-[#0a0a0a] px-6 py-4 rounded-full font-semibold flex justify-center items-center transition-colors text-base"
                >
                  VER PREÇOS
                </Link>
              </div>

              <div className="flex items-center gap-4 text-sm font-medium text-gray-400 mb-8">
                <div className="flex items-center gap-1.5"><Globe size={16} /> Projetos online</div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                <div className="flex items-center gap-1.5"><ShieldCheck size={16} /> Atendimento Brasil</div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/10"></div>
                <div className="flex items-center gap-1.5"><Clock size={16} /> Entregas a partir de 2 dias</div>
              </div>

              {/* Opções Rápidas da Hero */}
              <div className="pt-2 border-t border-white/10">
                <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Opções Populares em Destaque:</p>
                <div className="flex flex-wrap gap-2">
                  <Link to="/servicos?cat=Web" className="bg-white/5 hover:bg-brand-accent hover:text-[#0a0a0a] text-brand-light text-xs font-bold px-4 py-2 rounded-full border border-white/10 transition-colors">
                    🌐 Websites & Landing Pages
                  </Link>
                  <Link to="/servicos?cat=Apps" className="bg-white/5 hover:bg-brand-accent hover:text-[#0a0a0a] text-brand-light text-xs font-bold px-4 py-2 rounded-full border border-white/10 transition-colors">
                    📱 Apps & Delivery
                  </Link>
                  <Link to="/servicos?cat=Conteúdo" className="bg-white/5 hover:bg-brand-accent hover:text-[#0a0a0a] text-brand-light text-xs font-bold px-4 py-2 rounded-full border border-white/10 transition-colors">
                    🎬 Vídeos & Reels
                  </Link>
                  <Link to="/servicos?cat=Automação" className="bg-white/5 hover:bg-brand-accent hover:text-[#0a0a0a] text-brand-light text-xs font-bold px-4 py-2 rounded-full border border-white/10 transition-colors">
                    🤖 Automação & IA
                  </Link>
                  <Link to="/servicos?cat=Design" className="bg-white/5 hover:bg-brand-accent hover:text-[#0a0a0a] text-brand-light text-xs font-bold px-4 py-2 rounded-full border border-white/10 transition-colors">
                    🎨 Social Packs
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OPÇÕES PRINCIPAIS ABAIXO DA HERO (CARROSSEL COM SCROLL LENTO PARA A DIREITA) */}
      <section id="explore-shortcuts" className="py-20 bg-[#0e0e0e] border-y border-white/10 relative overflow-hidden">
        {/* Estilo para animação de scroll contínuo para a direita com pausa no hover */}
        <style>{`
          @keyframes marqueeRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          .animate-marquee-right {
            display: flex;
            width: max-content;
            animation: marqueeRight 42s linear infinite;
          }
          .animate-marquee-right:hover {
            animation-play-state: paused;
          }
        `}</style>

        <div className="container mx-auto px-4 md:px-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-4"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest text-brand-accent bg-brand-accent/10 border border-brand-accent/30 mb-3">
                <Sparkles size={14} /> EXPLORE O SITE
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-light uppercase tracking-tight">
                ESCOLHA UMA OPÇÃO PARA COMEÇAR
              </h2>
            </div>
            <p className="text-sm font-medium text-gray-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-ping" />
              Passe o mouse sobre qualquer card para pausar o carrossel
            </p>
          </motion.div>
        </div>

        {/* Esteira contínua scrolando suavemente para a direita com gradientes laterais */}
        <div className="relative w-full overflow-hidden">
          {/* Sombras laterais para transição suave */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#0e0e0e] to-transparent z-20" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#0e0e0e] to-transparent z-20" />

          {/* Faixa de Cards com Animação para a Direita */}
          <div className="animate-marquee-right flex gap-5 py-3">
            {[
              {
                to: "/servicos",
                icon: "🛠️",
                badge: "Soluções Digitais",
                title: "SERVIÇOS",
                desc: "Sites de alta performance, Landing Pages, Apps, Vídeos & Automações inteligentes sob medida.",
                image: serviceImages.servicosOpcoesIlustracao,
                btnText: "Ver Serviços",
              },
              {
                to: "/precos",
                icon: "🏷️",
                badge: "Valores Transparentes",
                title: "PREÇOS",
                desc: "Tabela clara e justa a partir de R$ 350 com entregas rápidas e sem custos ocultos.",
                image: serviceImages.precosPlanosIlustracao,
                btnText: "Consultar Tabela",
              },
              {
                to: "/pacotes",
                icon: "📦",
                badge: "Combos All-in-One",
                title: "PACOTES",
                desc: "Combos de marketing, presença social e ferramentas digitais para alavancar seu negócio.",
                image: serviceImages.pacotesComboIlustracao,
                btnText: "Conhecer Pacotes",
              },
              {
                to: "/portfolio",
                icon: "⭐",
                badge: "Cases & Resultados",
                title: "PORTFÓLIO",
                desc: "Confira cases práticos, produções visuais e projetos digitais que convertem clientes.",
                image: serviceImages.identidadeVisualBranding,
                btnText: "Ver Portfólio",
              },
              {
                to: "#about-section",
                icon: "💡",
                badge: "Estúdio & Equipe",
                title: "SOBRE NÓS",
                desc: "Conheça nossa estrutura criativa com ilhas 4K, estúdio acústico e fundadores especialistas.",
                image: serviceImages.equipeSonhoStudio,
                btnText: "Conhecer Estúdio",
              },
              {
                to: "/simulador",
                icon: "📈",
                badge: "Previsão Financeira",
                title: "SIMULADOR ROI",
                desc: "Simule a projeção do retorno sobre seu investimento e o impacto nas vendas do seu negócio.",
                image: serviceImages.gestaoPedidosMercado,
                btnText: "Simular Retorno",
              },
              {
                to: "/orcamento",
                icon: "🚀",
                badge: "Proposta Express 24h",
                title: "ORÇAMENTO",
                desc: "Inicie seu projeto agora e receba um orçamento personalizado em menos de 24 horas.",
                image: serviceImages.atendimentoWhatsappIa,
                btnText: "Pedir Orçamento",
                isAccent: true,
              },
            ].concat([
              {
                to: "/servicos",
                icon: "🛠️",
                badge: "Soluções Digitais",
                title: "SERVIÇOS",
                desc: "Sites de alta performance, Landing Pages, Apps, Vídeos & Automações inteligentes sob medida.",
                image: serviceImages.servicosOpcoesIlustracao,
                btnText: "Ver Serviços",
              },
              {
                to: "/precos",
                icon: "🏷️",
                badge: "Valores Transparentes",
                title: "PREÇOS",
                desc: "Tabela clara e justa a partir de R$ 350 com entregas rápidas e sem custos ocultos.",
                image: serviceImages.precosPlanosIlustracao,
                btnText: "Consultar Tabela",
              },
              {
                to: "/pacotes",
                icon: "📦",
                badge: "Combos All-in-One",
                title: "PACOTES",
                desc: "Combos de marketing, presença social e ferramentas digitais para alavancar seu negócio.",
                image: serviceImages.pacotesComboIlustracao,
                btnText: "Conhecer Pacotes",
              },
              {
                to: "/portfolio",
                icon: "⭐",
                badge: "Cases & Resultados",
                title: "PORTFÓLIO",
                desc: "Confira cases práticos, produções visuais e projetos digitais que convertem clientes.",
                image: serviceImages.identidadeVisualBranding,
                btnText: "Ver Portfólio",
              },
              {
                to: "#about-section",
                icon: "💡",
                badge: "Estúdio & Equipe",
                title: "SOBRE NÓS",
                desc: "Conheça nossa estrutura criativa com ilhas 4K, estúdio acústico e fundadores especialistas.",
                image: serviceImages.equipeSonhoStudio,
                btnText: "Conhecer Estúdio",
              },
              {
                to: "/simulador",
                icon: "📈",
                badge: "Previsão Financeira",
                title: "SIMULADOR ROI",
                desc: "Simule a projeção do retorno sobre seu investimento e o impacto nas vendas do seu negócio.",
                image: serviceImages.gestaoPedidosMercado,
                btnText: "Simular Retorno",
              },
              {
                to: "/orcamento",
                icon: "🚀",
                badge: "Proposta Express 24h",
                title: "ORÇAMENTO",
                desc: "Inicie seu projeto agora e receba um orçamento personalizado em menos de 24 horas.",
                image: serviceImages.atendimentoWhatsappIa,
                btnText: "Pedir Orçamento",
                isAccent: true,
              },
            ]).map((item, idx) => {
              const CardContent = (
                <div className="relative w-[300px] sm:w-[330px] h-[370px] rounded-2xl overflow-hidden border border-white/15 hover:border-brand-accent bg-[#151515] p-6 flex flex-col justify-between transition-all duration-500 group shadow-xl hover:shadow-[0_0_30px_rgba(255,215,0,0.35)] hover:-translate-y-1 select-none">
                  {/* Imagem ilustrativa de fundo fiel à opção */}
                  <img
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-65 group-hover:opacity-85 filter saturate-115 contrast-105"
                  />
                  
                  {/* Gradiente escuro para contraste impecável */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/75 to-black/25" />

                  {/* Linha de brilho amarela superior no hover */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Topo do Card: Badge de Categoria */}
                  <div className="relative z-10">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-black tracking-wider uppercase bg-black/70 border border-brand-accent/50 text-brand-accent backdrop-blur-md shadow-[0_0_12px_rgba(255,215,0,0.25)]">
                      <span>{item.icon}</span>
                      <span>{item.badge}</span>
                    </span>
                  </div>

                  {/* Base do Card: Título, Descrição e Botão com Sombra Amarela */}
                  <div className="relative z-10">
                    <h3 className="text-xl font-heading font-black text-white group-hover:text-brand-accent transition-colors tracking-tight uppercase mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed line-clamp-2 mb-5">
                      {item.desc}
                    </p>

                    {/* Botão com Sombra Amarela marcante */}
                    <div className="w-full py-3 px-4 rounded-xl bg-brand-accent text-[#0a0a0a] font-heading font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,215,0,0.45)] group-hover:shadow-[0_0_32px_rgba(255,215,0,0.85)] group-hover:bg-brand-accent-hover transition-all duration-300 border border-brand-accent">
                      <span>{item.btnText}</span>
                      <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </div>
              );

              return item.to.startsWith('#') ? (
                <a
                  key={`${item.title}-${idx}`}
                  href={item.to}
                  className="block shrink-0 focus:outline-none"
                >
                  {CardContent}
                </a>
              ) : (
                <Link
                  key={`${item.title}-${idx}`}
                  to={item.to}
                  className="block shrink-0 focus:outline-none"
                >
                  {CardContent}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROVA DE VELOCIDADE */}
      <section id="speed-proof" className="bg-[#111111] text-brand-light py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-4">DIGITAL SEM ENROLAÇÃO.</h2>
            <p className="text-gray-400 text-lg">Processos desenhados para pequenos negócios.</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { num: "2-5", label: "DIAS", desc: "Primeira entrega" },
              { num: "100%", label: "ONLINE", desc: "Atendimento nacional" },
              { num: "1", label: "PARCEIRO", desc: "Design + mídia + tecnologia" },
            ].map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="p-6"
              >
                <div className="text-5xl md:text-6xl font-heading font-black text-brand-accent mb-2">{stat.num}</div>
                <div className="text-xl font-black mb-1">{stat.label}</div>
                <div className="text-gray-400">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-brand-accent shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] py-4 overflow-hidden border-y border-brand-accent-dark">
        <div className="whitespace-nowrap flex font-heading font-black text-lg md:text-xl text-brand-light tracking-widest uppercase">
          <motion.div
            animate={{ x: [0, -1035] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            className="flex gap-4"
          >
            <span>SITES • VÍDEOS • REELS • FOTOS • AUTOMAÇÃO • DELIVERY • CHATBOTS • LANDING PAGES • DESIGN • JINGLES • </span>
            <span>SITES • VÍDEOS • REELS • FOTOS • AUTOMAÇÃO • DELIVERY • CHATBOTS • LANDING PAGES • DESIGN • JINGLES • </span>
            <span>SITES • VÍDEOS • REELS • FOTOS • AUTOMAÇÃO • DELIVERY • CHATBOTS • LANDING PAGES • DESIGN • JINGLES • </span>
          </motion.div>
        </div>
      </div>

      {/* PROBLEMA */}
      <section id="problems-section" className="py-24 bg-brand-dark">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-6 text-balance">
              SEU NEGÓCIO É BOM.<br />
              <span className="text-gray-400">MAS O DIGITAL ESTÁ CONTANDO ESSA HISTÓRIA?</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              "Instagram improvisado.",
              "Cardápio difícil de abrir.",
              "Site que não existe.",
              "WhatsApp lotado e caótico.",
              "Promoção sem criatividade.",
              "Pedidos chegando desorganizados.",
            ].map((problem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/5 p-6 rounded-lg border border-white/5 flex items-start gap-4 hover:border-white/15 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-brand-accent shadow-[0_0_15px_rgba(255,215,0,0.3)] flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                </div>
                <p className="font-medium text-lg text-brand-light/80">{problem}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-center"
          >
            <p className="text-2xl font-heading font-black mb-8">É exatamente aí que entramos.</p>
            <Link
              to="/servicos"
              className="inline-flex items-center gap-2 bg-[#111111] text-brand-light hover:text-[#0a0a0a] px-8 py-4 rounded-full font-semibold hover:bg-brand-accent shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:scale-105 transition-all"
            >
              QUERO ARRUMAR MEU DIGITAL
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO POR SEGMENTO */}
      <section id="segments-section" className="py-24 bg-brand-dark border-b border-white/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16 max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-4">
              O QUE PODEMOS FAZER<br />PELO SEU NEGÓCIO?
            </h2>
            <p className="text-lg text-gray-400">Soluções adaptadas para a realidade do seu mercado.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Restaurantes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: 0, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/5 p-6 rounded-2xl border border-white/20 hover:border-brand-accent transition-all group flex flex-col"
            >
              <div className="w-full aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-black/40 border border-white/10 relative">
                <img
                  src={serviceImages.cardapioDigitalBurger}
                  alt="Restaurantes e Delivery"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent"></div>
                <span className="absolute bottom-2.5 left-3 bg-[#111111]/80 backdrop-blur-xs text-xs font-bold text-brand-accent px-2.5 py-1 rounded border border-white/10">
                  ALIMENTAÇÃO & DELIVERY
                </span>
              </div>
              <h3 className="text-2xl font-heading font-black mb-4 group-hover:text-brand-accent transition-colors">RESTAURANTES & DELIVERY</h3>
              <ul className="space-y-3 mb-8 flex-1">
                {['Cardápio digital', 'Delivery Web App', 'Reels', 'Fotos', 'Promoções', 'Chatbot', 'WhatsApp'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-brand-light/80 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_15px_rgba(255,215,0,0.3)]"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/orcamento?pacote=delivery-boost" className="font-black text-brand-light hover:text-brand-accent inline-flex items-center gap-2 mt-auto">
                SOLUÇÕES PARA RESTAURANTE <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Clínicas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/5 p-6 rounded-2xl border border-white/20 hover:border-brand-accent transition-all group flex flex-col"
            >
              <div className="w-full aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-black/40 border border-white/10 relative">
                <img
                  src={serviceImages.agendamentoClinicaApp}
                  alt="Clínicas e Profissionais"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent"></div>
                <span className="absolute bottom-2.5 left-3 bg-[#111111]/80 backdrop-blur-xs text-xs font-bold text-brand-accent px-2.5 py-1 rounded border border-white/10">
                  SAÚDE & ESTÉTICA
                </span>
              </div>
              <h3 className="text-2xl font-heading font-black mb-4 group-hover:text-brand-accent transition-colors">CLÍNICAS & PROFISSIONAIS</h3>
              <ul className="space-y-3 mb-8 flex-1">
                {['Site', 'Landing Page', 'Agendamento', 'Chatbot', 'Automação', 'Conteúdo', 'Fotos Profissionais'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-brand-light/80 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_15px_rgba(255,215,0,0.3)]"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/orcamento?pacote=agenda-cheia" className="font-black text-brand-light hover:text-brand-accent inline-flex items-center gap-2 mt-auto">
                SOLUÇÕES PARA CLÍNICAS <ArrowRight size={16} />
              </Link>
            </motion.div>

            {/* Comércio */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white/5 p-6 rounded-2xl border border-white/20 hover:border-brand-accent transition-all group flex flex-col"
            >
              <div className="w-full aspect-[16/10] rounded-xl overflow-hidden mb-5 bg-black/40 border border-white/10 relative">
                <img
                  src={serviceImages.gestaoPedidosMercado}
                  alt="Lojas e Comércio Local"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent"></div>
                <span className="absolute bottom-2.5 left-3 bg-[#111111]/80 backdrop-blur-xs text-xs font-bold text-brand-accent px-2.5 py-1 rounded border border-white/10">
                  VAREJO & COMÉRCIO LOCAL
                </span>
              </div>
              <h3 className="text-2xl font-heading font-black mb-4 group-hover:text-brand-accent transition-colors">LOJAS & COMÉRCIO LOCAL</h3>
              <ul className="space-y-3 mb-8 flex-1">
                {['Site', 'Catálogo Digital', 'Campanhas', 'Vídeos', 'Banners', 'Automação', 'Identidade Visual'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-brand-light/80 font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_15px_rgba(255,215,0,0.3)]"></div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/orcamento?pacote=negocio-digital" className="font-black text-brand-light hover:text-brand-accent inline-flex items-center gap-2 mt-auto">
                SOLUÇÕES PARA COMÉRCIO <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PACOTES */}
      <section id="packages-preview" className="py-24 bg-white/5 border-y border-white/20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-4">
              PACOTES PARA COLOCAR<br />SEU NEGÓCIO EM MOVIMENTO.
            </h2>
            <p className="text-lg text-gray-400">Soluções completas desenhadas para resolver problemas específicos.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.slice(0, 3).map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="bg-brand-dark p-8 rounded-xl border border-white/10 flex flex-col hover:border-brand-accent transition-colors relative"
              >
                {pkg.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#111111] text-brand-light text-xs font-black px-3 py-1 rounded-full whitespace-nowrap">
                    {pkg.badge}
                  </div>
                )}
                
                <h3 className="text-2xl font-heading font-black mb-2">{pkg.name}</h3>
                <p className="text-gray-400 text-sm mb-6 min-h-[40px]">{pkg.description}</p>
                
                <div className="mb-6">
                  <div className="text-sm font-medium text-gray-400 mb-1">Por apenas</div>
                  <div className="text-4xl font-black font-heading">R$ {pkg.price}</div>
                  <div className="text-sm text-brand-accent font-medium mt-2">{pkg.deliveryTime}</div>
                </div>

                <div className="flex-1">
                  <div className="font-semibold text-sm mb-3">O que inclui:</div>
                  <ul className="space-y-3 mb-8">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <CheckCircle2 size={18} className="text-brand-accent shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to={`/orcamento?pacote=${pkg.id}`}
                  className="w-full text-center bg-[#111111] text-brand-light hover:text-[#0a0a0a] py-3 rounded-full font-semibold hover:bg-brand-accent shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:scale-105 transition-all mt-auto"
                >
                  ESCOLHER PACOTE
                </Link>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 text-center"
          >
            <Link to="/pacotes" className="inline-flex items-center gap-2 font-semibold text-brand-accent hover:text-brand-light transition-colors">
              Ver todos os pacotes <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SIMULADOR DE ROI / CRESCIMENTO INTERATIVO */}
      <section id="roi-simulator-banner" className="py-20 bg-black/40 border-y border-white/10 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-accent/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-5xl mx-auto bg-gradient-to-b from-white/10 to-white/5 border border-brand-accent/40 rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-left flex-1">
                <div className="inline-flex items-center gap-2 bg-brand-accent/20 text-brand-accent text-xs font-black px-3.5 py-1.5 rounded-full mb-4 border border-brand-accent/30">
                  <Sparkles size={14} /> FERRAMENTA INTERATIVA GRATUITA
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-black mb-3 leading-tight">
                  QUANTO SEU NEGÓCIO PODE CRESCER NO DIGITAL?
                </h2>
                <p className="text-gray-300 text-base md:text-lg mb-6 leading-relaxed">
                  Criamos um simulador prático onde você escolhe os serviços da Sonho Studio e calcula na hora o aumento de faturamento, economia com taxas e o tempo para o projeto se pagar (payback).
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm font-semibold text-brand-light/90">
                  <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
                    ⚡ Simulação em 30 segundos
                  </span>
                  <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
                    📊 Métricas por segmento
                  </span>
                  <span className="flex items-center gap-1.5 bg-black/40 px-3 py-1.5 rounded-lg border border-white/10">
                    💰 Cálculo de Payback & ROI
                  </span>
                </div>
              </div>

              <div className="shrink-0 w-full lg:w-auto text-center">
                <Link
                  id="simulator-banner-btn"
                  to="/simulador"
                  className="inline-flex items-center justify-center gap-3 bg-brand-accent text-[#0a0a0a] font-black px-8 py-5 rounded-full text-lg shadow-[0_0_25px_rgba(255,215,0,0.35)] hover:scale-105 hover:bg-brand-accent-hover transition-all w-full lg:w-auto"
                >
                  CALCULAR MEU ROI
                  <ArrowRight size={20} />
                </Link>
                <div className="text-xs text-gray-400 mt-3">Sem cadastro prévio • 100% interativo</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA INTERMEDIÁRIO */}
      <section id="mid-cta-section" className="bg-brand-accent shadow-[0_0_15px_rgba(255,215,0,0.3)] py-20 text-brand-light">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="container mx-auto px-4 md:px-6 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-4">
            ENQUANTO VOCÊ PENSA,<br />SEU CONCORRENTE ESTÁ POSTANDO.
          </h2>
          <p className="text-xl font-medium mb-10 max-w-2xl mx-auto">
            Coloque sua próxima campanha ou site no ar em poucos dias.
          </p>
          <a
            id="mid-cta-whatsapp"
            href={agencyConfig.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex bg-[#111111] text-brand-light px-8 py-4 rounded-full font-black text-lg hover:bg-white/10 hover:text-brand-light transition-all hover:scale-105 shadow-xl"
          >
            COMEÇAR AGORA
          </a>
        </motion.div>
      </section>

      {/* COMPARATIVO */}
      <section id="comparison-section" className="py-24 bg-brand-dark">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-4">
              FAZER SOZINHO OU RESOLVER?
            </h2>
            <p className="text-lg text-gray-400">Compare o modelo tradicional com a nossa agência express.</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-4xl mx-auto overflow-x-auto"
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 border-b border-white/20 font-heading text-lg"></th>
                  <th className="p-4 border-b border-white/20 font-heading text-lg text-gray-400">Fazer Sozinho</th>
                  <th className="p-4 border-b border-white/20 font-heading text-lg text-gray-400">Agência Tradicional</th>
                  <th className="p-4 border-b border-brand-accent text-brand-accent font-heading text-xl">{agencyConfig.name}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {[
                  { feature: "Prazo de entrega", alone: "Semanas / Meses", trad: "Meses", us: "2 a 5 dias úteis" },
                  { feature: "Quantidade de fornecedores", alone: "Vários", trad: "1", us: "1 centralizado" },
                  { feature: "Preço transparente", alone: "Não existe", trad: "Só após reuniões", us: "Tabela aberta" },
                  { feature: "Foco em pequenos negócios", alone: "N/A", trad: "Geralmente não", us: "Especialidade 100%" },
                  { feature: "Velocidade de ajuste", alone: "Baixa", trad: "Lenta (processos)", us: "Express" },
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-white/5 transition-colors">
                    <td className="p-4 font-medium text-brand-light">{row.feature}</td>
                    <td className="p-4 text-gray-400">{row.alone}</td>
                    <td className="p-4 text-gray-400">{row.trad}</td>
                    <td className="p-4 text-brand-light font-black">{row.us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* DEPOIMENTOS (PROVA SOCIAL) */}
      <section id="testimonials-section" className="py-24 bg-white/5 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-4 inline-block">
              ⭐ PROVA SOCIAL
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-4">
              QUEM CONTRATOU, APROVOU.
            </h2>
            <p className="text-lg text-gray-400">Veja o que empreendedores como você dizem sobre nossa entrega.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="bg-brand-dark p-8 rounded-2xl border border-white/10 relative flex flex-col justify-between group hover:border-brand-accent transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{t.emoji}</span>
                    <div className="flex gap-1 text-brand-accent">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                  </div>
                  <Quote className="text-brand-accent/20 mb-3" size={32} />
                  <p className="text-gray-300 mb-6 leading-relaxed italic">"{t.comment}"</p>
                </div>
                <div>
                  <div className="font-heading font-black text-brand-light text-lg">{t.name}</div>
                  <div className="text-xs text-gray-400 font-medium">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (PERGUNTAS FREQUENTES) COM SANFONAS EXPANSÍVEIS */}
      <section id="faq-section" className="py-24 bg-brand-dark border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <span className="bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-4 inline-block">
              ❓ FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-4">
              PERGUNTAS FREQUENTES
            </h2>
            <p className="text-lg text-gray-400">Tire suas dúvidas rapidamente antes de começar seu projeto.</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.45, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-6 text-left font-heading font-black text-lg md:text-xl flex items-center justify-between gap-4 hover:bg-white/5 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown 
                      size={20} 
                      className={`text-brand-accent shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SEÇÃO SOBRE A AGÊNCIA (ESTÚDIO, PROCESSO E EQUIPE) */}
      <section id="about-section" className="py-24 bg-brand-dark border-t border-white/10 relative">
        <div className="container mx-auto px-4 md:px-6">
          {/* Header da seção Sobre */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="bg-brand-accent/10 border border-brand-accent/30 text-brand-accent text-xs font-black uppercase tracking-widest px-4 py-2 rounded-full mb-4 inline-block">
              ✨ SOBRE A {agencyConfig.name.toUpperCase()}
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-black mb-4">
              QUEM SOMOS & NOSSA INFRAESTRUTURA
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Somos uma agência digital focada na execução rápida. Sem jargões complicados, sem reuniões intermináveis. Entregamos design, marketing e tecnologia rápido para o seu negócio vender mais.
            </p>
          </motion.div>

          {/* STUDIO ENVIRONMENT SHOWCASE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="bg-white/5 rounded-2xl border border-white/20 p-8 md:p-12 overflow-hidden mb-20"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-brand-accent/20 text-brand-accent text-xs font-black px-3 py-1.5 rounded-full mb-4">
                  <Sparkles size={14} /> NOSSO ESTÚDIO CRIATIVO
                </div>
                <h3 className="text-3xl md:text-4xl font-heading font-black mb-4">
                  INFRAESTRUTURA DEDICADA À SUA MARCA.
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  Combinamos ilhas de edição audiovisual de ponta, captação 4K com estabilização, iluminação cênica de estúdio e estúdio dedicado para criação de áudio e jingles publicitários. Tudo integrado para agilizar cada entrega em até 5 dias úteis.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10">
                    <Monitor className="text-brand-accent mb-2" size={24} />
                    <h4 className="font-bold text-sm text-brand-light">Design & Edição</h4>
                    <p className="text-xs text-gray-400">Suíte completa Adobe & IA</p>
                  </div>
                  <div className="bg-black/30 p-4 rounded-xl border border-white/10">
                    <Disc3 className="text-brand-accent mb-2" size={24} />
                    <h4 className="font-bold text-sm text-brand-light">Áudio & Jingles</h4>
                    <p className="text-xs text-gray-400">Captação e masterização</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/20 group">
                  <img
                    src={serviceImages.equipeSonhoStudio}
                    alt="Estúdio Sonho Studio"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-xs text-[10px] font-bold text-brand-light px-2 py-1 rounded">
                    Ilha de Criação & Vídeo
                  </div>
                </div>
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-white/20 group">
                  <img
                    src={serviceImages.estudioAudioJingle}
                    alt="Estúdio de Áudio"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-xs text-[10px] font-bold text-brand-light px-2 py-1 rounded">
                    Estúdio de Áudio & Gravação
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* PROCESSO */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-heading font-black mb-3">COMO FUNCIONA NOSSO PROCESSO</h3>
              <p className="text-gray-400 text-base">Da ideia ao ar em tempo recorde.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { num: '01', title: 'VOCÊ CONTA O QUE PRECISA.', desc: 'Briefing rápido.' },
                { num: '02', title: 'NÓS DEFINIMOS O PLANO.', desc: 'Escopo, valor e prazo claros.' },
                { num: '03', title: 'A GENTE PRODUZ.', desc: 'Design, mídia ou tecnologia.' },
                { num: '04', title: 'VOCÊ APROVA.', desc: 'Rodada de ajustes conforme pacote.' },
                { num: '05', title: 'PUBLICAMOS.', desc: 'Seu novo ativo vai para o ar.' }
              ].map((step, idx) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-brand-accent transition-colors"
                >
                  <div className="text-brand-accent font-heading font-black text-3xl mb-3">{step.num}</div>
                  <h4 className="font-black text-brand-light mb-1.5 leading-tight text-sm">{step.title}</h4>
                  <p className="text-xs text-gray-400">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* EQUIPE / QUEM VAI ATENDER VOCÊ */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-heading font-black mb-3">QUEM VAI ATENDER VOCÊ</h3>
              <p className="text-gray-400 text-base">Os criadores por trás da {agencyConfig.name}.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Denison */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 rounded-2xl hover:border-brand-accent transition-all"
              >
                <div className="flex flex-col sm:flex-row gap-6 mb-6">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white/5 rounded-xl overflow-hidden shrink-0 flex items-center justify-center border border-white/20">
                    <img src={fotoInstrutor} alt="Denison Limeira" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-heading font-black text-brand-light mb-1">Denison Limeira</h4>
                    <p className="text-brand-accent font-semibold text-sm mb-2">Designer Gráfico, Instrutor & Especialista IA</p>
                    <div className="inline-block bg-white/10 px-3 py-1 text-xs font-bold text-gray-300 rounded-full">34 anos</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Profissional da área de Treinamento e Desenvolvimento Corporativo, com vários cursos na área de webdesign e gestão, além de aprender de forma autodidata ferramentas de edição e design desde 2005. Com mais de 15 anos de experiência em Customer Experience (CX), sendo 3 anos em T&D, desenvolvi mais de 500 profissionais em empresas como Starbucks, Subway e Atento, construindo uma base sólida para entender as necessidades reais das pessoas. Acredito que o conhecimento só ganha propósito quando compartilhado.
                </p>
              </motion.div>

              {/* Vinicius */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 rounded-2xl hover:border-brand-accent transition-all"
              >
                <div className="flex flex-col sm:flex-row gap-6 mb-6">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 bg-white/5 rounded-xl overflow-hidden shrink-0 flex items-center justify-center border border-white/20">
                    <img src={fotoVinicius} alt="Vinicius Cunha" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-heading font-black text-brand-light mb-1">Vinicius Cunha</h4>
                    <p className="text-brand-accent font-semibold text-sm mb-2">Cinegrafista, Produtor de Eventos & Videomaker</p>
                    <div className="inline-block bg-white/10 px-3 py-1 text-xs font-bold text-gray-300 rounded-full">22 anos</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Cinegrafista, fotógrafo, editor de vídeos e profissional em produção de eventos (casamentos, shows, corporativos) desde 2018. Falo inglês fluentemente desde os 8 anos de idade e possuo diversos cursos e conhecimento autodidata em design. Trabalhei atuando como Customer Experience (CX) na Meta (Facebook) em moderação de conteúdo e atendimento bilíngue para hóspedes e anfitriões do Airbnb, conciliando com prestação de serviços em produção de eventos corporativos, cinegrafista e fotógrafo.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="final-cta-section" className="py-32 bg-[#111111] text-brand-light">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="container mx-auto px-4 md:px-6 text-center max-w-3xl"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-black mb-6">
            SEU PRÓXIMO CLIENTE<br />
            <span className="text-brand-accent">JÁ ESTÁ ONLINE.</span>
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Agora falta encontrar o seu negócio do jeito certo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              id="final-cta-orcamento"
              to="/orcamento"
              className="bg-brand-accent shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:scale-105 hover:bg-brand-accent-hover text-[#0a0a0a] px-8 py-4 rounded-full font-semibold text-lg transition-all"
            >
              COMEÇAR MEU PROJETO
            </Link>
            <a
              id="final-cta-whatsapp"
              href={agencyConfig.whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="bg-transparent border border-white text-brand-light hover:bg-white/5 px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105"
            >
              CHAMAR NO WHATSAPP
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
