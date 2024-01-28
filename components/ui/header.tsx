import Image from 'next/image'
import { Link } from 'react-scroll'

import HTLogo from '@/public/images/HTLogo.png'

export default function Header({ nav = true }: {
  nav?: boolean
}) {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <div className="w-20 mx-auto mt-0">
              <Image
                src={HTLogo}
                alt='Herk Technical Logo'
              />
            </div>
          </div>
          {/* Desktop navigation */}
          {nav &&
            <nav className="flex grow">
              {/* Desktop sign in links */}
              <ul className="flex grow justify-end flex-wrap items-center">
                <li className="ml-3">
                  <Link
                    to="call"
                    smooth={true}
                    duration={500}
                    className="btn-sm text-white bg-indigo-500 hover:bg-indigo-600 cursor-pointer w-full shadow-sm group"
                  >
                    Set up a Call <span className="tracking-normal text-sky-300 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">-&gt;</span>
                  </Link>
                </li>
              </ul>
            </nav>
          }
        </div>
      </div>
    </header>
  )
}
