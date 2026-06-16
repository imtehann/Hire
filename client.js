// =============================================
// HIRE Platform - Supabase Browser Client
// lib/supabase/client.js
// =============================================

import { createBrowserClient } from '@supabase/ssr'

let client = null

export function createClient() {
  if (client) return client

  client = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
      realtime: {
        params: {
          eventsPerSecond: 10,
        },
      },
    }
  )

  return client
}

// Singleton export for client components
export const supabase = createClient()
