
import { Navbar, Footer, Hero, Breadcrumbs } from "@components/common"
import { ProductList } from "@components/product"
import { OrderCard } from "@components/order"
import { EthRates, WalletBar } from "@components/web3"

export default function Home() {
  return (
    <div>
        <Navbar />
      <div className="relative bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="fit">
            <Hero />
            <Breadcrumbs />
            <WalletBar />
            <EthRates />
            <OrderCard />
            <ProductList />
          </div>
        </div>
      </div>
        <Footer />
    </div>
  )
}
