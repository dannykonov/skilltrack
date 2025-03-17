import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client (only on client-side)
let supabase: any;

// Only initialize Supabase on the client
if (typeof window !== 'undefined') {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (supabaseUrl && supabaseAnonKey) {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
  } else {
    console.warn('Missing Supabase environment variables');
    // Create a no-op version of supabase for the client
    supabase = {
      from: () => ({
        insert: () => Promise.resolve({ error: null }),
        select: () => Promise.resolve({ data: [], error: null }),
      }),
    };
  }
} else {
  // Create a no-op version of supabase for the server
  supabase = {
    from: () => ({
      insert: () => Promise.resolve({ error: null }),
      select: () => Promise.resolve({ data: [], error: null }),
    }),
  };
}

// Interface for click data
interface ClickData {
  page_path: string;
  button_id?: string;
  button_text?: string;
  section_id?: string;
  user_agent?: string;
  referrer?: string;
  ip_address?: string;
}

/**
 * Track a click event
 */
export async function trackClick(data: ClickData): Promise<void> {
  // Only track clicks on the client side
  if (typeof window === 'undefined') return;
  
  try {
    // Add user agent and referrer if available
    data.user_agent = window.navigator.userAgent;
    data.referrer = document.referrer;
    
    // Insert the click data into Supabase
    const { error } = await supabase
      .from('website_clicks')
      .insert([data]);
    
    if (error) {
      console.error('Error tracking click:', error);
    }
  } catch (err) {
    console.error('Failed to track click:', err);
  }
}

/**
 * Track a button click
 */
export function trackButtonClick(buttonId: string, buttonText: string, sectionId?: string): void {
  if (typeof window !== 'undefined') {
    trackClick({
      page_path: window.location.pathname,
      button_id: buttonId,
      button_text: buttonText,
      section_id: sectionId,
    });
  }
}

/**
 * Track a section view
 */
export function trackSectionView(sectionId: string): void {
  if (typeof window !== 'undefined') {
    trackClick({
      page_path: window.location.pathname,
      section_id: sectionId,
    });
  }
}

/**
 * Get the IP address of the user (to be used server-side)
 */
export async function getIpAddress(): Promise<string | null> {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch (error) {
    console.error('Failed to get IP address:', error);
    return null;
  }
}

/**
 * Hook to track page views (to be used in _app.tsx or layout.tsx)
 */
export function usePageViewTracking(): void {
  if (typeof window !== 'undefined') {
    // Track page view on mount
    trackClick({
      page_path: window.location.pathname,
    });
  }
} 