import Link from 'next/link';
import { 
  ShoppingBag, 
  Brain, 
  MessageSquare, 
  Calendar, 
  FileText, 
  TrendingUp,
  Sparkles,
  Shield,
  Users,
  ArrowRight,
  Check
} from 'lucide-react';
import { PLANS } from '@/lib/plans';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Plataforma Completa de Bem-Estar
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Sua Jornada de{' '}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Saúde Mental e Física
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Conecte-se com profissionais qualificados, acesse produtos especializados e evolua com inteligência artificial personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/condicionamento"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:shadow-2xl hover:scale-105 transition-all"
              >
                Começar Agora
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="#planos"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-gray-700 font-medium border-2 border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all"
              >
                Ver Planos
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tudo que você precisa em um só lugar
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Uma plataforma completa para cuidar da sua saúde mental e física com tecnologia de ponta
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 - Loja */}
            <Link href="/loja" className="group">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-2xl transition-all hover:scale-105">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-purple-600 mb-6">
                  <ShoppingBag className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Loja Especializada</h3>
                <p className="text-gray-600 mb-4">
                  Produtos selecionados para saúde mental e física, de vendedores verificados.
                </p>
                <span className="text-purple-600 font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Explorar loja <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>

            {/* Feature 2 - Condicionamento */}
            <Link href="/condicionamento" className="group">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 hover:shadow-2xl transition-all hover:scale-105">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-pink-600 mb-6">
                  <Brain className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Condicionamento IA</h3>
                <p className="text-gray-600 mb-4">
                  Evolução personalizada com metas, desafios e recomendações inteligentes.
                </p>
                <span className="text-pink-600 font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Começar evolução <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>

            {/* Feature 3 - Chat IA */}
            <Link href="/chat" className="group">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-2xl transition-all hover:scale-105">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 mb-6">
                  <MessageSquare className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Chat com IA</h3>
                <p className="text-gray-600 mb-4">
                  Converse por texto ou voz com IA especializada em bem-estar.
                </p>
                <span className="text-blue-600 font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Iniciar conversa <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>

            {/* Feature 4 - Profissionais */}
            <Link href="/profissionais" className="group">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-2xl transition-all hover:scale-105">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 mb-6">
                  <Calendar className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Profissionais</h3>
                <p className="text-gray-600 mb-4">
                  Agende consultas com psicólogos e clínicas verificadas.
                </p>
                <span className="text-green-600 font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Ver profissionais <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>

            {/* Feature 5 - Publicações */}
            <Link href="/publicacoes" className="group">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-orange-100 hover:shadow-2xl transition-all hover:scale-105">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 mb-6">
                  <FileText className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Publicações</h3>
                <p className="text-gray-600 mb-4">
                  Curiosidades e conteúdos sobre psicologia e comportamento.
                </p>
                <span className="text-orange-600 font-medium group-hover:gap-2 inline-flex items-center gap-1 transition-all">
                  Ler conteúdos <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>

            {/* Feature 6 - Evolução */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-100">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 mb-6">
                <TrendingUp className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Evolução Contínua</h3>
              <p className="text-gray-600 mb-4">
                Acompanhe seu progresso com relatórios e estatísticas detalhadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-2">
                <Users className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2">10k+</div>
              <div className="text-purple-100">Usuários Ativos</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Calendar className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-purple-100">Profissionais</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2">2k+</div>
              <div className="text-purple-100">Produtos</div>
            </div>
            <div>
              <div className="flex items-center justify-center mb-2">
                <Shield className="h-8 w-8" />
              </div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-purple-100">Seguro</div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="planos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Escolha seu plano ideal
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comece gratuitamente e evolua conforme suas necessidades
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {PLANS.map((plan, index) => (
              <div
                key={plan.id}
                className={`relative p-8 rounded-2xl bg-white border-2 transition-all hover:shadow-2xl hover:scale-105 ${
                  plan.id === 'premium'
                    ? 'border-purple-500 shadow-xl'
                    : 'border-gray-200'
                }`}
              >
                {plan.id === 'premium' && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium">
                    Mais Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-gray-900">
                      R$ {plan.price.toFixed(2).replace('.', ',')}
                    </span>
                    {plan.price > 0 && (
                      <span className="text-gray-500">/mês</span>
                    )}
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 rounded-xl font-medium transition-all ${
                    plan.id === 'premium'
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-xl hover:scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {plan.price === 0 ? 'Começar Grátis' : 'Assinar Agora'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Pronto para transformar sua vida?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Junte-se a milhares de pessoas que já estão evoluindo com nossa plataforma
            </p>
            <Link
              href="/condicionamento"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium hover:shadow-2xl hover:scale-105 transition-all"
            >
              Começar Minha Jornada
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
