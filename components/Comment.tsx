import Image from 'next/image'

export default function Comment({ session, openLogin, comments }: any) {
  const dateParser = (stringDate: string) => {
    const time = new Date(stringDate).toLocaleTimeString('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
    })
    const date = new Date(stringDate).toLocaleDateString('en-GB')
    return date
  }
  console.log(comments)
  return (
    <div className="mx-auto mt-10 w-[85%] rounded-md bg-[#d1c8a6] p-5 text-white shadow-xl dark:bg-[#d6d6d6] dark:text-black sm:w-[80vw] lg:w-[70vw] xl:w-[65%]">
      <p className="text-lg font-medium">Leave Your Comment below!</p>
      <form
        className="mt-5 flex flex-col"
        onSubmit={(e) => {
          e.preventDefault()
          if (!session) {
            openLogin()
          }
        }}
      >
        <label htmlFor="comment">Write here</label>
        <textarea
          id="comment"
          className="resize rounded bg-white p-2 outline-none"
          maxLength={400}
          spellCheck={false}
        />
        <button
          type="submit"
          className="mt-2 w-1/5 self-end rounded-md bg-[#505050] py-2 text-customDark-lightGray transition hover:bg-[#585858]"
        >
          Post
        </button>
      </form>
      <>
        <p className="mb-10 text-xl font-medium">Comments</p>
        <div className="flex flex-col space-y-3">
          {comments.map((comment: any, i: any) => {
            return (
              <div
                key={i}
                className="flex cursor-default space-x-3 rounded-md bg-[#d1c8a6] p-5 text-white drop-shadow dark:bg-[#c7c7c7] dark:text-black"
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
                  <p>{comment?.comment}</p>
                </div>
              </div>
            )
          })}
        </div>
      </>
    </div>
  )
}
