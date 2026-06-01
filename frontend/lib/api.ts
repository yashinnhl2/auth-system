const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

export async function register(email: string, password: string) {
  const res = await fetch(`${API_URL}/api/v1/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.detail || 'Registration failed')
  }
  return res.json()
}

export async function login(email: string, password: string) {
  const res = await fetch(`${API_URL}/api/v1/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({ username: email, password }),
  })
  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.detail || 'Incorrect email or password')
  }
  return res.json()
}

export async function getMe(token: string) {
  const res = await fetch(`${API_URL}/api/v1/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  if (!res.ok) throw new Error('Unauthorized')
  return res.json()
}
