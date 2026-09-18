import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../Lib/supabase'

function Register() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setError('')
    setSuccess('')

    if (!formData.fullName.trim()) {
      setError('Please enter your full name.')
      return
    }

    if (!formData.email.trim()) {
      setError('Please enter your email address.')
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    setLoading(true)

    const { data, error } = await supabase.auth.signUp({
      email: formData.email.trim(),
      password: formData.password,

      options: {
        data: {
          full_name: formData.fullName.trim(),
        },

        // After email confirmation, return the user to the dashboard
        emailRedirectTo: `${window.location.origin}/dashboard`,
      },
    })

    setLoading(false)

    if (error) {
      setError(error.message)
      return
    }

    if (data.session) {
      navigate('/dashboard')
      return
    }

    setSuccess(
      'Account created successfully. Please check your email to confirm your account.'
    )
  }

  return (
    <div className="min-h-screen bg-[#050816] text-white">

      {/* Background */}
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
              Join the Community
            </h1>

            <p className="mt-3 text-sm text-gray-400">
              Create your account and start your journey with us.
            </p>

          </div>

          {/* Card */}
          <div className="rounded-3xl border border-white/10 bg-[#07102B]/80 p-8 shadow-2xl shadow-black/20 backdrop-blur-xl">

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Full Name
                </label>

                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  disabled={loading}
                  autoComplete="name"
                  className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10 disabled:opacity-50"
                />
              </div>

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
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  disabled={loading}
                  autoComplete="email"
                  className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10 disabled:opacity-50"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Password
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password"
                  disabled={loading}
                  autoComplete="new-password"
                  className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10 disabled:opacity-50"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-gray-300"
                >
                  Confirm Password
                </label>

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  disabled={loading}
                  autoComplete="new-password"
                  className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10 disabled:opacity-50"
                />
              </div>

              {/* Error */}
              {error && (
                <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  {error}
                </div>
              )}

              {/* Success */}
              {success && (
                <div className="rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm leading-6 text-green-400">
                  {success}
                </div>
              )}

              {/* Terms */}
              <div className="flex items-start gap-3">

                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  required
                  disabled={loading}
                  className="mt-0.5 h-4 w-4 rounded border-white/10 bg-[#050816] accent-purple-500"
                />

                <label
                  htmlFor="terms"
                  className="text-sm leading-6 text-gray-400"
                >
                  I agree to the community terms and conditions.
                </label>

              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-purple-500 px-5 py-3.5 font-semibold text-white shadow-lg shadow-purple-500/20 transition duration-300 hover:bg-purple-400 hover:shadow-purple-500/30 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading
                  ? 'Creating Account...'
                  : 'Create Account'}
              </button>

            </form>

            {/* Login */}
            <div className="my-7 flex items-center gap-4">

              <div className="h-px flex-1 bg-white/10" />

              <span className="text-xs uppercase tracking-[0.15em] text-gray-600">
                Already a Member?
              </span>

              <div className="h-px flex-1 bg-white/10" />

            </div>

            <Link
              to="/login"
              className="block w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-center font-semibold text-gray-300 transition duration-300 hover:border-purple-500/30 hover:bg-purple-500/10 hover:text-white"
            >
              Sign In
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

          {/* Copyright */}
          <p className="mt-8 text-center text-xs text-gray-600">
            © 2026 ZNU Robotics Community
          </p>

        </div>

      </div>

    </div>
  )
}

export default Register