import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainLayout from "../components/layout/MainLayout"

// Home
import HomePage from "../pages/Home/HomePage"

// Shop
import AllProductsPage from "../pages/Shop/AllProductsPage"
import CategoryPage from "../pages/Shop/CategoryPage"
import ProductPage from "../pages/Shop/ProductPage"

// Cart & Checkout
import CartPage from "../pages/Cart/CartPage"
import CheckoutPage from "../pages/Checkout/CheckoutPage"

// Auth
import LoginPage from "../pages/Auth/LoginPage"
import SignupPage from "../pages/Auth/SignupPage"

// Company
import AboutPage from "../pages/Company/AboutPage"
import WhyUsPage from "../pages/Company/WhyUsPage"
import ContactPage from "../pages/Company/ContactPage"

// Policies
import PrivacyPolicy from "../pages/Policies/PrivacyPolicy"
import RefundPolicy from "../pages/Policies/RefundPolicy"
import ShippingPolicy from "../pages/Policies/ShippingPolicy"
import TermsPage from "../pages/Policies/TermsPage"

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        {/* Core */}
        <Route path="/" element={<HomePage />} />

        {/* Shop */}
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/product/:slug" element={<ProductPage />} />

        {/* Cart & Checkout */}
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />

        {/* Auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Company */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/why-us" element={<WhyUsPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* Policies */}
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/refund" element={<RefundPolicy />} />
        <Route path="/shipping" element={<ShippingPolicy />} />
        <Route path="/terms" element={<TermsPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)

export default AppRoutes
