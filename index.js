// =============================================
// HIRE Platform - Utility Functions
// utils/index.js
// =============================================

import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { format, formatDistanceToNow, parseISO } from 'date-fns'

// =============================================
// CLASS NAME UTILITY
// =============================================

/**
 * Merge Tailwind classes safely, handling conflicts
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

// =============================================
// DATE UTILITIES
// =============================================

/**
 * Format a date to readable string
 */
export function formatDate(date, pattern = 'MMM d, yyyy') {
  if (!date) return ''
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date
    return format(dateObj, pattern)
  } catch {
    return ''
  }
}

/**
 * Get relative time (e.g., "2 days ago")
 */
export function timeAgo(date) {
  if (!date) return ''
  try {
    const dateObj = typeof date === 'string' ? parseISO(date) : date
    return formatDistanceToNow(dateObj, { addSuffix: true })
  } catch {
    return ''
  }
}

/**
 * Format date for display (short)
 */
export function formatDateShort(date) {
  return formatDate(date, 'MMM d')
}

// =============================================
// CURRENCY UTILITIES (Bangladesh Taka)
// =============================================

/**
 * Format currency in Bangladeshi Taka
 */
export function formatCurrency(amount, currency = '৳') {
  if (amount === null || amount === undefined) return `${currency}0`
  
  const num = parseFloat(amount)
  if (isNaN(num)) return `${currency}0`

  if (num >= 10000000) {
    return `${currency}${(num / 10000000).toFixed(1)} Cr`
  }
  if (num >= 100000) {
    return `${currency}${(num / 100000).toFixed(1)} Lac`
  }
  if (num >= 1000) {
    return `${currency}${(num / 1000).toFixed(1)}K`
  }

  return `${currency}${num.toLocaleString('en-BD')}`
}

/**
 * Format budget range
 */
export function formatBudgetRange(min, max, type = 'fixed') {
  if (type === 'hourly') {
    if (min && max) return `৳${min}-${max}/hr`
    if (min) return `৳${min}+/hr`
    return 'Negotiable'
  }
  
  if (min && max) return `৳${formatCurrency(min)}-${formatCurrency(max)}`
  if (min) return `৳${formatCurrency(min)}+`
  if (max) return `Up to ৳${formatCurrency(max)}`
  return 'Negotiable'
}

// =============================================
// STRING UTILITIES
// =============================================

/**
 * Truncate text to a maximum length
 */
