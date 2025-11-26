"use client";

import { useState } from 'react';
import {
  Store,
  Package,
  DollarSign,
  TrendingUp,
  Plus,
  Edit,
  Trash2,
  Eye,
  BarChart3
} from 'lucide-react';

export default function VendedorPage() {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'products' | 'sales' | 'reports'>('overview');

  // Dados simulados do vendedor
  const sellerStats = {
    totalSales: 156,
    totalRevenue: 23456.78,
    platformFee: 3518.52, // 15%
    netRevenue: 19938.26,
    activeProducts: 12,
    rating: 4.8,
  };

  const products = [
    { id: '1', name: 'Livro: Mindfulness para Iniciantes', price: 49.90, stock: 45, sales: 23, status: 'active' },
    { id: '2', name: 'Suplemento Omega-3 Premium', price: 89.90, stock: 12, sales: 18, status: 'active' },
    { id: '3', name: 'Tapete de Yoga Profissional', price: 129.90, stock: 8, sales: 15, status: 'active' },
    { id: '4', name: 'Kit Meditação Completo', price: 199.90, stock: 0, sales: 12, status: 'out_of_stock' },
  ];

  const recentSales = [
    { id: '1', product: 'Livro: Mindfulness', buyer: 'João Silva', value: 49.90, fee: 7.49, net: 42.41, date: '2024-01-15' },
    { id: '2', product: 'Suplemento Omega-3', buyer: 'Maria Santos', value: 89.90, fee: 13.49, net: 76.41, date: '2024-01-15' },
    { id: '3', product: 'Tapete de Yoga', buyer: 'Pedro Costa', value: 129.90, fee: 19.49, net: 110.41, date: '2024-01-14' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-pink-600">
              <Store className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Área do Vendedor</h1>
              <p className="text-gray-600">Gerencie seus produtos e vendas</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <DollarSign className="h-6 w-6 text-green-600" />
                <span className="text-sm font-medium text-gray-600">Receita Líquida</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">
                R$ {sellerStats.netRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </div>
              <div className="text-sm text-gray-600 mt-1">Após taxa de 15%</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="h-6 w-6 text-blue-600" />
                <span className="text-sm font-medium text-gray-600">Total de Vendas</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">{sellerStats.totalSales}</div>
              <div className="text-sm text-gray-600 mt-1">
                R$ {sellerStats.totalRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <Package className="h-6 w-6 text-purple-600" />
                <span className="text-sm font-medium text-gray-600">Produtos Ativos</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">{sellerStats.activeProducts}</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className="h-6 w-6 text-yellow-600" />
                <span className="text-sm font-medium text-gray-600">Avaliação</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">{sellerStats.rating}</div>
              <div className="text-sm text-gray-600 mt-1">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {[
            { id: 'overview', label: 'Visão Geral', icon: TrendingUp },
            { id: 'products', label: 'Produtos', icon: Package },
            { id: 'sales', label: 'Vendas', icon: DollarSign },
            { id: 'reports', label: 'Relatórios', icon: BarChart3 },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${
                  selectedTab === tab.id
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300'
                }`}
              >
                <Icon className="h-5 w-5" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        {selectedTab === 'overview' && (
          <div className="space-y-6">
            {/* Revenue Breakdown */}
            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Detalhamento de Receita</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-4 rounded-xl bg-gray-50">
                  <span className="text-gray-700 font-medium">Receita Total de Vendas</span>
                  <span className="text-xl font-bold text-gray-900">
                    R$ {sellerStats.totalRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-red-50">
                  <span className="text-red-700 font-medium">Taxa da Plataforma (15%)</span>
                  <span className="text-xl font-bold text-red-600">
                    - R$ {sellerStats.platformFee.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-green-50 border-2 border-green-200">
                  <span className="text-green-700 font-medium">Você Recebe</span>
                  <span className="text-2xl font-bold text-green-600">
                    R$ {sellerStats.netRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
            </div>

            {/* Recent Sales */}
            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Vendas Recentes</h2>
              <div className="space-y-3">
                {recentSales.map((sale) => (
                  <div key={sale.id} className="p-4 rounded-xl border-2 border-gray-200 hover:border-purple-300 transition-all">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-gray-900">{sale.product}</h3>
                        <p className="text-sm text-gray-600">Comprador: {sale.buyer}</p>
                      </div>
                      <span className="text-sm text-gray-500">{sale.date}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Valor: R$ {sale.value.toFixed(2)}</span>
                      <span className="text-red-600">Taxa: R$ {sale.fee.toFixed(2)}</span>
                      <span className="text-green-600 font-bold">Líquido: R$ {sale.net.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'products' && (
          <div className="space-y-6">
            {/* Add Product Button */}
            <button className="w-full p-6 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-3">
              <Plus className="h-6 w-6" />
              <span className="text-lg font-bold">Adicionar Novo Produto</span>
            </button>

            {/* Products List */}
            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Meus Produtos</h2>
              <div className="space-y-3">
                {products.map((product) => (
                  <div key={product.id} className="p-4 rounded-xl border-2 border-gray-200 hover:border-purple-300 transition-all">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="font-bold text-gray-900">{product.name}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            product.status === 'active' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-red-100 text-red-700'
                          }`}>
                            {product.status === 'active' ? 'Ativo' : 'Sem Estoque'}
                          </span>
                        </div>
                        <div className="flex gap-6 text-sm text-gray-600">
                          <span>Preço: R$ {product.price.toFixed(2)}</span>
                          <span>Estoque: {product.stock}</span>
                          <span>Vendas: {product.sales}</span>
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button className="p-2 rounded-xl bg-blue-100 text-blue-600 hover:bg-blue-200 transition-all">
                          <Eye className="h-5 w-5" />
                        </button>
                        <button className="p-2 rounded-xl bg-purple-100 text-purple-600 hover:bg-purple-200 transition-all">
                          <Edit className="h-5 w-5" />
                        </button>
                        <button className="p-2 rounded-xl bg-red-100 text-red-600 hover:bg-red-200 transition-all">
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'sales' && (
          <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Histórico de Vendas</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">Produto</th>
                    <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">Comprador</th>
                    <th className="px-4 py-3 text-right text-sm font-bold text-gray-900">Valor</th>
                    <th className="px-4 py-3 text-right text-sm font-bold text-gray-900">Taxa (15%)</th>
                    <th className="px-4 py-3 text-right text-sm font-bold text-gray-900">Líquido</th>
                    <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">Data</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentSales.map((sale) => (
                    <tr key={sale.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">{sale.product}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{sale.buyer}</td>
                      <td className="px-4 py-3 text-sm text-right font-medium text-gray-900">
                        R$ {sale.value.toFixed(2)}
                      </td>
                      <td className="px-4 py-3 text-sm text-right font-medium text-red-600">
                        R$ {sale.fee.toFixed(2)}
                      </td>
                      <td className="px-4 py-3 text-sm text-right font-medium text-green-600">
                        R$ {sale.net.toFixed(2)}
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600">{sale.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {selectedTab === 'reports' && (
          <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Relatórios e Estatísticas</h2>
            <div className="text-center py-16">
              <BarChart3 className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Relatórios em Desenvolvimento</h3>
              <p className="text-gray-600">Em breve você terá acesso a relatórios detalhados de vendas</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
