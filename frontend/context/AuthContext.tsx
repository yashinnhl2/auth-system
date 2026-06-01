'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { getMe } from '@/lib/api'

interface User {
  id: number
  email: string
  is_active: boolean
  created_at: string
}

interface AuthContextType {
  user: User | null
  token: string | null
  setAuth: (token: string) => Promise<void>
  logout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | null>(null)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stored = getCookie('auth_token')
    if (stored) {
      getMe(stored)
        .then((u) => { setToken(stored); setUser(u) })
        .catch(() => clearCookie())
        .finally(() => setLoading(false))
    } else {
      setLoading(false)
    }
  }, [])

  async function setAuth(newToken: string) {
    setCookie('auth_token', newToken)
    const u = await getMe(newToken)
    setToken(newToken)
    setUser(u)
  }

  function logout() {
    clearCookie()
    setToken(null)
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, token, setAuth, logout, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider')
  return ctx
}

function setCookie(name: string, value: string) {
  document.cookie = `${name}=${value}; path=/; max-age=${60 * 60 * 24 * 7}`
}

function clearCookie() {
  document.cookie = 'auth_token=; path=/; max-age=0'
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(^| )${name}=([^;]+)`))
  return match ? match[2] : null
}
