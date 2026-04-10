import { categories } from "../../data/products"

export interface Filters {
  search: string
  categorySlug: string
  priceMax: number
  sort: "default" | "az" | "za" | "price-asc" | "price-desc"
  inStockOnly: boolean
}

export const defaultFilters: Filters = {
  search: "",
  categorySlug: "",
  priceMax: 5000,
  sort: "default",
  inStockOnly: false,
}

interface Props {
  filters: Filters
  onChange: (filters: Filters) => void
  onClose?: () => void
}

const ProductFilters = ({ filters, onChange, onClose }: Props) => {
  const set = (patch: Partial<Filters>) => onChange({ ...filters, ...patch })

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-gray-800 text-lg">Filters</h3>
        <div className="flex items-center gap-3">
          <button
            onClick={() => onChange(defaultFilters)}
            className="text-xs text-orange-500 hover:underline font-medium"
          >
            Reset all
          </button>
          {onClose && (
            <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-lg leading-none lg:hidden">
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Category */}
      <div>
        <p className="font-semibold text-gray-700 text-sm mb-3">Category</p>
        <div className="space-y-2.5">
          <label className="flex items-center gap-2.5 cursor-pointer group">
            <input
              type="radio"
              name="filter-category"
              checked={filters.categorySlug === ""}
              onChange={() => set({ categorySlug: "" })}
              className="accent-orange-500"
            />
            <span className="text-sm text-gray-600 group-hover:text-orange-600 transition-colors">
              All Categories
            </span>
          </label>
          {categories.map(cat => (
            <label key={cat.slug} className="flex items-center gap-2.5 cursor-pointer group">
              <input
                type="radio"
                name="filter-category"
                checked={filters.categorySlug === cat.slug}
                onChange={() => set({ categorySlug: cat.slug })}
                className="accent-orange-500"
              />
              <span className="text-sm text-gray-600 group-hover:text-orange-600 transition-colors">
                {cat.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <div className="flex justify-between mb-2">
          <p className="font-semibold text-gray-700 text-sm">Max Price</p>
          <span className="text-sm font-bold text-orange-600">₹{filters.priceMax}</span>
        </div>
        <input
          type="range"
          min={0}
          max={5000}
          step={50}
          value={filters.priceMax}
          onChange={e => set({ priceMax: Number(e.target.value) })}
          className="w-full accent-orange-500"
        />
        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>₹0</span>
          <span>₹5000</span>
        </div>
      </div>

      {/* Sort */}
      <div>
        <p className="font-semibold text-gray-700 text-sm mb-3">Sort By</p>
        <select
          value={filters.sort}
          onChange={e => set({ sort: e.target.value as Filters["sort"] })}
          className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400 bg-white"
        >
          <option value="default">Default</option>
          <option value="az">Name: A → Z</option>
          <option value="za">Name: Z → A</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>

      {/* In Stock */}
      <label className="flex items-center gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={filters.inStockOnly}
          onChange={e => set({ inStockOnly: e.target.checked })}
          className="accent-orange-500 w-4 h-4 rounded"
        />
        <span className="text-sm text-gray-600 font-medium">In Stock Only</span>
      </label>
    </div>
  )
}

export default ProductFilters
