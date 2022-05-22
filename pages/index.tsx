import type { NextPage } from 'next'
import Head from 'next/head'
import { useRef } from 'react'
import Navbar from '../components/Navbar'

const Home: NextPage = () => {
  const aboutme = useRef<HTMLDivElement>(null)
  return (
    <>
      <Head>
        <title>My Personal Web | Dika</title>
      </Head>
      <Navbar />
      <div className="bg-customLight-lightGray pb-20 text-customLight-darkGray dark:bg-customDark-darkGray dark:text-customDark-lightGray">
        <main className="relative flex h-screen w-screen pt-20">
          <div className="flex w-1/2 flex-col items-center justify-center gap-y-4 border-blue-500">
            <div className="w-1/3">
              <p className="text-6xl font-semibold">
                Hi, I'm <span className="text-red-500">Andika Yudhistira</span>
              </p>
            </div>
            <p>lorem</p>
          </div>
          <div className="flex w-1/2 flex-col items-center justify-center gap-y-10 border-yellow-500">
            <p>Image goes here</p>
            <div className="selection: flex gap-x-4">
              <div className="rounded-full border-2 bg-white px-3 py-1 text-customDark-darkGray transition hover:-translate-y-2">
                github
              </div>
              <div className="rounded-full border-2 bg-white px-3 py-1 text-customDark-darkGray">
                linkedin
              </div>
              <div className="rounded-full border-2 bg-white px-3 py-1 text-customDark-darkGray">
                email
              </div>
            </div>
          </div>
          <svg
            width="120"
            height="100"
            viewBox="0 0 120 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="group absolute bottom-0 left-0 right-0 mx-auto rotate-90"
            onClick={() => {
              aboutme.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'start',
              })
            }}
          >
            <g id="triangles">
              <g id="lightGroup" className="fill-[#665b51] dark:fill-[#dfc742]">
                <path
                  id="light1"
                  opacity="0.8"
                  d="M53.4872 46.3509C55.7436 47.6536 55.7436 50.9105 53.4872 52.2132L13.718 75.174C11.4615 76.4767 8.64104 74.8483 8.64104 72.2428L8.64104 26.3213C8.64104 23.7158 11.4616 22.0874 13.718 23.3901L53.4872 46.3509Z"
                  className="translate-x-1/4 transition-all duration-[400ms] ease-linear"
                />
              </g>
              <g id="darkGroup" className="fill-[#F3DB00] dark:fill-[#837669]">
                <path
                  id="dark1"
                  opacity="0.8"
                  d="M74.9231 46.915C77.1795 48.2177 77.1795 51.4746 74.9231 52.7773L34.3077 76.2266C32.0513 77.5294 29.2308 75.9009 29.2308 73.2955L29.2308 26.3968C29.2308 23.7914 32.0513 22.1629 34.3077 23.4657L74.9231 46.915Z"
                  className="-translate-x-5 transition-all duration-[400ms] ease-linear group-hover:translate-x-1/2 group-hover:opacity-0"
                />
                <path
                  id="dark2"
                  opacity="0.8"
                  d="M54.6154 46.915C56.8718 48.2177 56.8718 51.4746 54.6154 52.7773L14 76.2266C11.7436 77.5294 8.92307 75.9009 8.92307 73.2955L8.92308 26.3968C8.92308 23.7914 11.7436 22.1629 14 23.4657L54.6154 46.915Z"
                  className="-translate-x-1/2  transition-all duration-[400ms] ease-linear group-hover:translate-x-0"
                />
              </g>
            </g>
          </svg>
        </main>
        <div
          className="mx-auto mt-24 w-[75vw] space-y-5 border-2"
          ref={aboutme}
        >
          <p className="text-4xl font-semibold">About Me</p>
          <div>
            <p className="text-black dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              perspiciatis omnis eligendi nesciunt totam commodi aliquam
              officiis nemo saepe fuga temporibus voluptatem, a rerum amet unde
              modi aperiam asperiores non distinctio dolores facere et
              inventore. Esse, alias velit, quia a accusamus temporibus, ducimus
              officiis quibusdam assumenda error consectetur eligendi numquam
              consequatur cumque minus laborum itaque ea aperiam! Recusandae ea
              dolorem eum, excepturi architecto fugit suscipit eaque. Nemo atque
              ipsam ipsum inventore reprehenderit ullam dicta iste officia quos
              magni, blanditiis, mollitia culpa obcaecati temporibus expedita
              architecto. Inventore quisquam veritatis hic assumenda, modi saepe
              illo excepturi, fuga ea eaque expedita ipsa fugit.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
