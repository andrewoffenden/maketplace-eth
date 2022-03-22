

export default function Button({
  children,
  className,
  hoverable = true,
  variant = "teal",
  ...rest
}) {

  const variants = {
    teal: `text-white bg-teal-400 ${hoverable && 'hover:bg-teal-600'}`,
    slate: `text-white bg-slate-400 ${hoverable && 'hover:bg-slate-600'}`,
  }
  //...rest contains onClick function passed in to the component.
  return (
    <button
      {...rest}
      className={`disabled:opacity-50 disabled:cursor-not-allowed rounded-md px-8 py-3 text-base font-medium ${className} ${variants[variant]}`}>
      {children}
    </button>
  )
}