import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Courses from './components/Courses/Courses'
import Teams from './components/Teams/Teams'
import Events from './components/Events/Events'
import Achievements from './components/Achievements/Achievements'
import Footer from './components/Footer/Footer'

import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import Dashboard from './components/Dashboard/Dashboard'
import AdminCertificates from './components/Admin/AdminCertificates'

import heroVideo from './assets/hero-video.mp4'

function Home() {
  const whatsappLink =
    'https://chat.whatsapp.com/K43CxDWaz6PKHBXdYdqE7I'

  return (
    <main className="min-h-screen bg-[#050816] text-white">

      <Navbar />

      {/* =========================
          Hero Section
      ========================== */}

      <section className="relative flex min-h-screen items-center overflow-hidden pt-20">

        {/* Background Video */}

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full scale-105 object-cover blur-[2px]"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>


        {/* Deep Navy Overlay */}

        <div className="absolute inset-0 bg-[#07102B]/80" />


        {/* Navy Color Layer */}

        <div className="absolute inset-0 bg-[#0B1B3A]/35 mix-blend-color" />


        {/* Subtle Purple Glow */}

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[140px]" />


        {/* Bottom Fade */}

        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#050816] to-transparent" />


        {/* Hero Content */}

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20">

          <div className="mx-auto max-w-5xl text-center">

            {/* Community Label */}

            <p className="mb-6 text-sm font-medium uppercase tracking-[0.35em] text-purple-400">
              ZNU ROBOTICS COMMUNITY
            </p>


            {/* Main Heading */}

            <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">

              Empowering Students.

              <span className="block text-purple-400">
                Building the Future.
              </span>

            </h1>


            {/* Description */}

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">

              A student-led community dedicated to serving

              <span className="font-medium text-white">
                {' '}Zagazig National University
              </span>

              {' '}through robotics, engineering, technology, innovation,
              and real-world projects.

            </p>


            {/* Core Statement */}

            <p className="mt-5 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
              By Students. For Students.
            </p>


            {/* Buttons */}

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

              {/* Join Community */}

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-purple-500 px-7 py-3.5 font-semibold text-white shadow-lg shadow-purple-500/20 transition duration-300 hover:bg-purple-400 hover:shadow-purple-500/30"
              >
                Join the Community
              </a>


              {/* Events */}

              <a
                href="#events"
                className="rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition duration-300 hover:border-purple-400/30 hover:bg-purple-500/10"
              >
                Explore Events
              </a>

            </div>

          </div>


          {/* =========================
              Statistics
          ========================== */}

          <div className="mx-auto mt-20 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">

            {/* Teams */}

            <div className="rounded-2xl border border-white/10 bg-[#07102B]/70 p-6 text-center backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-purple-500/30">

              <h3 className="text-3xl font-bold text-purple-400">
                12
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Teams
              </p>

            </div>


            {/* Volunteers */}

            <div className="rounded-2xl border border-white/10 bg-[#07102B]/70 p-6 text-center backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-purple-500/30">

              <h3 className="text-3xl font-bold text-purple-400">
                200+
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Volunteers
              </p>

            </div>


            {/* Members */}

            <div className="rounded-2xl border border-white/10 bg-[#07102B]/70 p-6 text-center backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-purple-500/30">

              <h3 className="text-3xl font-bold text-purple-400">
                1,000+
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Members
              </p>

            </div>


            {/* Projects */}

            <div className="rounded-2xl border border-white/10 bg-[#07102B]/70 p-6 text-center backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-purple-500/30">

              <h3 className="text-3xl font-bold text-purple-400">
                50+
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Projects
              </p>

            </div>

          </div>


          {/* =========================
              Partnerships
          ========================== */}

          <div className="mx-auto mt-14 max-w-4xl text-center">

            <p className="mb-6 text-xs uppercase tracking-[0.25em] text-gray-500">
              In Collaboration With
            </p>


            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">

              {/* IEEE */}

              <div className="min-w-[220px] rounded-xl border border-white/10 bg-[#07102B]/70 px-6 py-4 backdrop-blur-md transition duration-300 hover:border-purple-500/30">

                <p className="text-xs text-gray-500">
                  Technical Partnership
                </p>

                <p className="mt-1 font-semibold text-white">
                  IEEE IAET
                </p>

              </div>


              {/* Evolvia */}

              <div className="min-w-[220px] rounded-xl border border-white/10 bg-[#07102B]/70 px-6 py-4 backdrop-blur-md transition duration-300 hover:border-purple-500/30">

                <p className="text-xs text-gray-500">
                  Organizational Partnership
                </p>

                <p className="mt-1 font-semibold text-white">
                  Evolvia Community
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================
          About Section
      ========================== */}

      <About />


      {/* =========================
          Courses Section
      ========================== */}

      <Courses />


      {/* =========================
          Teams Section
      ========================== */}

      <Teams />


      {/* =========================
          Events Section
      ========================== */}

      <Events />


      {/* =========================
          Achievements Section
      ========================== */}

      <Achievements />


      {/* =========================
          Footer
      ========================== */}

      <Footer />

    </main>
  )
}


function App() {
  return (

    <Routes>

      {/* Home */}

      <Route
        path="/"
        element={<Home />}
      />


      {/* Authentication */}

      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />


      {/* Student Dashboard */}

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />


      {/* Admin / HR Certificate Management */}

      <Route
        path="/admin/certificates"
        element={<AdminCertificates />}
      />

    </Routes>

  )
}

export default App