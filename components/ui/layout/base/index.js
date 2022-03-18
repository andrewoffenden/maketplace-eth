import { Web3Provider } from "@components/providers"
import { Navbar, Footer} from "@components/ui/common"


const BaseLayout = ({children}) => {
  return (
    <Web3Provider>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4">
        <div className="fit">
         {children}
        </div>
      </div>
      <Footer />
    </Web3Provider>
  )
}

export default BaseLayout