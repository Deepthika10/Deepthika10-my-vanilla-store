// js/supabaseClient.js

// We are using the Supabase CDN library. The 'esm' version lets us use import/export.
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// **IMPORTANT**: Replace these with your actual Supabase Project URL and Public Anon Key.
const supabaseUrl = 'YOUR_SUPABASE_URL';
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY';

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);
