import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  throw new Error('Missing Supabase credentials');
}

export const supabase = createClient(supabaseUrl, supabaseKey);

export type UserRole = 'admin' | 'super_user' | 'normal_user';

export interface UserProfile {
  id: string;
  email: string;
  role: UserRole;
  created_at: string;
}