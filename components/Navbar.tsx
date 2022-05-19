import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className="absolute flex h-20 w-screen justify-around bg-slate-600 font-medium text-customDark-lightGray">
      <div className="flex items-center gap-x-14">
        <Link href="/">
          <a className="text-lg">Home</a>
        </Link>
        <Link href="/portfolio">
          <a className="text-lg">Portfolio</a>
        </Link>
      </div>
      <button>Test</button>
    </div>
  )
}
