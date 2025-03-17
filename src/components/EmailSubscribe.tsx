'use client';

import { useState } from 'react';
import { trackButtonClick } from '@/lib/tracking';

export interface EmailSubscribeProps {
  buttonText?: string;
  className?: string;
  onSubscribe?: (email: string) => void;
}

export default function EmailSubscribe({ 
  buttonText = 'Subscribe', 
  className = '',
  onSubscribe
}: EmailSubscribeProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Please enter your email');
      return;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email');
      return;
    }
    
    setIsSubmitting(true);
    setError('');
    
    try {
      // Track the email subscription
      trackButtonClick('email_subscribe', 'Email Subscription', 'email_form');
      
      // Call the onSubscribe callback if provided
      if (onSubscribe) {
        onSubscribe(email);
      }
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSuccess(true);
      setEmail('');
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Error submitting email:', err);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className={className}>
      {!isSuccess ? (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
          <div className="flex-grow">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 bg-white placeholder-gray-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
            />
            {error && <p className="mt-1 text-sm text-red-500 bg-white/80 rounded px-1">{error}</p>}
          </div>
          <button
            type="submit"
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 border border-white/20"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : buttonText}
          </button>
        </form>
      ) : (
        <div className="text-center p-4 bg-green-100 text-green-800 rounded-lg">
          <p className="font-medium">Thank you for subscribing!</p>
          <p className="text-sm mt-1">We'll keep you updated on the Learn With AI launch.</p>
        </div>
      )}
    </div>
  );
} 