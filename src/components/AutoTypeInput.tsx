'use client';

import { useState, useRef, useEffect } from 'react';
import { useTypewriter } from 'react-simple-typewriter';

export interface AutoTypeInputProps {
  placeholders: string[];
  onSubmit?: (value: string) => void;
  className?: string;
  buttonText?: string;
}

export default function AutoTypeInput({
  placeholders,
  onSubmit,
  className = '',
  buttonText = 'Generate My Roadmap'
}: AutoTypeInputProps) {
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Setup typewriter
  const [text] = useTypewriter({
    words: placeholders,
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });
  
  // Focus animation effect
  const [isHovered, setIsHovered] = useState(false);
  
  useEffect(() => {
    // Auto-focus on input after a short delay for better UX
    const timer = setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && onSubmit) {
      onSubmit(inputValue.trim());
    }
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (e.target.value !== '') {
      setIsTyping(false);
    }
  };

  const handleInputBlur = () => {
    setIsFocused(false);
    if (inputValue === '') {
      setIsTyping(true);
    }
  };

  return (
    <div 
      className={`relative ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div 
        className={`overflow-hidden rounded-xl shadow-lg transition-all duration-500 ${
          isFocused ? 'shadow-blue-300/50 ring-2 ring-blue-400/60' : 
          isHovered ? 'shadow-xl scale-[1.01]' : 'shadow-md'
        }`}
      >
        <form onSubmit={handleSubmit} className="relative flex gap-0 bg-transparent">
          <div className="relative flex-grow group">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              placeholder=""
              className="w-full px-4 sm:px-5 md:px-6 py-4 sm:py-5 text-base sm:text-lg rounded-l-xl border-0 bg-white focus:outline-none text-gray-800 transition-all duration-300"
              aria-label="Enter what you want to learn"
            />
            {isTyping && inputValue === '' && (
              <div className="absolute inset-0 pointer-events-none px-4 sm:px-5 md:px-6 py-4 sm:py-5 text-base sm:text-lg text-gray-500 overflow-hidden flex items-center">
                <span className="text-blue-500 mr-1.5 opacity-90">
                  &gt;
                </span>
                <span>{text}</span>
                <span className="animate-blink">|</span>
              </div>
            )}
            
            {/* Right side gradient fade effect */}
            <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </div>
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="px-4 sm:px-5 md:px-8 py-4 sm:py-5 bg-blue-500 text-white font-medium rounded-r-xl hover:bg-blue-400 transition-all duration-300 shadow-lg hover:shadow-blue-400/30 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base md:text-lg whitespace-nowrap flex-shrink-0"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
} 