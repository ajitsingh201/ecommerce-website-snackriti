import { FiPackage, FiShield, FiSmile, FiTruck, FiRefreshCw, FiStar } from "react-icons/fi"
import { Link } from "react-router-dom"

const reasons = [
  {
    icon: <FiPackage size={28} />,
    title: "Diverse Product Range",
    desc: "From premium dry fruits and healthy snacks to beauty, cosmetics, fashion, and beverages — everything you need in one place.",
    bg: "bg-orange-50",
    color: "text-orange-600",
  },
  {
    icon: <FiShield size={28} />,
    title: "Quality Assured",
    desc: "Every product on Snackriti goes through rigorous quality checks. We partner only with trusted, certified sellers and brands.",
    bg: "bg-amber-50",
    color: "text-amber-600",
  },
  {
    icon: <FiSmile size={28} />,
    title: "Customer-First Experience",
    desc: "Your satisfaction is our priority. From seamless browsing to hassle-free returns, we've built every step with you in mind.",
    bg: "bg-green-50",
    color: "text-green-600",
  },
  {
    icon: <FiTruck size={28} />,
    title: "Fast & Reliable Delivery",
    desc: "Orders above ₹499 ship free. We partner with top logistics providers to ensure your products arrive fresh and on time.",
    bg: "bg-blue-50",
    color: "text-blue-600",
  },
  {
    icon: <FiRefreshCw size={28} />,
    title: "Easy Returns",
    desc: "Changed your mind? No problem. Our 7-day hassle-free return policy means zero stress after your purchase.",
    bg: "bg-purple-50",
    color: "text-purple-600",
  },
  {
    icon: <FiStar size={28} />,
    title: "Exclusive Deals",
    desc: "Snackriti members get access to exclusive discounts, early sale alerts, and curated bundle offers you won't find elsewhere.",
    bg: "bg-rose-50",
    color: "text-rose-600",
  },
]

const stats = [
  { value: "50,000+", label: "Happy Customers" },
  { value: "1,000+", label: "Products Listed" },
  { value: "6+", label: "Product Categories" },
  { value: "4.8★", label: "Average Rating" },
]

const WhyUsPage = () => (
  <div>
    {/* Hero */}
    <div className="bg-gradient-to-br from-orange-500 to-amber-500 text-white py-20 px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Snackriti?</h1>
      <p className="text-white/85 text-lg max-w-2xl mx-auto">
        We're more than just an online store — we're a community built on quality, trust, and a love for great products.
      </p>
    </div>

    {/* Stats */}
    <div className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map(stat => (
            <div key={stat.label} className="p-4">
              <p className="text-3xl md:text-4xl font-extrabold text-orange-600 mb-1">{stat.value}</p>
              <p className="text-gray-500 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Reasons grid */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-14">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">What Makes Us Different</h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Here's a look at the values and commitments that set Snackriti apart from the rest.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map(reason => (
          <div
            key={reason.title}
            className="group bg-white rounded-2xl border border-gray-100 shadow-sm p-7
              hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <div
              className={`w-16 h-16 ${reason.bg} ${reason.color} rounded-2xl flex items-center justify-center mb-5
                group-hover:scale-110 transition-transform duration-300`}
            >
              {reason.icon}
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-2">{reason.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{reason.desc}</p>
          </div>
        ))}
      </div>
    </div>

    {/* CTA */}
    <div className="bg-gradient-to-r from-orange-500 to-amber-500 py-16 text-center text-white">
      <h2 className="text-3xl font-bold mb-4">Ready to start shopping?</h2>
      <p className="text-white/85 mb-8 max-w-md mx-auto">
        Join thousands of happy customers and discover the Snackriti difference today.
      </p>
      <Link
        to="/products"
        className="inline-block bg-white text-orange-600 font-bold px-10 py-4 rounded-full
          hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
      >
        Shop Now
      </Link>
    </div>
  </div>
)

export default WhyUsPage
