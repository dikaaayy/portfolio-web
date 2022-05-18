import Image from 'next/image'
import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { prisma } from '../../lib/prisma'

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
  // console.log(images[0])
  return (
    <>
      <Navbar />
      <div className="h-screen w-screen border-2 border-blue-500">
        {console.log(images[0])}
        {/* <img src={images[0]} className="w-[50vw]" alt="" /> */}
        <div className="relative h-full w-[50vw]">
          <Image src={images[0]} layout="fill" objectFit="contain" />
        </div>
      </div>
    </>
  )
}
