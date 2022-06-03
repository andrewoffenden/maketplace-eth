import { BaseLayout } from "@components/ui/layout"
import { ProductCard, ProductList } from "@components/ui/product"
import { WalletBar } from "@components/ui/web3"
import { getAllProducts } from "@content/products/fetcher"
import { useAccount } from "@components/hooks/web3"
import { useNetwork } from "@components/hooks/web3"

export default function Marketplace({products}) {
  const { account } = useAccount()
  const { network } = useNetwork()

  return (
    <>
      <div className="py-4">
        <WalletBar
          address={account.data}
          network={{
            data: network.data,
            target: network.target,
            isSupported: network.isSupported,
            hasInitialResponse: network.hasInitialResponse,
          }}
        />
      </div>
      <ProductList  products={products} >
        { product =>
            <ProductCard
              product={product}
              key={product.id}
            />
        }
      </ProductList>
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

Marketplace.Layout = BaseLayout