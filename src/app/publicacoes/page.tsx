"use client";

import { useState } from 'react';
import { FileText, Heart, Eye, Share2, Filter, Sparkles, User } from 'lucide-react';

const CATEGORIES = [
  { id: 'all', name: 'Todos' },
  { id: 'body', name: 'Corpo Humano' },
  { id: 'behavior', name: 'Comportamento' },
  { id: 'emotions', name: 'Emoções' },
  { id: 'psychology', name: 'Psicologia' },
];

const MOCK_POSTS = [
  {
    id: '1',
    title: 'Por que bocejamos quando vemos alguém bocejando?',
    content: 'O bocejo contagioso é um fenômeno fascinante ligado aos neurônios-espelho em nosso cérebro. Esses neurônios são ativados tanto quando realizamos uma ação quanto quando observamos alguém fazendo a mesma ação...',
    category: 'body',
    authorType: 'ai' as const,
    authorName: 'IA MindHealth',
    likes: 234,
    views: 1520,
    createdAt: new Date('2024-01-15'),
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop',
  },
  {
    id: '2',
    title: 'A importância da rotina para a saúde mental',
    content: 'Ter uma rotina estruturada pode reduzir significativamente os níveis de ansiedade e estresse. Nosso cérebro adora previsibilidade, pois isso economiza energia cognitiva...',
    category: 'psychology',
    authorType: 'professional' as const,
    authorName: 'Dra. Ana Silva',
    authorCrp: 'CRP 06/123456',
    likes: 189,
    views: 987,
    createdAt: new Date('2024-01-14'),
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop',
  },
  {
    id: '3',
    title: 'Como as emoções afetam nosso sistema imunológico',
    content: 'Estudos recentes mostram uma conexão direta entre nosso estado emocional e a eficácia do sistema imunológico. Emoções positivas podem fortalecer nossas defesas naturais...',
    category: 'emotions',
    authorType: 'ai' as const,
    authorName: 'IA MindHealth',
    likes: 312,
    views: 2145,
    createdAt: new Date('2024-01-13'),
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
  },
  {
    id: '4',
    title: 'Entendendo os gatilhos comportamentais',
    content: 'Gatilhos são estímulos que desencadeiam respostas automáticas em nosso comportamento. Identificá-los é o primeiro passo para mudanças positivas...',
    category: 'behavior',
    authorType: 'professional' as const,
    authorName: 'Dr. Carlos Mendes',
    authorCrp: 'CRP 01/654321',
    likes: 156,
    views: 743,
    createdAt: new Date('2024-01-12'),
    image: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=600&h=400&fit=crop',
  },
];

export default function PublicacoesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  const filteredPosts = MOCK_POSTS.filter((post) => {
    return selectedCategory === 'all' || post.category === selectedCategory;
  });

  const toggleLike = (postId: string) => {
    setLikedPosts((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600">
              <FileText className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Publicações</h1>
              <p className="text-gray-600">Curiosidades e conteúdos sobre psicologia e comportamento</p>
            </div>
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
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-orange-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border-2 border-gray-200 hover:border-orange-300 hover:shadow-2xl transition-all overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-sm font-medium text-gray-900">
                  {CATEGORIES.find(c => c.id === post.category)?.name}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Author */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full ${
                    post.authorType === 'ai' 
                      ? 'bg-gradient-to-br from-purple-500 to-pink-500' 
                      : 'bg-gradient-to-br from-green-500 to-emerald-500'
                  }`}>
                    {post.authorType === 'ai' ? (
                      <Sparkles className="h-5 w-5 text-white" />
                    ) : (
                      <User className="h-5 w-5 text-white" />
                    )}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{post.authorName}</div>
                    {post.authorType === 'professional' && (
                      <div className="text-sm text-gray-500">{post.authorCrp}</div>
                    )}
                  </div>
                </div>

                {/* Title & Content */}
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.content}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t-2 border-gray-100">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => toggleLike(post.id)}
                      className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors"
                    >
                      <Heart 
                        className={`h-5 w-5 ${likedPosts.has(post.id) ? 'fill-red-500 text-red-500' : ''}`}
                      />
                      <span className="text-sm font-medium">
                        {post.likes + (likedPosts.has(post.id) ? 1 : 0)}
                      </span>
                    </button>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Eye className="h-5 w-5" />
                      <span className="text-sm font-medium">{post.views}</span>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors">
                    <Share2 className="h-4 w-4" />
                    <span className="text-sm font-medium">Compartilhar</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <FileText className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Nenhuma publicação encontrada</h3>
            <p className="text-gray-600">Tente selecionar outra categoria</p>
          </div>
        )}

        {/* Info Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          {/* AI Posts */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Publicações da IA</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Nossa IA publica semanalmente curiosidades sobre corpo humano, comportamentos, emoções e psicologia.
            </p>
            <div className="text-sm text-purple-600 font-medium">
              Próxima publicação: Segunda-feira
            </div>
          </div>

          {/* Professional Posts */}
          <div className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-500">
                <User className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Profissionais</h2>
            </div>
            <p className="text-gray-600 mb-4">
              Psicólogos e clínicas cadastrados podem compartilhar conteúdos (1 publicação a cada 24 horas).
            </p>
            <button className="px-6 py-2 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 text-white font-medium hover:shadow-lg hover:scale-105 transition-all">
              Publicar Conteúdo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
