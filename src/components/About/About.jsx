import image11 from '../../assets/about/11.jpg'
import image12 from '../../assets/about/12.png'
import image13 from '../../assets/about/13.png'

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#07102B] py-24"
    >
      {/* Purple Glow */}
      <div className="absolute left-0 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
            Who We Are
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Built by Students,
            <span className="block text-purple-400">
              For Students.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            ZNU Robotics Community is a student-led community at
            Zagazig National University, created to help students
            learn, build, collaborate, and turn ideas into real-world
            engineering projects.
          </p>

        </div>

        {/* Community Photos */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-4 md:grid-cols-5 md:grid-rows-2">

          {/* Main Image */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 md:col-span-3 md:row-span-2">
            <img
              src={image11}
              alt="ZNU Robotics Community"
              className="h-full min-h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/80 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-purple-300">
                ZNU Robotics Community
              </p>

              <h3 className="mt-2 text-2xl font-bold text-white">
                Learn. Build. Create.
              </h3>
            </div>
          </div>

          {/* Image 2 */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 md:col-span-2">
            <img
              src={image12}
              alt="ZNU Robotics Community Activities"
              className="h-full min-h-[200px] w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/50 to-transparent" />
          </div>

          {/* Image 3 */}
          <div className="group relative overflow-hidden rounded-3xl border border-white/10 md:col-span-2">
            <img
              src={image13}
              alt="ZNU Robotics Community Students"
              className="h-full min-h-[200px] w-full object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/50 to-transparent" />
          </div>

        </div>

      </div>
    </section>
  )
}

export default About