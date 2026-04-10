import { Link } from "react-router-dom"
import { FiFacebook, FiInstagram, FiTwitter, FiMail, FiPhone } from "react-icons/fi"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-orange-500 mb-4">
            Snackriti
          </h2>
          <p className="text-sm leading-relaxed">
            Delivering fresh, premium quality snacks crafted with tradition and care.
            Taste the authenticity in every bite.
          </p>

          <div className="flex space-x-4 mt-6">
            <a href="#" className="hover:text-orange-500 transition">
              <FiFacebook size={20} />
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <FiInstagram size={20} />
            </a>
            <a href="#" className="hover:text-orange-500 transition">
              <FiTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Company
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/about" className="hover:text-orange-500 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/why-us" className="hover:text-orange-500 transition">
                Why Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-orange-500 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-orange-500 transition">
                All Products
              </Link>
            </li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Policies
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/privacy-policy" className="hover:text-orange-500 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/refund-policy" className="hover:text-orange-500 transition">
                Refund Policy
              </Link>
            </li>
            <li>
              <Link to="/shipping-policy" className="hover:text-orange-500 transition">
                Shipping Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-orange-500 transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter + Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Stay Updated
          </h3>

          <p className="text-sm mb-4">
            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
          </p>

          <form className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition"
            >
              Subscribe
            </button>
          </form>

          <div className="mt-6 space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <FiMail size={16} />
              support@snackriti.com
            </div>
            <div className="flex items-center gap-2">
              <FiPhone size={16} />
              +91 98765 43210
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Snackriti. All rights reserved.
        </div>
      </div>

    </footer>
  )
}

export default Footer