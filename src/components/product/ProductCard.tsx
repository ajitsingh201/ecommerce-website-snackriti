import { useState } from "react"
import { Link } from "react-router-dom"
import { FiShoppingCart, FiCheck } from "react-icons/fi"
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { addToCart } from "../../store/cartSlice"
import type { Product } from "../../types/product"

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map(i => {
      if (i <= Math.floor(rating)) return <FaStar key={i} size={10} className="text-amber-400" />
      if (i === Math.ceil(rating) && rating % 1 >= 0.3)
        return <FaStarHalfAlt key={i} size={10} className="text-amber-400" />
      return <FaRegStar key={i} size={10} className="text-gray-200" />
    })}
  </div>
)

const ProductCard = ({ product }: { product: Product }) => {
  const dispatch = useDispatch()
  const [added, setAdded] = useState(false)
  const discount = product.discountedPrice
    ? Math.round(((product.price - product.discountedPrice) / product.price) * 100)
    : 0

  return (
    <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">

      {/* Image */}
      <Link to={`/product/${product.slug}`} className="relative block overflow-hidden bg-gray-50 aspect-square">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
          style={{ transform: "scale(1)" }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.08)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        />

        {/* Badges */}
        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1">
          {discount > 0 && (
            <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
              -{discount}%
            </span>
          )}
          {product.featured && !discount && (
            <span className="bg-amber-400 text-amber-900 text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
              Popular
            </span>
          )}
        </div>

        {!product.inStock && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              Out of Stock
            </span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-3.5 flex flex-col flex-1">

        {/* Pack size pill */}
        <span className="self-start text-[10px] font-bold bg-orange-50 text-orange-600 border border-orange-100 px-2 py-0.5 rounded-full mb-1.5">
          {product.packaging}
        </span>

        <Link to={`/product/${product.slug}`}>
          <h3 className="font-semibold text-gray-800 text-sm leading-snug hover:text-orange-600 transition-colors line-clamp-2 mb-1.5">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1.5 mb-3">
          <StarRating rating={product.rating} />
          <span className="text-[10px] text-gray-400">({product.reviewCount})</span>
        </div>

        {/* Price + Cart */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-baseline gap-1.5">
            <span className="text-orange-600 font-extrabold text-base">
              ₹{product.discountedPrice ?? product.price}
            </span>
            {product.discountedPrice && (
              <span className="text-gray-400 text-xs line-through">₹{product.price}</span>
            )}
          </div>
          <button
            onClick={() => {
              if (!product.inStock) return
              dispatch(addToCart({ product, quantity: 1 }))
              setAdded(true)
              setTimeout(() => setAdded(false), 1800)
            }}
            disabled={!product.inStock}
            title={added ? "Added!" : "Add to Cart"}
            className={`w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200 shadow-sm hover:shadow-md active:scale-90 disabled:opacity-40 disabled:cursor-not-allowed text-white flex-shrink-0
              ${added ? "bg-green-500" : "bg-orange-500 hover:bg-orange-600"}`}
          >
            {added ? <FiCheck size={14} /> : <FiShoppingCart size={14} />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
