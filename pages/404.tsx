import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'

export default function Page() {
  const router = useRouter()
  const [time, setTime] = useState(3000)
  useEffect(() => {
    if (time !== 0) {
      setTimeout(() => {
        setTime(time - 1000)
      }, 1000)
    } else {
      setTimeout(() => {
        router.push('/')
      }, 1000)
    }
  }, [time])
  return (
    <>
      <Head>
        <title>Page not found!</title>
      </Head>
      <Navbar />
      <div className="flex h-screen w-screen flex-col items-center justify-center space-y-10 bg-customLight-lightGray dark:bg-customDark-darkGray">
        <p className="text-9xl">?</p>
        <p className="text-2xl font-semibold">Page not Found!</p>
        <p>Returning to main page in {time / 1000}</p>
      </div>
    </>
  )
}
