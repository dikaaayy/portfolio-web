import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Main from '../components/Main'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Portfolio Web | Dika</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Main />
      </main>
    </div>
  )
}

export default Home
