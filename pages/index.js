import { BaseLayout } from "@components/ui/layout"
import { Hero, Breadcrumbs } from "@components/ui/common"
import { ProductList } from "@components/ui/product"
import { OrderCard } from "@components/ui/order"
import { EthRates, WalletBar } from "@components/ui/web3"
import { getAllProducts } from "@content/products/fetcher"
export default function Home({products}) {
  return (
    <>
      <Hero />
      {/* <Breadcrumbs />
      <WalletBar />
      <EthRates />
      <OrderCard /> */}
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