

export default function Button({
  children,
  className =  "text-white bg-teal-400 hover:bg-teal-600",
  ...rest
}) {

  //...rest contains onClick function passed in to the component.
  return (
    <button
      {...rest}
      className={`disabled:opacity-50 disabled:cursor-not-allowed rounded-md px-8 py-3 text-base font-medium ${className}`}>
      {children}
    </button>
  )
}