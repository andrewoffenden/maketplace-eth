
import { useWeb3 } from "@components/providers"
import Link from "next/link"

export default function Navbar() {
  const { connect } = useWeb3()

  return (
    <section className="bg-white">
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between">
            <div>
              <Link href="/">
                <a
                  className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Home
                </a>
              </Link>
              <Link href="/">
                <a
                  className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Marketplace
                </a>
              </Link>
              <Link href="/">
                <a
                  className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Blogs
                </a>
              </Link>
            </div>
            <div>
              <Link href="#">
                  <a
                    className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                    Wishlist
                  </a>
              </Link>
              <span
                onClick={connect}
                className="rounded-md px-8 py-3 text-base font-medium text-white bg-teal-400 hover:bg-teal-600">
                Connect
              </span>
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}
