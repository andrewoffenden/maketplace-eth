import products from "./index.json"

export const getAllProducts = () => {

  return {
    data: products,
    productsMap: products.reduce((a, p, i) => {
      a[p.id] = p
      a[p.id].index = i

      return a
    }, {})
  }
}