import { useCallback, useEffect } from 'react';
import { trackButtonClick, trackSectionView } from '@/lib/tracking';

interface UseTrackingOptions {
  sectionId?: string;
}

/**
 * Hook for tracking user interactions
 */
export function useTracking(options: UseTrackingOptions = {}) {
  const { sectionId } = options;
  
  // Track section view on mount
  useEffect(() => {
    if (sectionId) {
      trackSectionView(sectionId);
    }
  }, [sectionId]);
  
  // Function to track button clicks
  const trackClick = useCallback((buttonId: string, buttonText: string) => {
    trackButtonClick(buttonId, buttonText, sectionId);
  }, [sectionId]);
  
  return { trackClick };
}

/**
 * HOC to wrap a button with click tracking
 */
export function withTracking(buttonId: string, buttonText: string, sectionId?: string) {
  return function<P extends object>(Component: React.ComponentType<P>) {
    return function TrackedComponent(props: P) {
      const handleClick = () => {
        trackButtonClick(buttonId, buttonText, sectionId);
      };
      
      return <Component {...props} onClick={handleClick} />;
    };
  };
} 