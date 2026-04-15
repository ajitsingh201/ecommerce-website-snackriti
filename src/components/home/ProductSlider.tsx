import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { FiShoppingCart } from "react-icons/fi"
import { addToCart } from "../../store/cartSlice"
import { products as allProducts } from "../../data/products"
import type { Product } from "../../types/product"

const getFeaturedProducts = (): Product[] => {
  const featured = allProducts.filter(p => p.featured)
  if (featured.length >= 6) return featured.slice(0, 8)
  const extras = allProducts.filter(p => !p.featured).slice(0, 8 - featured.length)
  return [...featured, ...extras]
}

const getNewArrivalProducts = (): Product[] => {
  const newArrivals = allProducts.filter(p => p.newArrival)
  if (newArrivals.length >= 6) return newArrivals
  return newArrivals
}

interface Props {
  title?: string
  filterBy?: "featured" | "newArrival"
}

const ProductSlider = ({ title = "Popular Products", filterBy = "featured" }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const displayProducts = filterBy === "newArrival" ? getNewArrivalProducts() : getFeaturedProducts()

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.stopPropagation()
    dispatch(addToCart({ product, quantity: 1 }))
    navigate(`/product/${product.slug}`)
  }

  return (
    <section className="bg-gray-50 py-12 sm:py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-10 md:mb-14">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h2>
            {filterBy === "newArrival" && (
              <p className="text-gray-500 text-sm mt-1">
                14 new flavors · 30g Standy Pouch · ₹75 each
              </p>
            )}
          </div>
          <button
            onClick={() => navigate(filterBy === "newArrival" ? "/makhana/standy-30g" : "/products")}
            className="text-orange-600 font-semibold hover:underline text-sm"
          >
            View All →
          </button>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          loop={displayProducts.length > 4}
          speed={900}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1.5 },
            480: { slidesPerView: 2.2 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 3.5 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
        >
          {displayProducts.map(product => {
            const salePrice = product.discountedPrice ?? product.price
            const discountPercent = product.discountedPrice
              ? Math.round(((product.price - product.discountedPrice) / product.price) * 100)
              : 0

            return (
              <SwiperSlide key={product.id}>
                <div
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl
                    transition-all duration-400 cursor-pointer border border-gray-100"
                  onClick={() => navigate(`/product/${product.slug}`)}
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-gray-50">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition duration-600 ease-in-out group-hover:scale-110"
                    />
                    {discountPercent > 0 && (
                      <span className="absolute top-2.5 left-2.5 bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                        -{discountPercent}%
                      </span>
                    )}
                    {product.newArrival && (
                      <span className="absolute top-2.5 right-2.5 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow">
                        New
                      </span>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <span className="bg-black/60 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                          Out of Stock
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-3.5">
                    <span className="text-[10px] font-bold bg-orange-50 text-orange-600 border border-orange-100 px-2 py-0.5 rounded-full">
                      {product.packaging}
                    </span>
                    <h3 className="font-semibold text-sm line-clamp-1 mt-1.5 group-hover:text-orange-600 transition-colors">
                      {product.name}
                    </h3>

                    {/* Pricing + Cart */}
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex items-baseline gap-1.5">
                        {product.discountedPrice && (
                          <span className="text-gray-400 line-through text-xs">₹{product.price}</span>
                        )}
                        <span className="text-orange-600 font-extrabold text-base">₹{salePrice}</span>
                      </div>
                      <button
                        onClick={(e) => handleAddToCart(e, product)}
                        disabled={!product.inStock}
                        className="w-8 h-8 flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-all active:scale-90 disabled:opacity-40 shadow-sm"
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

      </div>
    </section>
  )
}

export default ProductSlider
