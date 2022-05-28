import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef } from 'react'
import Navbar from '../components/Navbar'
import { Parallax } from 'react-scroll-parallax'
import Image from 'next/image'
import MainHeader from '../components/MainHeader'
import Spin from '../components/Spin'

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
      </Head>
      <Navbar />
      <>
        <MainHeader onClick={goToRef} />
        <div
          className="relative mt-20 sm:static sm:flex sm:justify-evenly lg:mt-48 lg:mb-20"
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
          <div className="vertical-center absolute top-10 bottom-0 left-0 right-0  m-auto blur-sm sm:static sm:m-0 sm:w-1/3 sm:blur-none">
            <Spin />
          </div>
        </div>
        <div className="mx-auto w-1/2 border-2 border-black text-center text-3xl font-semibold">
          See my latest work here!
        </div>
      </>
    </div>
  )
}

export default Home
