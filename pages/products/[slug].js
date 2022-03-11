import { BaseLayout } from "@components/layout";
import { Modal } from "@components/common";
import {
  ProductHero,
  Curriculum,
  Keypoints
} from "@components/product";
import { getAllProducts } from "@content/products/fetcher";

export default function Product({product}) {

  return (
      <>
        <div className="py-4">
          <ProductHero
            title={product.title}
            description={product.description}
            image={product.coverImage}
          />
        </div>
        <Keypoints
          points={product.wsl}
        />
        <Curriculum
          locked={true}
        />
        <Modal />
      </>
  )
}

export function getStaticPaths() {
  const { data } = getAllProducts()

  return {
    paths: data.map(p => ({
      params: {
        slug: p.slug
      }
    })),
    fallback: false
  }
}

//recieves params from get static paths as individual page information.
//params.slug will be slug of page
export function getStaticProps({params}) {
  const { data } = getAllProducts()
  const product = data.filter(p=> p.slug === params.slug)[0]

  //return individual product data. passed to page component as props.
  return {
    props: {
      product
    }
  }
}


Product.Layout = BaseLayout