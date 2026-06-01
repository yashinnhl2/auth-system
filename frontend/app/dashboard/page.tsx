'use client'

import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'

const stack = [
  { name: 'FastAPI', desc: 'Python REST API framework', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  { name: 'PostgreSQL', desc: 'Relational database', color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { name: 'SQLAlchemy', desc: 'ORM & query builder', color: 'bg-orange-50 text-orange-700 border-orange-200' },
  { name: 'Alembic', desc: 'Database migrations', color: 'bg-purple-50 text-purple-700 border-purple-200' },
  { name: 'JWT', desc: 'Stateless auth tokens', color: 'bg-yellow-50 text-yellow-700 border-yellow-200' },
  { name: 'bcrypt', desc: 'Password hashing', color: 'bg-red-50 text-red-700 border-red-200' },
  { name: 'Next.js 16', desc: 'React framework', color: 'bg-slate-50 text-slate-700 border-slate-200' },
  { name: 'Docker', desc: 'Containerized services', color: 'bg-sky-50 text-sky-700 border-sky-200' },
]

const features = [
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    ),
    title: 'User Registration',
    desc: 'Email + password sign-up with Pydantic validation. Duplicate emails rejected at the DB constraint level.',
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    ),
    title: 'JWT Authentication',
    desc: 'Signed access tokens with configurable expiry. Tokens verified on every protected request via a FastAPI dependency.',
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    ),
    title: 'Password Security',
    desc: 'Passwords hashed with bcrypt (cost factor 12) before storage. Raw passwords never persisted anywhere in the system.',
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582 4 8 4" />
    ),
    title: 'Database Migrations',
    desc: 'Schema changes managed with Alembic. Every migration is versioned and reversible — no manual SQL.',
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    ),
    title: 'Route Protection',
    desc: 'Next.js proxy middleware guards protected pages server-side. Cookie-based token storage enables SSR-compatible auth checks.',
  },
  {
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
    ),
    title: 'Dockerized',
    desc: 'Backend and database run as isolated containers. A single docker compose up spins up the full stack with correct networking.',
  },
]

export default function DashboardPage() {
  const { user, logout } = useAuth()
  const router = useRouter()

  function handleLogout() {
    logout()
    router.push('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <span className="font-semibold text-gray-900">AuthSystem</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-blue-700 text-xs font-semibold uppercase">
                  {user?.email?.[0]}
                </span>
              </div>
              <span className="text-sm text-gray-600 hidden sm:block">{user?.email}</span>
            </div>
            <button
              onClick={handleLogout}
              className="text-sm font-medium text-red-500 border border-red-200 bg-red-50 hover:bg-red-500 hover:text-white px-4 py-1.5 rounded-lg transition cursor-pointer"
            >
              Sign out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10 space-y-10">

        {/* Hero */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 rounded-2xl p-8 text-white">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <p className="text-blue-400 text-sm font-medium mb-2">Portfolio Project</p>
              <h1 className="text-3xl font-bold mb-3">Full-Stack Auth System</h1>
              <p className="text-slate-300 max-w-xl leading-relaxed">
                A production-grade authentication system built from scratch — covering secure password storage,
                stateless JWT sessions, database migrations, protected frontend routes, and full containerization.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-300">Backend running</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-300">Database connected</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 rounded-lg px-3 py-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-slate-300">Authenticated as {user?.email}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Account info */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'User ID', value: `#${user?.id}` },
            { label: 'Email', value: user?.email ?? '—' },
            { label: 'Status', value: user?.is_active ? 'Active' : 'Inactive' },
            { label: 'Member since', value: user?.created_at ? new Date(user.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '—' },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white rounded-xl border border-gray-200 p-4">
              <p className="text-xs text-gray-400 mb-1">{label}</p>
              <p className="text-sm font-semibold text-gray-900 truncate">{value}</p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">What this project covers</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-xl border border-gray-200 p-5">
                <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {icon}
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Tech stack</h2>
          <div className="flex flex-wrap gap-3">
            {stack.map(({ name, desc, color }) => (
              <div key={name} className={`flex items-center gap-2 border rounded-lg px-3 py-2 ${color}`}>
                <span className="text-sm font-medium">{name}</span>
                <span className="text-xs opacity-60">{desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Architecture</h2>
          <div className="flex flex-wrap items-center gap-2 text-sm">
            {[
              { label: 'Next.js', sub: 'port 3000' },
              null,
              { label: 'FastAPI', sub: 'port 8000' },
              null,
              { label: 'PostgreSQL', sub: 'port 5432' },
            ].map((item, i) =>
              item === null ? (
                <div key={i} className="flex items-center gap-2 text-gray-300">
                  <div className="h-px w-6 bg-gray-300" />
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <div className="h-px w-6 bg-gray-300" />
                </div>
              ) : (
                <div key={item.label} className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-center">
                  <p className="font-medium text-gray-900">{item.label}</p>
                  <p className="text-xs text-gray-400">{item.sub}</p>
                </div>
              )
            )}
          </div>
          <p className="mt-4 text-xs text-gray-400 leading-relaxed">
            The frontend communicates with the backend over REST. The backend validates JWTs, queries PostgreSQL via SQLAlchemy,
            and returns typed responses through Pydantic schemas. All services are orchestrated with Docker Compose.
          </p>
        </div>

      </main>
    </div>
  )
}
