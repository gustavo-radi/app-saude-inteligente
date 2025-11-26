"use client";

import { useState } from 'react';
import { User, Settings, CreditCard, Award, Heart, ShoppingBag, Calendar, LogOut, Crown } from 'lucide-react';
import { PLANS } from '@/lib/plans';

const MOCK_USER = {
  name: 'João Silva',
  email: 'joao.silva@email.com',
  plan: 'free',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
  joinedAt: new Date('2024-01-01'),
  stats: {
    streak: 7,
    level: 5,
    xp: 450,
    completedGoals: 23,
    appointments: 3,
    purchases: 5,
  },
};

export default function PerfilPage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'plan' | 'history'>('profile');

  const currentPlan = PLANS.find(p => p.id === MOCK_USER.plan);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
              <User className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Meu Perfil</h1>
              <p className="text-gray-600">Gerencie sua conta e preferências</p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* User Card */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-6 mb-6">
              <div className="text-center">
                <img
                  src={MOCK_USER.avatar}
                  alt={MOCK_USER.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-purple-200"
                />
                <h2 className="text-xl font-bold text-gray-900 mb-1">{MOCK_USER.name}</h2>
                <p className="text-gray-600 mb-4">{MOCK_USER.email}</p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 font-medium">
                  <Crown className="h-4 w-4" />
                  Plano {currentPlan?.name}
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">Estatísticas</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Ofensiva</span>
                  <span className="font-bold text-gray-900">{MOCK_USER.stats.streak} dias</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Nível</span>
                  <span className="font-bold text-gray-900">{MOCK_USER.stats.level}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">XP Total</span>
                  <span className="font-bold text-gray-900">{MOCK_USER.stats.xp}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Metas Completas</span>
                  <span className="font-bold text-gray-900">{MOCK_USER.stats.completedGoals}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="flex gap-2 mb-6 overflow-x-auto">
              <button
                onClick={() => setActiveTab('profile')}
                className={`px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
                  activeTab === 'profile'
                    ? 'bg-white text-purple-600 shadow-lg'
                    : 'text-gray-600 hover:bg-white/50'
                }`}
              >
                <Settings className="inline h-4 w-4 mr-2" />
                Configurações
              </button>
              <button
                onClick={() => setActiveTab('plan')}
                className={`px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
                  activeTab === 'plan'
                    ? 'bg-white text-purple-600 shadow-lg'
                    : 'text-gray-600 hover:bg-white/50'
                }`}
              >
                <CreditCard className="inline h-4 w-4 mr-2" />
                Plano e Pagamento
              </button>
              <button
                onClick={() => setActiveTab('history')}
                className={`px-6 py-3 rounded-xl font-medium transition-all whitespace-nowrap ${
                  activeTab === 'history'
                    ? 'bg-white text-purple-600 shadow-lg'
                    : 'text-gray-600 hover:bg-white/50'
                }`}
              >
                <Award className="inline h-4 w-4 mr-2" />
                Histórico
              </button>
            </div>

            {/* Profile Settings */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Informações Pessoais</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                      <input
                        type="text"
                        defaultValue={MOCK_USER.name}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        defaultValue={MOCK_USER.email}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Senha</label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none"
                      />
                    </div>
                  </div>
                  <button className="mt-6 w-full px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:shadow-xl hover:scale-105 transition-all">
                    Salvar Alterações
                  </button>
                </div>

                <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Preferências</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900">Notificações por Email</div>
                        <div className="text-sm text-gray-600">Receba atualizações e novidades</div>
                      </div>
                      <input type="checkbox" className="w-5 h-5 rounded" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium text-gray-900">Lembretes de Metas</div>
                        <div className="text-sm text-gray-600">Notificações diárias de progresso</div>
                      </div>
                      <input type="checkbox" className="w-5 h-5 rounded" defaultChecked />
                    </div>
                  </div>
                </div>

                <button className="w-full px-6 py-3 rounded-xl bg-red-50 text-red-600 font-medium hover:bg-red-100 transition-all flex items-center justify-center gap-2">
                  <LogOut className="h-5 w-5" />
                  Sair da Conta
                </button>
              </div>
            )}

            {/* Plan & Payment */}
            {activeTab === 'plan' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Plano Atual</h3>
                  <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900">{currentPlan?.name}</h4>
                        <p className="text-gray-600">
                          {currentPlan?.price === 0 ? 'Gratuito' : `R$ ${currentPlan?.price.toFixed(2).replace('.', ',')}/mês`}
                        </p>
                      </div>
                      <Crown className="h-12 w-12 text-purple-600" />
                    </div>
                    <ul className="space-y-2">
                      {currentPlan?.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="text-sm text-gray-600">✓ {feature}</li>
                      ))}
                    </ul>
                  </div>
                  {MOCK_USER.plan === 'free' && (
                    <button className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:shadow-xl hover:scale-105 transition-all">
                      Fazer Upgrade
                    </button>
                  )}
                </div>

                <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Outros Planos</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {PLANS.filter(p => p.id !== MOCK_USER.plan).slice(0, 2).map((plan) => (
                      <div key={plan.id} className="p-4 rounded-xl border-2 border-gray-200 hover:border-purple-300 transition-all">
                        <h4 className="font-bold text-gray-900 mb-2">{plan.name}</h4>
                        <div className="text-2xl font-bold text-purple-600 mb-3">
                          R$ {plan.price.toFixed(2).replace('.', ',')}
                          {plan.price > 0 && <span className="text-sm text-gray-500">/mês</span>}
                        </div>
                        <button className="w-full px-4 py-2 rounded-lg bg-purple-100 text-purple-700 font-medium hover:bg-purple-200 transition-all">
                          Ver Detalhes
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* History */}
            {activeTab === 'history' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Consultas Agendadas</h3>
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-green-50 border-2 border-green-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Calendar className="h-5 w-5 text-green-600" />
                          <div>
                            <div className="font-medium text-gray-900">Dra. Ana Silva</div>
                            <div className="text-sm text-gray-600">15/01/2024 às 14:00</div>
                          </div>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-sm font-medium">
                          Confirmada
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Compras Recentes</h3>
                  <div className="space-y-3">
                    <div className="p-4 rounded-xl bg-purple-50 border-2 border-purple-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <ShoppingBag className="h-5 w-5 text-purple-600" />
                          <div>
                            <div className="font-medium text-gray-900">Kit Meditação Completo</div>
                            <div className="text-sm text-gray-600">R$ 149,90 • 10/01/2024</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Conquistas</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200">
                      <Award className="h-8 w-8 text-yellow-600 mb-2" />
                      <div className="font-bold text-gray-900">Primeira Semana</div>
                      <div className="text-sm text-gray-600">7 dias de ofensiva</div>
                    </div>
                    <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200">
                      <Heart className="h-8 w-8 text-blue-600 mb-2" />
                      <div className="font-bold text-gray-900">Meditador</div>
                      <div className="text-sm text-gray-600">10 meditações completas</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
