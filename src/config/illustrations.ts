import { serviceImages } from './images';

export interface IllustrationItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const illustrations: IllustrationItem[] = [
  {
    id: 1,
    title: 'Sonho Studio - Espaço de Criação',
    category: 'Estúdio & Equipe',
    image: serviceImages.equipeSonhoStudio,
    description: 'Bancadas de trabalho multimídia e ilhas de edição conectadas.',
  },
  {
    id: 2,
    title: 'Cardápio Digital & QR Code de Mesa',
    category: 'Restaurantes & Delivery',
    image: serviceImages.cardapioDigitalBurger,
    description: 'Menu online para hamburguerias, lanchonetes e restaurantes.',
  },
  {
    id: 3,
    title: 'Estúdio de Áudio & Produção de Jingles',
    category: 'Áudio & Música',
    image: serviceImages.estudioAudioJingle,
    description: 'Composição de jingles chiclete e identidade sonora comercial.',
  },
  {
    id: 4,
    title: 'Identidade Visual & Branding Manual',
    category: 'Design & Marca',
    image: serviceImages.identidadeVisualBranding,
    description: 'Guia de marca, tipografia, cores e materiais impressos.',
  },
  {
    id: 5,
    title: 'Catálogo Digital para Distribuidoras e Vinhos',
    category: 'Varejo & Distribuição',
    image: serviceImages.catalogoDigitalVinhos,
    description: 'Apresentação refinada de produtos e fechamento no WhatsApp.',
  },
  {
    id: 6,
    title: 'Gestão de Pedidos para Mercados e Empórios',
    category: 'Comércio Local',
    image: serviceImages.gestaoPedidosMercado,
    description: 'Painel em tablet para separação ágil e despacho de compras locais.',
  },
  {
    id: 7,
    title: 'Delivery Web App com Impressão de Comandas',
    category: 'Apps & Delivery',
    image: serviceImages.deliveryCozinhaPedidos,
    description: 'Controle de pedidos direto na cozinha sem taxas abusivas.',
  },
  {
    id: 8,
    title: 'Atendimento Automatizado no WhatsApp',
    category: 'Automação & IA',
    image: serviceImages.atendimentoWhatsappIa,
    description: 'Chatbot para triagem rápida, respostas frequentes e envio de ofertas.',
  },
  {
    id: 9,
    title: 'Gravação de Reels & Shorts com Estabilizador',
    category: 'Vídeo & Redes Sociais',
    image: serviceImages.producaoVideoReels,
    description: 'Vídeos verticais de alta qualidade com iluminação e captação 4K.',
  },
  {
    id: 10,
    title: 'Agendamento Online para Clínicas e Consultórios',
    category: 'Saúde & Estética',
    image: serviceImages.agendamentoClinicaApp,
    description: 'Marcação de consultas e procedimentos com confirmação automática.',
  },
  {
    id: 11,
    title: 'Fotos Comerciais com Ambientação IA',
    category: 'Conteúdo & IA',
    image: serviceImages.fotosIaProdutos,
    description: 'Tratamento de fotos com iluminação de estúdio publicitário.',
  },
  {
    id: 12,
    title: 'Site Institucional Profissional',
    category: 'Web & Presença',
    image: serviceImages.equipeSonhoStudio,
    description: 'Estrutura completa com design exclusivo e alta velocidade.',
  },
  {
    id: 13,
    title: 'Landing Page Orientada à Conversão',
    category: 'Web & Vendas',
    image: serviceImages.cardapioDigitalBurger,
    description: 'Página única de alta conversão para captura de clientes.',
  },
  {
    id: 14,
    title: 'Social Pack 10 Criativos Consistentes',
    category: 'Design & Redes',
    image: serviceImages.identidadeVisualBranding,
    description: 'Peças padronizadas prontas para publicação no feed e stories.',
  },
  {
    id: 15,
    title: 'Chatbot com Transbordo Humano',
    category: 'Automação & Suporte',
    image: serviceImages.atendimentoWhatsappIa,
    description: 'Encaminhamento fluido de clientes qualificados para a equipe.',
  },
  {
    id: 16,
    title: 'Integração de Cozinha e Despacho Express',
    category: 'Apps & Operação',
    image: serviceImages.deliveryCozinhaPedidos,
    description: 'Organização da comanda desde o preparo até a entrega final.',
  },
  {
    id: 17,
    title: 'Pack 4 Vídeos Curtos para Redes Sociais',
    category: 'Vídeo & Conteúdo',
    image: serviceImages.producaoVideoReels,
    description: 'Roteiro, edição, trilha e legendas para TikTok e Instagram.',
  },
  {
    id: 18,
    title: 'Vídeo Comercial Propaganda para Negócios Locais',
    category: 'Vídeo Institucional',
    image: serviceImages.equipeSonhoStudio,
    description: 'Apresentação envolvente de 30 a 60 segundos do seu comércio.',
  },
  {
    id: 19,
    title: 'Cardápio para Mesa & Totem de Autoatendimento',
    category: 'Restaurantes',
    image: serviceImages.cardapioDigitalBurger,
    description: 'QR Code elegante para mesas e displays com acesso instantâneo.',
  },
  {
    id: 20,
    title: 'Vinhetas e Trilha Comercial de Alta Definição',
    category: 'Áudio & Rádio',
    image: serviceImages.estudioAudioJingle,
    description: 'Áudio gravado e masterizado pronto para rádio, carro de som e reels.',
  },
  {
    id: 21,
    title: 'Banners Digitais e Artes Promocionais',
    category: 'Design Promocional',
    image: serviceImages.identidadeVisualBranding,
    description: 'Banners focados em datas comemorativas e promoções sazonais.',
  },
  {
    id: 22,
    title: 'Consultoria e Acompanhamento de Presença Digital',
    category: 'Estratégia & Resultados',
    image: serviceImages.equipeSonhoStudio,
    description: 'Planejamento e suporte contínuo para manter sua empresa relevante online.',
  }
];
