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
        <div className="vertical-center gap-x-10">
          <Link href="/">
            <a className="navbar-button">Home</a>
          </Link>
          <Link href="/portfolio">
            <a className="navbar-button">Portfolio</a>
          </Link>
        </div>
        <div className="vertical-center">
          <button className="dark-mode-button group" onClick={darkHandler}>
            {theme === 'dark' ? (
              <FiSun
                size={30}
                className="text-white transition group-hover:text-sunYellow"
              />
            ) : (
              <FiMoon
                size={30}
                className="text-[#585654] transition group-hover:text-inherit"
              />
            )}
          </button>
        </div>
      </div>
    </>
  )
}
