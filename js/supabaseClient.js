// js/supabaseClient.js

// We are using the Supabase CDN library. The 'esm' version lets us use import/export.
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// **IMPORTANT**: Replace these with your actual Supabase Project URL and Public Anon Key.
const supabaseUrl = 'https://qjupbndvyzuwqiqcxqev.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqdXBibmR2eXp1d3FpcWN4cWV2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ0ODgwNzgsImV4cCI6MjA3MDA2NDA3OH0.ZbrNs4S2JpVtyZ5rPYJi9Q3wuK7MstdxkpUZPfB2LNw';

// Create and export the Supabase client
export const supabase = createClient(supabaseUrl, supabaseKey);
