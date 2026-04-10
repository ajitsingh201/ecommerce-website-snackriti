import { Link } from "react-router-dom"

const milestones = [
  { year: "2021", title: "Founded in Bengaluru", desc: "Snackriti started as a small passion project — delivering authentic snacks to our local community." },
  { year: "2022", title: "Expanded to 6 Categories", desc: "We grew beyond snacks to include dry fruits, beauty, cosmetics, fashion, and beverages." },
  { year: "2023", title: "10,000+ Orders Delivered", desc: "Hit a major milestone with over 10,000 happy customers across India." },
  { year: "2024", title: "Pan-India Shipping", desc: "Launched express delivery and free shipping on orders above ₹499 across all major cities." },
]

const team = [
  { name: "Aditya Sharma", role: "Founder & CEO", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Priya Mehta", role: "Head of Product", img: "https://randomuser.me/api/portraits/women/44.jpg" },
  { name: "Rohan Gupta", role: "Marketing Lead", img: "https://randomuser.me/api/portraits/men/28.jpg" },
  { name: "Sneha Nair", role: "Customer Experience", img: "https://randomuser.me/api/portraits/women/31.jpg" },
]

const AboutPage = () => (
  <div>
    {/* Hero */}
    <div className="bg-gradient-to-br from-orange-50 to-amber-50 py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-5">
          About <span className="text-orange-600">Snackriti</span>
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Snackriti is India's growing multi-category ecommerce destination, committed to bringing you premium quality products
          — from healthy snacks and dry fruits to beauty, fashion, and more — crafted with authenticity and care.
        </p>
      </div>
    </div>

    {/* Mission */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">Our Mission</span>
          <h2 className="text-3xl font-bold text-gray-800 mt-2 mb-5">
            Delivering Quality You Can Trust
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            At Snackriti, we believe that every purchase should bring joy. Our mission is to curate the finest
            products across categories and deliver them to your doorstep with speed, care, and transparency.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            We work directly with manufacturers, certified organic farms, and trusted artisan brands to bring you
            products that are not just good-looking — but genuinely good for you.
          </p>
          <div className="flex gap-4">
            <Link
              to="/products"
              className="bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-full font-semibold transition-all shadow-sm hover:shadow-md"
            >
              Shop Now
            </Link>
            <Link
              to="/contact"
              className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-7 py-3 rounded-full font-semibold transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-lg">
          <img
            src="/images/slider1.jpeg"
            alt="About Snackriti"
            className="w-full h-80 object-cover"
          />
        </div>
      </div>
    </div>

    {/* Timeline */}
    <div className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Journey</h2>
          <p className="text-gray-500">From a small idea to a trusted brand</p>
        </div>
        <div className="space-y-8">
          {milestones.map((m, i) => (
            <div key={m.year} className="flex gap-6">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {m.year.slice(2)}
                </div>
                {i < milestones.length - 1 && (
                  <div className="w-0.5 flex-1 bg-orange-200 mt-2" />
                )}
              </div>
              <div className="pb-8">
                <p className="text-xs text-orange-500 font-semibold mb-1">{m.year}</p>
                <h3 className="text-lg font-bold text-gray-800 mb-2">{m.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Team */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Meet the Team</h2>
        <p className="text-gray-500">The people behind Snackriti</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {team.map(member => (
          <div key={member.name} className="text-center group">
            <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-orange-100 group-hover:border-orange-400 transition-all">
              <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
            </div>
            <h4 className="font-bold text-gray-800 text-sm">{member.name}</h4>
            <p className="text-xs text-gray-500 mt-0.5">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
)

export default AboutPage
