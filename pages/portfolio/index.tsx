import Image from 'next/image'
import { prisma } from '../../lib/prisma'
import Head from 'next/head'
import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiSpotify,
  SiThemoviedatabase,
  SiSocketdotio,
  SiExpress,
} from 'react-icons/si'
import Link from 'next/link'
import Navbar from '../../components/Navbar'

export async function getServerSideProps() {
  const data = await prisma.post.findMany({
    select: {
      project_name: true,
      image: true,
      tech_stack: true,
      project_title: true,
    },
  })

  return {
    props: {
      posts: data,
    },
  }
}

export default function portfolio({ posts }: any) {
  // console.log(posts)
  const filterImage = (images: String) => {
    const array = images.split(',')
    return array[0]
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
      return (
        <div className="flex items-center">
          <Image src="/asset/recoil.svg" width={18} height={18} />
        </div>
      )
    if (tech === 'ReactJS')
      return <SiReact size={19} className="text-blue-300" />
    if (tech === "Spotify Developer's API")
      return <SiSpotify size={18} className="text-green-500" />
    if (tech === 'TMDB API') return <SiThemoviedatabase size={18} />
    if (tech === 'Socket.IO') return <SiSocketdotio size={18} />
    if (tech === 'ExpressJS') return <SiExpress size={18} />
  }
  return (
    <div className="min-h-max bg-customLight-lightGray pb-8 text-customLight-darkGray dark:bg-customDark-darkGray dark:text-customDark-lightGray">
      <Head>
        <title>My Portfolio | Dika</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Navbar />
      <div className="md:pt-42 mx-auto mb-8 w-[60vw] space-y-4 pt-32">
        <p className="text-4xl font-semibold">My Portfolio</p>
        <p className="text-lg  font-medium">An array of my previous works</p>
      </div>
      <div className="mx-auto grid w-[80vw] grid-cols-1 justify-items-center gap-y-10 md:grid-cols-2">
        {posts.map((post: any) => {
          return (
            <Link
              key={post.project_name}
              href={'/portfolio/' + post.project_title}
            >
              <a className="flex min-h-max w-[90vw] flex-col justify-start gap-y-2 overflow-hidden rounded-lg bg-customLight-darkGray pb-0 text-customLight-lightGray shadow transition duration-200 hover:scale-[1.015] dark:bg-customDark-lightGray dark:text-customLight-darkGray dark:shadow-[#5e5e5e] md:w-[90%] md:shadow-md lg:w-[85%] xl:w-[80%] 2xl:w-[90%]">
                <Image
                  src={filterImage(post.image)}
                  width={1920}
                  height={1027}
                  layout="responsive"
                />
                <div className="space-y-1 px-4 pb-2">
                  <div className="flex items-end gap-x-3">
                    {techStackArr(post.tech_stack).map((tech) => {
                      return (
                        <div key={tech} className="group relative">
                          <div className="absolute -top-7 -left-5 z-50 flex h-5 min-w-max scale-0 items-center justify-center rounded bg-customLight-lightGray py-3 px-2 text-customLight-darkGray transition-all group-hover:scale-100 dark:bg-customDark-darkGray dark:text-customDark-lightGray">
                            <p className="text-xs font-medium">{tech}</p>
                          </div>
                          {filterTechStack(tech)}
                        </div>
                      )
                    })}
                  </div>
                  <div className="space-y-1">
                    <p className="text-xl font-semibold">{post.project_name}</p>
                    <p className="text-sm">Read More</p>
                  </div>
                </div>
              </a>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
