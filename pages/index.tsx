import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef } from 'react'
import Navbar from '../components/Navbar'
import MainHeader from '../components/MainHeader'
import Spin from '../components/Spin'
import Link from 'next/link'

const Home: NextPage = () => {
  const aboutme = useRef<HTMLDivElement>(null)

  const goToRef = () => {
    aboutme?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    })
  }

  return (
    <div className="relative overflow-x-hidden bg-customLight-lightGray pb-[10rem] font-sanFrancisco text-customLight-darkGray dark:bg-customDark-darkGray dark:text-customDark-lightGray">
      <Head>
        <title>My Personal Web | Dika</title>
        <meta name="title" content="My Personal Web | Dika" />
        <meta
          name="description"
          content="Hi, I am Andika Yudhistira, a Software Developer that mainly focuses in Frontend development. Besides that, I love to explore latest technology and/or framework to ease the development process. On top of that, I am also an active student at Universitas Gadjah Mada, majoring in Computer Science."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.andikay.me/" />
        <meta property="og:title" content="My Personal Web | Dika" />
        <meta
          property="og:description"
          content="Hi, I am Andika Yudhistira, a Software Developer that mainly focuses in Frontend development. Besides that, I love to explore latest technology and/or framework to ease the development process. On top of that, I am also an active student at Universitas Gadjah Mada, majoring in Computer Science."
        />
        <meta property="og:image" content="/asset/metaImage.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.andikay.me/" />
        <meta property="twitter:title" content="My Personal Web | Dika" />
        <meta
          property="twitter:description"
          content="Hi, I am Andika Yudhistira, a Software Developer that mainly focuses in Frontend development. Besides that, I love to explore latest technology and/or framework to ease the development process. On top of that, I am also an active student at Universitas Gadjah Mada, majoring in Computer Science."
        />
        <meta property="twitter:image" content="/asset/metaImage.png" />
      </Head>
      <Navbar />
      <>
        <MainHeader onClick={goToRef} />
        <div
          className="relative mt-20 mb-20 pb-16 sm:static sm:flex sm:justify-evenly md:mb-24 lg:mt-48"
          ref={aboutme}
        >
          <div className="relative mx-auto w-[80vw] space-y-7 sm:mx-0 sm:w-[40%]">
            <p className="pr-2 text-[2.6rem] font-semibold sm:pr-0">About Me</p>
            <p className="rounded-md bg-[#838383] bg-opacity-10 p-2 text-lg tracking-wider text-black dark:bg-white dark:bg-opacity-10 dark:text-white sm:bg-inherit sm:p-0 sm:dark:bg-inherit">
              I am a Software Developer, mainly focused in Frontend development,
              using ReactJS. Besides that, I love to explore latest technology
              and/or framework such as NextJS and TailwindCSS to ease the
              development process. On top of that, I am also an active student
              at Universitas Gadjah Mada, majoring in Computer Science and
              expected to graduate in 2024.
            </p>
          </div>
          <div className="vertical-center absolute top-10 bottom-0 left-0 right-0 m-auto blur-sm sm:static sm:m-0 sm:w-1/3 sm:blur-none">
            <Spin />
          </div>
        </div>
        <div className="mx-auto mb-10 block w-[92%] rounded-2xl bg-customLight-darkGray pt-1 pb-6 text-3xl font-medium text-customLight-lightGray dark:bg-[#808080] dark:text-white sm:w-[50%] md:w-[40%] lg:w-[35%]">
          <div className="animate-bouncy text-center">
            <Link href="/portfolio">
              <a>Find more about my latest work here!</a>
            </Link>
          </div>
        </div>
      </>
    </div>
  )
}

export default Home
