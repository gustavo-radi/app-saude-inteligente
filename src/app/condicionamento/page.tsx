"use client";

import { useState } from 'react';
import { 
  Brain, 
  Target, 
  TrendingUp, 
  Award, 
  Book, 
  Dumbbell, 
  Heart,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Lock
} from 'lucide-react';

const MOCK_USER = {
  name: 'João Silva',
  plan: 'free',
  streak: 7,
  level: 5,
  xp: 450,
  xpToNextLevel: 500,
};

const DAILY_GOALS = [
  { id: '1', title: 'Meditar por 10 minutos', completed: true, xp: 20 },
  { id: '2', title: 'Fazer 30 minutos de exercício', completed: false, xp: 30 },
  { id: '3', title: 'Ler 20 páginas', completed: false, xp: 15 },
  { id: '4', title: 'Conversar com a IA sobre emoções', completed: true, xp: 25 },
];

const WEEKLY_CHALLENGES = [
  { 
    id: '1', 
    title: 'Semana da Gratidão', 
    description: 'Escreva 3 coisas pelas quais é grato todos os dias',
    progress: 60,
    difficulty: 'easy',
    xp: 100,
  },
  { 
    id: '2', 
    title: 'Desafio Fitness', 
    description: 'Complete 5 treinos de 30 minutos',
    progress: 40,
    difficulty: 'medium',
    xp: 150,
  },
];

