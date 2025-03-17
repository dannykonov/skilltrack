'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackClick } from '@/lib/tracking';

function PageViewTrackerInner() {
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

export default function PageViewTracker() {
  return (
    <Suspense fallback={null}>
      <PageViewTrackerInner />
    </Suspense>
  );
} 