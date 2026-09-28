import { serviceImages } from './images';

export type ServiceCategory = 'Todos' | 'Conteúdo' | 'Web' | 'Apps' | 'Automação' | 'Design' | 'Áudio';

export interface Service {
  id: string;
  name: string;
  description: string;
  category: ServiceCategory;
  price: number;
  deliveryTime: string;
  includes: string[];
  isPopular?: boolean;
  image: string;
}

export const services: Service[] = [
  {
    id: 'arte-social',
    name: 'Arte ou Banner Avulso',
    description: 'Post ou banner promocional sob medida.',
    category: 'Design',
    price: 77,
    deliveryTime: '2 dias úteis',
    includes: ['1 peça', '1 formato', '1 revisão'],
    image: serviceImages.arteBannerSocial,
  },
  {
    id: 'social-pack-10',
    name: 'Social Pack 10',
    description: '10 peças de feed ou story para manter a consistência.',
    category: 'Design',
    price: 597,
    deliveryTime: '3-5 dias úteis',
    includes: ['Identidade consistente', 'Textos principais', 'Variações', 'Pronto para postar'],
    image: serviceImages.socialPackGrid,
  },
  {
    id: 'fotos-ia-10',
    name: 'Fotos com IA (10 Imagens)',
    description: 'Melhoria, tratamento e ambientação comercial de suas fotos.',
    category: 'Conteúdo',
    price: 197,
    deliveryTime: '2-3 dias úteis',
    includes: ['Melhoria de qualidade', 'Background comercial', 'Formatos para redes'],
    image: serviceImages.fotosIaTratamento,
  },
  {
    id: 'reels-shorts',
    name: 'Reels & Shorts Express',
    description: 'Vídeos verticais curtos para divulgar produtos e ofertas.',
    category: 'Conteúdo',
    price: 397,
    deliveryTime: '2-3 dias úteis',
    includes: ['Roteiro', 'Edição', 'Legendas', 'Trilha sonora', '1 revisão'],
    image: serviceImages.reelsShortsApp,
  },
  {
    id: 'pack-4-videos',
    name: 'Pack 4 Vídeos Curtos',
    description: 'Pacote de vídeos para Reels, TikTok ou Shorts.',
    category: 'Conteúdo',
    price: 1197,
    deliveryTime: 'Até 5 dias úteis (1ª entrega)',
    includes: ['4 roteiros', 'Edição completa', 'Legendas e trilha', 'Adaptação de formatos opcional (+R$97)'],
    image: serviceImages.producaoVideoReels,
  },
  {
    id: 'video-propaganda',
    name: 'Vídeo Propaganda',
    description: 'Comercial de 30-60 segundos para seu negócio.',
    category: 'Conteúdo',
    price: 697,
    deliveryTime: '3-5 dias úteis',
    includes: ['Conceito', 'Roteiro', 'Edição', 'Locução ou voz IA', 'Trilha e textos'],
    image: serviceImages.producaoVideoReels,
  },
  {
    id: 'jingle',
    name: 'Jingle Express',
    description: 'Música marcante para comércios locais (até 45s).',
    category: 'Áudio',
    price: 497,
    deliveryTime: '2-3 dias úteis',
    includes: ['Conceito', 'Letra e melodia', 'Produção completa', 'Arquivo final em alta'],
    image: serviceImages.estudioAudioJingle,
  },
  {
    id: 'cardapio-digital',
    name: 'Cardápio Digital Express',
    description: 'O cardápio do seu restaurante online e fácil de acessar.',
    category: 'Web',
    price: 597,
    deliveryTime: '2-3 dias úteis',
    includes: ['Design responsivo', 'Categorias e produtos', 'Preços e fotos', 'Botão WhatsApp', 'QR Code de mesa'],
    image: serviceImages.cardapioDigitalBurger,
  },
  {
    id: 'landing-page',
    name: 'Landing Page Pro',
    description: 'Uma página longa orientada à conversão e captura de leads.',
    category: 'Web',
    price: 897,
    deliveryTime: '3-5 dias úteis',
    includes: ['Design personalizado', 'Copy estrutural', 'Formulário e WhatsApp', 'SEO e Analytics básico', 'Publicação'],
    image: serviceImages.landingPageMacbook,
  },
  {
    id: 'site-institucional',
    name: 'Site Profissional',
    description: 'Site institucional completo com até 5 páginas.',
    category: 'Web',
    price: 1297,
    deliveryTime: 'Até 5 dias úteis (1ª versão)',
    includes: ['UI personalizada', 'Responsivo', 'Formulário e WhatsApp', 'SEO técnico básico', 'Analytics'],
    isPopular: true,
    image: serviceImages.equipeSonhoStudio,
  },
  {
    id: 'agendamento-web-app',
    name: 'Agendamento Web App',
    description: 'Sistema prático para clínicas e profissionais organizarem a agenda.',
    category: 'Apps',
    price: 1397,
    deliveryTime: 'Até 5 dias úteis (MVP padrão)',
    includes: ['Serviços e profissionais', 'Datas e horários', 'Confirmação via contato', 'Painel básico'],
    image: serviceImages.agendamentoClinicaApp,
  },
  {
    id: 'delivery-web-app',
    name: 'Delivery Web App',
    description: 'Seu próprio aplicativo de delivery (PWA), sem taxas abusivas.',
    category: 'Apps',
    price: 1497,
    deliveryTime: 'Até 5 dias úteis (MVP padrão)',
    includes: ['Catálogo e adicionais', 'Carrinho e Pedido', 'WhatsApp/Endereço', 'Taxas de entrega configuráveis'],
    image: serviceImages.deliveryCozinhaPedidos,
  },
  {
    id: 'chatbot-ia',
    name: 'Atendimento IA (Setup)',
    description: 'Chatbot inteligente para WhatsApp ou site.',
    category: 'Automação',
    price: 697,
    deliveryTime: '3-5 dias úteis',
    includes: ['Configuração de fluxo', 'Perguntas frequentes (FAQ)', 'Coleta de dados', 'Transbordo humano'],
    image: serviceImages.atendimentoWhatsappIa,
  },
  {
    id: 'automacao',
    name: 'Automação Express',
    description: 'Integrações para facilitar o seu dia a dia (ex: Formulário -> Planilha).',
    category: 'Automação',
    price: 697,
    deliveryTime: '2-5 dias úteis',
    includes: ['Setup de 1 fluxo', 'Testes e validação', 'Conexão entre ferramentas'],
    image: serviceImages.gestaoPedidosMercado,
  }
];
