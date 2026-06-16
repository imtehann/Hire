'use client'

// =============================================
// HIRE Platform - Auth Context Provider
// context/AuthContext.js
// =============================================

import { createContext, useContext, useEffect, useState, useCallback } from 'react'
import { supabase } from '@/lib/supabase/client'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [initialized, setInitialized] = useState(false)

  // Fetch profile data for user
  const fetchProfile = useCallback(async (userId) => {
    if (!userId) {
      setProfile(null)
      return null
    }

    try {
      const { data, error } = await supabase
        .from('profiles')
        .select(`
          *,
          freelancers (
            id,
            title,
            headline,
            hourly_rate,
            experience_level,
            availability,
            rating_average,
            rating_count,
            total_jobs_completed,
            is_top_rated,
            is_featured,
            profile_completion
          ),
          clients (
            id,
            company_name,
            company_size,
            total_jobs_posted,
            total_hires,
            payment_verified
          )
        `)
        .eq('id', userId)
        .single()

      if (error) {
        console.error('Error fetching profile:', error)
        return null
      }

      setProfile(data)
      return data
    } catch (error) {
      console.error('Profile fetch error:', error)
      return null
    }
  }, [])

  // Initialize auth state
  useEffect(() => {
    let mounted = true

    const initializeAuth = async () => {
      try {
        // Get current session
        const { data: { session } } = await supabase.auth.getSession()

        if (mounted) {
          if (session?.user) {
            setUser(session.user)
            await fetchProfile(session.user.id)
          } else {
            setUser(null)
            setProfile(null)
          }
          setLoading(false)
          setInitialized(true)
        }
      } catch (error) {
        console.error('Auth init error:', error)
        if (mounted) {
          setLoading(false)
          setInitialized(true)
        }
      }
    }

    initializeAuth()

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (!mounted) return

        if (event === 'SIGNED_IN' || event === 'TOKEN_REFRESHED') {
          if (session?.user) {
            setUser(session.user)
            await fetchProfile(session.user.id)
          }
        } else if (event === 'SIGNED_OUT') {
          setUser(null)
          setProfile(null)
        } else if (event === 'USER_UPDATED') {
          if (session?.user) {
            setUser(session.user)
            await fetchProfile(session.user.id)
          }
        }

        setLoading(false)
      }
    )

    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [fetchProfile])

  // Refresh profile data
  const refreshProfile = useCallback(async () => {
    if (user?.id) {
      await fetchProfile(user.id)
    }
  }, [user?.id, fetchProfile])

  // Check if user has specific role
  const hasRole = useCallback((role) => {
    return profile?.role === role
  }, [profile])

  // Check if user is authenticated
  const isAuthenticated = !!user && !!profile

  const value = {
    user,
    profile,
    loading,
    initialized,
    isAuthenticated,
    isFreelancer: profile?.role === 'freelancer',
    isClient: profile?.role === 'client',
    isAdmin: profile?.role === 'admin',
    freelancerData: profile?.freelancers?.[0] || null,
    clientData: profile?.clients?.[0] || null,
    hasRole,
    refreshProfile,
    fetchProfile,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

// Hook to require authentication (use in protected components)
export function useRequireAuth() {
  const auth = useAuth()
  return auth
}
