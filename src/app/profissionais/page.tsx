"use client";

import { useState } from 'react';
import { Calendar, MapPin, Video, Star, Clock, Filter, Search } from 'lucide-react';

export default function ProfissionaisPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'psychologist' | 'clinic'>('all');
  const [filterOnline, setFilterOnline] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Profissionais</h1>
              <p className="text-gray-600">Encontre psicólogos e clínicas verificadas</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar profissionais ou especialidades..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-green-500 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap gap-3">
          <button
            onClick={() => setFilterType('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filterType === 'all'
                ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-green-300'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setFilterType('psychologist')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filterType === 'psychologist'
                ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-green-300'
            }`}
          >
            Psicólogos
          </button>
          <button
            onClick={() => setFilterType('clinic')}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filterType === 'clinic'
                ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-green-300'
            }`}
          >
            Clínicas
          </button>
          <button
            onClick={() => setFilterOnline(!filterOnline)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              filterOnline
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-300'
            }`}
          >
            <Video className="inline h-4 w-4 mr-2" />
            Atendimento Online
          </button>
        </div>

        {/* Empty State */}
        <div className="text-center py-20">
          <Calendar className="h-16 w-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhum profissional cadastrado</h3>
          <p className="text-gray-600">Ainda não há profissionais ou clínicas cadastrados na plataforma</p>
        </div>

        {/* Professional CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">É um Profissional?</h2>
            <p className="text-gray-600 mb-6">
              Cadastre-se na plataforma e conecte-se com milhares de pessoas que buscam apoio profissional
            </p>
            <button className="px-8 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium hover:shadow-xl hover:scale-105 transition-all">
              Cadastrar como Profissional
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
