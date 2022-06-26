export default function Comment({ session, openLogin }: any) {
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
    </div>
  )
}
