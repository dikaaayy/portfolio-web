import Image from 'next/image'
import Head from 'next/head'
import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiSpotify,
  SiThemoviedatabase,
  SiSocketdotio,
  SiExpress,
  SiMysql,
  SiPrisma,
  SiDigitalocean,
  SiPostgresql,
  SiNginx,
  SiCloudflare,
} from 'react-icons/si'
import Link from 'next/link'
import Navbar from '../../components/Navbar'
import { filterImage, techStackArr } from '../../lib/helper'
import { Posts } from '../../lib/post'

export async function getStaticProps() {
  const data = Posts.sort((a, b) => {
    return b.id - a.id
  })

  return {
    props: {
      posts: data,
    },
  }
}

// export async function getServerSideProps() {
//   const data = Posts.sort((a, b) => {
//     return b.id - a.id
//   })

//   return {
//     props: {
//       posts: data,
//     },
//   }
// }

export default function portfolio({ posts }: { posts: any[] }) {
  const filterTechStack = (tech: string) => {
    if (tech === 'NextJS') return <SiNextdotjs size={18} />
    if (tech === 'TailwindCSS')
      return <SiTailwindcss size={18} className="text-[#40beb2]" />
    if (tech === 'Recoil State Management')
      return (
        <div className="vertical-center">
          <Image src="/asset/recoil.svg" width={18} height={18} alt="recoil" />
        </div>
      )
    if (tech === 'ReactJS')
      return <SiReact size={19} className="text-[#61DBFB]" />
    if (tech === "Spotify Developer's API")
      return <SiSpotify size={18} className="text-green-500" />
    if (tech === 'TMDB API') return <SiThemoviedatabase size={18} />
    if (tech === 'Socket.IO') return <SiSocketdotio size={18} />
    if (tech === 'ExpressJS') return <SiExpress size={18} />
    if (tech === 'Prisma')
      return <SiPrisma size={18} className="text-[#21406e]" />
    if (tech === 'MySQL')
      return <SiMysql size={20} className="text-[#2b597e]" />
    if (tech === 'PostgreSQL')
      return <SiPostgresql size={20} className="text-[#2b597e]" />
    if (tech === 'NGINX')
      return <SiNginx size={20} className="text-[#009A17]" />
    if (tech === 'Cloudflare')
      return <SiCloudflare size={20} className="text-[#F48120]" />
    if (tech === 'Digital Ocean')
      return <SiDigitalocean size={18} className="text-[#008bcf]" />
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
                legacyBehavior
              >
                <a className="portfolio-card">
                  <div className="grid place-content-center bg-[#d1c8a6] px-10 py-2 dark:bg-[#808080]">
                    <div
                      className="relative mx-auto h-[200px] w-[330px] overflow-hidden rounded-md md:h-[180px] md:w-[300px]
                    xl:h-[220px] xl:w-[380px] 2xl:h-[500px] 2xl:w-[650px] "
                    >
                      <Image
                        fill
                        src={filterImage(post.image)}
                        alt={'portfolio picture'}
                        className="object-scale-down"
                      />
                    </div>
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
