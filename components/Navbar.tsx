import Link from 'next/link'
import React, { useState, useRef, useEffect } from 'react'
import { FiSun, FiMoon, FiChevronDown, FiChevronUp } from 'react-icons/fi'
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
  // console.log(theme)
  // useEffect(() => {
  //   const checkIfClickedOutside = (e: any) => {
  //     if (isDropdownOpen && !ref?.current!.contains(e.target)) {
  //       setIsDropdownOpen(false)
  //       // alert('tutup')
  //     } else {
  //       return
  //     }
  //   }
  //   document.addEventListener('click', checkIfClickedOutside)
  //   return () => {
  //     document.removeEventListener('click', checkIfClickedOutside)
  //   }
  // }, [isDropdownOpen])

  useEffect(() => {
    document.body.style.overflow = isLoginModalOpened ? 'hidden' : 'overlay'
  }, [isLoginModalOpened])

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
          <Link href="/">
            <a className="navbar-button">Home</a>
          </Link>
          <Link href="/portfolio">
            <a className="navbar-button">Portfolio</a>
          </Link>
        </div>
        <div className="vertical-center gap-x-2 sm:gap-x-5">
          <button className="dark-mode-button group" onClick={darkHandler}>
            {process.browser ? (
              theme === 'dark' || theme === 'system' ? (
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
          >
            {isDropdownOpen ? (
              <>
                {session ? (
                  <>
                    <Image
                      src={session?.user?.image!}
                      width={40}
                      height={40}
                      className="rounded-full"
                      layout="fixed"
                    />
                    <FiChevronUp className="animate-fader" size={30} />
                  </>
                ) : (
                  <>
                    <BsPersonCircle size={40} />
                    <FiChevronUp className="animate-fader" size={30} />
                  </>
                )}
                <div className="absolute top-12 -left-0 animate-fadein cursor-default rounded-md bg-[#b1a784] text-white dark:bg-[#c7c7c7] dark:text-black">
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
                        onClick={() => {
                          setIsLoginModalOpened(true)
                        }}
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
                  className="rounded-full"
                  layout="fixed"
                />
                <FiChevronDown className="animate-fader" size={30} />
              </>
            ) : (
              <>
                <BsPersonCircle size={40} />
                <FiChevronDown className="animate-fader" size={30} />
              </>
            )}
          </button>
        </div>
      </div>
      {isLoginModalOpened && (
        <Login
          closeModal={() => {
            setIsLoginModalOpened(false)
          }}
        />
      )}
    </>
  )
}
