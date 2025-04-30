import React, { useEffect, useState } from 'react';

const LoadingIndicator: React.FC = () => {
  const [dotCount, setDotCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setDotCount((prev) => (prev % 3) + 1);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="message-container">
      <div className="message-bubble ai-message flex items-center">
        <div className="text-sm text-gray-400 mr-2">TheoBot is thinking</div>
        <div className="flex">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`typing-dot ${i <= dotCount ? 'opacity-100' : 'opacity-30'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingIndicator;