import { useNavigate } from "react-router-dom"
import { FiShoppingBag, FiArrowRight, FiShield } from "react-icons/fi"

interface Props {
  subtotal: number
  itemCount: number
  showCheckout?: boolean
}

const SHIPPING_THRESHOLD = 499
const SHIPPING_COST = 49

const CartSummary = ({ subtotal, itemCount, showCheckout = true }: Props) => {
  const navigate = useNavigate()
  const shipping = subtotal > 0 && subtotal < SHIPPING_THRESHOLD ? SHIPPING_COST : 0
  const total = subtotal + shipping

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
      <h3 className="font-bold text-gray-800 text-lg mb-5">Order Summary</h3>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between text-gray-600">
          <span>Subtotal ({itemCount} {itemCount === 1 ? "item" : "items"})</span>
          <span>₹{subtotal}</span>
        </div>
        <div className="flex justify-between text-gray-600">
          <span>Shipping</span>
          {shipping === 0 && subtotal > 0 ? (
            <span className="text-green-600 font-semibold">FREE</span>
          ) : shipping === 0 ? (
            <span className="text-gray-400">—</span>
          ) : (
            <span>₹{shipping}</span>
          )}
        </div>

        {subtotal > 0 && subtotal < SHIPPING_THRESHOLD && (
          <p className="text-xs text-orange-600 bg-orange-50 rounded-xl px-3 py-2">
            Add ₹{SHIPPING_THRESHOLD - subtotal} more for <strong>FREE shipping!</strong>
          </p>
        )}

        <div className="border-t border-dashed pt-3 flex justify-between font-bold text-gray-800 text-base">
          <span>Total</span>
          <span className="text-orange-600">₹{total}</span>
        </div>
      </div>

      {showCheckout && (
        <button
          onClick={() => navigate("/checkout")}
          disabled={itemCount === 0}
          className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
        >
          <FiShoppingBag size={16} />
          Proceed to Checkout
          <FiArrowRight size={15} />
        </button>
      )}

      <div className="flex items-center justify-center gap-1.5 mt-4 text-xs text-gray-400">
        <FiShield size={13} />
        <span>Secure checkout powered by Razorpay</span>
      </div>
    </div>
  )
}

export default CartSummary
