const competitionAchievements = [
  {
    place: '1st',
    title: 'Hardware Track',
    event: 'ZagTech Hackathon 2026',
    team: 'Team Nowarha',
  },
  {
    place: '2nd',
    title: 'Error Competition',
    event: 'IEEE 10th of Ramadan Institute',
    team: 'ZNU Robotics Community',
  },
  {
    place: '2nd',
    title: 'Robo Soccer',
    event: 'IEEE 10th of Ramadan Institute',
    team: 'ZNU Robotics Community',
  },
  {
    place: '1st & 2nd',
    title: 'Sumo Competition',
    event: 'Smart HTI',
    team: 'ZNU Robotics Community',
  },
  {
    place: '2nd & 3rd',
    title: 'Sumo Competition',
    event: 'Russian University in Egypt',
    team: 'ZNU Robotics Community',
  },
  {
    place: '3rd',
    title: 'AI Track',
    event: 'ZagTech Hackathon 2026',
    team: 'Team GPT',
  },
  {
    place: '3rd',
    title: 'Sabeq W Laheq',
    event: 'Russian University in Egypt',
    team: 'ZNU Robotics Community',
  },
]

const milestones = [
  {
    title: 'ZagTech Hackathon 2026',
    description:
      '1st Place in the Hardware Track by Team Nowarha.',
  },
  {
    title: 'Creativa Zagazig Hackathon 2026',
    description:
      '1st Place in the hackathon.',
  },
  {
    title: 'NextGen Hackathon 2026',
    description:
      '3rd Place at the Giza final round.',
  },
  {
    title: 'Shabab Shamel Initiative',
    description:
      'Qualified at the national level among 12 selected projects in cooperation with the National Bank of Egypt and the Ministry of Youth and Sports.',
  },
  {
    title: 'Junior Researcher 22',
    description:
      'Qualified at Nile University among a competition of more than 800 projects from Egypt, Sudan, and other participating countries.',
  },
  {
    title: 'Innovation Challenge 2026',
    description:
      'Qualified among 30 selected teams.',
  },
]