const RECOMMENDATIONS = {
  products: [
    { id: '1', name: 'Tapete de Yoga Premium', price: 199.90, image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=200&h=200&fit=crop' },
    { id: '2', name: 'Diário de Gratidão', price: 49.90, image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?w=200&h=200&fit=crop' },
  ],
  meditations: [
    { id: '1', title: 'Meditação Guiada - Ansiedade', duration: 15, locked: false },
    { id: '2', title: 'Respiração Profunda', duration: 10, locked: false },
    { id: '3', title: 'Meditação Avançada', duration: 30, locked: true },
  ],
  workouts: [
    { id: '1', title: 'Treino em Casa - Iniciante', duration: 20, locked: false },
    { id: '2', title: 'Yoga para Relaxamento', duration: 25, locked: false },
    { id: '3', title: 'HIIT Avançado', duration: 30, locked: true },
  ],
};

export default function CondicionamentoPage() {
  const [activeTab, setActiveTab] = useState<'overview' | 'goals' | 'recommendations'>('overview');

  const completedGoals = DAILY_GOALS.filter(g => g.completed).length;
  const totalGoals = DAILY_GOALS.length;
  const progressPercentage = (MOCK_USER.xp / MOCK_USER.xpToNextLevel) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-pink-600">
              <Brain className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Condicionamento</h1>
              <p className="text-gray-600">Sua jornada de evolução pessoal</p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-orange-100">
                <Award className="h-5 w-5 text-orange-600" />
              </div>
              <span className="text-sm font-medium text-gray-600">Ofensiva</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">{MOCK_USER.streak} dias</div>
          </div>

          <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-purple-100">
                <TrendingUp className="h-5 w-5 text-purple-600" />
              </div>
              <span className="text-sm font-medium text-gray-600">Nível</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">{MOCK_USER.level}</div>
          </div>

          <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-blue-100">
                <Sparkles className="h-5 w-5 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-gray-600">XP</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">{MOCK_USER.xp}</div>
            <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 rounded-lg bg-green-100">
                <Target className="h-5 w-5 text-green-600" />
              </div>
              <span className="text-sm font-medium text-gray-600">Metas Hoje</span>
            </div>
            <div className="text-3xl font-bold text-gray-900">{completedGoals}/{totalGoals}</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
              activeTab === 'overview'
                ? 'bg-white text-purple-600 shadow-lg'
                : 'text-gray-600 hover:bg-white/50'
            }`}
          >
            Visão Geral
          </button>
          <button
            onClick={() => setActiveTab('goals')}
            className={`px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
              activeTab === 'goals'
                ? 'bg-white text-purple-600 shadow-lg'
                : 'text-gray-600 hover:bg-white/50'
            }`}
          >
            Metas e Desafios
          </button>
          <button
            onClick={() => setActiveTab('recommendations')}
            className={`px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
              activeTab === 'recommendations'
                ? 'bg-white text-purple-600 shadow-lg'
                : 'text-gray-600 hover:bg-white/50'
            }`}
          >
            Recomendações IA
          </button>
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Daily Goals */}
            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Metas Diárias</h2>
              <div className="space-y-3">
                {DAILY_GOALS.map((goal) => (
                  <div
                    key={goal.id}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      goal.completed
                        ? 'bg-green-50 border-green-200'
                        : 'bg-gray-50 border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`mt-0.5 ${goal.completed ? 'text-green-600' : 'text-gray-400'}`}>
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <div className={`font-medium ${goal.completed ? 'text-gray-500 line-through' : 'text-gray-900'}`}>
                          {goal.title}
                        </div>
                        <div className="text-sm text-gray-600">+{goal.xp} XP</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Challenges */}
            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Desafios Semanais</h2>
              <div className="space-y-4">
                {WEEKLY_CHALLENGES.map((challenge) => (
                  <div key={challenge.id} className="p-4 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-gray-900">{challenge.title}</h3>
                        <p className="text-sm text-gray-600">{challenge.description}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        challenge.difficulty === 'easy' ? 'bg-green-100 text-green-700' :
                        challenge.difficulty === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {challenge.difficulty === 'easy' ? 'Fácil' : challenge.difficulty === 'medium' ? 'Médio' : 'Difícil'}
                      </span>
                    </div>
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-gray-600">Progresso</span>
                        <span className="font-medium text-gray-900">{challenge.progress}%</span>
                      </div>
                      <div className="h-2 bg-white rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-600 to-pink-600 transition-all"
                          style={{ width: `${challenge.progress}%` }}
                        />
                      </div>
                      <div className="text-sm text-gray-600 mt-2">+{challenge.xp} XP ao completar</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'goals' && (
          <div className="p-8 rounded-2xl bg-white border-2 border-gray-200 shadow-lg text-center">
            <Target className="h-16 w-16 text-purple-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Metas e Desafios</h2>
            <p className="text-gray-600 mb-6">Visualização detalhada de todas as suas metas e desafios</p>
            <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:shadow-xl hover:scale-105 transition-all">
              Ver Todas as Metas
            </button>
          </div>
        )}

        {activeTab === 'recommendations' && (
          <div className="space-y-6">
            {/* Products */}
            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Produtos Recomendados</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {RECOMMENDATIONS.products.map((product) => (
                  <div key={product.id} className="flex gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                    <img src={product.image} alt={product.name} className="w-20 h-20 rounded-lg object-cover" />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
                      <div className="text-lg font-bold text-purple-600">R$ {product.price.toFixed(2).replace('.', ',')}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Meditations */}
            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Meditações Sugeridas</h2>
              <div className="space-y-3">
                {RECOMMENDATIONS.meditations.map((meditation) => (
                  <div key={meditation.id} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-100">
                        <Heart className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{meditation.title}</h3>
                        <p className="text-sm text-gray-600">{meditation.duration} minutos</p>
                      </div>
                    </div>
                    {meditation.locked ? (
                      <Lock className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Workouts */}
            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Treinos Recomendados</h2>
              <div className="space-y-3">
                {RECOMMENDATIONS.workouts.map((workout) => (
                  <div key={workout.id} className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-green-100">
                        <Dumbbell className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900">{workout.title}</h3>
                        <p className="text-sm text-gray-600">{workout.duration} minutos</p>
                      </div>
                    </div>
                    {workout.locked ? (
                      <Lock className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Upgrade CTA */}
        {MOCK_USER.plan === 'free' && (
          <div className="mt-8 p-8 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 text-white">
            <div className="max-w-2xl mx-auto text-center">
              <Sparkles className="h-12 w-12 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Desbloqueie Todo o Potencial</h2>
              <p className="text-purple-100 mb-6">
                Faça upgrade para Premium e tenha acesso ilimitado a todas as funcionalidades de condicionamento
              </p>
              <button className="px-8 py-3 rounded-xl bg-white text-purple-600 font-medium hover:shadow-xl hover:scale-105 transition-all">
                Ver Planos Premium
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
