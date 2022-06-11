import Backdrop from './Backdrop'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

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
        <>
          <p>you are not logged in</p>
          <button onClick={() => signIn('github')}>Log In with Github</button>
          <button onClick={() => signIn('google')}>Log In with Google</button>
        </>
      )}
    </Backdrop>
  )
}
