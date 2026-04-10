import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import { useNavigate } from "react-router-dom"

const slides = [
  {
    title: "Guilt-Free Snacking Starts Here",
    highlight: "Snacking",
    description:
      "Discover premium roasted makhana crafted with natural ingredients, bold flavors, and wholesome nutrition for everyday healthy indulgence.",
    image: "/images/slider1.jpeg",
  },
  {
    title: "Superfood Snacking, Reinvented",
    highlight: "Snacking",
    description:
      "Experience the goodness of fox nuts transformed into crunchy, flavorful snacks that fuel your day without compromising your health goals.",
    image: "/images/slider2.jpeg",
  },
  {
    title: "Roast. Crunch. Repeat.",
    highlight: "Crunch",
    description:
      "Snackriti brings you perfectly roasted makhana packed with taste, protein, and lightness — the smarter alternative to fried snacks.",
    image: "/images/slider3.jpeg",
  },
  {
    title: "Flavors That Fit Your Lifestyle",
    highlight: "Lifestyle",
    description:
      "From classic Himalayan Pink Salt to spicy Peri Peri and indulgent Chocolate Crunch, explore a world of makhana flavors made for every mood.",
    image: "/images/slider2.jpeg",
  },
]

const Hero = () => {
  const navigate = useNavigate()

  return (
    <section>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3500 }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>

            <div
              className="
              w-full
              bg-no-repeat
              bg-right
              bg-cover
              md:min-h-[520px]
              flex items-center
              "
              style={{
                backgroundImage:
                  typeof window !== "undefined" && window.innerWidth >= 768
                    ? `url(${slide.image})`
                    : "none",
              }}
            >

              <div
                className="
                max-w-7xl
                mx-auto
                px-4 sm:px-6 lg:px-8
                py-12 sm:py-16 md:py-20
                w-full
                "
              >

                {/* Content Area (50%) */}
                <div className="max-w-xl">

                  <h1
                    className="
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    xl:text-6xl
                    font-bold
                    text-gray-800
                    leading-tight
                    "
                  >
                    {slide.title.split(" ").slice(0, -1).join(" ")}{" "}
                    <span className="text-orange-600">
                      {slide.highlight}
                    </span>
                  </h1>

                  <p
                    className="
                    mt-4
                    sm:mt-6
                    text-gray-600
                    text-base
                    sm:text-lg
                    md:text-xl
                    "
                  >
                    {slide.description}
                  </p>

                  <button
                    onClick={() => navigate("/products")}
                    className="
                    mt-6
                    sm:mt-8
                    bg-orange-600
                    text-white
                    px-6
                    sm:px-8
                    py-3
                    rounded-md
                    hover:bg-orange-700
                    transition
                    "
                  >
                    Shop Now
                  </button>

                </div>

              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  )
}

export default Hero