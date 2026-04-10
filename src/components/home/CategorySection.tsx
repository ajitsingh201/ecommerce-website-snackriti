import { useNavigate } from "react-router-dom"

const categories = [
  { name: "Beauty Products", image: "/images/beautyimg.jpg", slug: "beauty-products" },
  { name: "Dry Fruits", image: "/images/dryfrutsimg.webp", slug: "dry-fruits" },
  { name: "Healthy Snacks", image: "/images/healthysnackimg.png", slug: "healthy-snacks" },
  { name: "Cosmetic Products", image: "/images/pink-cosmetic-img.jpg", slug: "cosmetic-products" },
  { name: "Fashion Products", image: "/images/fashionimg.jpg", slug: "fashion-products" },
]

const CategorySection = () => {
  const navigate = useNavigate()

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 
                        py-12 sm:py-16 md:py-20">

      <h2 className="text-2xl sm:text-3xl md:text-4xl 
                     font-bold text-center mb-10 md:mb-14">
        Shop by Category
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">

        {categories.map((cat, index) => (
          <div
            key={index}
            onClick={() => navigate(`/category/${cat.slug}`)}
            className="relative rounded-xl overflow-hidden cursor-pointer 
                       group shadow-md hover:shadow-2xl transition duration-500"
          >
            
            {/* Image Container (Fixed Height) */}
            <div className="h-40 sm:h-48 md:h-56 lg:h-60 overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover 
                           transform group-hover:scale-110 
                           transition duration-700 ease-in-out"
              />
            </div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 
                            group-hover:bg-black/50 transition duration-500" />

            {/* Category Name */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-sm sm:text-base md:text-lg 
                             font-semibold tracking-wide 
                             transform group-hover:scale-110 
                             transition duration-500">
                {cat.name}
              </h3>
            </div>

          </div>
        ))}

      </div>
    </section>
  )
}

export default CategorySection