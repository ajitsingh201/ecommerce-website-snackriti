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
      if (i <= Math.floor(rating)) return <FaStar key={i} size={11} className="text-amber-400" />
      if (i === Math.ceil(rating) && rating % 1 >= 0.3)
        return <FaStarHalfAlt key={i} size={11} className="text-amber-400" />
      return <FaRegStar key={i} size={11} className="text-gray-300" />
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
      <Link to={`/product/${product.slug}`} className="relative block overflow-hidden bg-gray-50" style={{ height: "208px" }}>
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow">
            -{discount}%
          </span>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              Out of Stock
            </span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-[11px] font-semibold text-orange-500 uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-semibold text-gray-800 text-sm leading-snug hover:text-orange-600 transition-colors line-clamp-2 mb-2">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center gap-1.5 mb-3">
          <StarRating rating={product.rating} />
          <span className="text-xs text-gray-400">({product.reviewCount})</span>
        </div>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-1.5">
            {product.discountedPrice ? (
              <>
                <span className="text-orange-600 font-bold text-base">₹{product.discountedPrice}</span>
                <span className="text-gray-400 text-xs line-through">₹{product.price}</span>
              </>
            ) : (
              <span className="text-orange-600 font-bold text-base">₹{product.price}</span>
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
            className={`p-2 rounded-full transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed text-white
              ${added ? "bg-green-500 hover:bg-green-500" : "bg-orange-500 hover:bg-orange-600"}`}
          >
            {added ? <FiCheck size={15} /> : <FiShoppingCart size={15} />}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
