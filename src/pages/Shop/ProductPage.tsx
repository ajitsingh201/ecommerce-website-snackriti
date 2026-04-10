import { useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import { FiChevronRight, FiShoppingCart, FiMinus, FiPlus, FiShare2, FiCheck } from "react-icons/fi"
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa"
import { useDispatch } from "react-redux"
import { products } from "../../data/products"
import { addToCart } from "../../store/cartSlice"
import ProductGallery from "../../components/product/ProductGallery"
import RelatedProducts from "../../components/product/RelatedProducts"

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map(i => {
      if (i <= Math.floor(rating)) return <FaStar key={i} size={16} className="text-amber-400" />
      if (i === Math.ceil(rating) && rating % 1 >= 0.3)
        return <FaStarHalfAlt key={i} size={16} className="text-amber-400" />
      return <FaRegStar key={i} size={16} className="text-gray-300" />
    })}
  </div>
)

const ProductPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const product = products.find(p => p.slug === slug)

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <div className="text-6xl mb-4">😕</div>
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Product not found</h2>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all"
        >
          Browse all products
        </Link>
      </div>
    )
  }

  const discount = product.discountedPrice
    ? Math.round(((product.price - product.discountedPrice) / product.price) * 100)
    : 0

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity }))
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  const handleBuyNow = () => {
    dispatch(addToCart({ product, quantity }))
    navigate("/cart")
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-8 flex-wrap">
        <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
        <FiChevronRight size={14} />
        <Link to="/products" className="hover:text-orange-500 transition-colors">Shop</Link>
        <FiChevronRight size={14} />
        <Link
          to={`/category/${product.categorySlug}`}
          className="hover:text-orange-500 transition-colors"
        >
          {product.category}
        </Link>
        <FiChevronRight size={14} />
        <span className="text-gray-700 font-medium truncate max-w-[200px]">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
        {/* Left — Gallery */}
        <ProductGallery images={product.images} name={product.name} />

        {/* Right — Details */}
        <div>
          <span className="inline-block text-xs font-semibold text-orange-500 bg-orange-50 px-3 py-1 rounded-full mb-3">
            {product.category}
          </span>

          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 leading-snug mb-3">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <StarRating rating={product.rating} />
            <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
            <span className="text-sm text-gray-400">({product.reviewCount} reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-end gap-3 mb-2">
            {product.discountedPrice ? (
              <>
                <span className="text-3xl font-bold text-orange-600">₹{product.discountedPrice}</span>
                <span className="text-lg text-gray-400 line-through mb-0.5">₹{product.price}</span>
                <span className="bg-orange-500 text-white text-sm font-bold px-2.5 py-1 rounded-full mb-0.5">
                  -{discount}% OFF
                </span>
              </>
            ) : (
              <span className="text-3xl font-bold text-orange-600">₹{product.price}</span>
            )}
          </div>

          {product.discountedPrice && (
            <p className="text-sm text-green-600 font-medium mb-4">
              You save ₹{product.price - product.discountedPrice}!
            </p>
          )}

          {/* Packaging */}
          <div className="flex items-center gap-2 mb-6">
            <span className="text-sm text-gray-500">Pack size:</span>
            <span className="text-sm font-semibold text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
              {product.packaging}
            </span>
          </div>

          {/* Stock status */}
          <div className="flex items-center gap-2 mb-6">
            <div
              className={`w-2.5 h-2.5 rounded-full ${product.inStock ? "bg-green-500" : "bg-red-400"}`}
            />
            <span
              className={`text-sm font-semibold ${product.inStock ? "text-green-600" : "text-red-500"}`}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          {/* Quantity */}
          {product.inStock && (
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-medium text-gray-600">Quantity:</span>
              <div className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-2">
                <button
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-orange-500 transition-colors"
                >
                  <FiMinus size={14} />
                </button>
                <span className="text-base font-bold text-gray-800 w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-orange-500 transition-colors"
                >
                  <FiPlus size={14} />
                </button>
              </div>
            </div>
          )}

          {/* CTA Buttons */}
          <div className="flex gap-3 mb-8">
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-full font-semibold
                transition-all duration-200 shadow-sm text-sm
                ${added
                  ? "bg-green-500 text-white"
                  : "bg-orange-500 hover:bg-orange-600 text-white hover:shadow-md active:scale-[0.98]"}
                disabled:opacity-40 disabled:cursor-not-allowed`}
            >
              {added ? <FiCheck size={18} /> : <FiShoppingCart size={18} />}
              {added ? "Added to Cart!" : "Add to Cart"}
            </button>

            <button
              onClick={handleBuyNow}
              disabled={!product.inStock}
              className="flex-1 py-3.5 rounded-full font-semibold border-2 border-orange-500 text-orange-500
                hover:bg-orange-50 transition-all duration-200 text-sm active:scale-[0.98]
                disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Buy Now
            </button>

            <button
              onClick={() => navigator.clipboard.writeText(window.location.href)}
              className="p-3.5 border border-gray-200 rounded-full text-gray-500 hover:text-orange-500
                hover:border-orange-300 transition-all"
              title="Copy link"
            >
              <FiShare2 size={18} />
            </button>
          </div>

          {/* Description */}
          <div className="border-t border-gray-100 pt-6">
            <h3 className="font-bold text-gray-800 mb-3">Product Description</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
          </div>

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {product.keywords.map(kw => (
              <span
                key={kw}
                className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full hover:bg-orange-50 hover:text-orange-600 transition-colors cursor-default"
              >
                #{kw}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts categorySlug={product.categorySlug} excludeId={product.id} />
    </div>
  )
}

export default ProductPage
