// src/components/ChatBubble.tsx
import { TypingText } from './TypingText';

interface ChatBubbleProps {
  answer: string;
}

export function ChatBubble({ answer }: ChatBubbleProps) {
  // separa por linhas em branco
  const paragraphs = answer.split(/\n\s*\n/);
  return (
    <div className="bot-bubble bg-gray-800 text-white p-4 rounded-md">
      {paragraphs.map((p, i) => (
        <TypingText key={i} text={p + (i < paragraphs.length - 1 ? '\n\n' : '')} />
      ))}
    </div>
  );
}
