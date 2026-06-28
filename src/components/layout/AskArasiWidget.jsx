"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Minus, Send } from "lucide-react";

const QUICK_TOPICS = ["Benefits", "Employment", "Housing", "Your rights", "Sign language"];

const WELCOME_MESSAGE = {
  id: "welcome",
  role: "arasi",
  text: "Hi, I'm Arasi. I can help with questions about benefits, employment, housing, your rights, and our services. What would you like to know?",
};

export default function AskArasiWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimised, setIsMinimised] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const panelRef = useRef(null);
  const inputRef = useRef(null);
  const triggerRef = useRef(null);

  // Allow other components to open the widget via a custom DOM event
  useEffect(() => {
    const handler = () => { setIsOpen(true); setIsMinimised(false); };
    document.addEventListener("open-arasi-widget", handler);
    return () => document.removeEventListener("open-arasi-widget", handler);
  }, []);

  useEffect(() => {
    if (isOpen && !isMinimised) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen, isMinimised]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue("");
  };

  return (
    <>
      {/* Floating bubble */}
      {!isOpen && (
        <button
          ref={triggerRef}
          onClick={() => { setIsOpen(true); setIsMinimised(false); }}
          aria-label="Open Ask Arasi chat"
          className="fixed bottom-6 right-6 sm:right-6 left-auto sm:left-auto z-40 flex items-center gap-2 px-4 py-3 bg-[#6B4E9E] text-white rounded-full shadow-lg hover:bg-[#8B6BC4] transition-all hover:-translate-y-0.5"
        >
          <MessageCircle size={20} />
          <span className="text-sm font-medium">Ask Arasi</span>
        </button>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-label="Ask Arasi chat"
          className={`fixed bottom-6 right-4 sm:right-6 left-4 sm:left-auto z-40 sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-[#E8E4F0] flex flex-col transition-all duration-200 ${
            isMinimised ? "h-14" : "h-[520px]"
          }`}
        >
          {/* Panel header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-[#6B4E9E] rounded-t-2xl shrink-0">
            <div className="w-8 h-8 rounded-full bg-[#8B6BC4] flex items-center justify-center shrink-0">
              <MessageCircle size={16} className="text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm">Ask Arasi</p>
              {!isMinimised && <p className="text-[#EDE6F7] text-xs">General information assistant</p>}
            </div>
            <button
              onClick={() => setIsMinimised(!isMinimised)}
              aria-label={isMinimised ? "Expand chat" : "Minimise chat"}
              className="p-1 text-[#EDE6F7] hover:text-white transition-colors"
            >
              <Minus size={16} />
            </button>
            <button
              onClick={() => { setIsOpen(false); triggerRef.current?.focus(); }}
              aria-label="Close chat"
              className="p-1 text-[#EDE6F7] hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          {!isMinimised && (
            <>
              {/* Message area */}
              <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
                {/* Welcome message */}
                <div className="flex items-start gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#EDE6F7] flex items-center justify-center shrink-0 mt-0.5">
                    <MessageCircle size={13} className="text-[#6B4E9E]" />
                  </div>
                  <div className="bg-[#F7F3FC] rounded-2xl rounded-tl-none px-4 py-3 max-w-[85%]">
                    <p className="text-sm text-[#1F1B2E] leading-relaxed">{WELCOME_MESSAGE.text}</p>
                  </div>
                </div>

                {/* Quick topic chips */}
                <div className="pl-9 flex flex-wrap gap-2">
                  {QUICK_TOPICS.map((topic) => (
                    <button
                      key={topic}
                      className="px-3 py-1.5 text-xs font-medium text-[#6B4E9E] bg-[#EDE6F7] rounded-full hover:bg-[#6B4E9E] hover:text-white transition-colors"
                    >
                      {topic}
                    </button>
                  ))}
                </div>
              </div>

              {/* Footer note */}
              <div className="px-4 py-2 bg-[#F7F3FC] text-center shrink-0">
                <p className="text-xs text-[#8B8699]">
                  Arasi gives general information. For personal advice,{" "}
                  <a href="/contact" className="text-[#6B4E9E] underline">contact our team</a>.
                </p>
              </div>

              {/* Input */}
              <form onSubmit={handleSubmit} className="flex items-center gap-2 px-3 py-3 border-t border-[#E8E4F0] shrink-0">
                <label htmlFor="arasi-input" className="sr-only">Message Arasi</label>
                <input
                  ref={inputRef}
                  id="arasi-input"
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your question…"
                  className="flex-1 px-4 py-2.5 text-sm bg-[#F4F2F7] rounded-full border-none outline-none focus:ring-2 focus:ring-[#6B4E9E] text-[#1F1B2E] placeholder-[#8B8699]"
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  disabled={!inputValue.trim()}
                  className="w-9 h-9 flex items-center justify-center bg-[#6B4E9E] text-white rounded-full hover:bg-[#8B6BC4] disabled:opacity-40 disabled:cursor-not-allowed transition-colors shrink-0"
                >
                  <Send size={15} />
                </button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  );
}
