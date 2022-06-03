
export default function ProductList({products, children}) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-5 mb-5 ">
      {products.map((product) => children(product))}
    </section>
  )
}
