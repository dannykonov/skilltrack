'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackClick } from '@/lib/tracking';

export default function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  useEffect(() => {
    // Track page view when the route changes
    const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '');
    
    trackClick({
      page_path: url,
    });
  }, [pathname, searchParams]);
  
  // This component doesn't render anything
  return null;
} 