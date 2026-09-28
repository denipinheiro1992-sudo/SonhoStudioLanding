import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  TrendingUp, 
  DollarSign, 
  Clock, 
  Users, 
  Sparkles, 
  ArrowRight, 
  Check, 
  RotateCcw, 
  Copy, 
  Send,
  HelpCircle,
  Percent,
  ShieldCheck,
  UtensilsCrossed,
  Stethoscope,
  ShoppingBag,
  Briefcase
} from 'lucide-react';
import { services, Service } from '../config/services';
import { agencyConfig } from '../config/agency';

export type SegmentType = 'restaurante' | 'clinica' | 'comercio' | 'servicos';

interface SegmentInfo {
  id: SegmentType;
  name: string;
  icon: typeof UtensilsCrossed;
  badge: string;
  defaultRevenue: number;
  defaultTicket: number;
  defaultMarketplaceCut: number; // % que vai para intermediários/comissões
  recommendedServices: string[];
  growthMultiplier: {
    leadGainFactor: number;
    ticketLiftMax: number;
    automationHours: number;
  };
}

const segments: SegmentInfo[] = [
  {
    id: 'restaurante',
    name: 'Restaurante & Delivery',
    icon: UtensilsCrossed,
    badge: 'Economia com Marketplace & Pedidos Diretos',
    defaultRevenue: 18000,
    defaultTicket: 60,
    defaultMarketplaceCut: 22,
    recommendedServices: ['delivery-web-app', 'cardapio-digital', 'reels-shorts', 'chatbot-ia'],
    growthMultiplier: {
      leadGainFactor: 0.28,
      ticketLiftMax: 0.18,
      automationHours: 35,
    }
  },
  {
    id: 'clinica',
    name: 'Clínica, Saúde & Estética',
    icon: Stethoscope,
    badge: 'Redução de Faltas & Agendamento 24/7',
    defaultRevenue: 22000,
    defaultTicket: 190,
    defaultMarketplaceCut: 0,
    recommendedServices: ['agendamento-web-app', 'landing-page', 'chatbot-ia', 'fotos-ia-10'],
    growthMultiplier: {
      leadGainFactor: 0.32,
      ticketLiftMax: 0.15,
      automationHours: 40,
    }
  },
  {
    id: 'comercio',
    name: 'Comércio Local & Varejo',
    icon: ShoppingBag,
    badge: 'Vitrine Online & Catálogo no WhatsApp',
    defaultRevenue: 16000,
    defaultTicket: 95,
    defaultMarketplaceCut: 5,
    recommendedServices: ['landing-page', 'social-pack-10', 'pack-4-videos', 'chatbot-ia'],
    growthMultiplier: {
      leadGainFactor: 0.26,
      ticketLiftMax: 0.20,
      automationHours: 25,
    }
  },
  {
    id: 'servicos',
    name: 'Serviços & Profissionais',
    icon: Briefcase,
    badge: 'Posicionamento Premium & Mais Contratos',
    defaultRevenue: 14000,
    defaultTicket: 350,
    defaultMarketplaceCut: 0,
    recommendedServices: ['site-institucional', 'pack-4-videos', 'automacao', 'social-pack-10'],
    growthMultiplier: {
      leadGainFactor: 0.35,
      ticketLiftMax: 0.25,
      automationHours: 30,
    }
  }
];

