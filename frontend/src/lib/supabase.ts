import { createClient, SupabaseClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

let supabase: SupabaseClient | null = null;

if (!url || !anonKey) {
  console.warn("Supabase env vars missing; portfolio + chat persistence disabled");
} else {
  supabase = createClient(url, anonKey, {
    auth: { persistSession: false },
  });
}

export { supabase };
