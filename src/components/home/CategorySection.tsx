import { useNavigate } from "react-router-dom"

const categories = [
  {
    name: "Paper Box Makhana",
    sublabel: "30g · 9 flavors · ₹75",
    image: "/images/section-makhana-category/office_desk_theme_-_Copy_2__jpg.webp",
    slug: "/makhana/paper-box",
    badge: "Most Popular",
    badgeColor: "bg-blue-500",
  },
  {
    name: "Standy Pouch Makhana",
    sublabel: "50g · 6 flavors · ₹120",
    image: "/images/section-makhana-category/gym_theme_jpg.webp",
    slug: "/makhana/standy-pouch",
    badge: "Gym Friendly",
    badgeColor: "bg-green-500",
  },
  {
    name: "Gift Hampers",
    sublabel: "Combo packs · Up to 15% OFF",
    image: "/images/section-makhana-category/party_theme.jpg_1.webp",
    slug: "/gift-hampers",
    badge: "🎁 Gift Ready",
    badgeColor: "bg-rose-500",
  },
  {
    name: "For Kids",
    sublabel: "Sweet & mild flavors",
    image: "/images/section-makhana-category/children_theme.jpg_2.webp",
    slug: "/category/makhana-paper-box",
    badge: "Kid Approved",
    badgeColor: "bg-yellow-500",
  },
  {
    name: "Healthy Chips",
    sublabel: "Beetroot · Oats · Quinoa · Corn",
    image: "/images/chips/beetroot-chips/8908027092102_f.jpg",
    slug: "/category/healthy-chips",
    badge: "Guilt Free",
    badgeColor: "bg-orange-500",
  },
  {
    name: "Ragi Snacks",
    sublabel: "Choco sticks · 30g & 50g",
    image: "/images/other-products/ragi-choco-sticks-30g/Ragi%20choco%20sticks.jpg",
    slug: "/category/ragi-snacks",
    badge: "High Calcium",
    badgeColor: "bg-purple-500",
  },
]

const CategorySection = () => {
  const navigate = useNavigate()

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20">

      <div className="text-center mb-10 md:mb-14">
        <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-orange-500 bg-orange-50 border border-orange-200 px-4 py-1.5 rounded-full mb-3">
          Our Range
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
          Shop by Category
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
        {categories.map((cat) => (
          <div
            key={cat.name}
            onClick={() => navigate(cat.slug)}
            className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-md hover:shadow-2xl transition-all duration-500"
          >
            {/* Image */}
            <div className="h-36 sm:h-44 md:h-48 overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
              />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition duration-500" />

            {/* Badge */}
            <span className={`absolute top-2.5 left-2.5 text-white text-[10px] font-bold px-2 py-0.5 rounded-full ${cat.badgeColor}`}>
              {cat.badge}
            </span>

            {/* Name */}
            <div className="absolute bottom-0 left-0 right-0 p-3">
              <h3 className="text-white text-sm font-bold leading-tight group-hover:text-orange-200 transition-colors">
                {cat.name}
              </h3>
              <p className="text-white/60 text-[10px] mt-0.5">{cat.sublabel}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CategorySection
