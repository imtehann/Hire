// =============================================
// HIRE Platform - Authentication Service
// services/authService.js
// =============================================

import { supabase } from '@/lib/supabase/client'

// =============================================
// SIGN UP
// =============================================

/**
 * Register a new user with email, password, and role
 * @param {Object} params - { email, password, fullName, role }
 * @returns {Object} - { user, error }
 */
export async function signUp({ email, password, fullName, role = 'freelancer' }) {
  try {
    // 1. Create auth user
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`,
        data: {
          full_name: fullName,
          role: role,
        },
      },
    })

    if (authError) throw authError
    if (!authData.user) throw new Error('No user returned from auth')

    // 2. Create profile record
    const { error: profileError } = await supabase.from('profiles').insert({
      id: authData.user.id,
      email: email,
      full_name: fullName,
      role: role,
    })

    if (profileError) throw profileError

    // 3. Create role-specific record
    if (role === 'freelancer') {
      const { error: freelancerError } = await supabase.from('freelancers').insert({
        profile_id: authData.user.id,
      })
      if (freelancerError) console.error('Freelancer record error:', freelancerError)
    } else if (role === 'client') {
      const { error: clientError } = await supabase.from('clients').insert({
        profile_id: authData.user.id,
      })
      if (clientError) console.error('Client record error:', clientError)
    }

    return { user: authData.user, session: authData.session, error: null }
  } catch (error) {
    console.error('SignUp error:', error)
    return { user: null, session: null, error }
  }
}

// =============================================
// SIGN IN
// =============================================

/**
 * Sign in with email and password
 * @param {Object} params - { email, password }
 * @returns {Object} - { user, session, error }
 */
export async function signIn({ email, password }) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error

    // Update last_seen_at
    if (data.user) {
      await supabase
        .from('profiles')
        .update({ last_seen_at: new Date().toISOString() })
        .eq('id', data.user.id)
    }

    return { user: data.user, session: data.session, error: null }
  } catch (error) {
    console.error('SignIn error:', error)
    return { user: null, session: null, error }
  }
}

// =============================================
// SIGN OUT
// =============================================

/**
 * Sign out the current user
 * @returns {Object} - { error }
 */
export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
    return { error: null }
  } catch (error) {
    console.error('SignOut error:', error)
    return { error }
  }
}

// =============================================
// GET CURRENT SESSION
// =============================================

/**
 * Get the current session
 * @returns {Object} - { session, user, error }
 */
export async function getSession() {
  try {
    const { data: { session }, error } = await supabase.auth.getSession()
    if (error) throw error
    return { session, user: session?.user || null, error: null }
  } catch (error) {
    console.error('GetSession error:', error)
    return { session: null, user: null, error }
  }
}

// =============================================
// GET CURRENT USER WITH PROFILE
// =============================================

/**
 * Get the current user with their full profile
 * @returns {Object} - { user, profile, error }
 */
export async function getCurrentUser() {
  try {
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    if (authError) throw authError
    if (!user) return { user: null, profile: null, error: null }

    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single()

    if (profileError) throw profileError

    return { user, profile, error: null }
  } catch (error) {
    console.error('GetCurrentUser error:', error)
    return { user: null, profile: null, error }
  }
}

// =============================================
// FORGOT PASSWORD
// =============================================

/**
 * Send password reset email
 * @param {string} email
 * @returns {Object} - { error }
 */
export async function forgotPassword(email) {
  try {
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_APP_URL}/auth/reset-password`,
    })
    if (error) throw error
    return { error: null }
  } catch (error) {
    console.error('ForgotPassword error:', error)
    return { error }
  }
}

// =============================================
// RESET PASSWORD
// =============================================

/**
 * Reset password with new password (user must be in reset flow)
 * @param {string} newPassword
 * @returns {Object} - { error }
 */
export async function resetPassword(newPassword) {
  try {
    const { error } = await supabase.auth.updateUser({
      password: newPassword,
    })
    if (error) throw error
    return { error: null }
  } catch (error) {
    console.error('ResetPassword error:', error)
    return { error }
  }
}

// =============================================
// UPDATE EMAIL
// =============================================

/**
 * Update user's email address
 * @param {string} newEmail
 * @returns {Object} - { error }
 */
export async function updateEmail(newEmail) {
  try {
    const { error } = await supabase.auth.updateUser({
      email: newEmail,
    })
    if (error) throw error
    return { error: null }
  } catch (error) {
    console.error('UpdateEmail error:', error)
    return { error }
  }
}

// =============================================
// RESEND VERIFICATION EMAIL
// =============================================

/**
 * Resend email verification
 * @param {string} email
 * @returns {Object} - { error }
 */
export async function resendVerification(email) {
  try {
    const { error } = await supabase.auth.resend({
      type: 'signup',
      email: email,
    })
    if (error) throw error
    return { error: null }
  } catch (error) {
    console.error('ResendVerification error:', error)
    return { error }
  }
}

// =============================================
// AUTH STATE CHANGE LISTENER
// =============================================

/**
 * Subscribe to auth state changes
 * @param {Function} callback - Called with (event, session)
 * @returns {Object} - Subscription object with unsubscribe method
 */
export function onAuthStateChange(callback) {
  const { data: { subscription } } = supabase.auth.onAuthStateChange(callback)
  return subscription
}

// =============================================
// ERROR MESSAGES (User-friendly)
// =============================================

export function getAuthErrorMessage(error) {
  if (!error) return null

  const message = error.message?.toLowerCase() || ''

  if (message.includes('invalid login credentials')) {
    return 'Invalid email or password. Please try again.'
  }
  if (message.includes('email not confirmed')) {
    return 'Please verify your email before logging in.'
  }
  if (message.includes('user already registered')) {
    return 'An account with this email already exists.'
  }
  if (message.includes('password should be at least')) {
    return 'Password must be at least 8 characters long.'
  }
  if (message.includes('rate limit')) {
    return 'Too many attempts. Please wait a few minutes before trying again.'
  }
  if (message.includes('email address is invalid')) {
    return 'Please enter a valid email address.'
  }

  return error.message || 'An unexpected error occurred. Please try again.'
}
