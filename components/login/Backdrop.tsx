export default function Backdrop({ children, onClick }: any) {
  return (
    <div
      className="fixed h-full w-full bg-black bg-opacity-50"
      onClick={onClick}
    >
      {children}
    </div>
  )
}
