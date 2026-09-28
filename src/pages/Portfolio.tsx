import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { serviceImages } from '../config/images';

const categories = ['Todos', 'Restaurantes', 'Saúde', 'Comércio', 'Sites', 'Vídeos', 'Design', 'Apps', 'Automações'];

const projects = [
  {
    id: 1,
    title: 'Delivery Web App & Painel de Cozinha',
    category: 'Apps',
    tags: ['Restaurantes', 'Web', 'Apps'],
    isConceptual: false,
    image: serviceImages.deliveryCozinhaPedidos,
    description: 'Sistema completo com impressão de pedidos e acompanhamento em tempo real sem comissão de marketplace.'
  },
  {
    id: 2,
    title: 'Cardápio Digital & Totem QR Code',
    category: 'Web',
    tags: ['Restaurantes', 'Web', 'Design'],
    isConceptual: false,
    image: serviceImages.cardapioDigitalBurger,
    description: 'Interface rápida e responsiva para clientes visualizarem pratos com fotos profissionais e pedirem pelo WhatsApp.'
  },
  {
    id: 3,
    title: 'Atendimento WhatsApp IA & Chatbot',
    category: 'Automações',
    tags: ['Automações', 'Comércio'],
    isConceptual: false,
    image: serviceImages.atendimentoWhatsappIa,
    description: 'Fluxo inteligente para triagem rápida, envio de cardápios e confirmação automática de pedidos no balcão.'
  },
  {
    id: 4,
    title: 'Identidade Visual & Branding Manual',
    category: 'Design',
    tags: ['Design', 'Restaurantes', 'Comércio'],
    isConceptual: false,
    image: serviceImages.identidadeVisualBranding,
    description: 'Guia de marca, tipografia, paleta de cores e padronização visual para embalagens, cardápios e redes sociais.'
  },
  {
    id: 5,
    title: 'Catálogo Digital & Distribuidora de Vinhos',
    category: 'Web',
    tags: ['Comércio', 'Web', 'Apps'],
    isConceptual: false,
    image: serviceImages.catalogoDigitalVinhos,
    description: 'Vitrine digital moderna com fotos ambientadas, controle de estoque e botão direto de fechamento no WhatsApp.'
  },
  {
    id: 6,
    title: 'Gestão de Pedidos para Empório & Mercados',
    category: 'Apps',
    tags: ['Comércio', 'Apps', 'Automações'],
    isConceptual: false,
    image: serviceImages.gestaoPedidosMercado,
    description: 'Web app prático para separação de compras, atualização de status e comunicação com o cliente local.'
  },
  {
    id: 7,
    title: 'Agendamento Online para Clínicas & Consultórios',
    category: 'Apps',
    tags: ['Saúde', 'Apps', 'Sites'],
    isConceptual: false,
    image: serviceImages.agendamentoClinicaApp,
    description: 'Plataforma para marcação de consultas 24/7 com confirmação automática e redução de faltas.'
  },
  {
    id: 8,
    title: 'Produção Audiovisual & Reels Gastronômicos',
    category: 'Vídeos',
    tags: ['Vídeos', 'Restaurantes'],
    isConceptual: false,
    image: serviceImages.producaoVideoReels,
    description: 'Captação e edição dinâmica com iluminação de estúdio para impulsionar o engajamento e as vendas locais.'
  },
  {
    id: 9,
    title: 'Estúdio de Áudio & Jingle Express',
    category: 'Áudio',
    tags: ['Vídeos', 'Comércio'],
    isConceptual: false,
    image: serviceImages.estudioAudioJingle,
    description: 'Criação de identidade sonora marcante, locução profissional e trilhas para campanhas de rádio e redes.'
  },
  {
    id: 10,
    title: 'Fotos Comerciais & Ambientação com IA',
    category: 'Design',
    tags: ['Design', 'Comércio'],
    isConceptual: false,
    image: serviceImages.fotosIaProdutos,
    description: 'Transformação de fotos simples em imagens com estética de catálogo publicitário de alto padrão.'
  },
  {
    id: 11,
    title: 'Site Profissional & Ecossistema Sonho Studio',
    category: 'Sites',
    tags: ['Sites', 'Web'],
    isConceptual: false,
    image: serviceImages.equipeSonhoStudio,
    description: 'Páginas ultra velozes com UX refinada, alta taxa de conversão e integração com analytics e mídias.'
  },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('Todos');

  const filteredProjects = activeCategory === 'Todos'
    ? projects
    : projects.filter(p => p.tags.includes(activeCategory));

  return (
    <div className="bg-brand-dark min-h-screen pb-24">
      {/* HEADER */}
      <section className="bg-[#111111] text-brand-light pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6">
              NOSSO <span className="text-brand-accent">PORTFÓLIO.</span>
            </h1>
            <p className="text-lg text-gray-400">
              Conheça alguns dos nossos trabalhos e estudos de caso focados em gerar resultados reais para pequenos negócios.
            </p>
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
                onClick={() => setActiveCategory(category)}
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

      {/* GALLERY */}
      <section className="py-16 container mx-auto px-4 md:px-6">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                key={project.id}
                className="group cursor-pointer"
              >
                <div className="w-full aspect-[16/10] bg-black/40 rounded-xl mb-4 overflow-hidden relative border border-white/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
                  {project.isConceptual && (
                    <div className="absolute top-4 left-4 bg-[#111111] text-brand-light text-xs font-black px-3 py-1 rounded-full border border-white/10">
                      PROJETO CONCEITUAL
                    </div>
                  )}
                  <div className="absolute bottom-3 left-4 right-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="text-xs font-semibold bg-[#111111]/80 backdrop-blur-xs text-brand-light px-2.5 py-1 rounded-md border border-white/10">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-black mb-1 group-hover:text-brand-accent transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            Nenhum projeto encontrado para esta categoria no momento.
          </div>
        )}
      </section>
    </div>
  );
}
