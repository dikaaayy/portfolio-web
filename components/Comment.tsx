import Image from 'next/image'
import { useState, useRef } from 'react'
import Toast from './Toast'

export default function Comment({
  session,
  openLogin,
  comments,
  postId,
  userID,
}: any) {
  const [userComment, setUserComment] = useState('')
  const [commentList, setCommentList] = useState([...comments])
  const toastRef = useRef<any>(null)

  const dateParser = (stringDate: string) => {
    const time = new Date(stringDate).toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    })
    const date = new Date(stringDate).toLocaleDateString('en-GB')
    return time + ' | ' + date
  }

  const submitHandler = async (e: any) => {
    e.preventDefault()
    if (!session) {
      openLogin()
      return
    }
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/addComment`, {
        body: JSON.stringify({
          comment: userComment,
          postId,
          userID,
          commentDate: new Date().toISOString(),
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })
    } catch (e) {
      console.log(e)
    }
    setCommentList((prev) => [
      ...prev,
      {
        comment: userComment,
        commentDate: new Date().toISOString(),
        user: {
          name: session?.user?.name,
          image: session?.user?.image,
        },
      },
    ])
    toastRef.current!.show()
    setUserComment('')
  }
  return (
    <div className="mx-auto mt-10 w-[85%] rounded-md bg-[#d1c8a6] p-5 text-white shadow-xl dark:bg-[#d6d6d6] dark:text-black sm:w-[80vw] lg:w-[70vw] xl:w-[65%]">
      <p className="text-2xl font-medium">Leave Your Comment!</p>
      <form className="mt-8 flex flex-col space-y-2" onSubmit={submitHandler}>
        <label htmlFor="comment" className="font-medium">
          Write below
        </label>
        <textarea
          id="comment"
          className="min-h-[5rem] max-w-full resize-y rounded bg-[#a59d7b] p-2 pl-1 tracking-wider outline-none placeholder:text-white disabled:cursor-not-allowed dark:bg-[#aaaaaa] placeholder:dark:text-black"
          maxLength={400}
          spellCheck={false}
          value={userComment}
          placeholder={session ? 'Type here....' : 'Login to comment'}
          disabled={!session}
          onChange={(e) => {
            setUserComment(e.target.value)
          }}
        />
        <button
          type="submit"
          className="w-1/5 cursor-pointer self-end rounded-md bg-[#9c9061] py-2 font-medium text-customDark-lightGray transition hover:bg-[#817855] dark:bg-[#505050] dark:hover:bg-[#585858]"
          disabled={userComment === '' && session}
        >
          {session ? 'Post Comment' : 'Login'}
        </button>
      </form>
      <div className="mt-7">
        <p className="mb-5 text-[1.35rem] font-medium">
          {commentList.length} Comment{commentList.length > 1 ? 's' : null}
        </p>
        <div className="flex flex-col space-y-3">
          {commentList.map((comment: any, i: any) => {
            return (
              <div
                key={i}
                className="flex cursor-default space-x-3 rounded-md bg-[#a59d7b] p-5 text-white drop-shadow dark:bg-[#aaaaaa] dark:text-black"
              >
                <Image
                  src={comment?.user?.image}
                  width={50}
                  height={50}
                  className="rounded-full"
                  layout="fixed"
                />
                <div>
                  <div className="flex items-center space-x-2">
                    <p className="text-lg font-medium">{comment?.user?.name}</p>
                    <p>{dateParser(comment?.commentDate)}</p>
                  </div>
                  <p className="text-[1.05rem]">{comment?.comment}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <Toast message={'Comment posted!'} ref={toastRef} />
    </div>
  )
}
