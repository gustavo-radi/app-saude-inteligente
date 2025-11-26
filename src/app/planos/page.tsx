"use client";

import { Check, Sparkles, Crown, Zap } from 'lucide-react';
import { PLANS } from '@/lib/plans';

export default function PlanosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Escolha o Melhor para Você
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Planos e Preços
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comece gratuitamente e evolua conforme suas necessidades. Todos os planos incluem acesso às funcionalidades principais.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {PLANS.map((plan) => {
            const isPremium = plan.id === 'premium';
            const isFree = plan.id === 'free';

            return (
              <div
                key={plan.id}
                className={`relative p-8 rounded-2xl bg-white transition-all hover:scale-105 ${
                  isPremium
                    ? 'border-4 border-purple-500 shadow-2xl'
                    : 'border-2 border-gray-200 shadow-lg'
                }`}
              >
                {/* Badge */}
                {isPremium && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium flex items-center gap-1">
                    <Crown className="h-4 w-4" />
                    Mais Popular
                  </div>
                )}

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
                      isPremium
                        ? 'bg-gradient-to-br from-purple-600 to-pink-600'
                        : isFree
                        ? 'bg-gradient-to-br from-gray-400 to-gray-500'
                        : 'bg-gradient-to-br from-blue-500 to-blue-600'
                    }`}
                  >
                    {isPremium ? (
                      <Crown className="h-8 w-8 text-white" />
                    ) : isFree ? (
                      <Zap className="h-8 w-8 text-white" />
                    ) : (
                      <Sparkles className="h-8 w-8 text-white" />
                    )}
                  </div>
                </div>

                {/* Plan Name */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-gray-900">
                      R$ {plan.price.toFixed(2).replace('.', ',')}
                    </span>
                    {plan.price > 0 && <span className="text-gray-500">/mês</span>}
                  </div>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-green-100 flex-shrink-0 mt-0.5">
                        <Check className="h-3 w-3 text-green-600" />
                      </div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-xl font-medium transition-all ${
                    isPremium
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl hover:scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {isFree ? 'Começar Grátis' : 'Assinar Agora'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Compare os Planos
          </h2>

          <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b-2 border-gray-200">
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-900">
                      Recursos
                    </th>
                    {PLANS.map((plan) => (
                      <th
                        key={plan.id}
                        className="px-6 py-4 text-center text-sm font-bold text-gray-900"
                      >
                        {plan.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {/* Chat Messages */}
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                      Mensagens Chat IA
                    </td>
                    {PLANS.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-center text-sm text-gray-600">
                        {plan.limits.chatMessages === 'unlimited'
                          ? 'Ilimitado'
                          : `${plan.limits.chatMessages}/dia`}
                      </td>
                    ))}
                  </tr>

                  {/* Posts */}
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                      Publicações (Profissionais)
                    </td>
                    {PLANS.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-center text-sm text-gray-600">
                        {plan.limits.posts === 'unlimited'
                          ? 'Ilimitado'
                          : plan.limits.posts === 0
                          ? 'Não'
                          : `${plan.limits.posts}/dia`}
                      </td>
                    ))}
                  </tr>

                  {/* AI Features */}
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                      Recursos de IA
                    </td>
                    {PLANS.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-center text-sm text-gray-600">
                        {plan.limits.aiFeatures === 'basic' && 'Básico'}
                        {plan.limits.aiFeatures === 'intermediate' && 'Intermediário'}
                        {plan.limits.aiFeatures === 'advanced' && 'Avançado'}
                        {plan.limits.aiFeatures === 'full' && 'Completo'}
                      </td>
                    ))}
                  </tr>

                  {/* Store Discount */}
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                      Desconto na Loja
                    </td>
                    {PLANS.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-center text-sm text-gray-600">
                        {plan.limits.storeDiscount}%
                      </td>
                    ))}
                  </tr>

                  {/* Consult Discount */}
                  <tr>
                    <td className="px-6 py-4 text-sm text-gray-900 font-medium">
                      Desconto em Consultas
                    </td>
                    {PLANS.map((plan) => (
                      <td key={plan.id} className="px-6 py-4 text-center text-sm text-gray-600">
                        {plan.limits.consultDiscount}%
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Perguntas Frequentes
          </h2>

          <div className="space-y-4">
            {[
              {
                q: 'Posso mudar de plano a qualquer momento?',
                a: 'Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento.',
              },
              {
                q: 'O que acontece se eu cancelar?',
                a: 'Você mantém acesso até o final do período pago e depois volta ao plano gratuito.',
              },
              {
                q: 'Os descontos são cumulativos?',
                a: 'Não, apenas o desconto do seu plano atual é aplicado.',
              },
              {
                q: 'Posso testar o Premium antes de assinar?',
                a: 'Oferecemos 7 dias de teste grátis do plano Premium para novos usuários.',
              },
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white border-2 border-gray-200 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