export function RoiCalculator() {
  const [selectedSegmentId, setSelectedSegmentId] = useState<SegmentType>('restaurante');
  const currentSegment = useMemo(() => {
    return segments.find(s => s.id === selectedSegmentId) || segments[0];
  }, [selectedSegmentId]);

  // Business Parameters State
  const [monthlyRevenue, setMonthlyRevenue] = useState<number>(currentSegment.defaultRevenue);
  const [averageTicket, setAverageTicket] = useState<number>(currentSegment.defaultTicket);
  const [marketplacePercent, setMarketplacePercent] = useState<number>(currentSegment.defaultMarketplaceCut);
  
  // Selected Services
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>(currentSegment.recommendedServices);
  const [copiedNotification, setCopiedNotification] = useState(false);

  // When segment changes, sync defaults
  const handleSegmentChange = (segId: SegmentType) => {
    const seg = segments.find(s => s.id === segId);
    if (!seg) return;
    setSelectedSegmentId(segId);
    setMonthlyRevenue(seg.defaultRevenue);
    setAverageTicket(seg.defaultTicket);
    setMarketplacePercent(seg.defaultMarketplaceCut);
    setSelectedServiceIds(seg.recommendedServices);
  };

  // Toggle single service
  const toggleService = (id: string) => {
    setSelectedServiceIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Fast presets
  const applyRecommended = () => {
    setSelectedServiceIds(currentSegment.recommendedServices);
  };

  const applyFullAccelerator = () => {
    const ids = currentSegment.recommendedServices.concat(['fotos-ia-10', 'social-pack-10']);
    setSelectedServiceIds(Array.from(new Set(ids)));
  };

  const clearSelection = () => {
    setSelectedServiceIds([]);
  };

  // Financial & Growth Math
  const calculations = useMemo(() => {
    const chosenServices: Service[] = services.filter(s => selectedServiceIds.includes(s.id));
    const totalInvestment = chosenServices.reduce((acc, s) => acc + s.price, 0);

    // Current monthly baseline
    const currentTicket = Math.max(15, averageTicket);
    const currentOrders = Math.round(monthlyRevenue / currentTicket);

    // Service drivers
    const hasWebsiteOrLP = selectedServiceIds.some(id => ['site-institucional', 'landing-page'].includes(id));
    const hasApp = selectedServiceIds.some(id => ['delivery-web-app', 'agendamento-web-app', 'cardapio-digital'].includes(id));
    const hasChatbotOrAuto = selectedServiceIds.some(id => ['chatbot-ia', 'automacao'].includes(id));
    const hasVideo = selectedServiceIds.some(id => ['reels-shorts', 'pack-4-videos', 'video-propaganda'].includes(id));
    const hasVisuals = selectedServiceIds.some(id => ['fotos-ia-10', 'social-pack-10', 'arte-social'].includes(id));

    // 1. Marketplace commission savings (for food/delivery or retail)
    let marketplaceSavings = 0;
    if (hasApp && marketplacePercent > 0) {
      // Shifting ~35% of marketplace orders to own direct channel
      const marketplaceVolume = (monthlyRevenue * (marketplacePercent / 100));
      const migratedVolume = marketplaceVolume * 0.40;
      // Average 18% fee saved on migrated volume
      marketplaceSavings = Math.round(migratedVolume * 0.18);
    }

    // 2. New customers generated via digital reach (Web + Reels + Social)
    let newCustomersRate = 0.05; // base 5%
    if (hasWebsiteOrLP) newCustomersRate += 0.08;
    if (hasVideo) newCustomersRate += 0.12;
    if (hasVisuals) newCustomersRate += 0.04;
    if (hasChatbotOrAuto) newCustomersRate += 0.06; // leads captured instead of lost
    
    // Cap expansion based on segment reality
    newCustomersRate = Math.min(newCustomersRate, currentSegment.growthMultiplier.leadGainFactor);
    const estimatedNewCustomers = Math.max(0, Math.round(currentOrders * newCustomersRate));

    // 3. Ticket expansion (visual presentation, professional photos, easy cross-sell)
    let ticketLiftRate = 0;
    if (hasVisuals) ticketLiftRate += 0.05;
    if (hasApp || hasWebsiteOrLP) ticketLiftRate += 0.07;
    ticketLiftRate = Math.min(ticketLiftRate, currentSegment.growthMultiplier.ticketLiftMax);
    const newAverageTicket = currentTicket * (1 + ticketLiftRate);

    // 4. Monthly additional revenue from new customers & ticket lift
    const additionalSalesRevenue = Math.round(
      (estimatedNewCustomers * newAverageTicket) + (currentOrders * (newAverageTicket - currentTicket))
    );

    // 5. Total Monthly Gain (Revenue Gain + Cost Savings)
    const totalMonthlyGain = additionalSalesRevenue + marketplaceSavings;

    // 6. Automation hours saved
    let hoursSaved = 0;
    if (hasChatbotOrAuto) hoursSaved += currentSegment.growthMultiplier.automationHours;
    if (hasApp) hoursSaved += 15;

    // 7. Payback (Break-even time)
    const paybackMonths = totalMonthlyGain > 0 
      ? Number((totalInvestment / totalMonthlyGain).toFixed(1)) 
      : 0;

    // 8. 12-Month Net Value & ROI
    const twelveMonthGain = totalMonthlyGain * 12;
    const twelveMonthNetProfit = twelveMonthGain - totalInvestment;
    const roiMultiplier = totalInvestment > 0 
      ? Number(((twelveMonthGain) / totalInvestment).toFixed(1))
      : 0;

    return {
      chosenServices,
      totalInvestment,
      currentOrders,
      estimatedNewCustomers,
      marketplaceSavings,
      additionalSalesRevenue,
      totalMonthlyGain,
      hoursSaved,
      paybackMonths,
      twelveMonthGain,
      twelveMonthNetProfit,
      roiMultiplier,
      newAverageTicket: Math.round(newAverageTicket)
    };
  }, [selectedServiceIds, monthlyRevenue, averageTicket, marketplacePercent, currentSegment]);

  // WhatsApp Message Generator
  const generateWhatsAppMessage = () => {
    const serviceList = calculations.chosenServices.map(s => `• ${s.name} (R$ ${s.price})`).join('%0A');
    const text = `*Simulação de ROI - Sonho Studio*%0A%0A` +
      `🏢 *Segmento:* ${currentSegment.name}%0A` +
      `💰 *Faturamento Atual:* R$ ${monthlyRevenue.toLocaleString('pt-BR')}/mês%0A` +
      `📦 *Serviços Selecionados:*%0A${serviceList}%0A%0A` +
      `💵 *Investimento Estimado:* R$ ${calculations.totalInvestment.toLocaleString('pt-BR')}%0A` +
      `📈 *Ganho Mensal Projetado:* R$ ${calculations.totalMonthlyGain.toLocaleString('pt-BR')}/mês%0A` +
      `⚡ *Retorno Estimado (Payback):* em ~${calculations.paybackMonths} meses%0A` +
      `🎯 *Multiplicador 1º Ano:* ${calculations.roiMultiplier}x%0A%0A` +
      `Gostaria de agendar uma consultoria rápida para colocar isso em prática!`;
    return `${agencyConfig.whatsappLink}?text=${text}`;
  };

  const copySummaryToClipboard = () => {
    const serviceList = calculations.chosenServices.map(s => `- ${s.name}: R$ ${s.price}`).join('\n');
    const summary = `Simulação de Crescimento & ROI - Sonho Studio
Segmento: ${currentSegment.name}
Faturamento Atual: R$ ${monthlyRevenue.toLocaleString('pt-BR')}/mês
Investimento Total: R$ ${calculations.totalInvestment.toLocaleString('pt-BR')}

Serviços Selecionados:
${serviceList}

Projeção de Retorno:
+ R$ ${calculations.totalMonthlyGain.toLocaleString('pt-BR')}/mês em novo faturamento e economia
+ ${calculations.estimatedNewCustomers} novos clientes/pedidos por mês
+ Payback estimado em ~${calculations.paybackMonths} meses
+ Retorno projetado no 1º ano: ${calculations.roiMultiplier}x`;

    navigator.clipboard.writeText(summary);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 3000);
  };

  return (
    <div className="bg-brand-dark min-h-screen pb-24 text-brand-light">
      {/* HERO HEADER */}
      <section className="bg-[#111111] border-b border-white/10 pt-28 pb-16">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 bg-brand-accent/20 text-brand-accent text-xs font-black px-3.5 py-1.5 rounded-full mb-5 border border-brand-accent/30">
            <Sparkles size={15} /> SIMULADOR DE CRESCIMENTO & ROI DIGITAL
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-5 tracking-tight">
            DESCUBRA O RETORNO DO SEU <span className="text-brand-accent">INVESTIMENTO DIGITAL.</span>
          </h1>
          <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Selecione o seu segmento, informe os números atuais do seu negócio e veja em tempo real como cada solução da Sonho Studio gera novos clientes, reduz custos e se paga em poucas semanas.
          </p>
        </div>
      </section>

      {/* MAIN CALCULATOR INTERFACE */}
      <section className="container mx-auto px-4 md:px-6 py-12 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: CONTROLS & SELECTION (7 COLS) */}
          <div className="lg:col-span-7 space-y-8">

            {/* STEP 1: SEGMENT SELECTOR */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black text-brand-accent tracking-wider uppercase">Passo 1</span>
                <span className="text-xs text-gray-400">Escolha o seu nicho</span>
              </div>
              <h2 className="text-xl md:text-2xl font-heading font-black mb-6">Qual é o seu segmento?</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {segments.map((seg) => {
                  const Icon = seg.icon;
                  const isSelected = seg.id === selectedSegmentId;
                  return (
                    <button
                      key={seg.id}
                      onClick={() => handleSegmentChange(seg.id)}
                      className={`p-4 rounded-xl text-left border transition-all flex items-start gap-3.5 ${
                        isSelected 
                          ? 'bg-brand-accent/15 border-brand-accent shadow-[0_0_20px_rgba(255,215,0,0.15)] text-brand-light' 
                          : 'bg-black/30 border-white/10 hover:border-white/30 text-gray-300'
                      }`}
                    >
                      <div className={`p-2.5 rounded-lg shrink-0 ${isSelected ? 'bg-brand-accent text-[#0a0a0a]' : 'bg-white/10 text-gray-300'}`}>
                        <Icon size={20} />
                      </div>
                      <div className="overflow-hidden">
                        <div className="font-bold text-sm leading-snug">{seg.name}</div>
                        <div className="text-xs text-gray-400 mt-1 line-clamp-2">{seg.badge}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* STEP 2: BUSINESS BASELINE SLIDERS */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 p-6 md:p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-black text-brand-accent tracking-wider uppercase">Passo 2</span>
                <span className="text-xs text-gray-400">Ajuste para sua realidade</span>
              </div>
              <h2 className="text-xl md:text-2xl font-heading font-black mb-6">Como está sua operação hoje?</h2>

              <div className="space-y-6">
                {/* Monthly Revenue Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-gray-300 flex items-center gap-1.5">
                      Faturamento Mensal Atual
                    </label>
                    <span className="text-base font-black text-brand-accent bg-black/40 px-3 py-1 rounded-md border border-white/10">
                      R$ {monthlyRevenue.toLocaleString('pt-BR')}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="3000"
                    max="80000"
                    step="1000"
                    value={monthlyRevenue}
                    onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1 font-mono">
                    <span>R$ 3.000</span>
                    <span>R$ 40.000</span>
                    <span>R$ 80.000+</span>
                  </div>
                </div>

                {/* Average Ticket Slider */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-gray-300 flex items-center gap-1.5">
                      Ticket Médio por Venda / Consulta
                    </label>
                    <span className="text-base font-black text-brand-light bg-black/40 px-3 py-1 rounded-md border border-white/10">
                      R$ {averageTicket}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="25"
                    max="500"
                    step="5"
                    value={averageTicket}
                    onChange={(e) => setAverageTicket(Number(e.target.value))}
                    className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-brand-accent"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1 font-mono">
                    <span>R$ 25</span>
                    <span>~{calculations.currentOrders} pedidos/mês</span>
                    <span>R$ 500</span>
                  </div>
                </div>

                {/* Marketplace cut for restaurants/food */}
                {selectedSegmentId === 'restaurante' && (
                  <div className="pt-2 border-t border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <label className="text-sm font-semibold text-gray-300 flex items-center gap-1.5">
                        % de Vendas que passam por iFood / Marketplaces
                      </label>
                      <span className="text-sm font-black text-orange-400 bg-black/40 px-3 py-1 rounded-md border border-white/10">
                        {marketplacePercent}% das vendas
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="90"
                      step="5"
                      value={marketplacePercent}
                      onChange={(e) => setMarketplacePercent(Number(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-orange-400"
                    />
                    <p className="text-xs text-gray-400 mt-1">
                      Com seu próprio delivery web app, você economiza taxas de até 27% em cada pedido recorrente.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* STEP 3: SERVICE SELECTION */}
            <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 p-6 md:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div>
                  <span className="text-xs font-black text-brand-accent tracking-wider uppercase block">Passo 3</span>
                  <h2 className="text-xl md:text-2xl font-heading font-black">Selecione os Serviços Desejados</h2>
                </div>
                
                {/* Fast presets buttons */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={applyRecommended}
                    className="text-xs font-bold bg-white/10 hover:bg-white/20 text-brand-light px-3 py-1.5 rounded-lg transition-colors"
                  >
                    Recomendado
                  </button>
                  <button
                    onClick={applyFullAccelerator}
                    className="text-xs font-bold bg-brand-accent/20 hover:bg-brand-accent/30 text-brand-accent px-3 py-1.5 rounded-lg border border-brand-accent/40 transition-colors"
                  >
                    Combo Completo
                  </button>
                  <button
                    onClick={clearSelection}
                    className="text-xs font-medium text-gray-400 hover:text-white px-2 py-1.5 transition-colors"
                  >
                    Limpar
                  </button>
                </div>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {services.map((service) => {
                  const isChecked = selectedServiceIds.includes(service.id);
                  const isRecommended = currentSegment.recommendedServices.includes(service.id);

                  return (
                    <div
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`cursor-pointer p-4 rounded-xl border transition-all flex flex-col justify-between relative group ${
                        isChecked 
                          ? 'bg-white/10 border-brand-accent shadow-[0_0_15px_rgba(255,215,0,0.12)]' 
                          : 'bg-black/30 border-white/10 hover:border-white/30 hover:bg-white/5'
                      }`}
                    >
                      <div className="flex items-start gap-3 mb-3">
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 border transition-colors ${
                          isChecked 
                            ? 'bg-brand-accent border-brand-accent text-[#0a0a0a]' 
                            : 'border-white/30 bg-white/5'
                        }`}>
                          {isChecked && <Check size={14} strokeWidth={3} />}
                        </div>

                        <div className="overflow-hidden flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-sm text-brand-light group-hover:text-brand-accent transition-colors leading-tight">
                              {service.name}
                            </span>
                          </div>
                          <p className="text-xs text-gray-400 line-clamp-1 mt-0.5">{service.description}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-white/5 text-xs">
                        <span className="text-gray-400 font-mono">{service.deliveryTime}</span>
                        <span className="font-black text-brand-accent text-sm">R$ {service.price}</span>
                      </div>

                      {isRecommended && !isChecked && (
                        <span className="absolute -top-2 right-3 text-[10px] font-black bg-[#111111] text-brand-accent px-2 py-0.5 rounded-full border border-brand-accent/40">
                          Sugerido
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: STICKY RESULTS DASHBOARD (5 COLS) */}
          <div className="lg:col-span-5 sticky top-24 space-y-6">
            <div className="bg-[#111111] rounded-2xl border border-brand-accent/40 p-6 md:p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute -right-16 -top-16 w-48 h-48 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none"></div>

              {/* Title & Badge */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <span className="text-xs font-black text-brand-accent uppercase tracking-wider">Estimativa Inteligente</span>
                  <h3 className="text-2xl font-heading font-black">Retorno Projetado</h3>
                </div>
                <div className="p-3 bg-brand-accent/15 text-brand-accent rounded-xl border border-brand-accent/30">
                  <TrendingUp size={24} />
                </div>
              </div>

              {/* HIGHLIGHT 1: GAIN PER MONTH */}
              <div className="bg-black/50 p-5 rounded-xl border border-white/10 mb-5">
                <div className="text-xs text-gray-400 font-medium mb-1 flex items-center gap-1.5">
                  <DollarSign size={14} className="text-brand-accent" /> Ganho Mensal Adicional Projetado
                </div>
                <div className="text-3xl md:text-4xl font-heading font-black text-brand-light">
                  + R$ {calculations.totalMonthlyGain.toLocaleString('pt-BR')}
                  <span className="text-xs font-normal text-gray-400 ml-1.5">/mês</span>
                </div>
                <div className="text-xs text-gray-400 mt-2 flex flex-wrap gap-x-4 gap-y-1">
                  <span>Novas Vendas: <strong className="text-green-400">+R$ {calculations.additionalSalesRevenue.toLocaleString('pt-BR')}</strong></span>
                  {calculations.marketplaceSavings > 0 && (
                    <span>Economia Taxas: <strong className="text-orange-400">+R$ {calculations.marketplaceSavings.toLocaleString('pt-BR')}</strong></span>
                  )}
                </div>
              </div>

              {/* 3 KEY METRIC TILES */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {/* Metric A: Payback */}
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="text-xs text-gray-400 flex items-center gap-1 mb-1">
                    <Clock size={13} className="text-brand-accent" /> Payback (Retorno)
                  </div>
                  <div className="text-xl font-heading font-black text-brand-light">
                    {calculations.paybackMonths > 0 ? `~${calculations.paybackMonths} meses` : 'Imediato'}
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">Tempo p/ cobrir o projeto</div>
                </div>

                {/* Metric B: ROI Multiplier */}
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="text-xs text-gray-400 flex items-center gap-1 mb-1">
                    <Percent size={13} className="text-brand-accent" /> ROI Anual
                  </div>
                  <div className="text-xl font-heading font-black text-brand-accent">
                    {calculations.roiMultiplier}x
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">Retorno no 1º ano</div>
                </div>

                {/* Metric C: New Customers */}
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="text-xs text-gray-400 flex items-center gap-1 mb-1">
                    <Users size={13} className="text-green-400" /> Novos Clientes
                  </div>
                  <div className="text-xl font-heading font-black text-brand-light">
                    +{calculations.estimatedNewCustomers}
                    <span className="text-xs font-normal text-gray-400 ml-1">/mês</span>
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">Volume adicional</div>
                </div>

                {/* Metric D: Hours Saved */}
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="text-xs text-gray-400 flex items-center gap-1 mb-1">
                    <ShieldCheck size={13} className="text-blue-400" /> Horas Salvas
                  </div>
                  <div className="text-xl font-heading font-black text-brand-light">
                    {calculations.hoursSaved > 0 ? `~${calculations.hoursSaved}h` : '0h'}
                    <span className="text-xs font-normal text-gray-400 ml-1">/mês</span>
                  </div>
                  <div className="text-[11px] text-gray-400 mt-0.5">Com automação & IA</div>
                </div>
              </div>

              {/* INVESTMENT SUMMARY BOX */}
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 mb-6">
                <div className="flex justify-between items-center text-sm mb-1.5">
                  <span className="text-gray-400">Serviços Selecionados:</span>
                  <span className="font-bold text-brand-light">{calculations.chosenServices.length} itens</span>
                </div>
                <div className="flex justify-between items-center text-sm mb-2">
                  <span className="text-gray-400">Investimento Total Único:</span>
                  <span className="text-xl font-heading font-black text-brand-accent">
                    R$ {calculations.totalInvestment.toLocaleString('pt-BR')}
                  </span>
                </div>
                <div className="text-xs text-gray-400 border-t border-white/10 pt-2 flex justify-between">
                  <span>Ou parcelado em até:</span>
                  <strong className="text-brand-light">12x de R$ {Math.round((calculations.totalInvestment * 1.12) / 12)}</strong>
                </div>
              </div>

              {/* ACTION CTAS */}
              <div className="space-y-3">
                {/* Primary Button: Direct Quote */}
                <Link
                  to={`/orcamento?servicoDesejado=${encodeURIComponent(
                    `Simulador ROI (${currentSegment.name}) - Investimento: R$ ${calculations.totalInvestment} - Ganho estimado: +R$ ${calculations.totalMonthlyGain}/mês`
                  )}`}
                  className="w-full bg-brand-accent text-[#0a0a0a] font-black py-4 px-6 rounded-full text-center flex items-center justify-center gap-2 hover:bg-brand-accent/90 shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:scale-[1.02] transition-all"
                >
                  SOLICITAR PROPOSTA COM ESTE PLANO
                  <ArrowRight size={18} />
                </Link>

                {/* Secondary Button: WhatsApp with formatted diagnostics */}
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full bg-[#25D366] text-white font-bold py-3 px-6 rounded-full text-center flex items-center justify-center gap-2 hover:bg-[#20ba59] transition-all text-sm shadow-md"
                >
                  <Send size={16} />
                  ENVIAR DIAGNÓSTICO NO WHATSAPP
                </a>

                {/* Copy Summary */}
                <button
                  onClick={copySummaryToClipboard}
                  className="w-full py-2.5 text-xs text-gray-400 hover:text-white flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Copy size={13} />
                  {copiedNotification ? 'Copiado para a área de transferência!' : 'Copiar resumo da simulação'}
                </button>
              </div>

              {/* DISCLAIMER / PREMISES */}
              <div className="mt-5 pt-4 border-t border-white/10 text-[11px] text-gray-500 leading-normal flex items-start gap-1.5">
                <HelpCircle size={13} className="shrink-0 mt-0.5" />
                <span>
                  Estimativas conservadoras baseadas em médias de mercado e cases reais de digitalização de pequenos negócios. Resultados reais variam de acordo com praça, cardápio/oferta e execução do atendimento.
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* WHY DIGITAL INVESTMENTS ARE CRITICAL */}
      <section className="container mx-auto px-4 md:px-6 py-16 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">
            POR QUE CADA SERVIÇO DA SONHO STUDIO SE PAGA RÁPIDO?
          </h2>
          <p className="text-gray-400">
            Não criamos projetos para ficarem parados na gaveta. Todo design, código e vídeo é desenvolvido com foco direto em gerar faturamento e economizar tempo do dono do negócio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <div className="w-10 h-10 bg-brand-accent/20 text-brand-accent rounded-xl flex items-center justify-center font-black mb-4">
              01
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">Canal Próprio Sem Comissões</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              No delivery ou comércio, cada pedido que entra pelo seu Web App ou WhatsApp próprio economiza até 27% de taxas que ficariam com intermediários.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <div className="w-10 h-10 bg-brand-accent/20 text-brand-accent rounded-xl flex items-center justify-center font-black mb-4">
              02
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">Atendimento Sem Gargalo</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Respostas em até 5 segundos 24h por dia aumentam a taxa de conversão em mais de 30%. O cliente não desiste de esperar e não compra do concorrente.
            </p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
            <div className="w-10 h-10 bg-brand-accent/20 text-brand-accent rounded-xl flex items-center justify-center font-black mb-4">
              03
            </div>
            <h3 className="font-heading font-bold text-lg mb-2">Percepção de Alto Padrão</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Fotos com ambientação comercial e vídeos verticais aumentam o ticket médio naturalmente, permitindo cobrar valores justos e vender combos mais lucrativos.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
