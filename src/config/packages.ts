import { serviceImages } from './images';

export interface Package {
  id: string;
  name: string;
  description: string;
  price: number;
  deliveryTime: string;
  badge?: string;
  includes: string[];
  image: string;
}

export const packages: Package[] = [
  {
    id: 'presenca-local',
    name: 'Presença Local',
    description: 'Ideal para quem ainda depende praticamente só de Instagram e WhatsApp.',
    price: 1997,
    deliveryTime: 'Até 5 dias úteis',
    badge: 'MAIS FÁCIL PARA COMEÇAR',
    image: serviceImages.cardapioDigitalBurger,
    includes: [
      'Landing Page Pro',
      '3 artes promocionais',
      '10 fotos tratadas/IA',
      'WhatsApp integrado',
      'Google Maps',
    ]
  },
  {
    id: 'conteudo-turbo',
    name: 'Conteúdo Turbo',
    description: 'Acelere suas redes sociais com conteúdo em vídeo e imagens de alta qualidade.',
    price: 1797,
    deliveryTime: 'Até 5 dias úteis (1ª entrega)',
    badge: 'MAIS CONTEÚDO',
    image: serviceImages.producaoVideoReels,
    includes: [
      '4 Reels',
      '10 artes',
      '10 imagens comerciais tratadas/IA',
      '1 banner promocional',
    ]
  },
  {
    id: 'negocio-digital',
    name: 'Negócio Digital',
    description: 'A base completa que todo pequeno negócio precisa para crescer online.',
    price: 1997,
    deliveryTime: 'Até 5 dias úteis (1ª versão)',
    badge: 'MAIS VENDIDO',
    image: serviceImages.equipeSonhoStudio,
    includes: [
      'Site Profissional',
      '1 Reel',
      '5 artes',
      '10 fotos tratadas/IA',
      'WhatsApp integrado',
      'SEO básico e Analytics',
    ]
  },
  {
    id: 'delivery-boost',
    name: 'Delivery Boost',
    description: 'Feito especialmente para restaurantes, pizzarias, adegas e dark kitchens.',
    price: 1997,
    deliveryTime: 'Até 5 dias úteis (1ª versão)',
    badge: 'RESTAURANTES',
    image: serviceImages.deliveryCozinhaPedidos,
    includes: [
      'Delivery Web App',
      'Cardápio Digital',
      '1 vídeo propaganda',
      '5 artes',
      'QR Code de mesa',
      'WhatsApp integrado',
    ]
  },
  {
    id: 'agenda-cheia',
    name: 'Agenda Cheia',
    description: 'Ideal para dentistas, nutricionistas, psicólogos, clínicas e salões.',
    price: 1997,
    deliveryTime: 'Até 5 dias úteis (1ª versão)',
    badge: 'CLÍNICAS & SERVIÇOS',
    image: serviceImages.agendamentoClinicaApp,
    includes: [
      'Web App de Agendamento',
      'Landing Page',
      'Chatbot Inicial',
      '5 artes para redes',
    ]
  }
];

export const recurringPlans = [
  {
    id: 'marketing-local',
    name: 'Marketing Local',
    description: 'Sua presença digital gerenciada, sem complicação.',
    price: 597,
    period: '/mês',
    deliveryTime: '1º lote em até 5 dias úteis',
    includes: [
      '8 artes',
      '4 Reels',
      '2 campanhas promocionais',
      'Copy e calendário de conteúdo',
      '1 reunião estratégica mensal',
      'Relatório simplificado'
    ],
    note: 'Não inclui verba de mídia paga.'
  }
];
