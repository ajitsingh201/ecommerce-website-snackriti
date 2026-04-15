import { useNavigate } from "react-router-dom"
import { products } from "../../data/products"
import ProductCard from "../../components/product/ProductCard"

const standyProducts = products.filter(p => p.categorySlug === "makhana-standy-pouch")

const FLAVORS = [
  { name: "Chocolate Crunch", color: "bg-stone-100 text-stone-800" },
  { name: "Himalayan Pink Salt", color: "bg-pink-100 text-pink-800" },
  { name: "Mint Pudina", color: "bg-green-100 text-green-800" },
  { name: "Peri Peri", color: "bg-red-100 text-red-800" },
  { name: "Punjabi Tadka", color: "bg-yellow-100 text-yellow-800" },
  { name: "Salt & Pepper", color: "bg-gray-100 text-gray-800" },
]

const STATS = [
  { value: "50g", label: "Standy Pouch" },
  { value: "₹120", label: "Per Pack MRP" },
  { value: "6", label: "Flavors" },
  { value: "~3g", label: "Protein / serve" },
]

const StandyPouchPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero Banner ─────────────────────────────────────────────────────── */}
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <img
          src="/images/section-makhana-category/gym_theme_jpg.webp"
          alt="Makhana Standy Pouch 50g"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 via-emerald-800/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
            <span className="inline-block text-xs font-bold tracking-widest uppercase bg-green-400/30 backdrop-blur-sm text-green-100 border border-green-300/40 px-3 py-1 rounded-full mb-3">
              50g Standy Pouch
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-lg">
              Fuel Your Workout
              <span className="block text-green-300">Makhana Standy Pouch</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-base mt-3 max-w-md">
              High-protein, low-calorie makhana in resealable 50g standy pouches — your gym-ready, on-the-go snack partner.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/category/makhana-standy-pouch")}
                className="bg-white text-green-800 font-bold px-6 py-2.5 rounded-full hover:bg-green-50 transition-all duration-200 text-sm shadow-lg"
              >
                Shop All Flavors →
              </button>
              <button
                onClick={() => navigate("/makhana/paper-box")}
                className="bg-white/20 backdrop-blur-sm border border-white/40 text-white font-semibold px-5 py-2.5 rounded-full hover:bg-white/30 transition-all duration-200 text-sm"
              >
                Try 30g Paper Box
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats Strip ─────────────────────────────────────────────────────── */}
      <div className="bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 divide-x divide-emerald-500">
            {STATS.map(stat => (
              <div key={stat.label} className="py-4 text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-white">{stat.value}</div>
                <div className="text-xs text-emerald-200 font-medium mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Content ────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Flavor Pills */}
        <div className="mb-10">
          <h2 className="text-lg font-bold text-gray-800 mb-3">Available Flavors</h2>
          <div className="flex flex-wrap gap-2">
            {FLAVORS.map(f => (
              <span key={f.name} className={`text-xs font-semibold px-3 py-1.5 rounded-full ${f.color}`}>
                {f.name}
              </span>
            ))}
          </div>
        </div>

        {/* Why Standy Pouch */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 mb-10 border border-green-100">
          <h2 className="text-xl font-extrabold text-gray-900 mb-4">Why the 50g Standy Pouch?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "🏋️", title: "Gym-Ready", desc: "High protein, low calorie — fuels performance" },
              { icon: "♻️", title: "Resealable", desc: "Standy design stays fresh after every snack" },
              { icon: "🎒", title: "On The Go", desc: "Compact pouch fits every bag and backpack" },
              { icon: "🌿", title: "All-Natural", desc: "No artificial preservatives or colors" },
            ].map(item => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-800 text-sm">{item.title}</h3>
                  <p className="text-gray-500 text-xs mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="mb-6">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            All Standy Pouch Flavors
            <span className="ml-3 text-sm font-semibold bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full">
              {standyProducts.length} Products
            </span>
          </h2>
          <p className="text-gray-500 text-sm mt-1">Each pack ₹120 · 50g resealable standy pouch</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
          {standyProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-14 bg-gray-50 rounded-2xl p-6 border border-gray-100">
          <h2 className="text-xl font-extrabold text-gray-900 mb-5 text-center">30g vs 50g — Which One is Right for You?</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-500"></th>
                  <th className="py-3 px-4 text-center font-bold text-blue-700 bg-blue-50 rounded-tl-lg rounded-bl-lg">Paper Box (30g)</th>
                  <th className="py-3 px-4 text-center font-bold text-green-700 bg-green-50 rounded-tr-lg rounded-br-lg">Standy Pouch (50g)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  ["Price", "₹75", "₹120"],
                  ["Pack Size", "30g", "50g"],
                  ["Packaging", "Eco Paper Tub", "Resealable Pouch"],
                  ["Flavors", "9 bold options", "6 bold options"],
                  ["Best For", "Desk snacking, gifting, trying new flavors", "Gym, travel, sharing"],
                ].map(([label, pb, sp]) => (
                  <tr key={label}>
                    <td className="py-3 px-4 font-semibold text-gray-700">{label}</td>
                    <td className="py-3 px-4 text-center text-gray-600 bg-blue-50/40">{pb}</td>
                    <td className="py-3 px-4 text-center text-gray-600 bg-green-50/40">{sp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => navigate("/makhana/paper-box")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-2.5 rounded-full transition text-sm"
            >
              Shop Paper Box
            </button>
            <button
              onClick={() => navigate("/category/makhana-standy-pouch")}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-2.5 rounded-full transition text-sm"
            >
              Shop Standy Pouch
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default StandyPouchPage
