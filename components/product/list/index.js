



export default function List() {
  return (
    <section className="grid grid-cols-2 gap-4 mt-5 mb-5">
      {Array.from({ length: 4 }).map((_, i) =>
        <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-48 w-full object-cover md:w-48" src="https://images.unsplash.com/photo-1515711660811-48832a4c6f69?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=448&q=80" alt="Man looking at item at a store" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-gray-500 font-semibold">Product</div>
              <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Product Link</a>
              <p className="mt-2 text-gray-500">Product description blerb here.  Amet eu laboris ut aliquip reprehenderit ipsum nostrud.</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
