import Link from 'next/link'
import { FiSun, FiMoon, FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { MdClose } from 'react-icons/md'
import { useTheme } from 'next-themes'
import Head from 'next/head'

export default function Navbar() {
  const { theme, setTheme } = useTheme()

  const darkHandler = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  return (
    <>
      <Head>
        {theme === 'dark' || theme === 'system' ? (
          <link rel="icon" href="/asset/moon.svg" />
        ) : (
          <link rel="icon" href="/asset/sun.svg" />
        )}
      </Head>
      <div className="navbar-container">
        <div className="vertical-center gap-x-6 sm:gap-x-10">
          <Link href="/" legacyBehavior>
            <a className="navbar-button">Home</a>
          </Link>
          <Link href="/portfolio" legacyBehavior>
            <a className="navbar-button">Portfolio</a>
          </Link>
        </div>
        <div className="vertical-center gap-x-2 sm:gap-x-5">
          {theme === 'dark' || theme === 'system' ? (
            <FiSun
              size={40}
              onClick={darkHandler}
              className="dark-mode-button transition hover:text-sunYellow"
            />
          ) : (
            <FiMoon
              size={40}
              className="dark-mode-button text-[#585654] transition hover:text-inherit"
              onClick={darkHandler}
            />
          )}
        </div>
      </div>
    </>
  )
}
