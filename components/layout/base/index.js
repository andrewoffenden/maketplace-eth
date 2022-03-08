import { Navbar, Footer} from "@components/common"

const BaseLayout = ({children}) => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4">
        <div className="fit">
         {children}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default BaseLayout