function Achievements() {
  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-[#07102B] py-24"
    >
      {/* Background Glows */}
      <div className="absolute left-0 top-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-900/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* =========================
            Section Header
        ========================== */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
            Our Achievements
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            A Season of
            <span className="block text-purple-400">
              Impact & Achievement.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            From competitions and hackathons to scientific research
            and entrepreneurship, every achievement reflects the work
            and dedication of our students.
          </p>

        </div>

        {/* =========================
            Achievement Stats
        ========================== */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4">

          <div className="rounded-2xl border border-white/10 bg-[#050816]/70 p-6 text-center backdrop-blur-md">
            <h3 className="text-3xl font-bold text-purple-400">
              7+
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Competition Results
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#050816]/70 p-6 text-center backdrop-blur-md">
            <h3 className="text-3xl font-bold text-purple-400">
              4
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Research Papers
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#050816]/70 p-6 text-center backdrop-blur-md">
            <h3 className="text-3xl font-bold text-purple-400">
              10
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Research Proposals
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-[#050816]/70 p-6 text-center backdrop-blur-md">
            <h3 className="text-3xl font-bold text-purple-400">
              6
            </h3>

            <p className="mt-2 text-sm text-gray-400">
              Startup Ideas
            </p>
          </div>

        </div>

        {/* =========================
            Competition Achievements
        ========================== */}
        <div className="mt-24">

          <div className="mb-10">

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-purple-400">
              Competition Achievements
            </p>

            <h3 className="mt-3 text-3xl font-bold text-white">
              Excellence in Competition
            </h3>

          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {competitionAchievements.map((achievement) => (
              <div
                key={`${achievement.title}-${achievement.event}`}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#050816]/70 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-[#0A1635]"
              >

                {/* Place */}
                <div className="flex items-center justify-between">

                  <span className="text-3xl font-bold text-purple-400">
                    {achievement.place}
                  </span>

                  <span className="text-xs uppercase tracking-[0.15em] text-gray-600">
                    Result
                  </span>

                </div>

                {/* Title */}
                <h4 className="mt-7 text-xl font-semibold text-white">
                  {achievement.title}
                </h4>

                {/* Event */}
                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {achievement.event}
                </p>

                {/* Team */}
                <div className="mt-6 border-t border-white/10 pt-4">

                  <span className="text-xs uppercase tracking-[0.15em] text-gray-500">
                    {achievement.team}
                  </span>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* =========================
            Global Achievement
        ========================== */}
        <div className="mt-24">

          <div className="relative overflow-hidden rounded-3xl border border-purple-500/20 bg-[#050816]/80 p-8 md:p-12">

            {/* Glow */}
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-purple-600/10 blur-[100px]" />

            <div className="relative grid gap-10 md:grid-cols-[0.7fr_1.3fr] md:items-center">

              <div>

                <p className="text-xs font-medium uppercase tracking-[0.25em] text-purple-400">
                  Global Achievement
                </p>

                <h3 className="mt-4 text-4xl font-bold text-white">
                  Power The Community
                </h3>

                <p className="mt-4 text-sm uppercase tracking-[0.15em] text-gray-500">
                  Energy Mentors
                </p>

              </div>

              <div>

                <p className="text-lg leading-8 text-gray-300">
                  ZNU Robotics Community was selected to participate
                  in the global Power The Community competition presented
                  by Energy Mentors, among only 56 teams worldwide.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* =========================
            Research & Entrepreneurship
        ========================== */}
        <div className="mt-24 grid gap-6 md:grid-cols-2">

          {/* Research */}
          <div className="rounded-3xl border border-white/10 bg-[#050816]/70 p-8 backdrop-blur-md">

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-purple-400">
              Scientific Research
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">
              Building a Research Culture
            </h3>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              In collaboration with Evolvia Community, students worked
              on developing a strong scientific research environment
              focused on solving real-world problems.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-3xl font-bold text-purple-400">
                  4
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  Research Papers
                </p>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-5">
                <p className="text-3xl font-bold text-purple-400">
                  10
                </p>

                <p className="mt-2 text-sm text-gray-400">
                  Research Proposals
                </p>
              </div>

            </div>

          </div>

          {/* Entrepreneurship */}
          <div className="rounded-3xl border border-white/10 bg-[#050816]/70 p-8 backdrop-blur-md">

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-purple-400">
              Entrepreneurship & Innovation
            </p>

            <h3 className="mt-4 text-3xl font-bold text-white">
              Turning Ideas Into Opportunities
            </h3>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              Through Integron in partnership with Evolvia Community,
              students developed innovative startup ideas and explored
              the journey from an initial concept to a scalable project.
            </p>

            <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-5">

              <p className="text-4xl font-bold text-purple-400">
                6
              </p>

              <p className="mt-2 text-sm text-gray-400">
                Startup Projects & Ideas
              </p>

            </div>

          </div>

        </div>

        {/* =========================
            Major Milestones
        ========================== */}
        <div className="mt-24">

          <div className="mb-10">

            <p className="text-xs font-medium uppercase tracking-[0.25em] text-purple-400">
              Major Milestones
            </p>

            <h3 className="mt-3 text-3xl font-bold text-white">
              Beyond Competition
            </h3>

          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {milestones.map((milestone, index) => (
              <div
                key={milestone.title}
                className="rounded-2xl border border-white/10 bg-[#050816]/60 p-6 transition duration-300 hover:border-purple-500/30"
              >

                <span className="text-sm font-semibold text-purple-400">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h4 className="mt-5 text-lg font-semibold text-white">
                  {milestone.title}
                </h4>

                <p className="mt-3 text-sm leading-6 text-gray-400">
                  {milestone.description}
                </p>

              </div>
            ))}

          </div>

        </div>

        {/* =========================
            Closing Statement
        ========================== */}
        <div className="mx-auto mt-20 max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
            Season 25/26
          </p>

          <p className="mt-5 text-2xl font-semibold leading-9 text-white">
            More than achievements.
            <span className="block text-purple-400">
              A foundation for what comes next.
            </span>
          </p>

        </div>

      </div>
    </section>
  )
}

export default Achievements