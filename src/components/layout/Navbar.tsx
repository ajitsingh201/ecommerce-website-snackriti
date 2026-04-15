import { useState, useRef, useEffect } from "react"
import { Link, NavLink } from "react-router-dom"
import { FiShoppingCart, FiMenu, FiX, FiUser, FiChevronDown, FiSearch } from "react-icons/fi"
import { useSelector } from "react-redux"
import { selectCartCount } from "../../store/cartSlice"
import SearchOverlay from "../search/SearchOverlay"

const MAKHANA_LINKS = [
  { label: "30g Paper Box", sublabel: "9 flavors · ₹75 each", href: "/makhana/paper-box", icon: "📦" },
  { label: "30g Standy Pouch", sublabel: "14 flavors · ₹75 each · New ✨", href: "/makhana/standy-30g", icon: "🆕" },
  { label: "50g Standy Pouch", sublabel: "6 flavors · ₹120 each", href: "/makhana/standy-pouch", icon: "🎒" },
  { label: "All Makhana", sublabel: "Browse every flavour", href: "/products", icon: "🍃" },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [makhanaOpen, setMakhanaOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const cartCount = useSelector(selectCartCount)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setMakhanaOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const navLinkClass =
    "text-gray-700 hover:text-orange-600 transition duration-200 font-medium"

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Snackriti Logo"
              className="h-15 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">

            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            {/* Makhana Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setMakhanaOpen(v => !v)}
                className={`flex items-center gap-1 font-medium transition duration-200 ${makhanaOpen ? "text-orange-600" : "text-gray-700 hover:text-orange-600"}`}
              >
                Makhana
                <FiChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${makhanaOpen ? "rotate-180 text-orange-600" : ""}`}
                />
              </button>

              {makhanaOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 py-2 z-50">
                  {/* Arrow */}
                  <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-l border-t border-gray-100 rotate-45" />

                  {MAKHANA_LINKS.map(link => (
                    <Link
                      key={link.href}
                      to={link.href}
                      onClick={() => setMakhanaOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-orange-50 transition-colors group"
                    >
                      <span className="text-xl w-8 text-center">{link.icon}</span>
                      <div>
                        <div className="font-semibold text-gray-800 text-sm group-hover:text-orange-600 transition-colors">
                          {link.label}
                        </div>
                        <div className="text-xs text-gray-400">{link.sublabel}</div>
                      </div>
                    </Link>
                  ))}

                  <div className="border-t border-gray-100 mx-3 my-1" />
                  <Link
                    to="/gift-hampers"
                    onClick={() => setMakhanaOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 hover:bg-orange-50 transition-colors group"
                  >
                    <span className="text-xl w-8 text-center">🎁</span>
                    <div>
                      <div className="font-semibold text-gray-800 text-sm group-hover:text-orange-600 transition-colors">
                        Gift Hampers
                      </div>
                      <div className="text-xs text-gray-400">Curated combo boxes · Up to 15% OFF</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <NavLink to="/products" className={navLinkClass}>
              All Products
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>

            <NavLink to="/why-us" className={navLinkClass}>
              Why Us
            </NavLink>

            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>

          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center space-x-5">

            {/* Search */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 text-gray-500 hover:text-orange-600 border border-gray-200 hover:border-orange-300 bg-gray-50 hover:bg-orange-50 px-3.5 py-2 rounded-full transition-all duration-200 text-sm"
            >
              <FiSearch size={15} />
              <span className="text-gray-400 font-medium">Search…</span>
            </button>

            {/* Login */}
            <Link
              to="/login"
              className="flex items-center gap-1.5 text-gray-700 hover:text-orange-600 transition text-sm font-medium"
            >
              <FiUser size={18} />
              Login
            </Link>

            {/* Cart */}
            <Link
              to="/cart"
              className="relative flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 shadow-sm hover:shadow-orange-200 hover:shadow-lg"
            >
              <FiShoppingCart size={17} />
              Cart
              {cartCount > 0 && (
                <span className="bg-white text-orange-600 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile: Search + Cart + Menu */}
          <div className="md:hidden flex items-center gap-3">
            <button onClick={() => setSearchOpen(true)} className="text-gray-600 hover:text-orange-600 transition">
              <FiSearch size={21} />
            </button>
            <Link to="/cart" className="relative text-gray-700">
              <FiShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100">
          <div className="px-4 pt-4 pb-6 space-y-1">

            <NavLink
              to="/"
              className="block text-gray-700 hover:text-orange-600 py-2.5 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>

            {/* Mobile Makhana section */}
            <div className="py-2">
              <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-2 px-0">Makhana</p>
              {MAKHANA_LINKS.map(link => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className="flex items-center gap-2 text-gray-600 hover:text-orange-600 py-2 pl-2 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  <span>{link.icon}</span>
                  {link.label}
                </NavLink>
              ))}
              <NavLink
                to="/gift-hampers"
                className="flex items-center gap-2 text-gray-600 hover:text-orange-600 py-2 pl-2 text-sm"
                onClick={() => setIsOpen(false)}
              >
                <span>🎁</span>
                Gift Hampers
              </NavLink>
            </div>

            <NavLink
              to="/products"
              className="block text-gray-700 hover:text-orange-600 py-2.5 font-medium border-t border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              All Products
            </NavLink>

            <NavLink
              to="/about"
              className="block text-gray-700 hover:text-orange-600 py-2.5 font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>

            <NavLink
              to="/why-us"
              className="block text-gray-700 hover:text-orange-600 py-2.5 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Why Us
            </NavLink>

            <NavLink
              to="/contact"
              className="block text-gray-700 hover:text-orange-600 py-2.5 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>

            <div className="pt-3 border-t border-gray-100 flex gap-3">
              <NavLink
                to="/login"
                className="flex-1 text-center border border-gray-200 hover:border-orange-400 text-gray-700 hover:text-orange-600 py-2.5 rounded-full font-medium text-sm transition"
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>
              <NavLink
                to="/cart"
                className="flex-1 text-center bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-full font-semibold text-sm transition"
                onClick={() => setIsOpen(false)}
              >
                Cart ({cartCount})
              </NavLink>
            </div>

          </div>
        </div>
      )}

      {/* Search Overlay */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </header>
  )
}

export default Navbar
