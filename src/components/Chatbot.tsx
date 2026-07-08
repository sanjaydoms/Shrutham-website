import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send, Sparkles, Loader2 } from 'lucide-react';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  onToggle: () => void;
}

const SUGGESTIONS = [
  "Lotus Ballroom Capacity",
  "Convention Halls & Area",
  "How to book a walk-through?",
  "Pure Vegetarian Kitchen"
];

export default function Chatbot({ isOpen, onClose, onToggle }: ChatbotProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content: "Welcome to Shrutham Convention! I am Shruthi, your digital concierge. How may I assist you with your luxury wedding or prestigious corporate event planning today?"
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new messages
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading, isOpen]);

  const handleSend = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMsg = text.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMsg,
          history: messages.map(m => ({
            role: m.role,
            content: m.content
          }))
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply || "I'm sorry, I couldn't process that response." }]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: "I am experiencing a minor connection issue. Please feel free to call our main reception desk at +91 99899 12224 for direct assistance."
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={onToggle}
        className="fixed bottom-24 md:bottom-8 right-6 z-40 w-14 h-14 rounded-full bg-[#5c0202] text-white flex items-center justify-center shadow-2xl hover:bg-[#7a0303] hover:scale-105 active:scale-95 transition-all cursor-pointer"
        aria-label="Open Chat Assistant"
        title="Chat with Shruthi"
        id="chatbot-trigger"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {/* Chat Window Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-40 md:bottom-24 right-4 md:right-6 w-[360px] max-w-[calc(100vw-32px)] h-[500px] bg-[#FCFAF5] border border-[#5c0202]/20 rounded-xl shadow-2xl flex flex-col z-50 overflow-hidden font-body"
          >
            {/* Header */}
            <div className="bg-[#5c0202] px-4 py-4 text-white flex items-center justify-between border-b border-[#5c0202]/10">
              <div className="flex items-center gap-2.5">
                <div className="relative">
                  <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center font-bold text-sm text-[#FCFAF5] border border-white/20">
                    S
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-[#5c0202] rounded-full"></span>
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold tracking-wide text-white leading-tight">
                    Shruthi
                  </h3>
                  <p className="text-[10px] text-white/80 tracking-widest uppercase font-medium">
                    Venue Assistant
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="text-white/80 hover:text-white p-1 rounded-full transition-colors cursor-pointer"
                aria-label="Close Chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 p-4 overflow-y-auto space-y-4 bg-[#FCFAF5] luxe-grid-bg"
            >
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-[12px] px-4 py-2.5 text-xs leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-[#5c0202] text-white rounded-br-none'
                        : 'bg-white border border-[#5c0202]/10 text-slate-custom rounded-bl-none shadow-sm'
                    }`}
                  >
                    <p className="whitespace-pre-line">{msg.content}</p>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-[#5c0202]/10 text-slate-custom rounded-[12px] rounded-bl-none px-4 py-2.5 shadow-sm flex items-center gap-2 text-xs">
                    <Loader2 size={14} className="animate-spin text-[#5c0202]" />
                    <span>Shruthi is typing...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Suggestion Chips */}
            <div className="px-4 py-2 bg-white/50 border-t border-[#5c0202]/5 flex flex-wrap gap-1.5 shrink-0">
              {SUGGESTIONS.map((sug, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(sug)}
                  className="text-[10px] px-2.5 py-1 bg-white border border-[#5c0202]/10 text-slate-custom hover:bg-[#5c0202] hover:text-white rounded-full transition-all cursor-pointer font-medium"
                >
                  {sug}
                </button>
              ))}
            </div>

            {/* Message Input Box */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="p-3 bg-white border-t border-[#5c0202]/10 flex gap-2 shrink-0 items-center"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Shruthi about venues, capacity..."
                className="flex-1 bg-[#FCFAF5] border border-[#5c0202]/15 text-xs text-slate-custom px-3 py-2.5 rounded-[4px] outline-none focus:border-[#5c0202] transition-colors"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2.5 bg-[#5c0202] text-white rounded-[4px] hover:bg-[#7a0303] disabled:opacity-50 transition-colors cursor-pointer"
                aria-label="Send Message"
              >
                <Send size={15} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
