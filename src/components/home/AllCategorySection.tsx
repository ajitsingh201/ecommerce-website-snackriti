import { useNavigate } from "react-router-dom"

const ranges = [
  {
    icon: "📦",
    name: "Paper Box",
    desc: "30g · ₹75 each",
    href: "/makhana/paper-box",
    bg: "bg-blue-50",
    iconBg: "bg-blue-100",
    accent: "text-blue-700",
  },
  {
    icon: "🎒",
    name: "Standy Pouch",
    desc: "50g · ₹120 each",
    href: "/makhana/standy-pouch",
    bg: "bg-green-50",
    iconBg: "bg-green-100",
    accent: "text-green-700",
  },
  {
    icon: "🎁",
    name: "Gift Hampers",
    desc: "Combos · up to 15% off",
    href: "/gift-hampers",
    bg: "bg-rose-50",
    iconBg: "bg-rose-100",
    accent: "text-rose-700",
  },
  {
    icon: "🧒",
    name: "Kids Snacks",
    desc: "Caramel · Choco · Cheese",
    href: "/category/makhana-paper-box",
    bg: "bg-yellow-50",
    iconBg: "bg-yellow-100",
    accent: "text-yellow-700",
  },
  {
    icon: "🥗",
    name: "Healthy Chips",
    desc: "Beetroot · Oats · Quinoa",
    href: "/category/healthy-chips",
    bg: "bg-orange-50",
    iconBg: "bg-orange-100",
    accent: "text-orange-700",
  },
  {
    icon: "🌾",
    name: "Ragi Snacks",
    desc: "Choco sticks · 30g & 50g",
    href: "/category/ragi-snacks",
    bg: "bg-purple-50",
    iconBg: "bg-purple-100",
    accent: "text-purple-700",
  },
  {
    icon: "🍃",
    name: "Raw Makhana",
    desc: "Premium · ₹199 / 50g",
    href: "/category/raw-makhana",
    bg: "bg-teal-50",
    iconBg: "bg-teal-100",
    accent: "text-teal-700",
  },
  {
    icon: "⭐",
    name: "Best Sellers",
    desc: "Most loved picks",
    href: "/products",
    bg: "bg-amber-50",
    iconBg: "bg-amber-100",
    accent: "text-amber-700",
  },
]

const AllCategorySection = () => {
  const navigate = useNavigate()

  return (
    <section className="bg-gray-50 py-10 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 text-center mb-6">
          Quick Browse
        </p>

        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-3 sm:gap-4">
          {ranges.map((r) => (
            <button
              key={r.name}
              onClick={() => navigate(r.href)}
              className={`flex flex-col items-center text-center p-3 rounded-2xl ${r.bg} hover:shadow-md transition-all duration-300 group`}
            >
              <div className={`w-12 h-12 ${r.iconBg} rounded-xl flex items-center justify-center text-2xl mb-2 group-hover:scale-110 transition-transform duration-300`}>
                {r.icon}
              </div>
              <p className={`text-xs font-bold ${r.accent} leading-tight`}>{r.name}</p>
              <p className="text-[10px] text-gray-400 mt-0.5 leading-tight">{r.desc}</p>
            </button>
          ))}
        </div>

      </div>
    </section>
  )
}

export default AllCategorySection
