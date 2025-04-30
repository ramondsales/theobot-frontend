import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

interface AiMessageProps {
  text: string;
}

export function AiMessage({ text }: AiMessageProps) {
  return (
    <div className="ai-bubble">
      <Typewriter
        words={[text]}
        loop={false}
        cursor
        cursorStyle="|"
        typeSpeed={40}
        deleteSpeed={0}
        delaySpeed={1000}
      />
    </div>
  );
}
