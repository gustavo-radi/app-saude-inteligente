import { Plan } from './types';

export const PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Gratuito',
    price: 0,
    features: [
      'Acesso básico à loja',
      'Chat com IA limitado (10 mensagens/dia)',
      'Publicações e curiosidades básicas',
      'Condicionamento limitado',
      'Visualizar perfis de profissionais',
    ],
    limits: {
      aiChatMessages: 10,
      postsPerDay: 0,
      conditioningLevel: 'basic',
    },
  },
  {
    id: 'basic',
    name: 'Básico',
    price: 29.90,
    features: [
      'Tudo do plano gratuito',
      'Chat com IA (50 mensagens/dia)',
      'Condicionamento avançado inicial',
      'Mais opções de desafios',
      'E-books simples',
      'Cupons de desconto na loja (5%)',
      'Agendamento de consultas',
    ],
    limits: {
      aiChatMessages: 50,
      postsPerDay: 0,
      conditioningLevel: 'intermediate',
    },
  },
  {
    id: 'medium',
    name: 'Intermediário',
    price: 59.90,
    features: [
      'Tudo do plano básico',
      'Chat com IA (200 mensagens/dia)',
      'Treinos guiados completos',
      'Meditações completas',
      'Relatórios pessoais da IA',
      'Condicionamento profundo',
      'Cupons de desconto (10%)',
      'Prioridade no agendamento',
    ],
    limits: {
      aiChatMessages: 200,
      postsPerDay: 0,
      conditioningLevel: 'advanced',
    },
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 99.90,
    features: [
      'Acesso total e irrestrito',
      'Chat com IA ilimitado (texto + voz)',
      'Condicionamento máximo personalizado',
      'Todos os e-books e treinos',
      'Relatórios comportamentais avançados',
      'Postagens ilimitadas (profissionais)',
      'Máximos descontos (15%)',
      'Suporte prioritário',
      'Acesso antecipado a novos recursos',
    ],
    limits: {
      aiChatMessages: undefined, // ilimitado
      postsPerDay: undefined, // ilimitado
      conditioningLevel: 'unlimited',
    },
  },
];

export const PLATFORM_FEE_PRODUCTS = 0.15; // 15% para produtos
export const PLATFORM_FEE_APPOINTMENTS = 0.20; // 20% para consultas
