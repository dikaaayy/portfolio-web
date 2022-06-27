import Link from 'next/link'
import React, { useState, useRef, useEffect } from 'react'
import { FiSun, FiMoon, FiChevronDown } from 'react-icons/fi'
import { BsPersonCircle } from 'react-icons/bs'
import { MdClose } from 'react-icons/md'
import { useTheme } from 'next-themes'
import Head from 'next/head'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import Login from './login/Login'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isLoginModalOpened, setIsLoginModalOpened] = useState<any>(false)
  const { data: session } = useSession()
  const ref = useRef<HTMLButtonElement>(null)

  const darkHandler = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }
  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      if (isDropdownOpen && !ref?.current!.contains(e.target)) {
        setIsDropdownOpen(false)
      } else {
        return
      }
    }
    document.addEventListener('click', checkIfClickedOutside)
    return () => {
      document.removeEventListener('click', checkIfClickedOutside)
    }
  }, [isDropdownOpen])

  return (
    <>
      <Head>
        {theme === 'dark' ? (
          <link rel="icon" href="/asset/moon.svg" />
        ) : (
          <link rel="icon" href="/asset/sun.svg" />
        )}
      </Head>
      <div className="navbar-container animate-fader">
        <div className="vertical-center gap-x-10">
          <Link href="/">
            <a className="navbar-button">Home</a>
          </Link>
          <Link href="/portfolio">
            <a className="navbar-button">Portfolio</a>
          </Link>
        </div>
        <div className="vertical-center space-x-5">
          <button className="dark-mode-button group" onClick={darkHandler}>
            {process.browser ? (
              theme === 'dark' ? (
                <FiSun size={30} className="transition hover:text-sunYellow" />
              ) : (
                <FiMoon
                  size={30}
                  className="text-[#585654] transition group-hover:text-inherit"
                />
              )
            ) : null}
          </button>
          <button
            className="vertical-center relative"
            onClick={() => {
              setIsDropdownOpen(!isDropdownOpen)
            }}
            ref={ref}
          >
            {isDropdownOpen ? (
              <>
                <MdClose className="animate-fader" size={40} />
                <div className="absolute top-10 -left-4 animate-fadein cursor-default rounded-md bg-[#a1a1a1]">
                  {session ? (
                    <p
                      onClick={() => signOut()}
                      className="cursor-pointer px-4 py-2"
                    >
                      Logout
                    </p>
                  ) : (
                    <>
                      <p
                        className="cursor-pointer px-4 py-2"
                        onClick={() => setIsLoginModalOpened(true)}
                      >
                        Login
                      </p>
                    </>
                  )}
                </div>
              </>
            ) : session ? (
              <>
                <Image
                  src={session?.user?.image!}
                  width={40}
                  height={40}
                  className="animate-fader rounded-full"
                  layout="fixed"
                />
              </>
            ) : (
              <>
                <BsPersonCircle className="animate-fader" size={40} />
              </>
            )}
          </button>
        </div>
      </div>
      {isLoginModalOpened && (
        <Login closeModal={() => setIsLoginModalOpened(false)} />
      )}
    </>
  )
}
