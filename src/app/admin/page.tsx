"use client";

import { useState } from 'react';
import {
  LayoutDashboard,
  Users,
  ShoppingBag,
  Calendar,
  DollarSign,
  TrendingUp,
  Settings,
  FileText,
  AlertCircle,
  CheckCircle,
  XCircle,
  Eye
} from 'lucide-react';

export default function AdminPage() {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'users' | 'sales' | 'consultations' | 'moderation'>('overview');

  // Dados simulados
  const stats = {
    users: {
      total: 10234,
      free: 8120,
      basic: 1234,
      medium: 678,
      premium: 202,
      newThisMonth: 456,
    },
    sales: {
      total: 1567,
      revenue: 234567.89,
      platformRevenue: 35185.18, // 15% de taxa
    },
    consultations: {
      total: 892,
      revenue: 89200.00,
      platformRevenue: 17840.00, // 20% de taxa
    },
    professionals: {
      total: 234,
      active: 189,
    },
    sellers: {
      total: 156,
      active: 123,
    },
  };

  const recentSales = [
    { id: '1', product: 'Livro: Mindfulness', seller: 'Editora Bem-Estar', buyer: 'João Silva', value: 49.90, fee: 7.49, date: '2024-01-15' },
    { id: '2', product: 'Suplemento Omega-3', seller: 'Saúde Natural', buyer: 'Maria Santos', value: 89.90, fee: 13.49, date: '2024-01-15' },
    { id: '3', product: 'Tapete de Yoga', seller: 'Yoga Shop', buyer: 'Pedro Costa', value: 129.90, fee: 19.49, date: '2024-01-14' },
  ];

  const recentConsultations = [
    { id: '1', professional: 'Dra. Ana Silva', patient: 'Carlos Oliveira', value: 150.00, fee: 30.00, date: '2024-01-15', status: 'confirmed' },
    { id: '2', professional: 'Dr. Paulo Santos', patient: 'Juliana Lima', value: 200.00, fee: 40.00, date: '2024-01-15', status: 'completed' },
    { id: '3', professional: 'Clínica Mente Sã', patient: 'Roberto Alves', value: 180.00, fee: 36.00, date: '2024-01-14', status: 'scheduled' },
  ];

  const pendingModeration = [
    { id: '1', type: 'post', author: 'Dr. João Mendes', title: 'Como lidar com ansiedade social', status: 'pending' },
    { id: '2', type: 'product', seller: 'Loja Saúde+', title: 'Novo suplemento natural', status: 'pending' },
    { id: '3', type: 'professional', name: 'Dra. Carla Souza', specialty: 'Psicologia Clínica', status: 'pending' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-gray-800 to-gray-900">
              <LayoutDashboard className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Painel Administrativo</h1>
              <p className="text-gray-600">Gerencie toda a plataforma</p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <Users className="h-6 w-6 text-blue-600" />
                <span className="text-sm font-medium text-gray-600">Usuários</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">{stats.users.total.toLocaleString()}</div>
              <div className="text-sm text-green-600 mt-1">+{stats.users.newThisMonth} este mês</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <ShoppingBag className="h-6 w-6 text-purple-600" />
                <span className="text-sm font-medium text-gray-600">Vendas</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">{stats.sales.total}</div>
              <div className="text-sm text-gray-600 mt-1">R$ {stats.sales.revenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="h-6 w-6 text-green-600" />
                <span className="text-sm font-medium text-gray-600">Consultas</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">{stats.consultations.total}</div>
              <div className="text-sm text-gray-600 mt-1">R$ {stats.consultations.revenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="h-6 w-6 text-yellow-600" />
                <span className="text-sm font-medium text-gray-600">Receita Plataforma</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">
                R$ {(stats.sales.platformRevenue + stats.consultations.platformRevenue).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </div>
              <div className="text-sm text-gray-600 mt-1">Taxas cobradas</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <AlertCircle className="h-6 w-6 text-orange-600" />
                <span className="text-sm font-medium text-gray-600">Moderação</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">{pendingModeration.length}</div>
              <div className="text-sm text-orange-600 mt-1">Pendentes</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {[
            { id: 'overview', label: 'Visão Geral', icon: TrendingUp },
            { id: 'users', label: 'Usuários', icon: Users },
            { id: 'sales', label: 'Vendas', icon: ShoppingBag },
            { id: 'consultations', label: 'Consultas', icon: Calendar },
            { id: 'moderation', label: 'Moderação', icon: FileText },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${
                  selectedTab === tab.id
                    ? 'bg-gradient-to-r from-gray-800 to-gray-900 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-400'
                }`}
              >
                <Icon className="h-5 w-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="space-y-6">
          {selectedTab === 'overview' && (
            <>
              {/* Revenue Chart */}
              <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Receita da Plataforma</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Vendas na Loja</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total de Vendas:</span>
                        <span className="font-bold">R$ {stats.sales.revenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Taxa (15%):</span>
                        <span className="font-bold text-green-600">R$ {stats.sales.platformRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Vendedores Recebem:</span>
                        <span className="font-bold">R$ {(stats.sales.revenue - stats.sales.platformRevenue).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Consultas</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total de Consultas:</span>
                        <span className="font-bold">R$ {stats.consultations.revenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Taxa (20%):</span>
                        <span className="font-bold text-green-600">R$ {stats.consultations.platformRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Profissionais Recebem:</span>
                        <span className="font-bold">R$ {(stats.consultations.revenue - stats.consultations.platformRevenue).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Users by Plan */}
              <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Usuários por Plano</h2>
                <div className="grid sm:grid-cols-4 gap-4">
                  <div className="p-4 rounded-xl bg-gray-50 border-2 border-gray-200">
                    <div className="text-2xl font-bold text-gray-900">{stats.users.free.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Gratuito</div>
                  </div>
                  <div className="p-4 rounded-xl bg-blue-50 border-2 border-blue-200">
                    <div className="text-2xl font-bold text-blue-900">{stats.users.basic.toLocaleString()}</div>
                    <div className="text-sm text-blue-600">Básico</div>
                  </div>
                  <div className="p-4 rounded-xl bg-purple-50 border-2 border-purple-200">
                    <div className="text-2xl font-bold text-purple-900">{stats.users.medium.toLocaleString()}</div>
                    <div className="text-sm text-purple-600">Intermediário</div>
                  </div>
                  <div className="p-4 rounded-xl bg-pink-50 border-2 border-pink-200">
                    <div className="text-2xl font-bold text-pink-900">{stats.users.premium.toLocaleString()}</div>
                    <div className="text-sm text-pink-600">Premium</div>
                  </div>
                </div>
              </div>
            </>
          )}

          {selectedTab === 'sales' && (
            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vendas Recentes</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">Produto</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">Vendedor</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">Comprador</th>
                      <th className="px-4 py-3 text-right text-sm font-bold text-gray-900">Valor</th>
                      <th className="px-4 py-3 text-right text-sm font-bold text-gray-900">Taxa (15%)</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">Data</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentSales.map((sale) => (
                      <tr key={sale.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900">{sale.product}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{sale.seller}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{sale.buyer}</td>
                        <td className="px-4 py-3 text-sm text-right font-medium text-gray-900">
                          R$ {sale.value.toFixed(2).replace('.', ',')}
                        </td>
                        <td className="px-4 py-3 text-sm text-right font-medium text-green-600">
                          R$ {sale.fee.toFixed(2).replace('.', ',')}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">{sale.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {selectedTab === 'consultations' && (
            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Consultas Recentes</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-gray-200">
                      <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">Profissional</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">Paciente</th>
                      <th className="px-4 py-3 text-right text-sm font-bold text-gray-900">Valor</th>
                      <th className="px-4 py-3 text-right text-sm font-bold text-gray-900">Taxa (20%)</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">Data</th>
                      <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentConsultations.map((consult) => (
                      <tr key={consult.id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm text-gray-900">{consult.professional}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">{consult.patient}</td>
                        <td className="px-4 py-3 text-sm text-right font-medium text-gray-900">
                          R$ {consult.value.toFixed(2).replace('.', ',')}
                        </td>
                        <td className="px-4 py-3 text-sm text-right font-medium text-green-600">
                          R$ {consult.fee.toFixed(2).replace('.', ',')}
                        </td>
                        <td className="px-4 py-3 text-sm text-gray-600">{consult.date}</td>
                        <td className="px-4 py-3">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            consult.status === 'completed' ? 'bg-green-100 text-green-700' :
                            consult.status === 'confirmed' ? 'bg-blue-100 text-blue-700' :
                            'bg-yellow-100 text-yellow-700'
                          }`}>
                            {consult.status === 'completed' ? 'Concluída' :
                             consult.status === 'confirmed' ? 'Confirmada' :
                             'Agendada'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {selectedTab === 'moderation' && (
            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Itens Pendentes de Moderação</h2>
              <div className="space-y-4">
                {pendingModeration.map((item) => (
                  <div key={item.id} className="p-4 rounded-xl border-2 border-orange-200 bg-orange-50">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 rounded-full bg-orange-200 text-orange-800 text-xs font-medium">
                            {item.type === 'post' ? 'Publicação' : item.type === 'product' ? 'Produto' : 'Profissional'}
                          </span>
                          <span className="text-sm text-gray-600">
                            {item.type === 'post' && `por ${item.author}`}
                            {item.type === 'product' && `de ${item.seller}`}
                            {item.type === 'professional' && item.specialty}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900">
                          {item.type === 'post' && item.title}
                          {item.type === 'product' && item.title}
                          {item.type === 'professional' && item.name}
                        </h3>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button className="p-2 rounded-xl bg-green-500 text-white hover:bg-green-600 transition-all">
                          <CheckCircle className="h-5 w-5" />
                        </button>
                        <button className="p-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition-all">
                          <XCircle className="h-5 w-5" />
                        </button>
                        <button className="p-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition-all">
                          <Eye className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Settings */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 text-white">
          <div className="flex items-start gap-4">
            <Settings className="h-8 w-8 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold mb-2">Configurações da Plataforma</h3>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                  <div className="text-sm text-gray-300 mb-1">Taxa da Loja</div>
                  <div className="text-2xl font-bold">15%</div>
                </div>
                <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm">
                  <div className="text-sm text-gray-300 mb-1">Taxa de Consultas</div>
                  <div className="text-2xl font-bold">20%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
