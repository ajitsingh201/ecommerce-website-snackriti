import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation } from "swiper/modules"
import { FiShoppingCart, FiArrowRight } from "react-icons/fi"
import { addToCart } from "../../store/cartSlice"
import { products } from "../../data/products"
import type { Product } from "../../types/product"

const standyProducts = products.filter(p => p.categorySlug === "makhana-standy-pouch")

const StandyPouchSlider = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation()
    dispatch(addToCart({ product, quantity: 1 }))
    navigate(`/product/${product.slug}`)
  }

  return (
    <section className="relative overflow-hidden py-0">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/section-makhana-category/gym_theme_jpg.webp"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/95 via-green-900/90 to-green-800/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">

          {/* Left: Hero Text */}
          <div className="lg:w-72 xl:w-80 flex-shrink-0">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest uppercase bg-green-400/20 border border-green-400/30 text-green-300 px-3 py-1.5 rounded-full mb-4">
              💪 Power Snack
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight mb-3">
              50g Standy Pouch
              <span className="block text-green-300">Makhana</span>
            </h2>
            <p className="text-green-200/80 text-sm leading-relaxed mb-5">
              High protein, low calorie — roasted makhana in resealable pouches. Gym, office, or travel. Always ready.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {["~3g Protein/serve", "Low Calorie", "Resealable Pack", "100% Natural"].map(tag => (
                <span key={tag} className="text-[11px] font-semibold bg-white/10 border border-white/20 text-white/80 px-2.5 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <button
              onClick={() => navigate("/makhana/standy-pouch")}
              className="flex items-center gap-2 bg-white text-emerald-800 font-bold px-5 py-2.5 rounded-full hover:bg-green-50 transition-all duration-200 shadow-lg text-sm group"
            >
              View All 6 Flavors
              <FiArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Right: Product Slider */}
          <div className="flex-1 min-w-0">
            <Swiper
              modules={[Autoplay, Navigation]}
              loop={standyProducts.length > 2}
              speed={800}
              autoplay={{ delay: 2800, disableOnInteraction: false, pauseOnMouseEnter: true }}
              navigation={{
                nextEl: ".sp-next",
                prevEl: ".sp-prev",
              }}
              spaceBetween={16}
              breakpoints={{
                0:    { slidesPerView: 1.3 },
                480:  { slidesPerView: 2.2 },
                640:  { slidesPerView: 2.5 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 3.5 },
              }}
            >
              {standyProducts.map(product => {
                const price = product.discountedPrice ?? product.price
                const discount = product.discountedPrice
                  ? Math.round(((product.price - product.discountedPrice) / product.price) * 100)
                  : 0

                return (
                  <SwiperSlide key={product.id}>
                    <div
                      onClick={() => navigate(`/product/${product.slug}`)}
                      className="group bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden cursor-pointer
                        hover:bg-white hover:shadow-2xl hover:shadow-black/30 transition-all duration-400 border border-white/20"
                    >
                      {/* Image */}
                      <div className="relative aspect-square overflow-hidden bg-gray-50">
                        <img
                          src={product.images[0]}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-600 ease-in-out"
                        />
                        {discount > 0 && (
                          <span className="absolute top-2.5 left-2.5 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                            -{discount}%
                          </span>
                        )}
                        <span className="absolute top-2.5 right-2.5 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                          50g
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-3.5">
                        <h3 className="font-semibold text-gray-800 text-sm line-clamp-1 group-hover:text-emerald-700 transition-colors mb-1">
                          {product.name}
                        </h3>
                        <p className="text-gray-400 text-[11px] mb-3">50g Standy Pouch</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-baseline gap-1">
                            <span className="text-emerald-600 font-extrabold text-base">₹{price}</span>
                            {product.discountedPrice && (
                              <span className="text-gray-400 text-xs line-through">₹{product.price}</span>
                            )}
                          </div>
                          <button
                            onClick={(e) => handleAddToCart(e, product)}
                            disabled={!product.inStock}
                            className="w-8 h-8 flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white rounded-full transition-all active:scale-90 disabled:opacity-40 shadow-sm hover:shadow-emerald-300 hover:shadow-lg"
                          >
                            <FiShoppingCart size={13} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>

            {/* Navigation buttons */}
            <div className="flex items-center gap-2 mt-4 justify-end">
              <button className="sp-prev w-8 h-8 bg-white/20 hover:bg-white/40 border border-white/30 text-white rounded-full flex items-center justify-center transition-all text-sm font-bold disabled:opacity-30">
                ←
              </button>
              <button className="sp-next w-8 h-8 bg-white/20 hover:bg-white/40 border border-white/30 text-white rounded-full flex items-center justify-center transition-all text-sm font-bold disabled:opacity-30">
                →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default StandyPouchSlider
