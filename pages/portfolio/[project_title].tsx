import Image from 'next/image'
import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { prisma } from '../../lib/prisma'
import { RiCalendarCheckLine } from 'react-icons/ri'
import { BsPersonCircle } from 'react-icons/bs'
import Head from 'next/head'

export async function getServerSideProps(context: any) {
  const { project_title } = context.query
  const post = await prisma.post.findUnique({
    where: {
      project_title,
    },
  })
  return { props: { post } }
}
export default function Detail({ post }: any) {
  const [images, setImages] = useState<string[]>([])
  const [isMounted, setIsMounted] = useState(false)

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
          <div className="mx-auto w-[85vw] space-y-5 rounded-md border-[1px] bg-customDark-darkGray px-5 py-4 text-white shadow-xl dark:bg-customDark-lightGray dark:text-black sm:w-[80vw] lg:w-[70vw] xl:w-[65vw]">
            {isMounted ? (
              <Image src={images[0]} width={2532} height={1472} />
            ) : (
              <p>Image</p>
            )}
            <div className="vertical-center gap-x-6">
              <div className="vertical-center gap-x-1">
                <BsPersonCircle size={20} className="text-black" />
                <p className="font-medium">{post.author}</p>
              </div>
              <div className="vertical-center gap-x-1">
                <RiCalendarCheckLine size={20} className="text-green-500" />
                <p className="font-medium">{post.release_date}</p>
              </div>
            </div>

            <p className="text-3xl font-bold">{post.project_name}</p>
            <p className="select-none tracking-wider">{post.content}</p>
          </div>
        </div>
      </>
    </>
  )
}
