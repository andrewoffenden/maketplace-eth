
import Image from "next/image"
import Link from "next/link"

export default function ProductsList({products}) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-5 mb-5 ">
      {products.map((product) =>
        <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="flex flex-col md:flex-row h-full">
            <div className="flex h-full">
              <Image
                className="object-cover"
                src={product.coverImage}
                layout="fixed"
                width="200"
                height="220"
                alt={product.title}
              />
            </div>
            <div className="p-8">
              <div
                className="uppercase tracking-wide text-sm text-gray-500 font-semibold">
                {product.type}
              </div>
              <Link href={`/products/${product.slug}`}>
                <a
                  className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
                  {product.title}
              </a>
              </Link>
              <p
                className="mt-2 text-gray-500">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
