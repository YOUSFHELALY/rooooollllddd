const teams = [
  'ZNUS',
  'NASA',
  'Trompa',
  'Elgazar',
  'Zeno Bot',
  'GPT',
  'Nowarha',
  'Gam3a Market',
  'IdeaNexus',
  'Nesma',
  'S.S.AI',
  'FIXLY',
]

function Teams() {
  return (
    <section
      id="teams"
      className="relative overflow-hidden bg-[#07102B] py-24"
    >
      {/* Background Glows */}
      <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-900/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
            Our Teams
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            One Community.
            <span className="block text-purple-400">
              Multiple Teams.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Explore the teams that bring students together to learn,
            collaborate, compete, and build real-world projects.
          </p>

        </div>

        {/* Teams Grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {teams.map((team, index) => (
            <div
              key={team}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#050816]/70 p-7 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-[#0A1635]"
            >

              {/* Number */}
              <div className="absolute right-5 top-5 text-xs font-medium tracking-[0.15em] text-gray-600 transition duration-300 group-hover:text-purple-400/60">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Top Indicator */}
              <div className="mb-8 h-1 w-10 rounded-full bg-purple-500/60 transition-all duration-300 group-hover:w-16 group-hover:bg-purple-400" />

              {/* Team Name */}
              <h3 className="text-2xl font-bold tracking-tight text-white">
                {team}
              </h3>

              {/* Bottom Line */}
              <div className="mt-8 h-px w-full bg-white/10 transition duration-300 group-hover:bg-purple-400/30" />

              {/* Footer */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.15em] text-gray-500">
                  Team
                </span>

                <span className="translate-x-0 text-sm text-purple-400 opacity-0 transition duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </div>

            </div>
          ))}

        </div>

        {/* Bottom Statement */}
        <div className="mx-auto mt-16 max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
            Collaboration drives innovation
          </p>

          <p className="mt-4 text-lg font-medium text-gray-300">
            Different teams. Different ideas. One community.
          </p>

        </div>

      </div>
    </section>
  )
}

export default Teams