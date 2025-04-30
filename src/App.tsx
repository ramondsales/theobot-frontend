import React from 'react';
import Header from './components/Header';
import ChatArea from './components/ChatArea';
import InputArea from './components/InputArea';
import { ChatProvider, useChat } from './context/ChatContext';

const ChatContainer: React.FC = () => {
  const { messages, isLoading, sendMessage } = useChat();

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <ChatArea messages={messages} isLoading={isLoading} />
      <InputArea onSendMessage={sendMessage} isLoading={isLoading} />
    </div>
  );
};

function App() {
  return (
    <ChatProvider>
      <div className="min-h-screen bg-[#121212] text-gray-100 flex flex-col">
        <ChatContainer />
      </div>
    </ChatProvider>
  );
}

export default App;