'use client';

import React, { ButtonHTMLAttributes } from 'react';
import { trackButtonClick } from '@/lib/tracking';

interface TrackableButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  trackingId: string;
  sectionId?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export default function TrackableButton({
  trackingId,
  sectionId,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  onClick,
  ...props
}: TrackableButtonProps) {
  // Base styles
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-white text-blue-700 hover:bg-blue-50 focus:ring-blue-500',
    outline: 'bg-transparent border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
  };
  
  // Size styles
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg',
  };
  
  // Combined styles
  const buttonStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  // Handle click with tracking
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Track the button click
    trackButtonClick(trackingId, children?.toString() || '', sectionId);
    
    // Call the original onClick handler if provided
    if (onClick) {
      onClick(e);
    }
  };
  
  return (
    <button
      className={buttonStyles}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
} 