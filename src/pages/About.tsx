import { agencyConfig } from '../config/agency';
import fotoInstrutor from '../assets/images/foto-instrutor-1.jpeg';
import fotoVinicius from '../assets/images/foto-instrutor-2.jpeg';
import { serviceImages } from '../config/images';
import { Sparkles, Monitor, Disc3 } from 'lucide-react';

export function About() {
  return (
    <div className="bg-brand-dark min-h-screen pb-24">
      {/* HEADER */}
      <section className="bg-[#111111] text-brand-light pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6">
              SOBRE A <span className="text-brand-accent">{agencyConfig.name.toUpperCase()}.</span>
            </h1>
            <p className="text-lg text-gray-400">
              Somos uma agência digital focada na execução. Sem jargões complicados, sem reuniões intermináveis. Entregamos design, marketing e tecnologia rápido para o seu negócio vender mais.
            </p>
          </div>
        </div>
      </section>

      {/* STUDIO ENVIRONMENT SHOWCASE */}
      <section className="py-16 container mx-auto px-4 md:px-6">
        <div className="bg-white/5 rounded-2xl border border-white/20 p-8 md:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-brand-accent/20 text-brand-accent text-xs font-black px-3 py-1.5 rounded-full mb-4">
                <Sparkles size={14} /> NOSSO ESTÚDIO CRIATIVO
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">
                INFRAESTRUTURA DEDICADA À SUA MARCA.
              </h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Combinamos ilhas de edição audiovisual de ponta, captação 4K com estabilização, iluminação cênica de estúdio e estúdio dedicado para criação de áudio e jingles publicitários. Tudo integrado para agilizar cada entrega em até 5 dias úteis.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/30 p-4 rounded-xl border border-white/10">
                  <Monitor className="text-brand-accent mb-2" size={24} />
                  <h4 className="font-bold text-sm">Design & Edição</h4>
                  <p className="text-xs text-gray-400">Suíte completa Adobe & IA</p>
                </div>
                <div className="bg-black/30 p-4 rounded-xl border border-white/10">
                  <Disc3 className="text-brand-accent mb-2" size={24} />
                  <h4 className="font-bold text-sm">Áudio & Jingles</h4>
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
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 container mx-auto px-4 md:px-6 border-b border-white/20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">COMO FUNCIONA NOSSO PROCESSO</h2>
          <p className="text-gray-400 text-lg">Da ideia ao ar em tempo recorde.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {[
            { num: '01', title: 'VOCÊ CONTA O QUE PRECISA.', desc: 'Briefing rápido.' },
            { num: '02', title: 'NÓS DEFINIMOS O PLANO.', desc: 'Escopo, valor e prazo claros.' },
            { num: '03', title: 'A GENTE PRODUZ.', desc: 'Design, mídia ou tecnologia.' },
            { num: '04', title: 'VOCÊ APROVA.', desc: 'Rodada de ajustes conforme pacote.' },
            { num: '05', title: 'PUBLICAMOS.', desc: 'Seu novo ativo vai para o ar.' }
          ].map(step => (
            <div key={step.num} className="bg-white/5 p-6 rounded-xl border border-white/20">
              <div className="text-brand-accent font-heading font-black text-3xl mb-4">{step.num}</div>
              <h3 className="font-black text-brand-light mb-2 leading-tight">{step.title}</h3>
              <p className="text-sm text-gray-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="py-24 container mx-auto px-4 md:px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-black mb-4">QUEM VAI ATENDER VOCÊ</h2>
          <p className="text-gray-400 text-lg">Os criadores por trás da {agencyConfig.name}.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Denison */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 rounded-2xl border border-white/30">
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <div className="w-32 h-32 bg-white/5 rounded-xl overflow-hidden shrink-0 flex items-center justify-center border border-white/30">
                <img src={fotoInstrutor} alt="Denison Limeira" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-black text-brand-light mb-1">Denison Limeira</h3>
                <p className="text-brand-accent font-semibold text-sm mb-3">Designer Gráfico, Instrutor & Especialista IA</p>
                <div className="inline-block bg-[#111111]/5 px-3 py-1 text-xs font-black rounded-full">34 anos</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Profissional da área de Treinamento e Desenvolvimento Corporativo, com vários cursos na área de webdesign e gestão, além de aprender de forma autodidata ferramentas de edição e design desde 2005. Com mais de 15 anos de experiência em Customer Experience (CX), sendo 3 anos em T&D, desenvolvi mais de 500 profissionais em empresas como Starbucks, Subway e Atento, construindo uma base sólida para entender as necessidades reais das pessoas. Acredito que o conhecimento só ganha propósito quando compartilhado.
            </p>
          </div>

          {/* Vinicius */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 rounded-2xl border border-white/30">
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <div className="w-32 h-32 bg-white/5 rounded-xl overflow-hidden shrink-0 flex items-center justify-center border border-white/30">
                <img src={fotoVinicius} alt="Vinicius Cunha" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-black text-brand-light mb-1">Vinicius Cunha</h3>
                <p className="text-brand-accent font-semibold text-sm mb-3">Cinegrafista, Produtor de Eventos & Videomaker</p>
                <div className="inline-block bg-[#111111]/5 px-3 py-1 text-xs font-black rounded-full">22 anos</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Cinegrafista, fotógrafo, editor de vídeos e profissional em produção de eventos (casamentos, shows, corporativos) desde 2018. Falo inglês fluentemente desde os 8 anos de idade e possuo diversos cursos e conhecimento autodidata em design. Trabalhei atuando como Customer Experience (CX) na Meta (Facebook) em moderação de conteúdo e atendimento bilíngue para hóspedes e anfitriões do Airbnb, conciliando com prestação de serviços em produção de eventos corporativos, cinegrafista e fotógrafo.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
