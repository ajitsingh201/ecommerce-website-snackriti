import { useState, useMemo, useCallback } from "react"
import { FiSearch, FiFilter, FiX } from "react-icons/fi"
import { products } from "../../data/products"
import ProductCard from "../../components/product/ProductCard"
import ProductFilters, {
  type Filters,
  defaultFilters,
} from "../../components/product/ProductFilters"
import useDebounce from "../../hooks/useDebounce"

const AllProductsPage = () => {
  const [filters, setFilters] = useState<Filters>(defaultFilters)
  const [searchInput, setSearchInput] = useState("")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const debouncedSearch = useDebounce(searchInput, 300)

  const filtered = useMemo(() => {
    let result = [...products]

    if (debouncedSearch.trim()) {
      const q = debouncedSearch.toLowerCase()
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.keywords.some(k => k.toLowerCase().includes(q))
      )
    }

    if (filters.categorySlug) {
      result = result.filter(p => p.categorySlug === filters.categorySlug)
    }

    result = result.filter(p => {
      const price = p.discountedPrice ?? p.price
      return price <= filters.priceMax
    })

    if (filters.inStockOnly) {
      result = result.filter(p => p.inStock)
    }

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
  }, [debouncedSearch, filters])

  const handleFiltersChange = useCallback((f: Filters) => setFilters(f), [])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">All Products</h1>
        <p className="text-gray-500 mt-1">
          Explore our complete collection of{" "}
          <span className="text-orange-500 font-semibold">{products.length}</span> products
        </p>
      </div>

      {/* Search + filter toggle row */}
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
            placeholder="Search products, categories, keywords…"
            className="w-full pl-11 pr-4 py-3 border border-gray-200 rounded-2xl text-sm text-gray-800
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

        {/* Mobile filter button */}
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

        {/* Mobile sidebar overlay */}
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

        {/* Product grid */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-5">
            <p className="text-sm text-gray-500">
              Showing <span className="font-semibold text-gray-700">{filtered.length}</span> results
            </p>
          </div>

          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-700 mb-2">No products found</h3>
              <p className="text-gray-400 mb-6">Try adjusting your filters or search query</p>
              <button
                onClick={() => {
                  setFilters(defaultFilters)
                  setSearchInput("")
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all"
              >
                Clear all filters
              </button>
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
  )
}

export default AllProductsPage