export function truncate(text, maxLength = 100) {
  if (!text) return ''
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

/**
 * Convert to title case
 */
export function toTitleCase(str) {
  if (!str) return ''
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Generate slug from string
 */
export function slugify(str) {
  if (!str) return ''
  return str
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/--+/g, '-')
    .trim()
}

/**
 * Get initials from full name
 */
export function getInitials(name) {
  if (!name) return '?'
  const parts = name.trim().split(' ')
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase()
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase()
}

/**
 * Capitalize first letter
 */
export function capitalize(str) {
  if (!str) return ''
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

// =============================================
// VALIDATION UTILITIES
// =============================================

/**
 * Validate email address
 */
export function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return regex.test(email)
}

/**
 * Validate Bangladeshi phone number
 */
export function isValidBDPhone(phone) {
  const regex = /^(\+8801|8801|01)[3-9]\d{8}$/
  return regex.test(phone.replace(/\s/g, ''))
}

/**
 * Validate URL
 */
export function isValidUrl(url) {
  try {
    new URL(url)
    return true
  } catch {
    return false
  }
}

/**
 * Check password strength
 */
export function getPasswordStrength(password) {
  if (!password) return { score: 0, label: '', color: '' }
  
  let score = 0
  if (password.length >= 8) score++
  if (password.length >= 12) score++
  if (/[a-z]/.test(password)) score++
  if (/[A-Z]/.test(password)) score++
  if (/\d/.test(password)) score++
  if (/[^a-zA-Z\d]/.test(password)) score++

  if (score <= 2) return { score, label: 'Weak', color: 'text-red-500' }
  if (score <= 4) return { score, label: 'Fair', color: 'text-yellow-500' }
  if (score <= 5) return { score, label: 'Good', color: 'text-blue-500' }
  return { score, label: 'Strong', color: 'text-green-500' }
}

// =============================================
// AVATAR / FILE UTILITIES
// =============================================

/**
 * Get avatar URL with fallback to initials
 */
export function getAvatarUrl(avatarUrl, name) {
  if (avatarUrl) return avatarUrl
  const initials = getInitials(name)
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=2563EB&color=fff&size=200&bold=true&format=png`
}

/**
 * Format file size
 */
export function formatFileSize(bytes) {
  if (bytes === 0) return '0 Bytes'
  const k = 1024
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  const i = Math.floor(Math.log(bytes) / Math.log(k))
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
}

/**
 * Get file extension
 */
export function getFileExtension(filename) {
  return filename.split('.').pop()?.toLowerCase() || ''
}

/**
 * Check if file is an image
 */
export function isImageFile(filename) {
  const imageExts = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg']
  return imageExts.includes(getFileExtension(filename))
}

// =============================================
// RATING UTILITIES
// =============================================

/**
 * Render star rating as array for display
 */
export function getRatingStars(rating) {
  const stars = []
  const roundedRating = Math.round(rating * 2) / 2 // Round to nearest 0.5

  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push('full')
    } else if (i - 0.5 <= roundedRating) {
      stars.push('half')
    } else {
      stars.push('empty')
    }
  }

  return stars
}

/**
 * Format rating display
 */
export function formatRating(rating, count) {
  if (!rating) return 'No reviews'
  const formatted = parseFloat(rating).toFixed(1)
  if (count !== undefined) return `${formatted} (${count} reviews)`
  return formatted
}

// =============================================
// PROFILE COMPLETION
// =============================================

/**
 * Calculate profile completion percentage for freelancers
 */
export function calculateProfileCompletion(profile, freelancer) {
  if (!profile || !freelancer) return 0

  const checks = [
    { field: profile.avatar_url, weight: 10, label: 'Profile photo' },
    { field: profile.bio, weight: 10, label: 'Bio' },
    { field: freelancer.title, weight: 10, label: 'Professional title' },
    { field: freelancer.headline, weight: 5, label: 'Headline' },
    { field: freelancer.hourly_rate, weight: 10, label: 'Hourly rate' },
    { field: profile.location, weight: 5, label: 'Location' },
    { field: profile.phone, weight: 5, label: 'Phone number' },
    { field: freelancer.experience_level, weight: 5, label: 'Experience level' },
    { field: freelancer.skills?.length > 0, weight: 20, label: 'Skills' },
    { field: freelancer.portfolios?.length > 0, weight: 20, label: 'Portfolio' },
  ]

  const completedWeight = checks.reduce((total, check) => {
    return total + (check.field ? check.weight : 0)
  }, 0)

  return Math.min(completedWeight, 100)
}

/**
 * Get missing profile completion items
 */
export function getMissingProfileItems(profile, freelancer) {
  if (!profile || !freelancer) return []

  const checks = [
    { field: profile.avatar_url, label: 'Add a profile photo', priority: 'high' },
    { field: profile.bio, label: 'Write a bio', priority: 'high' },
    { field: freelancer.title, label: 'Add your professional title', priority: 'high' },
    { field: freelancer.hourly_rate, label: 'Set your hourly rate', priority: 'medium' },
    { field: profile.location, label: 'Add your location', priority: 'low' },
    { field: profile.phone, label: 'Add your phone number', priority: 'low' },
    { field: freelancer.skills?.length > 0, label: 'Add your skills', priority: 'high' },
    { field: freelancer.portfolios?.length > 0, label: 'Add portfolio projects', priority: 'high' },
  ]

  return checks.filter(check => !check.field)
}

// =============================================
// SEARCH / FILTER UTILITIES
// =============================================

/**
 * Build Supabase query filters from search params
 */
export function buildJobFilters(params) {
  const filters = {}

  if (params.category) filters.category_id = params.category
  if (params.type) filters.job_type = params.type
  if (params.experience) filters.experience_level = params.experience
  if (params.remote !== undefined) filters.is_remote = params.remote === 'true'
  if (params.student) filters.is_student_friendly = params.student === 'true'

  return filters
}

// =============================================
// NOTIFICATION UTILITIES
// =============================================

/**
 * Get notification icon and color based on type
 */
export function getNotificationStyle(type) {
  const styles = {
    application_received: { icon: 'Briefcase', color: 'text-blue-500', bg: 'bg-blue-100' },
    application_status_changed: { icon: 'CheckCircle', color: 'text-green-500', bg: 'bg-green-100' },
    message_received: { icon: 'MessageSquare', color: 'text-purple-500', bg: 'bg-purple-100' },
    job_posted: { icon: 'PlusCircle', color: 'text-indigo-500', bg: 'bg-indigo-100' },
    review_received: { icon: 'Star', color: 'text-yellow-500', bg: 'bg-yellow-100' },
    payment_received: { icon: 'DollarSign', color: 'text-green-500', bg: 'bg-green-100' },
    job_completed: { icon: 'Trophy', color: 'text-amber-500', bg: 'bg-amber-100' },
    profile_viewed: { icon: 'Eye', color: 'text-slate-500', bg: 'bg-slate-100' },
    system_alert: { icon: 'Bell', color: 'text-red-500', bg: 'bg-red-100' },
  }

  return styles[type] || styles.system_alert
}

// =============================================
// EXPERIENCE LEVEL LABELS
// =============================================

export const EXPERIENCE_LABELS = {
  beginner: { label: 'Beginner', color: 'text-green-600', bg: 'bg-green-100' },
  intermediate: { label: 'Intermediate', color: 'text-blue-600', bg: 'bg-blue-100' },
  expert: { label: 'Expert', color: 'text-purple-600', bg: 'bg-purple-100' },
}

// =============================================
// JOB STATUS LABELS
// =============================================

export const JOB_STATUS_LABELS = {
  open: { label: 'Open', color: 'text-green-600', bg: 'bg-green-100' },
  in_progress: { label: 'In Progress', color: 'text-blue-600', bg: 'bg-blue-100' },
  completed: { label: 'Completed', color: 'text-slate-600', bg: 'bg-slate-100' },
  cancelled: { label: 'Cancelled', color: 'text-red-600', bg: 'bg-red-100' },
  paused: { label: 'Paused', color: 'text-yellow-600', bg: 'bg-yellow-100' },
}

// =============================================
// LOCAL STORAGE UTILITIES
// =============================================

export function safeLocalStorage() {
  return {
    get: (key) => {
      try {
        if (typeof window === 'undefined') return null
        const item = localStorage.getItem(key)
        return item ? JSON.parse(item) : null
      } catch {
        return null
      }
    },
    set: (key, value) => {
      try {
        if (typeof window === 'undefined') return
        localStorage.setItem(key, JSON.stringify(value))
      } catch {
        // localStorage not available
      }
    },
    remove: (key) => {
      try {
        if (typeof window === 'undefined') return
        localStorage.removeItem(key)
      } catch {
        // localStorage not available
      }
    },
  }
}

// =============================================
// DEBOUNCE
// =============================================

export function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// =============================================
// GENERATE RANDOM ID
// =============================================

export function generateId() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}
