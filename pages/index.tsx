import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>My Personal Web | Dika</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="h-screen w-screen bg-customDark-darkGray pt-20 text-white">
        <p>test</p>
      </main>
    </div>
  )
}

export default Home
