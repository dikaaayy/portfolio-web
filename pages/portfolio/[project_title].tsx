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
    <div className="select-none">
      <Head>
        <title>{post.project_name} | Dika</title>
      </Head>
      <Navbar />
      <div className="w-screen bg-customLight-lightGray pb-10 pt-32 dark:bg-customDark-darkGray">
        <div className="mx-auto space-y-5 rounded-md border-[1px] bg-customDark-darkGray px-5 py-4 text-[#dfdfdf] shadow-xl dark:bg-customLight-lightGray dark:text-customLight-darkGray sm:w-[80vw] xl:w-[65vw]">
          <div className="space-y-1">
            {isMounted ? (
              <Image
                src={images[0]}
                width={1920}
                height={1027}
                layout="responsive"
              />
            ) : (
              <>test</>
            )}
            <div className="flex items-center gap-x-6">
              <div className="flex items-center gap-x-1">
                <BsPersonCircle size={20} className="text-black" />
                <p className="font-medium">{post.author}</p>
              </div>
              <div className="flex items-center gap-x-1">
                <RiCalendarCheckLine size={20} className="text-green-500" />
                <p className="font-medium">{post.release_date}</p>
              </div>
            </div>
          </div>
          <p className="text-3xl font-semibold">{post.project_name}</p>
          <p className="">{post.content}</p>
        </div>
      </div>
    </div>
  )
}
