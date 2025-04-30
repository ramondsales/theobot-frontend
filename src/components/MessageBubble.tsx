import React from 'react';
import { Message } from '../types';

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  const isUser = message.sender === 'user';
  const bubbleClass = isUser ? 'user-message' : 'ai-message';
  
  return (
    <div className="message-container">
      <div className={`message-bubble ${bubbleClass}`}>
        <div className="text-sm text-gray-400 mb-1">
          {isUser ? 'You' : 'TheoBot'}
        </div>
        <div className="text-gray-100">
          {message.text}
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;