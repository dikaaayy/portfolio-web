import Image from 'next/image'
import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { prisma } from '../../lib/prisma'
import { RiCalendarCheckLine } from 'react-icons/ri'
import Head from 'next/head'

export async function getServerSideProps(context: any) {
  const { project_title } = context.query
  console.log(project_title)
  const post = await prisma.post.findUnique({
    where: {
      project_title,
    },
  })
  // console.log(post)
  return { props: { post } }
}
export default function Detail({ post }: any) {
  const [images, setImages] = useState<string[]>([])

  useEffect(() => {
    const filterImage = (images: String) => {
      const array = images.split(',')
      return array
    }
    setImages(filterImage(post.image))
  }, [])
  // console.log(post)
  return (
    <div className="select-none">
      <Head>
        <title>{post.project_name} | Dika</title>
      </Head>
      <Navbar />
      <div className="w-screen bg-customDark-darkGray pb-10 pt-32">
        <div className="mx-auto space-y-4 rounded-md border-[1px] bg-customDark-lightGray px-3 py-4 text-customDark-darkGray shadow-xl sm:w-[80vw] xl:w-[65vw]">
          <div className="space-y-1">
            <img
              src={images[0]}
              alt={post.project_name + '-img'}
              className="mb-4 rounded"
            />
            <div className="flex items-center gap-x-6">
              <div className="flex items-center gap-x-2">
                <p className="font-medium">{post.author}</p>
              </div>
              <div className="flex items-center gap-x-1">
                <RiCalendarCheckLine size={20} className="text-green-500" />
                <p className="font-medium">{post.release_date}</p>
              </div>
            </div>
            <p className="text-2xl font-semibold">{post.project_name}</p>
          </div>
          <p>{post.content}</p>
        </div>
      </div>
    </div>
  )
}
