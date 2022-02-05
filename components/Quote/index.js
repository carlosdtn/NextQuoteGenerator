export default function Quote({ children }) {
  return (
    <div className="border-l-8 border-yellow-200 pl-10 w-2/4 text-2xl font-normal">
      <blockquote>{children}</blockquote>
    </div>
  )
}
