import { useImperativeHandle, useState, forwardRef } from 'react'

const Toast = forwardRef(({ message }: any, ref: any) => {
  const [show, setShow] = useState(false)

  useImperativeHandle(ref, () => ({
    show() {
      setShow(true)
      setTimeout(() => {
        setShow(false)
      }, 3000)
    },
  }))

  return (
    <div
      className={`fixed top-24 right-3 z-[100] animate-fadeToast select-none rounded-md bg-green-500 px-20 py-4 font-medium tracking-wide text-white dark:bg-green-800 ${
        show ? '' : 'hidden'
      }`}
    >
      <p>{message}</p>
    </div>
  )
})

export default Toast
