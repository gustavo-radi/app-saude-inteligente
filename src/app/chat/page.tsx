"use client";

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, Mic, MicOff, Trash2, Sparkles } from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Inicializar mensagens apenas no cliente para evitar hydration mismatch
  useEffect(() => {
    setIsMounted(true);
    setMessages([
      {
        id: '1',
        role: 'assistant',
        content: 'Olá! Sou sua assistente de bem-estar. Como posso ajudá-lo hoje? Podemos conversar sobre suas emoções, objetivos ou qualquer coisa que esteja em sua mente.',
        timestamp: new Date(),
      },
    ]);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    // Simular resposta da IA
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'Entendo como você está se sentindo. É completamente normal ter esses pensamentos. Vamos trabalhar juntos para encontrar estratégias que possam ajudá-lo. Que tal começarmos com uma técnica de respiração?',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Implementar gravação de áudio aqui
  };

  const clearHistory = () => {
    if (confirm('Tem certeza que deseja limpar todo o histórico de conversas?')) {
      setMessages([
        {
          id: '1',
          role: 'assistant',
          content: 'Olá! Sou sua assistente de bem-estar. Como posso ajudá-lo hoje? Podemos conversar sobre suas emoções, objetivos ou qualquer coisa que esteja em sua mente.',
          timestamp: new Date(),
        },
      ]);
    }
  };

  // Renderizar loading state durante hydration
  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <Sparkles className="h-12 w-12 text-purple-600 animate-pulse mx-auto mb-4" />
          <p className="text-gray-600">Carregando chat...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8 h-[calc(100vh-4rem)]">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600">
              <MessageSquare className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Chat com IA</h1>
              <p className="text-gray-600">Converse sobre bem-estar e saúde mental</p>
            </div>
          </div>
          <button
            onClick={clearHistory}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white border-2 border-gray-200 text-gray-700 hover:border-red-300 hover:text-red-600 transition-all"
          >
            <Trash2 className="h-4 w-4" />
            <span className="hidden sm:inline">Limpar Histórico</span>
          </button>
        </div>

        {/* Chat Container */}
        <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-2xl h-[calc(100%-8rem)] flex flex-col">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] sm:max-w-[70%] rounded-2xl p-4 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white'
                      : 'bg-gray-100 text-gray-900'
                  }`}
                >
                  {message.role === 'assistant' && (
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-4 w-4 text-purple-600" />
                      <span className="text-sm font-medium text-purple-600">Assistente IA</span>
                    </div>
                  )}
                  <p className="whitespace-pre-wrap">{message.content}</p>
                  <div className={`text-xs mt-2 ${message.role === 'user' ? 'text-purple-200' : 'text-gray-500'}`}>
                    {message.timestamp.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 rounded-2xl p-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-purple-600 animate-pulse" />
                    <span className="text-sm font-medium text-purple-600">Assistente está digitando...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t-2 border-gray-200 p-4">
            <div className="flex items-end gap-2">
              <button
                onClick={toggleRecording}
                className={`p-3 rounded-xl transition-all ${
                  isRecording
                    ? 'bg-red-500 text-white animate-pulse'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {isRecording ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
              </button>

              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem... (Enter para enviar)"
                className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-purple-500 focus:outline-none resize-none min-h-[48px] max-h-32"
                rows={1}
              />

              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
              <span>💡 Dica: Use Shift+Enter para quebrar linha</span>
              <span>Plano Gratuito: 10 mensagens/dia</span>
            </div>
          </div>
        </div>

        {/* Features Info */}
        <div className="mt-6 grid sm:grid-cols-3 gap-4">
          <div className="p-4 rounded-xl bg-white border-2 border-gray-200">
            <MessageSquare className="h-6 w-6 text-blue-600 mb-2" />
            <h3 className="font-medium text-gray-900 mb-1">Chat por Texto</h3>
            <p className="text-sm text-gray-600">Converse de forma escrita</p>
          </div>
          <div className="p-4 rounded-xl bg-white border-2 border-gray-200">
            <Mic className="h-6 w-6 text-purple-600 mb-2" />
            <h3 className="font-medium text-gray-900 mb-1">Chat por Voz</h3>
            <p className="text-sm text-gray-600">Fale naturalmente com a IA</p>
          </div>
          <div className="p-4 rounded-xl bg-white border-2 border-gray-200">
            <Sparkles className="h-6 w-6 text-pink-600 mb-2" />
            <h3 className="font-medium text-gray-900 mb-1">IA Contextual</h3>
            <p className="text-sm text-gray-600">Aprende com suas conversas</p>
          </div>
        </div>
      </div>
    </div>
  );
}
