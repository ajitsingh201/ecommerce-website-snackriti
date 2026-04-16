import { useNavigate } from "react-router-dom"
import { products } from "../../data/products"
import ProductCard from "../../components/product/ProductCard"

const paperBoxProducts = products.filter(p => p.categorySlug === "makhana-paper-box")

const FLAVORS = [
  { name: "Mint Pudina", color: "bg-green-100 text-green-800" },
  { name: "Tangy Tomato", color: "bg-red-100 text-red-800" },
  { name: "Thai Sweet Chilli", color: "bg-orange-100 text-orange-800" },
  { name: "Punjabi Tadka", color: "bg-yellow-100 text-yellow-800" },
  { name: "Caramel", color: "bg-amber-100 text-amber-800" },
  { name: "Chaat Masala", color: "bg-lime-100 text-lime-800" },
  { name: "Cheese", color: "bg-yellow-100 text-yellow-900" },
  { name: "Chocolate Crunch", color: "bg-brown-100 text-stone-800" },
  { name: "Peri Peri", color: "bg-rose-100 text-rose-800" },
]

const STATS = [
  { value: "30g", label: "Eco Paper Tub" },
  { value: "₹75", label: "Per Pack MRP" },
  { value: "9", label: "Bold Flavors" },
  { value: "0%", label: "Trans Fat" },
]

const PaperBoxPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero Banner ─────────────────────────────────────────────────────── */}
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <img
          src="/images/section-makhana-category/office_desk_theme_-_Copy_2__jpg.webp"
          alt="Makhana Paper Box 30g"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
            <span className="inline-block text-xs font-bold tracking-widest uppercase bg-blue-400/30 backdrop-blur-sm text-blue-100 border border-blue-300/40 px-3 py-1 rounded-full mb-3">
              30g Eco Paper Tub
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-lg">
              Makhana Paper Box
              <span className="block text-blue-300">9 Bold Flavors</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-base mt-3 max-w-md">
              Premium roasted lotus seeds in our iconic eco-friendly paper tubs — perfect for desk snacking, travel, and gifting.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                onClick={() => navigate("/category/makhana-paper-box")}
                className="bg-white text-blue-800 font-bold px-6 py-2.5 rounded-full hover:bg-blue-50 transition-all duration-200 text-sm shadow-lg"
              >
                Shop All Flavors →
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
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 divide-x divide-blue-500">
            {STATS.map(stat => (
              <div key={stat.label} className="py-4 text-center">
                <div className="text-xl sm:text-2xl font-extrabold text-white">{stat.value}</div>
                <div className="text-xs text-blue-200 font-medium mt-0.5">{stat.label}</div>
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

        {/* Why Paper Box */}
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 mb-10 border border-blue-100">
          <h2 className="text-xl font-extrabold text-gray-900 mb-4">Why Choose Paper Box?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "📦", title: "Eco Packaging", desc: "Biodegradable paper tub — guilt-free for the planet" },
              { icon: "🍃", title: "Roasted, Not Fried", desc: "Light & crispy without the extra oil" },
              { icon: "💪", title: "High Protein", desc: "Packed with plant-based protein & fiber" },
              { icon: "🎁", title: "Perfect Gift Size", desc: "30g — ideal for gifting & sampling" },
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
            All Paper Box Flavors
            <span className="ml-3 text-sm font-semibold bg-orange-100 text-orange-700 px-2.5 py-1 rounded-full">
              {paperBoxProducts.length} Products
            </span>
          </h2>
          <p className="text-gray-500 text-sm mt-1">Each pack ₹75 · 30g eco-friendly paper tub</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-5">
          {paperBoxProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Cross-sell Banner */}
        <div
          onClick={() => navigate("/makhana/standy-pouch")}
          className="mt-14 relative overflow-hidden rounded-2xl cursor-pointer group"
        >
          <img
            src="/images/section-makhana-category/gym_theme_jpg.webp"
            alt="Standy Pouch 50g"
            className="w-full h-44 sm:h-52 object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/80 to-emerald-700/50 flex items-center">
            <div className="px-6 sm:px-10">
              <p className="text-green-200 text-xs font-bold uppercase tracking-widest mb-1">Upgrade your snack</p>
              <h3 className="text-white text-xl sm:text-2xl font-extrabold">
                Try the 50g Standy Pouch →
              </h3>
              <p className="text-white/70 text-sm mt-1">More makhana, same bold flavors. Perfect for gym & travel.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default PaperBoxPage
