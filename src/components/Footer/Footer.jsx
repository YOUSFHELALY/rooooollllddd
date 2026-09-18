import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaLinkedinIn,
} from 'react-icons/fa'

function Footer() {

  const links = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Courses', href: '#courses' },
    { name: 'Teams', href: '#teams' },
    { name: 'Events', href: '#events' },
    { name: 'Achievements', href: '#achievements' },
  ]

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/znu_robotics_community?stkn=ZTljOG1xaWRjY3hy',
      icon: FaInstagram,
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/share/18k2Qa6etV/',
      icon: FaFacebookF,
    },
    {
      name: 'TikTok',
      href: 'https://www.tiktok.com/@znu.robotics.comm?_r=1&_t=ZS-99p7T1Mtjjm',
      icon: FaTiktok,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/znu-robotics-community/',
      icon: FaLinkedinIn,
    },
  ]

  return (

    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050816]">

      {/* Background Glow */}

      <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">

        {/* Main Footer */}

        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">

          {/* Brand */}

          <div>

            <h2 className="text-2xl font-bold tracking-tight text-white">

              ZNU Robotics

              <span className="text-purple-400">
                {' '}Community
              </span>

            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-400">

              A student-led community at Zagazig National University
              dedicated to learning, innovation, engineering, and
              building real-world experiences.

            </p>

            <p className="mt-5 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">

              By Students. For Students.

            </p>

          </div>


          {/* Navigation */}

          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">

              Navigation

            </h3>

            <div className="mt-5 flex flex-col gap-3">

              {links.map((link) => (

                <a
                  key={link.name}
                  href={link.href}
                  className="w-fit text-sm text-gray-400 transition duration-300 hover:translate-x-1 hover:text-purple-400"
                >

                  {link.name}

                </a>

              ))}

            </div>

          </div>


          {/* Community */}

          <div>

            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">

              Community

            </h3>

            <div className="mt-5 space-y-3">

              <p className="text-sm text-gray-400">
                Zagazig National University
              </p>

              <p className="text-sm text-gray-400">
                Robotics & Engineering
              </p>

              <p className="text-sm text-gray-400">
                Student-Led Community
              </p>

            </div>


            {/* Social Media */}

            <div className="mt-8">

              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                Follow Us
              </h3>

              <div className="mt-5 flex items-center gap-3">

                {socialLinks.map((social) => {

                  const Icon = social.icon

                  return (

                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      title={social.name}
                      className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-gray-400 transition duration-300 hover:-translate-y-1 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-purple-300"
                    >

                      <Icon
                        size={17}
                        className="transition duration-300 group-hover:scale-110"
                      />

                    </a>

                  )

                })}

              </div>

            </div>

          </div>

        </div>


        {/* Divider */}

        <div className="my-12 h-px bg-white/10" />


        {/* Bottom */}

        <div className="flex flex-col gap-4 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

          <p>
            © 2026 ZNU Robotics Community. All rights reserved.
          </p>

          <p>
            Zagazig National University
          </p>

        </div>

      </div>

    </footer>

  )
}

export default Footer