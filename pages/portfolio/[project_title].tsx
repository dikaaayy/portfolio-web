import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import Navbar from '../../components/Navbar'
import { RiCalendarCheckLine } from 'react-icons/ri'
import { BsPersonCircle } from 'react-icons/bs'
import Head from 'next/head'
import Link from 'next/link'
import { Posts } from '../../lib/post'
import { timeFilter } from '../../lib/helper'

export async function getServerSideProps(context: any) {
  const { project_title } = context.query
  const post = Posts.filter(
    (item: any) => item.project_title === project_title
  )[0]
  if (!post) {
    return {
      notFound: true,
    }
  }
  return { props: { post: JSON.parse(JSON.stringify(post)) } }
}
export default function Detail({ post }: any) {
  const [images, setImages] = useState<string[]>([])
  const [isMounted, setIsMounted] = useState(false)
  const contentRef = useRef<any>(null)

  useEffect(() => {
    const filterImage = (images: String) => {
      const array = images.split(',')
      return array
    }
    setImages(filterImage(post.image))
    setIsMounted(true)
  }, [])

  useEffect(() => {
    contentRef.current.innerHTML = post.content
  }, [isMounted])

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
                <Image
                  src={images[0]}
                  width={2532}
                  height={1472}
                  alt="images"
                />
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
                  <p className="font-medium">{timeFilter(post.release_date)}</p>
                </div>
              </div>
              <p className="cursor-default text-3xl font-bold">
                {post.project_name}
              </p>
              <div className="vertical-center gap-x-4 font-medium">
                {post.live_preview && (
                  <Link href={post?.live_preview} legacyBehavior>
                    <a
                      className="text-[#c9c9c9] transition hover:text-inherit dark:text-inherit dark:hover:text-[#575757]"
                      target={'_blank'}
                    >
                      Live Preview
                    </a>
                  </Link>
                )}
                <Link href={post?.github_repo} legacyBehavior>
                  <a
                    className="text-[#c9c9c9] transition hover:text-inherit dark:text-inherit dark:hover:text-[#575757]"
                    target={'_blank'}
                  >
                    Github Repository
                  </a>
                </Link>
              </div>
              <div
                className="cursor-default text-justify text-[1.1rem] tracking-wide first-letter:float-left first-letter:mr-3 first-letter:text-6xl first-letter:font-semibold sm:text-lg sm:first-letter:text-7xl"
                ref={contentRef}
              />
            </div>
          </div>
        </div>
      </>
    </>
  )
}
