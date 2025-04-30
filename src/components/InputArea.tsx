import React, { useState, useRef, useEffect } from 'react';
import { SendIcon } from 'lucide-react';

interface InputAreaProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const InputArea: React.FC<InputAreaProps> = ({ onSendMessage, isLoading }) => {
  const [input, setInput] = useState('');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Focus input on component mount
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    
    if (input.trim() && !isLoading) {
      onSendMessage(input.trim());
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    
    // Auto-resize textarea
    const textarea = e.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${Math.min(textarea.scrollHeight, 150)}px`;
  };

  return (
    <div className="border-t border-gray-800 bg-gray-900/30 backdrop-blur-sm p-4">
      <div className="container mx-auto max-w-3xl">
        <form onSubmit={handleSubmit} className="relative">
          <textarea
            ref={inputRef}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Digite sua pergunta teológica aqui..."
            className="w-full bg-gray-800 text-gray-100 rounded-2xl py-3 pl-4 pr-12 resize-none min-h-[50px] max-h-[150px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isLoading}
            rows={1}
          />
          <button
            type="submit"
            className="absolute right-3 bottom-2.5 text-blue-400 hover:text-blue-300 transition-colors p-1.5 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!input.trim() || isLoading}
          >
            <SendIcon size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputArea;