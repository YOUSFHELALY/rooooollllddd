import { useState } from 'react'
import { Link } from 'react-router-dom'

import logo from '../../assets/Logo.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Teams', href: '/#teams' },
    { name: 'Courses', href: '/#courses' },
    { name: 'Events', href: '/#events' },
  ]

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#07102B]/90 backdrop-blur-md">

      <div className="mx-auto flex h-[86px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex shrink-0 items-center"
        >
          <img
            src={logo}
            alt="ZNU Robotics Community"
            className="h-40 w-auto object-contain sm:h-40"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">

          {links.map((link, index) => (
            <Link
              key={link.name}
              to={link.href}
              className={`${
                index === 0 ? 'text-white' : 'text-gray-400'
              } text-sm transition hover:text-purple-400`}
            >
              {link.name}
            </Link>
          ))}

        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-3 md:flex">

          {/* Login */}
          <Link
            to="/login"
            className="rounded-xl px-5 py-2.5 text-sm font-semibold text-gray-300 transition hover:bg-white/5 hover:text-white"
          >
            Login
          </Link>

          {/* Join Community */}
          <Link
            to="/register"
            className="rounded-xl border border-purple-400/40 bg-purple-500/10 px-5 py-2.5 text-sm font-semibold text-purple-300 transition hover:border-purple-400 hover:bg-purple-500/20"
          >
            Join Community
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/10 bg-white/5 p-2 text-gray-200 transition hover:border-purple-400/40 hover:text-purple-300 md:hidden"
        >
          <span className="block h-0.5 w-6 bg-current" />
          <span className="mt-1.5 block h-0.5 w-6 bg-current" />
          <span className="mt-1.5 block h-0.5 w-6 bg-current" />
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#07102B] px-4 pb-5 pt-4 md:hidden">

          <div className="flex flex-col gap-2">

            {links.map((link, index) => (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className={`${
                  index === 0 ? 'text-purple-300' : 'text-gray-300'
                } rounded-lg px-4 py-3 text-sm transition hover:bg-white/5 hover:text-purple-300`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Login */}
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="mt-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3 text-center text-sm font-semibold text-gray-300 transition hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-white"
            >
              Login
            </Link>

            {/* Mobile Join */}
            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="w-full rounded-xl border border-purple-400/40 bg-purple-500/10 px-5 py-3 text-center text-sm font-semibold text-purple-300 transition hover:border-purple-400 hover:bg-purple-500/20"
            >
              Join Community
            </Link>

          </div>

        </div>
      )}

    </nav>
  )
}

export default Navbar