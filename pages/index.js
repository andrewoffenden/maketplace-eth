import { BaseLayout } from "@components/layout"
import { Hero, Breadcrumbs } from "@components/common"
import { ProductList } from "@components/product"
import { OrderCard } from "@components/order"
import { EthRates, WalletBar } from "@components/web3"
import { getAllProducts } from "@content/products/fetcher"

export default function Home({products}) {
  return (
    <>
      <Hero />
      <Breadcrumbs />
      <WalletBar />
      <EthRates />
      <OrderCard />
      <ProductList  products={products} />
    </>
  )
}

export function getStaticProps() {
  const {data, productsMap} = getAllProducts()
  return {
    props: {
      products: data,
      productsMap: productsMap,
    }
  }
}

Home.Layout = BaseLayout