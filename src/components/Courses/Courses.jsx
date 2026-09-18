const courses = [
  {
    title: 'Mechanical Design & SolidWorks',
    shortTitle: 'Mechanical Design',
    description:
      'Learn mechanical design, 3D modeling, assemblies, engineering drawings, and product development using SolidWorks.',
  },
  {
    title: 'UI/UX Design',
    shortTitle: 'UI/UX',
    description:
      'Design intuitive digital experiences through user research, wireframing, prototyping, visual design, and usability.',
  },
  {
    title: 'Data Analysis',
    shortTitle: 'Data Analysis',
    description:
      'Transform raw data into meaningful insights using data cleaning, visualization, statistical analysis, and analytical tools.',
  },
  {
    title: 'Embedded Systems',
    shortTitle: 'Embedded Systems',
    description:
      'Build embedded solutions using microcontrollers, sensors, actuators, communication protocols, and real-time systems.',
  },
  {
    title: 'PCB Design',
    shortTitle: 'PCB',
    description:
      'Learn professional PCB design from schematic capture and component selection to routing and manufacturing.',
  },
  {
    title: 'Robotics',
    shortTitle: 'Robotics',
    description:
      'Explore robotics through mechanical systems, electronics, programming, sensors, control, and complete robotic projects.',
  },
  {
    title: 'Scientific Research',
    shortTitle: 'Research',
    description:
      'Develop research skills including literature review, methodology, data analysis, technical writing, and publication.',
  },
  {
    title: 'Media',
    shortTitle: 'Media',
    description:
      'Develop skills in photography, videography, graphic design, editing, and digital content production.',
  },
  {
    title: 'Human Resources',
    shortTitle: 'HR',
    description:
      'Develop skills in recruitment, team management, member development, performance evaluation, and organizational culture.',
  },
  {
    title: 'Entrepreneurship',
    shortTitle: 'Entrepreneurship',
    description:
      'Turn ideas into opportunities through business models, market research, pitching, validation, and startup fundamentals.',
  },
  {
    title: 'Frontend Development',
    shortTitle: 'Frontend',
    description:
      'Build modern responsive web interfaces using HTML, CSS, JavaScript, React, and modern frontend practices.',
  },
  {
    title: 'Flutter Development',
    shortTitle: 'Flutter',
    description:
      'Develop cross-platform mobile applications using Flutter and Dart, including UI development and app architecture.',
  },
  {
    title: 'Manufacturing Processes',
    shortTitle: 'Manufacturing',
    description:
      'Understand practical manufacturing methods including machining, 3D printing, fabrication, materials, and production.',
  },
  {
    title: 'Classic Control',
    shortTitle: 'Classic Control',
    description:
      'Study classical control systems, transfer functions, stability, PID controllers, system analysis, and applications.',
  },
  {
    title: 'Artificial Intelligence',
    shortTitle: 'AI',
    description:
      'Explore machine learning, deep learning, computer vision, data-driven models, and intelligent systems.',
  },
  {
    title: 'Public Relations',
    shortTitle: 'PR',
    description:
      'Develop communication and partnership skills through networking, external relations, and community representation.',
  },
]

function Courses() {
  return (
    <section
      id="courses"
      className="relative overflow-hidden bg-[#050816] py-24"
    >

      {/* Background Glow */}
      <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-purple-900/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-purple-400">
            Our Courses
          </p>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Learn.
            <span className="text-purple-400"> Build.</span>
            <span className="block">
              Grow Your Skills.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Explore the technical and professional courses offered by
            ZNU Robotics Community and develop the skills needed to
            build real-world projects.
          </p>

        </div>

        {/* Courses Grid */}
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {courses.map((course) => (
            <div
              key={course.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#07102B]/70 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-[#0A1635]"
            >

              {/* Card Glow */}
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl transition duration-300 group-hover:bg-purple-500/20" />

              {/* Course Indicator */}
              <div className="relative mb-5 h-1 w-10 rounded-full bg-purple-500/60 transition-all duration-300 group-hover:w-16 group-hover:bg-purple-400" />

              {/* Title */}
              <h3 className="relative min-h-[56px] text-lg font-semibold leading-7 text-white">
                {course.title}
              </h3>

              {/* Description */}
              <p className="relative mt-4 text-sm leading-6 text-gray-400">
                {course.description}
              </p>

              {/* Bottom Line */}
              <div className="mt-6 h-px w-full bg-white/10 transition duration-300 group-hover:bg-purple-400/30" />

              {/* Course Name */}
              <div className="mt-4 flex items-center justify-between">

                <span className="text-xs uppercase tracking-[0.15em] text-gray-500">
                  {course.shortTitle}
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
            From learning to real-world projects
          </p>

          <p className="mt-4 text-lg font-medium text-gray-300">
            Learn new skills. Build real projects. Grow with the community.
          </p>

        </div>

      </div>
    </section>
  )
}

export default Courses