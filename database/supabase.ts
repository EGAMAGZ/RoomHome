import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_KEY")!,
);

export default supabase;
