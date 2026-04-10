import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { FiShoppingCart } from "react-icons/fi"
import { addToCart } from "../../store/cartSlice"
import { products as allProducts } from "../../data/products"
import type { Product } from "../../types/product"


// Use featured products first, fall back to top-rated
const getDisplayProducts = (): Product[] => {
  const featured = allProducts.filter(p => p.featured)
  if (featured.length >= 6) return featured.slice(0, 8)
  const extras = allProducts.filter(p => !p.featured).slice(0, 8 - featured.length)
  return [...featured, ...extras]
}

const displayProducts = getDisplayProducts()

interface Props {
  title?: string
}

const ProductSlider = ({ title = "Popular Products" }: Props) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

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
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">{title}</h2>
          <button
            onClick={() => navigate("/products")}
            className="text-orange-600 font-semibold hover:underline"
          >
            View All →
          </button>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={900}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ clickable: true }}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
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
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl
                    transition duration-500 cursor-pointer pb-4"
                  onClick={() => navigate(`/product/${product.slug}`)}
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover transition duration-700 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition duration-500" />
                    {discountPercent > 0 && (
                      <span className="absolute top-3 left-3 bg-orange-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                        {discountPercent}% OFF
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
                  <div className="p-4">
                    <h3 className="font-semibold text-sm sm:text-base line-clamp-1">{product.name}</h3>
                    <p className="text-gray-500 text-xs sm:text-sm mt-1 line-clamp-1">{product.category}</p>

                    {/* Pricing */}
                    <div className="mt-3 flex items-center gap-2">
                      {product.discountedPrice && (
                        <span className="text-gray-400 line-through text-sm">₹{product.price}</span>
                      )}
                      <span className="text-orange-600 font-bold text-lg">₹{salePrice}</span>
                    </div>

                    {/* Add to Cart */}
                    <button
                      onClick={(e) => handleAddToCart(e, product)}
                      disabled={!product.inStock}
                      className="mt-4 w-full flex items-center justify-center gap-2 bg-orange-600 text-white
                        py-2.5 rounded-lg hover:bg-orange-700 transition duration-300 font-medium text-sm
                        active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <FiShoppingCart size={16} />
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </button>
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
