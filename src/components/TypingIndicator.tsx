import React from 'react';

export const TypingIndicator: React.FC = () => {
  return (
    <div className="typing-indicator">
      <span>Thinking</span>
      <div className="flex space-x-1 ml-2">
        <div className="typing-dot" style={{ animationDelay: '0s' }}></div>
        <div className="typing-dot" style={{ animationDelay: '0.2s' }}></div>
        <div className="typing-dot" style={{ animationDelay: '0.4s' }}></div>
      </div>
    </div>
  );
};