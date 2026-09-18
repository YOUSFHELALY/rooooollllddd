import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { supabase } from '../../Lib/supabase'

function Dashboard() {
  const navigate = useNavigate()

  const [user, setUser] = useState(null)
  const [profile, setProfile] = useState(null)
  const [certificates, setCertificates] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getStudentData = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        navigate('/login')
        return
      }

      setUser(user)

      const { data: profileData } = await supabase
        .from('profiles')
        .select('full_name, role')
        .eq('id', user.id)
        .single()

      setProfile(profileData)

      const { data: certificatesData } = await supabase
        .from('certificates')
        .select('*')
        .eq('user_id', user.id)
        .order('issued_at', { ascending: false })

      setCertificates(certificatesData || [])

      setLoading(false)
    }

    getStudentData()
  }, [navigate])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/login')
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050816] text-white">
        <div className="text-center">
          <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-white/10 border-t-purple-400" />

          <p className="mt-4 text-sm text-gray-500">
            Loading your dashboard...
          </p>
        </div>
      </div>
    )
  }

  const isAdmin =
    profile?.role === 'admin' ||
    profile?.role === 'hr'

  return (
    <div className="min-h-screen bg-[#050816] text-white">

      {/* =========================
          Navbar
      ========================== */}

      <nav className="border-b border-white/10 bg-[#07102B]/90 backdrop-blur-md">

        <div className="mx-auto flex h-[80px] max-w-7xl items-center justify-between px-6">

          <Link
            to="/"
            className="text-xl font-bold tracking-tight"
          >
            ZNU Robotics
            <span className="text-purple-400">
              {' '}Community
            </span>
          </Link>

          <div className="flex items-center gap-3">

            {/* Admin Panel */}

            {isAdmin && (
              <Link
                to="/admin/certificates"
                className="rounded-xl border border-purple-400/30 bg-purple-500/10 px-5 py-2.5 text-sm font-semibold text-purple-300 transition duration-300 hover:border-purple-400 hover:bg-purple-500/20 hover:text-purple-200"
              >
                Admin Panel
              </Link>
            )}

            {/* Logout */}

            <button
              onClick={handleLogout}
              className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-gray-300 transition duration-300 hover:border-red-400/30 hover:bg-red-500/10 hover:text-red-300"
            >
              Logout
            </button>

          </div>

        </div>

      </nav>

      {/* =========================
          Main
      ========================== */}

      <main className="mx-auto max-w-6xl px-6 py-14">

        {/* =========================
            Welcome
        ========================== */}

        <section>

          <p className="text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
            Student Dashboard
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Welcome back,
          </h1>

          <h2 className="mt-2 text-3xl font-bold text-purple-400 md:text-4xl">
            {profile?.full_name || 'Student'}
          </h2>

          <p className="mt-4 text-gray-400">
            Your learning journey and achievements at ZNU Robotics Community.
          </p>

        </section>

        {/* =========================
            Admin Quick Access
        ========================== */}

        {isAdmin && (
          <section className="mt-10">

            <div className="rounded-2xl border border-purple-400/20 bg-purple-500/5 p-6">

              <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-purple-400">
                    Administration
                  </p>

                  <h2 className="mt-2 text-xl font-bold text-white">
                    Community Management
                  </h2>

                  <p className="mt-2 text-sm text-gray-500">
                    Manage certificates and administrative activities.
                  </p>
                </div>

                <Link
                  to="/admin/certificates"
                  className="shrink-0 rounded-xl bg-purple-500 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:bg-purple-400"
                >
                  Manage Certificates
                </Link>

              </div>

            </div>

          </section>
        )}

        {/* =========================
            Certificates
        ========================== */}

        <section className="mt-16">

          <div className="flex items-end justify-between">

            <div>

              <p className="text-sm font-medium uppercase tracking-[0.25em] text-purple-400">
                Achievements
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight">
                My Certificates
              </h2>

            </div>

            {certificates.length > 0 && (
              <span className="text-sm text-gray-500">
                {certificates.length}{' '}
                {certificates.length === 1
                  ? 'Certificate'
                  : 'Certificates'}
              </span>
            )}

          </div>

          {/* =========================
              Certificates Exist
          ========================== */}

          {certificates.length > 0 ? (

            <div className="mt-8 grid gap-5 md:grid-cols-2">

              {certificates.map((certificate) => (

                <div
                  key={certificate.id}
                  className="group rounded-2xl border border-white/10 bg-[#07102B]/70 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-[#0A1635]"
                >

                  <div className="flex items-start justify-between gap-5">

                    <div>

                      <p className="text-xs font-medium uppercase tracking-[0.2em] text-purple-400">
                        Certificate
                      </p>

                      <h3 className="mt-3 text-xl font-bold text-white">
                        {certificate.title}
                      </h3>

                    </div>

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-300">
                      ✓
                    </div>

                  </div>

                  {certificate.description && (
                    <p className="mt-4 text-sm leading-6 text-gray-400">
                      {certificate.description}
                    </p>
                  )}

                  <div className="mt-6 border-t border-white/10 pt-4">

                    <div className="flex items-center justify-between gap-4">

                      <div>

                        <p className="text-xs uppercase tracking-[0.15em] text-gray-600">
                          Issued
                        </p>

                        <p className="mt-1 text-sm text-gray-300">
                          {new Date(
                            certificate.issued_at
                          ).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </p>

                      </div>

                      {certificate.certificate_url && (
                        <a
                          href={certificate.certificate_url}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-xl border border-purple-400/30 bg-purple-500/10 px-4 py-2.5 text-sm font-semibold text-purple-300 transition hover:border-purple-400 hover:bg-purple-500/20"
                        >
                          View Certificate
                        </a>
                      )}

                    </div>

                  </div>

                </div>

              ))}

            </div>

          ) : (

            /* =========================
                No Certificates
            ========================== */

            <div className="mt-8 rounded-2xl border border-dashed border-white/10 bg-[#07102B]/40 px-6 py-14 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-gray-500">
                —
              </div>

              <h3 className="mt-5 text-xl font-semibold text-white">
                No Certificates Yet
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
                You don't have any certificates yet.
                Complete a course or community activity to earn your first certificate.
              </p>

            </div>

          )}

        </section>

      </main>

    </div>
  )
}

export default Dashboard