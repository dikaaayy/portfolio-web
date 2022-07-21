import { BsLinkedin, BsGithub, BsGlobe } from 'react-icons/bs'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function MainHeader({ onClick }: any) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <main className="relative flex h-screen w-full select-none flex-col items-center justify-center gap-y-5 pt-20 sm:flex-row sm:gap-y-0">
      <div className="order-2 flex flex-col items-center justify-center gap-y-4 sm:order-1 md:w-1/2">
        <div className="flex w-1/2 justify-center sm:w-1/3">
          <p className="text-5xl font-semibold sm:text-6xl">
            Hi, I'm <span className="text-red-500">Andika Yudhistira</span>
          </p>
        </div>
      </div>
      <div className="order-1 mb-7 flex h-1/2 flex-col items-center justify-center gap-y-3 sm:order-2 sm:mb-0 sm:w-1/2 sm:gap-y-10">
        <div className="w-[65%] 2xl:w-1/2">
          <Image
            src="/asset/colored.jpg"
            height={2930}
            width={2930}
            className="rounded-md"
          />
        </div>
        <div className="flex gap-x-4">
          <div className="group rounded-full">
            <div className="main-social-button vertical-center">
              <Link href="https://www.github.com/dikaaayy">
                <a target="_blank" className="flex gap-x-1">
                  <BsGithub size={25} />
                  <p>Github</p>
                </a>
              </Link>
            </div>
          </div>
          <div className="group rounded-full">
            <div className="main-social-button vertical-center">
              <Link href="https://www.linkedin.com/in/andika-yudhistira-1aab76206">
                <a target="_blank" className="flex gap-x-1">
                  <div className="rounded-md bg-white">
                    <BsLinkedin size={25} className="text-[#0077B5]" />
                  </div>
                  <p>Linkedin</p>
                </a>
              </Link>
            </div>
          </div>
          <div className="group rounded-full">
            <div className="main-social-button vertical-center">
              <Link href="mailto:andikayudhistira@mail.ugm.ac.id">
                <a target="_blank" className="flex gap-x-1">
                  <BsGlobe size={22} />
                  <p>Email</p>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <svg
        width="120"
        height="100"
        viewBox="0 0 120 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="group absolute -bottom-6 left-0 right-0 mx-auto rotate-90 sm:bottom-0"
        onClick={onClick}
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
              className="-translate-x-full transition-all duration-500 ease-linear group-hover:-translate-x-3"
            />
            <path
              id="dark2"
              opacity="0.8"
              d="M54.6154 46.915C56.8718 48.2177 56.8718 51.4746 54.6154 52.7773L14 76.2266C11.7436 77.5294 8.92307 75.9009 8.92307 73.2955L8.92308 26.3968C8.92308 23.7914 11.7436 22.1629 14 23.4657L54.6154 46.915Z"
              className="translate-x-0 transition-all duration-500 ease-linear group-hover:translate-x-full"
            />
          </g>
        </g>
      </svg>
    </main>
  )
}
