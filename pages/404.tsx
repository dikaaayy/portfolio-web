import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'

export default function Page() {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 2500)
  }, [])
  return (
    <>
      <Navbar />
      <div className="flex h-screen w-screen flex-col items-center justify-center space-y-10 bg-customLight-lightGray dark:bg-customDark-darkGray">
        <p className="text-9xl">?</p>
        <p className="text-2xl font-semibold">Page not Found!</p>
        <p>Returning to main page</p>
      </div>
    </>
  )
}
