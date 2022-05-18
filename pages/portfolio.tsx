import Image from 'next/image'
import { prisma } from '../lib/prisma'
import Head from 'next/head'

import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiSpotify,
  SiThemoviedatabase,
  SiSocketdotio,
} from 'react-icons/si'

export async function getStaticProps() {
  const data = await prisma.post.findMany({
    select: {
      project_name: true,
      image: true,
      tech_stack: true,
    },
  })

  return {
    props: {
      posts: data,
    },
  }
}

export default function portfolio({ posts }: any) {
  console.log(posts)
  const filterImage = (images: String) => {
    const array = images.split(',')
    return array[2]
  }
  const techStackArr = (stack: String) => {
    const arrays = stack.split(',')
    return arrays
  }

  const filterTechStack = (tech: string) => {
    if (tech === 'NextJS') return <SiNextdotjs size={18} />
    if (tech === 'TailwindCSS')
      return <SiTailwindcss size={18} className="text-[#40beb2]" />
    if (tech === 'Recoil State Management')
      return <Image src="/asset/recoil.svg" width={18} height={18} />
    if (tech === 'ReactJS')
      return <SiReact size={19} className="text-blue-300" />
    if (tech === "Spotify Developer's API")
      return <SiSpotify size={18} className="text-green-500" />
    if (tech === 'TMDB API') return <SiThemoviedatabase size={18} />
    if (tech === 'Socket.IO') return <SiSocketdotio size={18} />
  }
  return (
    <>
      <Head>
        <title>My Portfolio | Dika</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <p>test</p>
      </div>
      <div className="mt-20 grid grid-cols-1 gap-y-14 gap-x-4 md:grid-cols-2 md:justify-items-center ">
        {posts.map((post: any) => {
          return (
            <div
              className="flex h-[30vh] w-full flex-col justify-start gap-y-1 rounded-lg bg-gray-300 px-5 shadow-lg transition duration-200 hover:scale-[1.015] md:h-[40vh] md:w-[90%] lg:h-[50vh] lg:w-[80%]"
              key={post.project_name}
              onClick={() => {
                console.log('test')
              }}
            >
              <div className="relative flex h-[88%] w-full">
                <Image
                  src={filterImage(post.image)}
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>
              <div className="space-y-1 pb-2">
                <div className="flex items-center gap-x-3">
                  {techStackArr(post.tech_stack).map((tech) => {
                    return (
                      <div key={tech} className="group relative">
                        <div className="absolute -top-7 -left-5 z-50 flex h-5 min-w-max scale-0 items-center justify-center rounded bg-[#424242] py-3 px-2 text-white transition-all group-hover:scale-100">
                          <p className="text-xs font-medium">{tech}</p>
                        </div>
                        {filterTechStack(tech)}
                      </div>
                    )
                  })}
                </div>
                <p className="text-xl font-semibold">{post.project_name}</p>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
