// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://jnqdghzpdrdnyyykzarf.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpucWRnaHpwZHJkbnl5eWt6YXJmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDcyNjk5MTQsImV4cCI6MjA2Mjg0NTkxNH0.LBrwo4m1qzRN3yvVSKKp0pzexYxBGYPoD1xu89PRfP8";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);