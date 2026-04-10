import { Link } from "react-router-dom"
import { FiShoppingBag, FiTrash2, FiArrowLeft } from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { selectCartItems, selectCartTotal, clearCart } from "../../store/cartSlice"
import CartItem from "../../components/cart/CartItem"
import CartSummary from "../../components/cart/CartSummary"

const CartPage = () => {
  const dispatch = useDispatch()
  const items = useSelector(selectCartItems)
  const subtotal = useSelector(selectCartTotal)
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="w-24 h-24 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-6">
          <FiShoppingBag size={40} className="text-orange-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Your cart is empty</h2>
        <p className="text-gray-500 mb-8">
          Looks like you haven't added anything yet. Start shopping!
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white
            px-8 py-3.5 rounded-full font-semibold transition-all shadow-sm hover:shadow-md"
        >
          <FiShoppingBag size={18} />
          Start Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Shopping Cart</h1>
          <p className="text-gray-500 text-sm mt-1">
            {itemCount} {itemCount === 1 ? "item" : "items"} in your cart
          </p>
        </div>
        <button
          onClick={() => dispatch(clearCart())}
          className="flex items-center gap-2 text-sm text-red-400 hover:text-red-600 transition-colors font-medium"
        >
          <FiTrash2 size={15} />
          Clear cart
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Cart Items */}
        <div className="flex-1">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            {items.map(item => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 mt-6 text-sm text-gray-500 hover:text-orange-600 transition-colors font-medium"
          >
            <FiArrowLeft size={15} />
            Continue shopping
          </Link>
        </div>

        {/* Order Summary */}
        <div className="lg:w-80 xl:w-96">
          <CartSummary subtotal={subtotal} itemCount={itemCount} />
        </div>
      </div>
    </div>
  )
}

export default CartPage
