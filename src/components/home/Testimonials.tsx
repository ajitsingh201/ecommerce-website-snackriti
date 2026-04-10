import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"


interface Testimonial {
  name: string
  role: string
  image: string
  rating: number
  review: string
}

const testimonials: Testimonial[] = [
  {
    name: "Ritika Sharma",
    role: "Fitness Enthusiast",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    review:
      "Snackriti makhana has completely replaced my unhealthy snack habits. The crunch, flavor, and lightness make it perfect for my evening cravings. I especially love the Himalayan Pink Salt flavor because it feels premium and healthy at the same time.",
  },
  {
    name: "Aman Verma",
    role: "Working Professional",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    review:
      "I keep a pack of Snackriti roasted makhana in my office drawer every day. It’s the perfect quick snack during busy work hours. Unlike chips, it doesn’t feel heavy and still satisfies my cravings for something crunchy.",
  },
  {
    name: "Neha Gupta",
    role: "Nutrition Blogger",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 4,
    review:
      "As someone who focuses on healthy eating, I really appreciate the ingredient quality of Snackriti products. The makhana tastes fresh, well-roasted, and flavorful without feeling oily or artificial. It’s a great option for mindful snacking.",
  },
  {
    name: "Rahul Singh",
    role: "Gym Trainer",
    image: "https://randomuser.me/api/portraits/men/76.jpg",
    rating: 5,
    review:
      "Most snacks are either tasty or healthy, but Snackriti somehow manages to be both. I recommend it to my gym clients who want a better alternative to fried snacks. The protein and lightness make it perfect for post-workout munching.",
  },
]

const Testimonials = () => {
  return (
    <section className="bg-orange-50 py-14">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            What Our Customers Say
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Thousands of snack lovers trust Snackriti for delicious and
            wholesome roasted makhana. Here’s what our customers say about
            their snacking experience.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >

          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>

              <div
                className="
                bg-white
                rounded-xl
                shadow-sm
                p-6
                h-full
                flex
                flex-col
                justify-between
                hover:shadow-md
                transition
                "
              >

                {/* Review */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  “{testimonial.review}”
                </p>

                {/* Rating */}
                <div className="flex mt-4 text-yellow-400">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                {/* User Info */}
                <div className="flex items-center mt-6">

                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />

                  <div className="ml-3">
                    <h4 className="text-sm font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>

                    <p className="text-xs text-gray-500">
                      {testimonial.role}
                    </p>
                  </div>

                </div>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </div>

    </section>
  )
}

export default Testimonials