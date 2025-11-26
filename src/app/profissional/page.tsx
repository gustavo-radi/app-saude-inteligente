"use client";

import { useState } from 'react';
import {
  Stethoscope,
  Calendar,
  DollarSign,
  TrendingUp,
  Clock,
  MapPin,
  Video,
  User,
  BarChart3,
  CheckCircle,
  XCircle
} from 'lucide-react';

export default function ProfissionalPage() {
  const [selectedTab, setSelectedTab] = useState<'overview' | 'schedule' | 'consultations' | 'reports'>('overview');

  // Dados simulados do profissional
  const professionalStats = {
    totalConsultations: 89,
    totalRevenue: 13350.00,
    platformFee: 2670.00, // 20%
    netRevenue: 10680.00,
    rating: 4.9,
    nextConsultation: '2024-01-16 14:00',
  };

  const schedule = [
    { day: 'Segunda', slots: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'] },
    { day: 'Terça', slots: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'] },
    { day: 'Quarta', slots: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'] },
    { day: 'Quinta', slots: ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'] },
    { day: 'Sexta', slots: ['09:00', '10:00', '11:00', '14:00', '15:00'] },
  ];

  const upcomingConsultations = [
    { id: '1', patient: 'Carlos Oliveira', date: '2024-01-16', time: '14:00', type: 'online', status: 'confirmed' },
    { id: '2', patient: 'Juliana Lima', date: '2024-01-16', time: '15:00', type: 'presential', status: 'confirmed' },
    { id: '3', patient: 'Roberto Alves', date: '2024-01-17', time: '09:00', type: 'online', status: 'pending' },
  ];

  const recentConsultations = [
    { id: '1', patient: 'Ana Santos', date: '2024-01-15', value: 150.00, fee: 30.00, net: 120.00, status: 'completed' },
    { id: '2', patient: 'Pedro Silva', date: '2024-01-15', value: 150.00, fee: 30.00, net: 120.00, status: 'completed' },
    { id: '3', patient: 'Maria Costa', date: '2024-01-14', value: 150.00, fee: 30.00, net: 120.00, status: 'completed' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-600 to-teal-600">
              <Stethoscope className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Área do Profissional</h1>
              <p className="text-gray-600">Gerencie suas consultas e agenda</p>
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
                R$ {professionalStats.netRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </div>
              <div className="text-sm text-gray-600 mt-1">Após taxa de 20%</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="h-6 w-6 text-blue-600" />
                <span className="text-sm font-medium text-gray-600">Consultas</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">{professionalStats.totalConsultations}</div>
              <div className="text-sm text-gray-600 mt-1">Total realizadas</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <BarChart3 className="h-6 w-6 text-yellow-600" />
                <span className="text-sm font-medium text-gray-600">Avaliação</span>
              </div>
              <div className="text-3xl font-bold text-gray-900">{professionalStats.rating}</div>
              <div className="text-sm text-gray-600 mt-1">⭐⭐⭐⭐⭐</div>
            </div>

            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <Clock className="h-6 w-6 text-purple-600" />
                <span className="text-sm font-medium text-gray-600">Próxima Consulta</span>
              </div>
              <div className="text-lg font-bold text-gray-900">Hoje 14:00</div>
              <div className="text-sm text-gray-600 mt-1">Carlos Oliveira</div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {[
            { id: 'overview', label: 'Visão Geral', icon: TrendingUp },
            { id: 'schedule', label: 'Agenda', icon: Calendar },
            { id: 'consultations', label: 'Consultas', icon: Stethoscope },
            { id: 'reports', label: 'Relatórios', icon: BarChart3 },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id as any)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium whitespace-nowrap transition-all ${
                  selectedTab === tab.id
                    ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-green-300'
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
                  <span className="text-gray-700 font-medium">Receita Total de Consultas</span>
                  <span className="text-xl font-bold text-gray-900">
                    R$ {professionalStats.totalRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-red-50">
                  <span className="text-red-700 font-medium">Taxa da Plataforma (20%)</span>
                  <span className="text-xl font-bold text-red-600">
                    - R$ {professionalStats.platformFee.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <div className="flex justify-between items-center p-4 rounded-xl bg-green-50 border-2 border-green-200">
                  <span className="text-green-700 font-medium">Você Recebe</span>
                  <span className="text-2xl font-bold text-green-600">
                    R$ {professionalStats.netRevenue.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
              </div>
            </div>

            {/* Upcoming Consultations */}
            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Próximas Consultas</h2>
              <div className="space-y-3">
                {upcomingConsultations.map((consult) => (
                  <div key={consult.id} className="p-4 rounded-xl border-2 border-gray-200 hover:border-green-300 transition-all">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <User className="h-5 w-5 text-gray-600" />
                          <h3 className="font-bold text-gray-900">{consult.patient}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            consult.status === 'confirmed' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {consult.status === 'confirmed' ? 'Confirmada' : 'Pendente'}
                          </span>
                        </div>
                        <div className="flex gap-4 text-sm text-gray-600">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {consult.date} às {consult.time}
                          </span>
                          <span className="flex items-center gap-1">
                            {consult.type === 'online' ? (
                              <>
                                <Video className="h-4 w-4" />
                                Online
                              </>
                            ) : (
                              <>
                                <MapPin className="h-4 w-4" />
                                Presencial
                              </>
                            )}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        <button className="p-2 rounded-xl bg-green-100 text-green-600 hover:bg-green-200 transition-all">
                          <CheckCircle className="h-5 w-5" />
                        </button>
                        <button className="p-2 rounded-xl bg-red-100 text-red-600 hover:bg-red-200 transition-all">
                          <XCircle className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Consultations */}
            <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Consultas Recentes</h2>
              <div className="space-y-3">
                {recentConsultations.map((consult) => (
                  <div key={consult.id} className="p-4 rounded-xl border-2 border-gray-200">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-bold text-gray-900">{consult.patient}</h3>
                        <p className="text-sm text-gray-600">{consult.date}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                        Concluída
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Valor: R$ {consult.value.toFixed(2)}</span>
                      <span className="text-red-600">Taxa: R$ {consult.fee.toFixed(2)}</span>
                      <span className="text-green-600 font-bold">Líquido: R$ {consult.net.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'schedule' && (
          <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Minha Agenda Semanal</h2>
            <div className="space-y-4">
              {schedule.map((day) => (
                <div key={day.day} className="p-4 rounded-xl border-2 border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-3">{day.day}</h3>
                  <div className="flex flex-wrap gap-2">
                    {day.slots.map((slot) => (
                      <button
                        key={slot}
                        className="px-4 py-2 rounded-xl bg-green-100 text-green-700 hover:bg-green-200 transition-all font-medium"
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {selectedTab === 'consultations' && (
          <div className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Histórico de Consultas</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">Paciente</th>
                    <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">Data</th>
                    <th className="px-4 py-3 text-right text-sm font-bold text-gray-900">Valor</th>
                    <th className="px-4 py-3 text-right text-sm font-bold text-gray-900">Taxa (20%)</th>
                    <th className="px-4 py-3 text-right text-sm font-bold text-gray-900">Líquido</th>
                    <th className="px-4 py-3 text-left text-sm font-bold text-gray-900">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentConsultations.map((consult) => (
                    <tr key={consult.id} className="hover:bg-gray-50">
                      <td className="px-4 py-3 text-sm text-gray-900">{consult.patient}</td>
                      <td className="px-4 py-3 text-sm text-gray-600">{consult.date}</td>
                      <td className="px-4 py-3 text-sm text-right font-medium text-gray-900">
                        R$ {consult.value.toFixed(2)}
                      </td>
                      <td className="px-4 py-3 text-sm text-right font-medium text-red-600">
                        R$ {consult.fee.toFixed(2)}
                      </td>
                      <td className="px-4 py-3 text-sm text-right font-medium text-green-600">
                        R$ {consult.net.toFixed(2)}
                      </td>
                      <td className="px-4 py-3">
                        <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                          Concluída
                        </span>
                      </td>
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
              <p className="text-gray-600">Em breve você terá acesso a relatórios detalhados de consultas</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
