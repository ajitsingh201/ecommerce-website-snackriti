import { useState, useMemo, useCallback } from "react"
import { useParams, Link } from "react-router-dom"
import { FiChevronRight, FiSearch, FiX, FiFilter } from "react-icons/fi"
import { products, categories } from "../../data/products"
import ProductCard from "../../components/product/ProductCard"
import ProductFilters, {
  type Filters,
  defaultFilters,
} from "../../components/product/ProductFilters"
import useDebounce from "../../hooks/useDebounce"

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>()
  const category = categories.find(c => c.slug === slug)

  const [filters, setFilters] = useState<Filters>({ ...defaultFilters, categorySlug: slug ?? "" })
  const [searchInput, setSearchInput] = useState("")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const debouncedSearch = useDebounce(searchInput, 300)

  const filtered = useMemo(() => {
    let result = products.filter(p => p.categorySlug === slug)

    if (debouncedSearch.trim()) {
      const q = debouncedSearch.toLowerCase()
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.keywords.some(k => k.toLowerCase().includes(q))
      )
    }

    result = result.filter(p => (p.discountedPrice ?? p.price) <= filters.priceMax)

    if (filters.inStockOnly) result = result.filter(p => p.inStock)

    switch (filters.sort) {
      case "az":
        result.sort((a, b) => a.name.localeCompare(b.name))
        break
      case "za":
        result.sort((a, b) => b.name.localeCompare(a.name))
        break
      case "price-asc":
        result.sort((a, b) => (a.discountedPrice ?? a.price) - (b.discountedPrice ?? b.price))
        break
      case "price-desc":
        result.sort((a, b) => (b.discountedPrice ?? b.price) - (a.discountedPrice ?? a.price))
        break
    }

    return result
  }, [slug, debouncedSearch, filters])

  const handleFiltersChange = useCallback((f: Filters) => setFilters(f), [])

  if (!category) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <div className="text-6xl mb-4">😕</div>
        <h2 className="text-2xl font-bold text-gray-700 mb-3">Category not found</h2>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all"
        >
          Browse all products
        </Link>
      </div>
    )
  }

  return (
    <div>
      {/* Category hero banner */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <h1 className="text-3xl md:text-4xl font-bold text-white">{category.name}</h1>
            <p className="text-white/80 mt-2 text-sm md:text-base">{category.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-orange-500 transition-colors">Home</Link>
          <FiChevronRight size={14} />
          <Link to="/products" className="hover:text-orange-500 transition-colors">Shop</Link>
          <FiChevronRight size={14} />
          <span className="text-orange-600 font-medium">{category.name}</span>
        </nav>

        {/* Search + filter toggle */}
        <div className="flex gap-3 mb-8">
          <div className="relative flex-1">
            <FiSearch
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
            />
            <input
              type="text"
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
              placeholder={`Search in ${category.name}…`}
              className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-2xl text-sm
                focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent
                placeholder:text-gray-400 transition-all shadow-sm"
            />
            {searchInput && (
              <button
                onClick={() => setSearchInput("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <FiX size={16} />
              </button>
            )}
          </div>
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-2xl
              text-sm font-semibold text-gray-700 hover:border-orange-400 hover:text-orange-600 transition-all shadow-sm"
          >
            <FiFilter size={16} />
            Filters
          </button>
        </div>

        <div className="flex gap-8">
          {/* Desktop sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <ProductFilters filters={filters} onChange={handleFiltersChange} />
          </aside>

          {/* Mobile sidebar */}
          {sidebarOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                onClick={() => setSidebarOpen(false)}
              />
              <div className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl overflow-y-auto p-5">
                <ProductFilters
                  filters={filters}
                  onChange={handleFiltersChange}
                  onClose={() => setSidebarOpen(false)}
                />
              </div>
            </div>
          )}

          {/* Grid */}
          <div className="flex-1">
            <p className="text-sm text-gray-500 mb-5">
              Showing <span className="font-semibold text-gray-700">{filtered.length}</span> products
            </p>

            {filtered.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-24 text-center">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-700 mb-2">No products found</h3>
                <p className="text-gray-400">Try adjusting your search or filters</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryPage
