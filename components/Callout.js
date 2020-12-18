const Callout = ({ children, background = 'bg-pink-50', emoji = '💡' }) => {
  return (
    <div className={`callout ${background} flex rounded-lg mt-6 p-2`}>
      <span className="pl-3 pr-2 py-2 select-none text-xl">{emoji}</span>
      <span className="pr-4 py-2">{children}</span>
      <style jsx>{`
        span > :global(p) {
          margin-top: 0;
        }
      `}</style>
    </div>
  )
}

export default Callout
