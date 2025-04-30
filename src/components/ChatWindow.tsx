// src/components/ChatWindow.tsx
import { ChatBubble } from './ChatBubble';

interface Message {
  role: 'user' | 'bot';
  text: string;
}

export function ChatWindow({ messages }: { messages: Message[] }) {
  return (
    <div className="space-y-2 overflow-y-auto p-4">
      {messages.map((msg, idx) =>
        msg.role === 'bot' ? (
          <ChatBubble key={idx} answer={msg.text} />
        ) : (
          <div key={idx} className="user-bubble bg-blue-600 text-white p-2 rounded-md">
            {msg.text}
          </div>
        )
      )}
    </div>
  );
}
