// src/components/TypingText.tsx
import { useEffect, useState } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number;
}

export function TypingText({ text, speed = 20 }: TypingTextProps) {
  const [display, setDisplay] = useState('');
  useEffect(() => {
    setDisplay('');
    let i = 0;
    const timer = setInterval(() => {
      setDisplay((d) => d + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return <div style={{ whiteSpace: 'pre-wrap' }}>{display}</div>;
}
