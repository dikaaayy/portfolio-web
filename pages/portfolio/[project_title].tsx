import Image from 'next/image'
import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import { prisma } from '../../lib/prisma'
import { RiCalendarCheckLine } from 'react-icons/ri'
import { BsPersonCircle } from 'react-icons/bs'
import Head from 'next/head'
import Link from 'next/link'
import Comment from '../../components/Comment'
import { getSession, useSession } from 'next-auth/react'
import Login from '../../components/login/Login'

export async function getServerSideProps(context: any) {
  const { project_title } = context.query
  const session = await getSession(context)
  let user
  const post = await prisma.post.findUnique({
    where: {
      project_title,
    },
    include: {
      comments: {
        include: {
          user: true,
        },
        orderBy: {
          commentDate: 'asc',
        },
      },
    },
  })
  if (session) {
    user = await prisma.user.findUnique({
      where: {
        email: session?.user!.email!,
      },
    })
  } else {
    user = null
  }
  // console.log(session)
  // console.log('ini abis sesi')
  if (!post) {
    return {
      notFound: true,
    }
  }
  return { props: { post: JSON.parse(JSON.stringify(post)), user } }
}
export default function Detail({ post, user }: any) {
  const [images, setImages] = useState<string[]>([])
  const [isMounted, setIsMounted] = useState(false)
  const [isLoginModalOpened, setIsLoginModalOpened] = useState<any>(false)
  const { data: session } = useSession()
  // console.log(user)

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
          <>
            <Comment
              session={session}
              openLogin={() => setIsLoginModalOpened(true)}
              comments={post?.comments}
              postId={post?.id}
              userID={user?.id}
            />
            {!session && isLoginModalOpened && (
              <Login closeModal={() => setIsLoginModalOpened(false)} />
            )}
          </>
        </div>
      </>
    </>
  )
}
