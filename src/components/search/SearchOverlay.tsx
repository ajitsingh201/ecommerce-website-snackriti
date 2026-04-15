import { useState, useEffect, useRef, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import { FiSearch, FiX, FiArrowRight, FiShoppingCart } from "react-icons/fi"
import { useDispatch } from "react-redux"
import { addToCart } from "../../store/cartSlice"
import { products } from "../../data/products"
import type { Product } from "../../types/product"

interface Props {
  isOpen: boolean
  onClose: () => void
}

const POPULAR_SEARCHES = ["Mint Pudina", "Peri Peri", "Chocolate Crunch", "Gift Hamper", "Standy Pouch"]

const searchProducts = (query: string): Product[] => {
  if (!query.trim()) return []
  const q = query.toLowerCase()
  return products
    .filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.packaging.toLowerCase().includes(q) ||
      p.keywords.some(k => k.toLowerCase().includes(q))
    )
    .slice(0, 6)
}

const SearchOverlay = ({ isOpen, onClose }: Props) => {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Product[]>([])
  const [activeIdx, setActiveIdx] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  // Debounced search
  useEffect(() => {
    const t = setTimeout(() => {
      setResults(searchProducts(query))
      setActiveIdx(-1)
    }, 150)
    return () => clearTimeout(t)
  }, [query])

  // Focus input on open, reset on close
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
    } else {
      setQuery("")
      setResults([])
      setActiveIdx(-1)
    }
  }, [isOpen])

  // Escape to close
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowDown") setActiveIdx(i => Math.min(i + 1, results.length - 1))
      if (e.key === "ArrowUp") setActiveIdx(i => Math.max(i - 1, -1))
      if (e.key === "Enter" && activeIdx >= 0 && results[activeIdx]) {
        goToProduct(results[activeIdx])
      } else if (e.key === "Enter" && query.trim()) {
        navigate("/products")
        onClose()
      }
    }
    if (isOpen) window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [isOpen, results, activeIdx, query])

  const goToProduct = useCallback((product: Product) => {
    navigate(`/product/${product.slug}`)
    onClose()
  }, [navigate, onClose])

  const handleAddToCart = useCallback((e: React.MouseEvent, product: Product) => {
    e.stopPropagation()
    dispatch(addToCart({ product, quantity: 1 }))
    goToProduct(product)
  }, [dispatch, goToProduct])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex flex-col">

      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Search panel */}
      <div className="relative w-full bg-white shadow-2xl">

        {/* Search input */}
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center gap-3">
          <FiSearch size={20} className="text-orange-500 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search makhana, chips, flavors, pack size…"
            className="flex-1 text-base sm:text-lg text-gray-800 placeholder:text-gray-400 bg-transparent outline-none py-2 font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-gray-400 hover:text-gray-600 transition p-1"
            >
              <FiX size={18} />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 font-medium text-sm hidden sm:block border border-gray-200 px-3 py-1.5 rounded-full hover:border-gray-300 transition"
          >
            Cancel
          </button>
          <button onClick={onClose} className="sm:hidden text-gray-500">
            <FiX size={22} />
          </button>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-100" />

        {/* Results / Suggestions */}
        <div className="max-w-3xl mx-auto px-4 pb-4">

          {/* No query — show popular searches */}
          {!query.trim() && (
            <div className="py-4">
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Popular Searches</p>
              <div className="flex flex-wrap gap-2">
                {POPULAR_SEARCHES.map(term => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-orange-600 bg-gray-50 hover:bg-orange-50 border border-gray-200 hover:border-orange-200 px-3 py-1.5 rounded-full transition-all font-medium"
                  >
                    <FiSearch size={12} className="text-gray-400" />
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Has query — show results */}
          {query.trim() && results.length > 0 && (
            <div className="py-2">
              {results.map((product, idx) => {
                const price = product.discountedPrice ?? product.price
                const isActive = idx === activeIdx
                return (
                  <div
                    key={product.id}
                    onClick={() => goToProduct(product)}
                    className={`flex items-center gap-4 px-3 py-3 rounded-xl cursor-pointer transition-all group
                      ${isActive ? "bg-orange-50" : "hover:bg-gray-50"}`}
                  >
                    {/* Thumbnail */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0 border border-gray-100">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-semibold text-gray-800 group-hover:text-orange-600 transition-colors line-clamp-1">
                        {product.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] font-bold bg-orange-50 text-orange-600 border border-orange-100 px-2 py-0.5 rounded-full">
                          {product.packaging}
                        </span>
                        <span className="text-[10px] text-gray-400">{product.category}</span>
                      </div>
                    </div>

                    {/* Price + Cart */}
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className="text-sm font-extrabold text-orange-600">₹{price}</span>
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        disabled={!product.inStock}
                        className="w-8 h-8 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center transition-all active:scale-90 disabled:opacity-40 shadow-sm"
                      >
                        <FiShoppingCart size={13} />
                      </button>
                    </div>
                  </div>
                )
              })}

              {/* View all */}
              <button
                onClick={() => { navigate("/products"); onClose() }}
                className="mt-2 w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-orange-600 hover:text-orange-700 border-t border-gray-100 hover:bg-orange-50 rounded-xl transition-all"
              >
                View all results for "{query}"
                <FiArrowRight size={14} />
              </button>
            </div>
          )}

          {/* No results */}
          {query.trim() && results.length === 0 && (
            <div className="py-8 text-center">
              <div className="text-4xl mb-2">🔍</div>
              <p className="text-gray-600 font-semibold">No products found for "{query}"</p>
              <p className="text-gray-400 text-sm mt-1">Try different keywords like "mint", "peri peri", "30g"</p>
              <button
                onClick={() => { navigate("/products"); onClose() }}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:underline"
              >
                Browse all products <FiArrowRight size={13} />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

export default SearchOverlay
