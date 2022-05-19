import Link from 'next/link'
import React from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isDark, setIsDark] = useState(true)
  console.log(theme)

  const darkHandler = () => {
    if (isDark) {
      setTheme('light')
      setIsDark(false)
    } else {
      setTheme('dark')
      setIsDark(true)
    }
  }

  return (
    <div className="absolute flex h-20 w-screen justify-around border-b-[1px] border-customLight-darkGray bg-customLight-lightGray font-medium text-customLight-darkGray dark:border-customDark-lightGray dark:bg-customDark-darkGray  dark:text-customDark-lightGray">
      <div className="flex items-center gap-x-14">
        <Link href="/">
          <a className="text-lg">Home</a>
        </Link>
        <Link href="/portfolio">
          <a className="text-lg">Portfolio</a>
        </Link>
      </div>
      <div className="flex items-center">
        <button>
          {isDark ? (
            <FiSun size={30} onClick={darkHandler} />
          ) : (
            <FiMoon size={30} onClick={darkHandler} />
          )}
        </button>
      </div>
    </div>
  )
}
