import React from 'react';
import { Bot } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="py-4 border-b border-gray-800 bg-gray-900/50 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <Bot className="text-blue-400 mr-2" size={24} />
        <h1 className="text-xl font-light tracking-wide text-gray-100">TheoBot</h1>
      </div>
    </header>
  );
};

export default Header;