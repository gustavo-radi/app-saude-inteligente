"use client";

import { useState } from 'react';
import { ShoppingBag, Search, Filter, Star, Heart } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', name: 'Todos' },
  { id: 'mental', name: 'Saúde Mental' },
  { id: 'physical', name: 'Saúde Física' },
  { id: 'supplements', name: 'Suplementos' },
  { id: 'equipment', name: 'Equipamentos' },
  { id: 'books', name: 'Livros' },
];

export default function LojaPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600">
              <ShoppingBag className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Loja de Produtos</h1>
              <p className="text-gray-600">Produtos especializados em saúde mental e física</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="mb-8 flex flex-wrap gap-2">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-purple-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Empty State */}
        <div className="text-center py-20">
          <ShoppingBag className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhum produto cadastrado</h3>
          <p className="text-gray-600">Ainda não há produtos disponíveis na loja</p>
        </div>

        {/* Vendor CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Seja um Vendedor</h2>
            <p className="text-gray-600 mb-6">
              Cadastre-se como vendedor e alcance milhares de clientes interessados em saúde e bem-estar
            </p>
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:shadow-xl hover:scale-105 transition-all">
              Cadastrar como Vendedor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
