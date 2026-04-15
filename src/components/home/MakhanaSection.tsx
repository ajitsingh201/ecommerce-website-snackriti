import { useNavigate } from "react-router-dom"

const themes = [
  {
    image: "/images/section-makhana-category/children_theme.jpg_2.webp",
    label: "For Little Ones",
    title: "Kids Love It",
    subtitle: "Sweet, crunchy & parent-approved",
    badge: "Caramel & Chocolate",
    badgeColor: "bg-yellow-400 text-yellow-900",
    href: "/category/makhana-paper-box",
    gradient: "from-yellow-500/70 to-orange-600/60",
  },
  {
    image: "/images/section-makhana-category/gym_theme_jpg.webp",
    label: "Fitness Snacking",
    title: "Fuel Your Workout",
    subtitle: "High protein, low calorie — gym-ready snack",
    badge: "50g Standy Pouch",
    badgeColor: "bg-green-400 text-green-900",
    href: "/category/makhana-standy-pouch",
    gradient: "from-green-700/70 to-emerald-500/60",
  },
  {
    image: "/images/section-makhana-category/office_desk_theme_-_Copy_2__jpg.webp",
    label: "Office Snacking",
    title: "Desk-Side Crunch",
    subtitle: "Stay focused, snack smart all day",
    badge: "30g Paper Box",
    badgeColor: "bg-blue-400 text-blue-900",
    href: "/category/makhana-paper-box",
    gradient: "from-blue-700/70 to-indigo-600/60",
  },
  {
    image: "/images/section-makhana-category/party_theme.jpg_1.webp",
    label: "Party & Gifting",
    title: "Share the Crunch",
    subtitle: "Combo boxes perfect for every celebration",
    badge: "Gift Hampers",
    badgeColor: "bg-pink-400 text-pink-900",
    href: "/gift-hampers",
    gradient: "from-pink-700/70 to-rose-600/60",
  },
]

const MakhanaSection = () => {
  const navigate = useNavigate()

  return (
    <section className="py-14 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-orange-500 bg-orange-50 border border-orange-200 px-4 py-1.5 rounded-full mb-4">
            India's #1 Healthy Makhana Brand
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Makhana for <span className="text-orange-500">Every Moment</span>
          </h2>
          <p className="mt-3 text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
            From gym bags to gift boxes — there's a perfect flavour for you, always.
          </p>
        </div>

        {/* 4-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {themes.map((theme) => (
            <div
              key={theme.title}
              onClick={() => navigate(theme.href)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="h-72 sm:h-80 overflow-hidden">
                <img
                  src={theme.image}
                  alt={theme.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />
              </div>

              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${theme.gradient} opacity-80 group-hover:opacity-90 transition-opacity duration-500`} />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                {/* Badge */}
                <span className={`self-start text-xs font-bold px-2.5 py-1 rounded-full mb-2 ${theme.badgeColor}`}>
                  {theme.badge}
                </span>

                <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">
                  {theme.label}
                </p>
                <h3 className="text-white text-xl font-extrabold leading-tight mb-1">
                  {theme.title}
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  {theme.subtitle}
                </p>

                {/* CTA */}
                <button className="self-start flex items-center gap-2 bg-white/20 backdrop-blur-sm hover:bg-white hover:text-gray-800 text-white border border-white/40 text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300 group-hover:pl-5">
                  Shop Now
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <button
            onClick={() => navigate("/products")}
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 active:scale-[0.98] text-white font-bold px-8 py-3.5 rounded-full shadow-lg shadow-orange-200 transition-all duration-200"
          >
            Explore All Products
            <span>→</span>
          </button>
        </div>

      </div>
    </section>
  )
}

export default MakhanaSection
