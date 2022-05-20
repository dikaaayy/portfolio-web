import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My Personal Web | Dika</title>
      </Head>

      <Navbar />
      <main className="flex h-screen w-screen bg-customLight-lightGray pt-20 text-customLight-darkGray dark:bg-customDark-darkGray dark:text-customDark-lightGray">
        <div className="flex w-1/2 flex-col items-center justify-center gap-y-4 border-2 border-blue-500">
          <div className="w-1/3 border-2">
            <p className="text-6xl font-semibold">
              Hi, I'm <span className="text-red-500">Andika Yudhistira</span>
            </p>
          </div>
          <p>lorem</p>
        </div>
        <div className="w-1/2 border-2 border-yellow-500">
          <p>test</p>
        </div>
      </main>
    </div>
  )
}

export default Home
