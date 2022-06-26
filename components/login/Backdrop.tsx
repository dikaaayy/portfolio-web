export default function Backdrop({ children, onClick }: any) {
  return (
    <div
      className="fixed top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50"
      onClick={onClick}
    >
      {children}
    </div>
  )
}
