import Backdrop from './Backdrop'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

export default function Login({ closeModal }: any) {
  const { data: session } = useSession()
  return (
    <Backdrop onClick={closeModal}>
      {session ? (
        <>
          <p className="font-semibold">
            you are logged in as {session?.user?.name}
          </p>
          <Image
            src={session?.user?.image || ''}
            alt="img"
            width={50}
            height={50}
            className="rounded-full"
          />
          <button onClick={() => signOut()}>Log Out</button>
        </>
      ) : (
        <div
          onClick={(e) => {
            e.stopPropagation()
          }}
          className="flex h-1/2 w-1/2 cursor-default flex-col items-center justify-center space-y-5 rounded-md bg-[#d1c8a6] dark:bg-[#808080]"
        >
          <p className="text-3xl font-medium">You are not logged in!</p>
          <div className="flex flex-col space-y-2">
            <button
              className="flex items-center space-x-2 border-[1px] py-2 px-5 font-medium"
              onClick={() => signIn('google')}
            >
              <p>Log In with</p>
              <FcGoogle size={40} />
            </button>
            <button
              className="flex items-center space-x-2 border-[1px] py-2 px-5 font-medium"
              onClick={() => signIn('github')}
            >
              <p>Log In with</p>
              <FaGithub size={40} />
            </button>
          </div>
        </div>
      )}
    </Backdrop>
  )
}
