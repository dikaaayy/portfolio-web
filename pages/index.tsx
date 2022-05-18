import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio Web | Dika</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className="h-screen w-screen bg-slate-600">
        <p>test</p>
      </main>
    </div>
  )
}

export default Home
