// =============================================
// HIRE Platform - Auth Middleware
// middleware.js
// =============================================

import { createServerClient } from '@supabase/ssr'
import { NextResponse } from 'next/server'

// Routes that require authentication
const PROTECTED_ROUTES = [
  '/dashboard',
  '/freelancer/dashboard',
  '/client/dashboard',
  '/admin',
  '/messages',
  '/notifications',
  '/profile/edit',
  '/jobs/post',
  '/jobs/manage',
  '/settings',
]

// Routes only accessible to non-authenticated users
const AUTH_ROUTES = [
  '/login',
  '/register',
  '/forgot-password',
  '/reset-password',
]

// Admin-only routes
const ADMIN_ROUTES = [
  '/admin',
]

export async function middleware(request) {
  let supabaseResponse = NextResponse.next({
    request,
  })

  // Create Supabase client with cookie handling
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            request.cookies.set(name, value, options)
          )
          supabaseResponse = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // Refresh session if expired
  const {
    data: { user },
  } = await supabase.auth.getUser()

  const pathname = request.nextUrl.pathname

  // Check if route is protected
  const isProtectedRoute = PROTECTED_ROUTES.some(route =>
    pathname.startsWith(route)
  )

  // Check if route is auth-only (login/register)
  const isAuthRoute = AUTH_ROUTES.some(route =>
    pathname.startsWith(route)
  )

  // Check if route is admin-only
  const isAdminRoute = ADMIN_ROUTES.some(route =>
    pathname.startsWith(route)
  )

  // If protected route and no user, redirect to login
  if (isProtectedRoute && !user) {
    const redirectUrl = new URL('/login', request.url)
    redirectUrl.searchParams.set('redirect', pathname)
    return NextResponse.redirect(redirectUrl)
  }

  // If auth route and user is logged in, redirect to dashboard
  if (isAuthRoute && user) {
    // Get user role to redirect to correct dashboard
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    if (profile) {
      const dashboardPath =
        profile.role === 'admin'
          ? '/admin'
          : profile.role === 'client'
          ? '/client/dashboard'
          : '/freelancer/dashboard'

      return NextResponse.redirect(new URL(dashboardPath, request.url))
    }
  }

  // Admin route protection
  if (isAdminRoute && user) {
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    if (!profile || profile.role !== 'admin') {
      return NextResponse.redirect(new URL('/', request.url))
    }
  }

  return supabaseResponse
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (svg, png, jpg, jpeg, gif, webp)
     * - api routes (handled separately)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
