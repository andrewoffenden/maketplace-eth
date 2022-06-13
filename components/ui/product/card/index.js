import React from 'react'
import Image from "next/image"
import Link from "next/link"

const ProductCard = ({product, Footer}) => {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="flex flex-col md:flex-row h-full">
        <div className="flex-1 h-full next-image-wrapper">
          <Image
            src={product.coverImage}
            className="object-cover"
            layout="responsive"
            width="200"
            height="220"
            alt={product.title}
          />
        </div>
        <div className="flex-2 p-8 pb-4">
          <div
            className="uppercase tracking-wide text-sm text-gray-500 font-semibold">
            {product.type}
          </div>
          <Link href={`/products/${product.slug}`}>
            <a
              className="h-12 block mt-1 text-lg leading-tight font-medium text-black hover:underline">
              {product.title}
          </a>
          </Link>
          <p
            className="mt-2 text-gray-500">
            {product.description.substring(0, 70)}...
          </p>
          { Footer &&
            <Footer />
          }
        </div>
      </div>
    </div>
  )
}

export default ProductCard