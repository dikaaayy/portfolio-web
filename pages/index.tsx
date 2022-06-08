import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import MainHeader from '../components/MainHeader'
import Spin from '../components/Spin'
import Link from 'next/link'
import Image from 'next/image'

type Post = {
  project_name: string
  image: string
}

const Home: NextPage = () => {
  const aboutme = useRef<HTMLDivElement>(null)
  const [posts, setPosts] = useState<Post[]>([])
  useEffect(() => {
    const fetchPost = async () => {
      fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/getPost`)
        .then((res) => res.json())
        .then((data) => {
          setPosts(data)
          // setIsLoading(false);
        })
    }
    fetchPost()
  }, [])

  const filterImage = (images: String) => {
    const array = images.split(',')
    return array[0]
  }

  const goToRef = () => {
    aboutme?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'start',
    })
  }
  console.log(posts)
  return (
    <div className="relative overflow-x-hidden bg-customLight-lightGray pb-[10rem] font-sanFrancisco text-customLight-darkGray dark:bg-customDark-darkGray dark:text-customDark-lightGray">
      <Head>
        <title>My Personal Web | Dika</title>
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
        <div className="mx-auto mb-10 block h-16 w-1/3 rounded-2xl bg-[#808080] pt-2 text-3xl font-semibold">
          <div className="animate-bouncy text-center">
            <Link href="/portfolio">
              <a>Find more about my latest work here!</a>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-items-center gap-y-7 gap-x-5">
          {posts.map((post, i) => {
            return (
              <Link href={'/portfolio'} key={i}>
                <a
                  className="group w-[75%] rounded-lg border-[1px] border-customLight-darkGray p-2 dark:border-customDark-lightGray"
                  key={i}
                >
                  <Image
                    src={filterImage(post.image)}
                    width={2532}
                    height={1472}
                    className="opacity-75 blur-sm transition group-hover:opacity-90 group-hover:blur-[3px]"
                  />
                  <p className="text-center font-medium opacity-75 blur-sm transition group-hover:opacity-90 group-hover:blur-[3px]">
                    {post.project_name}
                  </p>
                </a>
              </Link>
            )
          })}
        </div>
      </>
    </div>
  )
}

export default Home
