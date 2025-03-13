import { createClient } from '@supabase/supabase-js';

// These environment variables will need to be set in your deployment environment
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Only initialize the client if we're in a browser environment or if the URL and key are available
const supabaseClient = () => {
  if (typeof window === 'undefined' && (!supabaseUrl || !supabaseAnonKey)) {
    console.warn('Supabase URL or Anon Key is missing. Email submission will not work.');
    // Return a mock client for server-side rendering
    return {
      from: () => ({
        insert: () => Promise.resolve({ error: new Error('Supabase not initialized') }),
      }),
    } as any;
  }
  
  return createClient(supabaseUrl, supabaseAnonKey);
};

export const supabase = supabaseClient(); 