import orientationImage from '../../assets/events/orientation.jpg'
import workshopsImage from '../../assets/events/workshops.jpg'
import innovationImage from '../../assets/events/innovation.jpg'
import hackathonImage from '../../assets/events/hackathon.jpg'

const events = [
  {
    title: 'Orientation Day',
    date: '2026',
    category: 'Community Event',
    image: orientationImage,
  },
  {
    title: 'Robotics Workshops',
    date: '2026',
    category: 'Workshop',
    image: workshopsImage,
  },
  {
    title: 'Innovation Challenge',
    date: '2026',
    category: 'Competition',
    image: innovationImage,
  },
  {
    title: 'Community Hackathon',
    date: '2026',
    category: 'Hackathon',
    image: hackathonImage,
  },
]

function Events() {
  return (
    <section
      id="events"
      className="relative overflow-hidden bg-[#050816] py-24"
    >
      {/* Background Glows */}
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-purple-900/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
            Our Events
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Learn.
            <span className="text-purple-400"> Participate.</span>
            <span className="block">
              Experience.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Discover workshops, competitions, hackathons, and community
            events designed to turn learning into real experiences.
          </p>

        </div>

        {/* Events Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">

          {events.map((event) => (
            <div
              key={event.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-[#07102B]/70 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-[#0A1635]"
            >

              {/* Event Image */}
              <div className="relative h-64 overflow-hidden">

                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/90 via-[#050816]/20 to-transparent" />

                {/* Category */}
                <div className="absolute bottom-5 left-5">

                  <span className="rounded-lg border border-white/10 bg-[#07102B]/80 px-3 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-purple-300 backdrop-blur-md">
                    {event.category}
                  </span>

                </div>

              </div>

              {/* Event Content */}
              <div className="p-6">

                {/* Title + Date */}
                <div className="flex items-start justify-between gap-5">

                  <h3 className="text-2xl font-bold tracking-tight text-white">
                    {event.title}
                  </h3>

                  <span className="shrink-0 text-sm font-medium text-gray-500">
                    {event.date}
                  </span>

                </div>

                {/* Divider */}
                <div className="mt-6 h-px w-full bg-white/10 transition duration-300 group-hover:bg-purple-400/30" />

                {/* Footer */}
                <div className="mt-4 flex items-center justify-between">

                  <span className="text-xs uppercase tracking-[0.15em] text-gray-500">
                    ZNU Robotics Community
                  </span>

                  <span className="translate-x-0 text-sm text-purple-400 transition duration-300 group-hover:translate-x-1">
                    →
                  </span>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Statement */}
        <div className="mx-auto mt-16 max-w-3xl text-center">

          <p className="text-sm uppercase tracking-[0.25em] text-gray-500">
            More experiences are coming
          </p>

          <p className="mt-4 text-lg font-medium text-gray-300">
            Every event is an opportunity to learn, connect, and build.
          </p>

        </div>

      </div>
    </section>
  )
}

export default Events