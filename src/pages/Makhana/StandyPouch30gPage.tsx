import { useNavigate } from "react-router-dom"
import { products } from "../../data/products"
import ProductCard from "../../components/product/ProductCard"

const standy30gProducts = products.filter(p => p.categorySlug === "makhana-standy-30g")

const NEW_FLAVORS = ["Jalapeño", "Truffle", "Cheese & Herbs"]

const ALL_FLAVORS = [
  { name: "Caramel", color: "bg-amber-100 text-amber-800" },
  { name: "Chaat Masala", color: "bg-lime-100 text-lime-800" },
  { name: "Cheese", color: "bg-yellow-100 text-yellow-900" },
  { name: "Cheese & Herbs", color: "bg-green-100 text-green-800", isNew: true },
  { name: "Chocolate Crunch", color: "bg-stone-100 text-stone-800" },
  { name: "Himalayan Pink Salt", color: "bg-pink-100 text-pink-800" },
  { name: "Jalapeño", color: "bg-emerald-100 text-emerald-800", isNew: true },
  { name: "Mint Pudina", color: "bg-teal-100 text-teal-800" },
  { name: "Peri Peri", color: "bg-red-100 text-red-800" },
  { name: "Punjabi Tadka", color: "bg-orange-100 text-orange-800" },
  { name: "Salt & Pepper", color: "bg-gray-100 text-gray-800" },
  { name: "Tangy Tomato", color: "bg-rose-100 text-rose-800" },
  { name: "Thai Sweet Chilli", color: "bg-orange-100 text-orange-900" },
  { name: "Truffle", color: "bg-purple-100 text-purple-800", isNew: true },
]

const STATS = [
  { value: "30g", label: "Standy Pouch" },
  { value: "₹75", label: "Per Pack MRP" },
  { value: "14", label: "Bold Flavors" },
  { value: "3", label: "Exclusive New" },
]

const StandyPouch30gPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <img
          src="/images/new-arrivals-standy-30g/truffle/truffle-makhana.webp"
          alt="Makhana Standy Pouch 30g"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/85 via-violet-800/65 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="inline-block text-xs font-bold tracking-widest uppercase bg-purple-400/30 backdrop-blur-sm text-purple-100 border border-purple-300/40 px-3 py-1.5 rounded-full">
                ✨ New Arrivals
              </span>
              <span className="inline-block text-xs font-bold tracking-widest uppercase bg-emerald-400/30 backdrop-blur-sm text-emerald-100 border border-emerald-300/40 px-3 py-1.5 rounded-full">
                30g Standy Pouch
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-xl">
              All-New
              <span className="block text-purple-300">Standy Pouch 30g</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-base mt-3 max-w-md">
              14 bold flavors — including 3 exclusive new ones: Jalapeño, Truffle & Cheese & Herbs. All at ₹75 per pouch.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                onClick={() => document.getElementById("products-grid")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-white text-purple-800 font-bold px-6 py-2.5 rounded-full hover:bg-purple-50 transition-all duration-200 text-sm shadow-lg"
              >
                Shop All 14 Flavors →
              </button>
              <button
                onClick={() => navigate("/makhana/standy-pouch")}
                className="bg-white/20 backdrop-blur-sm border border-white/40 text-white font-semibold px-5 py-2.5 rounded-full hover:bg-white/30 transition-all duration-200 text-sm"
              >
                Try 50g Standy Pouch
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats Strip ─────────────────────────────────────────────────────── */}
      <div className="bg-violet-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 divide-x divide-violet-500">
            {STATS.map(stat => (
              <div key={stat.label} className="py-4 text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-white">{stat.value}</div>
                <div className="text-xs text-violet-200 font-medium mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Exclusive New Flavors Callout */}
        <div className="bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-100 rounded-2xl p-5 mb-10">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3">
            <div className="flex-1">
              <h3 className="font-extrabold text-gray-900 text-base mb-1">
                ✨ 3 Exclusive New Flavors — Only in 30g Standy
              </h3>
              <p className="text-gray-500 text-sm">These flavors are not available in any other packaging.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {NEW_FLAVORS.map(f => (
                <span key={f} className="text-xs font-bold bg-violet-600 text-white px-3 py-1.5 rounded-full">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* All Flavors Pills */}
        <div className="mb-10">
          <h2 className="text-lg font-bold text-gray-800 mb-3">All 14 Flavors</h2>
          <div className="flex flex-wrap gap-2">
            {ALL_FLAVORS.map(f => (
              <span
                key={f.name}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1 ${f.color}`}
              >
                {f.name}
                {f.isNew && <span className="bg-violet-600 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full">NEW</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-6" id="products-grid">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Shop 30g Standy Pouch
            <span className="ml-3 text-sm font-semibold bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full">
              {standy30gProducts.length} Products
            </span>
          </h2>
          <p className="text-gray-500 text-sm mt-1">Each pack ₹75 · 30g resealable standy pouch</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 sm:gap-5">
          {standy30gProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Size Comparison */}
        <div className="mt-14 bg-gray-50 rounded-2xl p-6 border border-gray-100">
          <h2 className="text-xl font-extrabold text-gray-900 mb-5 text-center">Which Pack Size is Right for You?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-500"></th>
                  <th className="py-3 px-4 text-center font-bold text-blue-700 bg-blue-50 rounded-tl-lg">Paper Box 30g</th>
                  <th className="py-3 px-4 text-center font-bold text-violet-700 bg-violet-50">Standy 30g ✨</th>
                  <th className="py-3 px-4 text-center font-bold text-green-700 bg-green-50 rounded-tr-lg">Standy 50g</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Price", "₹75", "₹75", "₹120"],
                  ["Pack Size", "30g", "30g", "50g"],
                  ["Packaging", "Eco Paper Tub", "Standy Pouch", "Standy Pouch"],
                  ["Flavors", "9 flavors", "14 flavors", "6 flavors"],
                  ["Exclusive", "—", "Jalapeño, Truffle, Cheese & Herbs", "—"],
                  ["Best For", "Gifting & desk", "Variety & new flavors", "Gym & travel"],
                ].map(([label, pb, sp30, sp50]) => (
                  <tr key={label}>
                    <td className="py-3 px-4 font-semibold text-gray-700">{label}</td>
                    <td className="py-3 px-4 text-center text-gray-600 bg-blue-50/30 text-xs">{pb}</td>
                    <td className="py-3 px-4 text-center text-gray-600 bg-violet-50/50 text-xs font-medium">{sp30}</td>
                    <td className="py-3 px-4 text-center text-gray-600 bg-green-50/30 text-xs">{sp50}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => navigate("/makhana/paper-box")} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-2.5 rounded-full transition text-sm">
              Shop Paper Box 30g
            </button>
            <button onClick={() => navigate("/category/makhana-standy-30g")} className="bg-violet-600 hover:bg-violet-700 text-white font-bold px-5 py-2.5 rounded-full transition text-sm">
              Shop Standy 30g
            </button>
            <button onClick={() => navigate("/makhana/standy-pouch")} className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-2.5 rounded-full transition text-sm">
              Shop Standy 50g
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default StandyPouch30gPage
