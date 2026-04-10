import { products } from "../../data/products"
import ProductCard from "./ProductCard"

interface Props {
  categorySlug: string
  excludeId: string
}

const RelatedProducts = ({ categorySlug, excludeId }: Props) => {
  const related = products
    .filter(p => p.categorySlug === categorySlug && p.id !== excludeId)
    .slice(0, 4)

  if (related.length === 0) return null

  return (
    <section className="mt-16">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {related.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default RelatedProducts
