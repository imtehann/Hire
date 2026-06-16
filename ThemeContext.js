'use client'

// =============================================
// HIRE Platform - Theme Context (Dark/Light Mode)
// context/ThemeContext.js
// =============================================

import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light')
  const [mounted, setMounted] = useState(false)

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('hire-theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light')
    setTheme(initialTheme)
    applyTheme(initialTheme)
    setMounted(true)

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleSystemThemeChange = (e) => {
      if (!localStorage.getItem('hire-theme')) {
        const newTheme = e.matches ? 'dark' : 'light'
        setTheme(newTheme)
        applyTheme(newTheme)
      }
    }

    mediaQuery.addEventListener('change', handleSystemThemeChange)
    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange)
  }, [])

  const applyTheme = (newTheme) => {
    const root = document.documentElement
    if (newTheme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    applyTheme(newTheme)
    localStorage.setItem('hire-theme', newTheme)
  }

  const setLightTheme = () => {
    setTheme('light')
    applyTheme('light')
    localStorage.setItem('hire-theme', 'light')
  }

  const setDarkTheme = () => {
    setTheme('dark')
    applyTheme('dark')
    localStorage.setItem('hire-theme', 'dark')
  }

  const value = {
    theme,
    isDark: theme === 'dark',
    isLight: theme === 'light',
    toggleTheme,
    setLightTheme,
    setDarkTheme,
    mounted,
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
