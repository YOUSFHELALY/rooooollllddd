import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { supabase } from '../../Lib/supabase'

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError('')
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    })

    setLoading(false)

    if (error) {
      setError(error.message)
      return
    }

    navigate('/dashboard')
  }

  return (
    <div className="min-h-screen bg-[#050816] text-white">

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-purple-900/10 blur-[140px]" />
      </div>

      <div className="relative flex min-h-screen items-center justify-center px-6 py-12">

        <div className="w-full max-w-md">

          {/* Header */}
          <div className="mb-10 text-center">

            <p className="text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
              ZNU ROBOTICS COMMUNITY
            </p>

            <h1 className="mt-4 text-4xl font-bold tracking-tight">
              Welcome Back
            </h1>

            <p className="mt-3 text-sm text-gray-400">
              Sign in to continue to your community account.
            </p>

          </div>

          {/* Card */}
          <div className="rounded-3xl border border-white/10 bg-[#07102B]/80 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Email */}
              <div>

                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={loading}
                  className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10 disabled:opacity-50"
                />

              </div>

              {/* Password */}
              <div>

                <div className="mb-2 flex items-center justify-between">

                  <label
                    htmlFor="password"
                    className="text-sm font-medium text-gray-300"
                  >
                    Password
                  </label>

                  <button
                    type="button"
                    className="text-xs text-purple-400 transition hover:text-purple-300"
                  >
                    Forgot Password?
                  </button>

                </div>

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                  disabled={loading}
                  className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10 disabled:opacity-50"
                />

              </div>

              {/* Error */}
              {error && (
                <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm leading-6 text-red-400">
                  {error}
                </div>
              )}

              {/* Remember */}
              <div className="flex items-center gap-3">

                <input
                  id="remember"
                  type="checkbox"
                  className="h-4 w-4 rounded border-white/10 bg-[#050816] accent-purple-500"
                />

                <label
                  htmlFor="remember"
                  className="text-sm text-gray-400"
                >
                  Remember me
                </label>

              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-purple-500 px-5 py-3.5 font-semibold text-white shadow-lg shadow-purple-500/20 transition duration-300 hover:bg-purple-400 hover:shadow-purple-500/30 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>

            </form>

            {/* Register */}
            <div className="my-7 flex items-center gap-4">

              <div className="h-px flex-1 bg-white/10" />

              <span className="text-xs uppercase tracking-[0.15em] text-gray-600">
                New Member?
              </span>

              <div className="h-px flex-1 bg-white/10" />

            </div>

            <Link
              to="/register"
              className="block w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-center font-semibold text-gray-300 transition duration-300 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-white"
            >
              Create an Account
            </Link>

          </div>

          {/* Back */}
          <div className="mt-8 text-center">

            <Link
              to="/"
              className="text-sm text-gray-500 transition hover:text-purple-400"
            >
              ← Back to Community
            </Link>

          </div>

          <p className="mt-8 text-center text-xs text-gray-600">
            © 2026 ZNU Robotics Community
          </p>

        </div>

      </div>

    </div>
  )
}

export default Login