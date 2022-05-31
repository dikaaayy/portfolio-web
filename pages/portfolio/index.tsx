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
    orderBy: {
      id: 'desc',
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
        <div className="vertical-center">
          <Image src="/asset/recoil.svg" width={18} height={18} />
        </div>
      )
    if (tech === 'ReactJS')
      return <SiReact size={19} className="text-[#61DBFB]" />
    if (tech === "Spotify Developer's API")
      return <SiSpotify size={18} className="text-green-500" />
    if (tech === 'TMDB API') return <SiThemoviedatabase size={18} />
    if (tech === 'Socket.IO') return <SiSocketdotio size={18} />
    if (tech === 'ExpressJS') return <SiExpress size={18} />
  }
  return (
    <div className="font-sanFrancisco">
      <Head>
        <title>Past Work ✅ | Dika</title>
      </Head>

      <Navbar />
      <div className="portfolio-container">
        <div className="portfolio-heading-container">
          <p className="text-4xl font-semibold">My Portfolio</p>
          <p className="text-lg  font-medium">An array of my previous works</p>
        </div>
        <div className="portfolio-cards-container">
          {posts.map((post: any) => {
            return (
              <Link
                key={post.project_name}
                href={'/portfolio/' + post.project_title}
              >
                <a className="portfolio-card">
                  <div className="bg-[#d1c8a6] px-10 py-2 dark:bg-[#808080]">
                    <Image
                      src={filterImage(post.image)}
                      width={2532}
                      height={1472}
                    />
                  </div>
                  <div className="space-y-1 bg-[#706b56] px-4 py-2 dark:bg-[#d6d6d6]">
                    <div className="flex items-end gap-x-3">
                      {techStackArr(post.tech_stack).map((tech) => {
                        return (
                          <div key={tech} className="group relative">
                            <div className="tech-tooltip vertical-center">
                              <p className="text-xs font-medium">{tech}</p>
                            </div>
                            {filterTechStack(tech)}
                          </div>
                        )
                      })}
                    </div>
                    <div className="space-y-1">
                      <p className="text-xl font-semibold">
                        {post.project_name}
                      </p>
                      <p className="text-sm">Read More</p>
                    </div>
                  </div>
                </a>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
