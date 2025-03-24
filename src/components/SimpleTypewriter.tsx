'use client';

import { useState, useEffect, useRef } from 'react';

interface SimpleTypewriterProps {
  words: string[];
  loop?: boolean;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

export default function SimpleTypewriter({
  words,
  loop = true,
  typingSpeed = 80,
  deletingSpeed = 50,
  delayBetweenWords = 1500
}: SimpleTypewriterProps) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [speed, setSpeed] = useState(typingSpeed);
  const isMounted = useRef(true);

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isMounted.current) return;
      
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        setText(currentWord.substring(0, text.length - 1));
        setSpeed(deletingSpeed);
      } else {
        setText(currentWord.substring(0, text.length + 1));
        setSpeed(typingSpeed);
      }
      
      if (!isDeleting && text === currentWord) {
        // Word is complete, wait before starting to delete
        setTimeout(() => {
          if (!isMounted.current) return;
          setIsDeleting(true);
        }, delayBetweenWords);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        // Move to the next word
        setWordIndex((prev) => (prev + 1) % words.length);
        
        // If we've looped through all words and loop is false, stop
        if (!loop && wordIndex === words.length - 1) {
          return;
        }
      }
    }, speed);
    
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, loop, typingSpeed, deletingSpeed, delayBetweenWords]);
  
  return <span>{text}</span>;
} 