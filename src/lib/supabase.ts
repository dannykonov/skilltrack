import { createClient } from '@supabase/supabase-js';

// These environment variables will need to be set in your deployment environment
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase URL or Anon Key is missing. Email submission will not work.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey); 