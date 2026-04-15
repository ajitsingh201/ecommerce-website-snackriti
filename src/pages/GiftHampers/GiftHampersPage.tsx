import { useNavigate } from "react-router-dom"
import { products } from "../../data/products"
import ProductCard from "../../components/product/ProductCard"

const hamperProducts = products.filter(p => p.categorySlug === "gift-hampers")

const OCCASIONS = [
  { label: "🎂 Birthday", color: "bg-pink-100 text-pink-800" },
  { label: "🪔 Diwali", color: "bg-orange-100 text-orange-800" },
  { label: "🎁 Raksha Bandhan", color: "bg-purple-100 text-purple-800" },
  { label: "💍 Wedding", color: "bg-yellow-100 text-yellow-800" },
  { label: "🏢 Corporate Gifting", color: "bg-blue-100 text-blue-800" },
  { label: "🎄 Festive Season", color: "bg-green-100 text-green-800" },
]

const FEATURES = [
  { icon: "🎀", title: "Premium Packaging", desc: "Beautifully boxed — ready to gift right out of the bag" },
  { icon: "🌿", title: "Healthy & Thoughtful", desc: "A healthy gift your recipients will truly appreciate" },
  { icon: "💯", title: "Up to 15% OFF", desc: "Combo packs at a flat discount vs individual pricing" },
  { icon: "🚚", title: "Pan India Delivery", desc: "We ship across India — order from anywhere" },
]

const GiftHampersPage = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero Banner ─────────────────────────────────────────────────────── */}
      <div className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
        <img
          src="/images/section-makhana-category/party_theme.jpg_1.webp"
          alt="Gift Hampers"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-pink-900/80 via-rose-800/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
            <span className="inline-block text-xs font-bold tracking-widest uppercase bg-pink-400/30 backdrop-blur-sm text-pink-100 border border-pink-300/40 px-3 py-1 rounded-full mb-3">
              Healthy Gift Hampers
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight max-w-lg">
              Share the Crunch
              <span className="block text-pink-300">Give the Gift of Health</span>
            </h1>
            <p className="text-white/80 text-sm sm:text-base mt-3 max-w-md">
              Thoughtfully curated makhana combo boxes for every occasion — birthdays, festivals, weddings, or just because.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button
                onClick={() => document.getElementById("hamper-products")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-white text-pink-800 font-bold px-6 py-2.5 rounded-full hover:bg-pink-50 transition-all duration-200 text-sm shadow-lg"
              >
                Explore Hampers →
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="bg-white/20 backdrop-blur-sm border border-white/40 text-white font-semibold px-5 py-2.5 rounded-full hover:bg-white/30 transition-all duration-200 text-sm"
              >
                Bulk / Corporate Orders
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Occasions Strip ─────────────────────────────────────────────────── */}
      <div className="bg-rose-50 border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center gap-2 justify-center">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest mr-2">Perfect For:</span>
            {OCCASIONS.map(o => (
              <span key={o.label} className={`text-xs font-semibold px-3 py-1.5 rounded-full ${o.color}`}>
                {o.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main Content ────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Features */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mb-12">
          {FEATURES.map(f => (
            <div key={f.title} className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-5 border border-rose-100 text-center">
              <div className="text-3xl mb-2">{f.icon}</div>
              <h3 className="font-bold text-gray-800 text-sm">{f.title}</h3>
              <p className="text-gray-500 text-xs mt-1">{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Hamper Gallery */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900" id="hamper-products">
              Our Gift Hampers
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              All hampers include a flat <span className="text-orange-600 font-semibold">15% OFF</span> vs buying individual packs
            </p>
          </div>
          <button
            onClick={() => navigate("/contact")}
            className="self-start sm:self-auto text-sm font-semibold text-rose-600 hover:text-rose-700 border border-rose-200 hover:border-rose-400 px-4 py-2 rounded-full transition-all"
          >
            Need a custom hamper? →
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {hamperProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Gift hamper showcase images */}
        <div className="mt-14">
          <h2 className="text-xl font-extrabold text-gray-900 mb-5">Inside Every Box</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
            {[1, 2, 3, 4, 5].map(n => (
              <div key={n} className="rounded-2xl overflow-hidden aspect-square shadow-md hover:shadow-xl transition-all duration-300 group">
                <img
                  src={`/images/gift-hampers/img${n}.webp`}
                  alt={`Gift hamper ${n}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bulk Orders CTA */}
        <div className="mt-14 bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl font-extrabold mb-2">Corporate & Bulk Orders</h2>
          <p className="text-rose-100 text-sm mb-5 max-w-md mx-auto">
            Planning to gift your team or clients? We offer custom branding, bulk pricing, and pan-India delivery for corporate gift orders.
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-rose-700 font-bold px-8 py-3 rounded-full hover:bg-rose-50 transition-all shadow-lg"
          >
            Get a Custom Quote →
          </button>
        </div>

      </div>
    </div>
  )
}

export default GiftHampersPage
