import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, Bot, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Markdown from 'react-markdown';

interface Message {
  role: 'user' | 'model';
  content: string;
}

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [isNameSet, setIsNameSet] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [discordChannelId, setDiscordChannelId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customerName.trim()) {
      setIsNameSet(true);
      if (messages.length === 0) {
        setMessages([
          { role: 'model', content: `Olá, ${customerName}! Eu sou a Vívian, sua assistente virtual aqui na Faby Shop. Como posso te ajudar hoje? Está procurando algum curso ou produto específico?` }
        ]);
      }
    }
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    
    const newMessages = [...messages, { role: 'user' as const, content: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);

    try {
      const response = await fetch('/.netlify/functions/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          history: messages,
          discordChannelId,
          customerName
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessages([...newMessages, { role: 'model', content: data.reply }]);
        if (data.discordChannelId && !discordChannelId) {
          setDiscordChannelId(data.discordChannelId);
        }
      } else {
        setMessages([...newMessages, { role: 'model', content: "Desculpe, tive um problema de conexão. Pode tentar novamente?" }]);
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages([...newMessages, { role: 'model', content: "Desculpe, ocorreu um erro. Tente novamente mais tarde." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-secondary text-white p-4 rounded-full shadow-magenta hover:bg-secondary-hover hover:scale-110 transition-all duration-300 flex items-center justify-center group animate-float ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Falar com a Vívian"
      >
        <MessageCircle className="w-8 h-8" />
        <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-bold py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-gray-100 hidden sm:block">
          Fale com a Vívian!
          <div className="absolute top-1/2 -right-2 -translate-y-1/2 border-8 border-transparent border-l-white"></div>
        </span>
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-0 right-0 left-0 sm:bottom-6 sm:right-6 sm:left-auto z-50 w-full sm:w-[400px] h-[85vh] sm:h-[500px] sm:max-h-[80vh] bg-white sm:rounded-2xl shadow-2xl flex flex-col overflow-hidden border-t sm:border border-gray-200 rounded-t-2xl"
          >
            {/* Header */}
            <div className="bg-primary text-white p-4 flex justify-between items-center shadow-md z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg leading-tight">Vívian</h3>
                  <p className="text-xs text-gray-300">Assistente Virtual Faby Shop</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-300 hover:text-white transition-colors p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-4 bg-gray-50 flex flex-col gap-4">
              {!isNameSet ? (
                <div className="flex flex-col items-center justify-center h-full text-center px-4">
                  <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                    <User className="w-8 h-8 text-secondary" />
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-2">Bem-vinda(o)!</h4>
                  <p className="text-sm text-gray-600 mb-6">Para começarmos, como posso te chamar?</p>
                  <form onSubmit={handleNameSubmit} className="w-full flex gap-2">
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Seu nome..."
                      className="flex-1 border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                      required
                    />
                    <button 
                      type="submit"
                      className="bg-secondary text-white px-4 py-2 rounded-xl font-bold hover:bg-secondary-hover transition-colors"
                    >
                      Iniciar
                    </button>
                  </form>
                </div>
              ) : (
                <>
                  {messages.map((msg, idx) => (
                    <div 
                      key={idx} 
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                          msg.role === 'user' 
                            ? 'bg-secondary text-white rounded-tr-sm' 
                            : 'bg-white border border-gray-200 text-gray-800 rounded-tl-sm shadow-sm'
                        }`}
                      >
                        {msg.role === 'user' ? (
                          msg.content
                        ) : (
                          <div className="markdown-body flex flex-col gap-2">
                            <Markdown
                              components={{
                                a: ({ node, ...props }) => (
                                  <a 
                                    {...props} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="block mt-2 mb-1 px-4 py-2.5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-colors text-center shadow-md no-underline"
                                  />
                                ),
                                p: ({ node, ...props }) => <p className="m-0" {...props} />
                              }}
                            >
                              {msg.content}
                            </Markdown>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white border border-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                        <Loader2 className="w-5 h-5 text-secondary animate-spin" />
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Input Area */}
            {isNameSet && (
              <div className="p-3 bg-white border-t border-gray-200">
                <form onSubmit={sendMessage} className="flex gap-2 relative">
                  <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Digite sua mensagem..."
                    className="flex-1 border border-gray-300 rounded-full pl-4 pr-12 py-2.5 text-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                    disabled={isLoading}
                  />
                  <button 
                    type="submit"
                    disabled={!input.trim() || isLoading}
                    className="absolute right-1.5 top-1.5 bottom-1.5 w-8 bg-secondary text-white rounded-full flex items-center justify-center hover:bg-secondary-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4 ml-0.5" />
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
