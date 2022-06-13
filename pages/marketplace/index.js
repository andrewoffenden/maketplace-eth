import { BaseLayout } from "@components/ui/layout"
import { ProductCard, ProductList } from "@components/ui/product"
import { WalletBar } from "@components/ui/web3"
import { getAllProducts } from "@content/products/fetcher"
import { useAccount } from "@components/hooks/web3"
import { useNetwork } from "@components/hooks/web3"
import { Button } from "@components/ui/common"
import { OrderModal } from "@components/ui/order"
import {useState } from 'react'
export default function Marketplace({products}) {
  const [selectedProduct, setSelectedProduct] = useState(null)
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
              key={product.id}
              product={product}
              Footer={()=> 
                <div className="mt-4">
                  <Button
                    onClick={() => setSelectedProduct(product)}>
                    Purchase
                  </Button>
                </div>
              }
            />
        }
      </ProductList>
      { selectedProduct &&
        <OrderModal 
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      }
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