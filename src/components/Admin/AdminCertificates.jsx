import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../Lib/supabase'

function AdminCertificates() {
  const navigate = useNavigate()
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [form, setForm] = useState({
    userId: '',
    title: '',
    description: '',
    issuedAt: new Date().toISOString().split('T')[0],
    file: null,
  })

  useEffect(() => {
    const load = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) {
        navigate('/login')
        return
      }

      const { data: me, error: meError } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single()

      if (meError || !me || !['admin', 'hr'].includes(me.role)) {
        setError('You do not have permission to issue certificates.')
        setLoading(false)
        return
      }

      const { data, error: studentsError } = await supabase
        .from('profiles')
        .select('id, full_name, role')
        .order('full_name')

      if (studentsError) setError(studentsError.message)
      else setStudents(data || [])

      setLoading(false)
    }

    load()
  }, [navigate])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setMessage('')

    if (!form.userId || !form.title.trim() || !form.file) {
      setError('Please select a student, enter a certificate title, and upload a PDF.')
      return
    }

    if (form.file.type !== 'application/pdf') {
      setError('Certificate must be a PDF file.')
      return
    }

    if (form.file.size > 10 * 1024 * 1024) {
      setError('Certificate must be 10 MB or smaller.')
      return
    }

    setSubmitting(true)

    try {
      const safeName = form.file.name
        .replace(/\.pdf$/i, '')
        .replace(/[^a-zA-Z0-9-_]/g, '-')
        .toLowerCase()

      const path = `${form.userId}/${Date.now()}-${safeName}.pdf`

      const { error: uploadError } = await supabase.storage
        .from('certificates')
        .upload(path, form.file, {
          contentType: 'application/pdf',
          upsert: false,
        })

      if (uploadError) throw uploadError

      const { data: urlData } = supabase.storage
        .from('certificates')
        .getPublicUrl(path)

      const { error: insertError } = await supabase
        .from('certificates')
        .insert({
          user_id: form.userId,
          title: form.title.trim(),
          description: form.description.trim() || null,
          issued_at: form.issuedAt,
          certificate_url: urlData.publicUrl,
        })

      if (insertError) {
        await supabase.storage.from('certificates').remove([path])
        throw insertError
      }

      setMessage('Certificate issued successfully.')
      setForm({
        userId: '',
        title: '',
        description: '',
        issuedAt: new Date().toISOString().split('T')[0],
        file: null,
      })

      const input = document.getElementById('certificate-file')
      if (input) input.value = ''
    } catch (err) {
      setError(err.message || 'Failed to issue certificate.')
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#050816] text-white">
        Loading certificate management...
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <nav className="border-b border-white/10 bg-[#07102B]/90">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Link to="/" className="text-xl font-bold">
            ZNU Robotics <span className="text-purple-400">Community</span>
          </Link>
          <Link
            to="/dashboard"
            className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-gray-300 hover:border-purple-400/30 hover:text-white"
          >
            Dashboard
          </Link>
        </div>
      </nav>

      <main className="mx-auto max-w-4xl px-6 py-14">
        <p className="text-sm uppercase tracking-[0.3em] text-purple-400">
          Administration
        </p>

        <h1 className="mt-4 text-4xl font-bold">Issue Certificate</h1>

        <p className="mt-4 text-gray-400">
          Issue a certificate directly to a student account.
        </p>

        <div className="mt-10 rounded-3xl border border-white/10 bg-[#07102B]/80 p-6 backdrop-blur-xl md:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="student" className="mb-2 block text-sm text-gray-300">
                Student
              </label>
              <select
                id="student"
                value={form.userId}
                onChange={(e) => setForm({ ...form, userId: e.target.value })}
                disabled={submitting}
                className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3.5 text-sm text-white outline-none focus:border-purple-500/60"
              >
                <option value="">Select a student</option>
                {students.map((student) => (
                  <option key={student.id} value={student.id}>
                    {student.full_name || 'Unnamed Student'} — {student.role}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="title" className="mb-2 block text-sm text-gray-300">
                Certificate Title
              </label>
              <input
                id="title"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="e.g. SolidWorks Fundamentals"
                disabled={submitting}
                className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 focus:border-purple-500/60"
              />
            </div>

            <div>
              <label htmlFor="description" className="mb-2 block text-sm text-gray-300">
                Description
              </label>
              <textarea
                id="description"
                rows="4"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                placeholder="Certificate of completion for..."
                disabled={submitting}
                className="w-full resize-none rounded-xl border border-white/10 bg-[#050816] px-4 py-3.5 text-sm text-white outline-none placeholder:text-gray-600 focus:border-purple-500/60"
              />
            </div>

            <div>
              <label htmlFor="issuedAt" className="mb-2 block text-sm text-gray-300">
                Issue Date
              </label>
              <input
                id="issuedAt"
                type="date"
                value={form.issuedAt}
                onChange={(e) => setForm({ ...form, issuedAt: e.target.value })}
                disabled={submitting}
                className="w-full rounded-xl border border-white/10 bg-[#050816] px-4 py-3.5 text-sm text-white outline-none focus:border-purple-500/60"
              />
            </div>

            <div>
              <label htmlFor="certificate-file" className="mb-2 block text-sm text-gray-300">
                Certificate PDF
              </label>
              <input
                id="certificate-file"
                type="file"
                accept="application/pdf,.pdf"
                onChange={(e) => setForm({ ...form, file: e.target.files?.[0] || null })}
                disabled={submitting}
                className="block w-full rounded-xl border border-dashed border-white/15 bg-[#050816] px-4 py-4 text-sm text-gray-400"
              />
              <p className="mt-2 text-xs text-gray-600">PDF only — maximum 10 MB.</p>
            </div>

            {error && (
              <div className="rounded-xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                {error}
              </div>
            )}

            {message && (
              <div className="rounded-xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400">
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-xl bg-purple-500 px-5 py-3.5 font-semibold text-white transition hover:bg-purple-400 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {submitting ? 'Issuing Certificate...' : 'Issue Certificate'}
            </button>
          </form>
        </div>
      </main>
    </div>
  )
}

export default AdminCertificates
