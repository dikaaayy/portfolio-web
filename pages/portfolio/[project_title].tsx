import Image from 'next/image'
import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { prisma } from '../../lib/prisma'
import { RiCalendarCheckLine } from 'react-icons/ri'
import { BsPersonCircle } from 'react-icons/bs'
import Head from 'next/head'
import Link from 'next/link'

export async function getServerSideProps(context: any) {
  const { project_title } = context.query
  const post = await prisma.post.findUnique({
    where: {
      project_title,
    },
  })
  if (!post) {
    return {
      notFound: true,
    }
  }
  return { props: { post } }
}
export default function Detail({ post }: any) {
  const [images, setImages] = useState<string[]>([])
  const [isMounted, setIsMounted] = useState(false)
  const [isLoginModalOpened, setIsLoginModalOpened] = useState(false)

  useEffect(() => {
    const filterImage = (images: String) => {
      const array = images.split(',')
      return array
    }
    setImages(filterImage(post.image))
    setIsMounted(true)
  }, [])
  return (
    <>
      <Head>
        <title>{post.project_name} | Dika</title>
      </Head>
      <Navbar />
      <>
        <div className="bg-customLight-lightGray pb-10 pt-32 font-sanFrancisco dark:bg-customDark-darkGray">
          <div className="mx-auto w-[85%] space-y-3 overflow-hidden rounded-md bg-[#d1c8a6] text-white shadow-xl dark:bg-[#808080] dark:text-black sm:w-[80vw] lg:w-[70vw] xl:w-[65vw]">
            <div className="px-5 pt-3">
              {isMounted ? (
                <Image src={images[0]} width={2532} height={1472} />
              ) : (
                <p>Image</p>
              )}
            </div>
            <div className="space-y-3 bg-[#706b56] px-5 py-3 dark:bg-[#d6d6d6]">
              <div className="vertical-center gap-x-6">
                <div className="vertical-center gap-x-1">
                  <BsPersonCircle size={20} className="dark:text-black" />
                  <p className="cursor-default font-medium">{post.author}</p>
                </div>
                <div className="vertical-center cursor-default gap-x-1">
                  <RiCalendarCheckLine size={20} className="text-green-500" />
                  <p className="font-medium">{post.release_date}</p>
                </div>
              </div>
              <p className="cursor-default text-3xl font-bold">
                {post.project_name}
              </p>
              <div className="vertical-center gap-x-4 font-medium">
                <Link href={post.live_preview}>
                  <a
                    className="text-[#c9c9c9] transition hover:text-inherit dark:text-inherit dark:hover:text-[#575757]"
                    target={'_blank'}
                  >
                    Live Preview
                  </a>
                </Link>
                <Link href={post.github_repo}>
                  <a
                    className="text-[#c9c9c9] transition hover:text-inherit dark:text-inherit dark:hover:text-[#575757]"
                    target={'_blank'}
                  >
                    Github Repository
                  </a>
                </Link>
              </div>
              <p className="select-none tracking-wider">{post.content}</p>
            </div>
          </div>
          <div className="mx-auto mt-10 w-[85%] rounded-md border-2 bg-[#d1c8a6] p-5 text-white shadow-xl dark:bg-[#d6d6d6] dark:text-black sm:w-[80vw] lg:w-[70vw] xl:w-[65%]">
            <p className="text-lg font-medium">Leave Your Comment below!</p>
            <form className="mt-5 flex flex-col">
              <label htmlFor="comment">Write here</label>
              <textarea
                id="comment"
                className="resize rounded bg-white p-2 outline-none"
                maxLength={400}
                spellCheck={false}
              />
              <button
                type="submit"
                className="mt-2 w-1/5 self-end rounded-md border-2 py-2"
              >
                Post
              </button>
            </form>
          </div>
        </div>
      </>
    </>
  )
}
