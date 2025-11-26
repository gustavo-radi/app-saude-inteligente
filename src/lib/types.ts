// Tipos do Sistema de Saúde Mental e Física

export type UserRole = 'client' | 'professional' | 'vendor' | 'admin';

export type SubscriptionPlan = 'free' | 'basic' | 'medium' | 'premium';

// Usuário
export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  plan: SubscriptionPlan;
  avatar?: string;
  createdAt: Date;
}

// Planos
export interface Plan {
  id: SubscriptionPlan;
  name: string;
  price: number;
  features: string[];
  limits: {
    aiChatMessages?: number;
    postsPerDay?: number;
    conditioningLevel: 'basic' | 'intermediate' | 'advanced' | 'unlimited';
  };
}

// Produtos (Loja)
export interface Product {
  id: string;
  vendorId: string;
  name: string;
  description: string;
  category: 'mental' | 'physical' | 'supplements' | 'equipment' | 'books';
  price: number;
  stock: number;
  images: string[];
  createdAt: Date;
}

// Vendedor
export interface Vendor {
  id: string;
  userId: string;
  businessName: string;
  description: string;
  documents: string[];
  bankData: {
    bank: string;
    agency: string;
    account: string;
  };
  platformFee: number; // Porcentagem para a plataforma
  products: Product[];
  sales: Sale[];
}

// Venda
export interface Sale {
  id: string;
  productId: string;
  vendorId: string;
  buyerId: string;
  quantity: number;
  totalPrice: number;
  platformFee: number;
  vendorAmount: number;
  status: 'pending' | 'completed' | 'cancelled';
  createdAt: Date;
}

// Profissional (Psicólogo/Clínica)
export interface Professional {
  id: string;
  userId: string;
  name: string;
  specialty: string;
  crp?: string;
  description: string;
  type: 'psychologist' | 'clinic';
  location?: {
    address: string;
    city: string;
    state: string;
  };
  onlineService: boolean;
  consultationPrice: number;
  platformFee: number;
  availability: Availability[];
  appointments: Appointment[];
}

// Disponibilidade
export interface Availability {
  id: string;
  professionalId: string;
  dayOfWeek: number; // 0-6 (domingo-sábado)
  startTime: string; // "09:00"
  endTime: string; // "18:00"
  slotDuration: number; // minutos
}

// Agendamento
export interface Appointment {
  id: string;
  professionalId: string;
  clientId: string;
  date: Date;
  time: string;
  duration: number;
  price: number;
  platformFee: number;
  professionalAmount: number;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
}

// Publicação
export interface Post {
  id: string;
  authorId: string;
  authorType: 'ai' | 'professional';
  title: string;
  content: string;
  category: 'body' | 'behavior' | 'emotions' | 'psychology';
  tags: string[];
  likes: number;
  views: number;
  moderationStatus: 'pending' | 'approved' | 'rejected';
  createdAt: Date;
}

// Chat com IA
export interface ChatMessage {
  id: string;
  userId: string;
  role: 'user' | 'assistant';
  content: string;
  type: 'text' | 'audio';
  audioUrl?: string;
  createdAt: Date;
}

export interface ChatSession {
  id: string;
  userId: string;
  messages: ChatMessage[];
  context: UserContext;
  createdAt: Date;
  updatedAt: Date;
}

// Contexto do Usuário (para IA)
export interface UserContext {
  interests: string[];
  viewedProducts: string[];
  searchedTopics: string[];
  completedChallenges: string[];
  currentGoals: string[];
  behaviorPatterns: Record<string, any>;
}

// Condicionamento
export interface Conditioning {
  id: string;
  userId: string;
  dailyGoals: Goal[];
  weeklyChallenges: Challenge[];
  streak: number; // Dias consecutivos
  level: number;
  xp: number;
  recommendations: {
    products: Product[];
    professionals: Professional[];
    meditations: Meditation[];
    workouts: Workout[];
    ebooks: Ebook[];
  };
}

// Meta
export interface Goal {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  xpReward: number;
  date: Date;
}

// Desafio
export interface Challenge {
  id: string;
  title: string;
  description: string;
  difficulty: 'easy' | 'medium' | 'hard';
  xpReward: number;
  startDate: Date;
  endDate: Date;
  completed: boolean;
  progress: number; // 0-100
}

// Meditação
export interface Meditation {
  id: string;
  title: string;
  description: string;
  duration: number; // minutos
  audioUrl: string;
  category: string;
  requiredPlan: SubscriptionPlan;
}

// Treino
export interface Workout {
  id: string;
  title: string;
  description: string;
  exercises: Exercise[];
  duration: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  requiredPlan: SubscriptionPlan;
}

export interface Exercise {
  name: string;
  sets: number;
  reps: number;
  duration?: number;
  instructions: string;
}

// E-book
export interface Ebook {
  id: string;
  title: string;
  author: string;
  description: string;
  coverUrl: string;
  fileUrl: string;
  category: string;
  requiredPlan: SubscriptionPlan;
}

// Relatório (Admin)
export interface Report {
  id: string;
  type: 'sales' | 'appointments' | 'users' | 'revenue';
  period: {
    start: Date;
    end: Date;
  };
  data: Record<string, any>;
  generatedAt: Date;
}
