import Link from 'next/link'
import React from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Head from 'next/head'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  // console.log(theme)

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
        {theme === 'dark' ? (
          <link rel="icon" href="/asset/moon.svg" />
        ) : (
          <link rel="icon" href="/asset/sun.svg" />
        )}
      </Head>
      <div className="navbar-container">
        <div className="flex items-center gap-x-10">
          <Link href="/">
            <a className="rounded-md px-3 py-2 text-lg transition hover:bg-[#d1d1d1] dark:hover:bg-inherit dark:hover:bg-[#2c2c2c]">
              Home
            </a>
          </Link>
          <Link href="/portfolio">
            <a className="rounded-md px-3 py-2 text-lg transition hover:bg-[#d1d1d1] dark:hover:bg-inherit dark:hover:bg-[#2c2c2c]">
              Portfolio
            </a>
          </Link>
        </div>
        <div className="flex items-center">
          <button
            className="group rounded-md bg-[#d1d1d1] p-2 dark:bg-[#2e2e2e]"
            onClick={darkHandler}
          >
            {theme === 'dark' ? (
              <FiSun
                size={30}
                className="text-white transition group-hover:text-sunYellow"
              />
            ) : (
              <FiMoon
                size={30}
                className=" transition group-hover:text-[#646260]"
              />
            )}
          </button>
        </div>
      </div>
    </>
  )
}
