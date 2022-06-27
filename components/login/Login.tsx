import Backdrop from './Backdrop'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

export default function Login({ closeModal }: any) {
  const { data: session } = useSession()
  return (
    <Backdrop onClick={closeModal}>
      {!session && (
        <div
          onClick={(e) => {
            e.stopPropagation()
          }}
          className="relative flex h-[60%] w-[80%] cursor-default flex-col items-center justify-center space-y-5 rounded-md bg-[#d1c8a6] dark:bg-[#808080] sm:h-1/2 sm:w-1/2"
        >
          <p className="text-2xl font-medium text-customLight-darkGray dark:text-inherit sm:text-3xl">
            You are currently not logged in!
          </p>
          <div className="flex flex-col space-y-2">
            <button
              className="flex items-center space-x-2 rounded-full border-[1px] border-customLight-darkGray py-2 px-8 font-medium dark:border-inherit"
              onClick={() => signIn('google')}
            >
              <p className="text-customLight-darkGray dark:text-inherit">
                Log In with
              </p>
              <FcGoogle size={40} />
            </button>
            <button
              className="flex items-center space-x-2 rounded-full border-[1px] border-customLight-darkGray py-2 px-8 font-medium dark:border-inherit"
              onClick={() => signIn('github')}
            >
              <p className="text-customLight-darkGray dark:text-inherit">
                Log In with
              </p>
              <FaGithub size={40} />
            </button>
          </div>
          <button className="absolute bottom-5" onClick={closeModal}>
            Cancel
          </button>
        </div>
      )}
    </Backdrop>
  )
}
