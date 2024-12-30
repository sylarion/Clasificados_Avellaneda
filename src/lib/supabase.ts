import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://your-project-url.supabase.co';
const supabaseKey = 'your-anon-key';

export const supabase = createClient(supabaseUrl, supabaseKey);

export type UserRole = 'admin' | 'super_user' | 'normal_user';

export interface UserProfile {
  id: string;
  email: string;
  role: UserRole;
  created_at: string;
}