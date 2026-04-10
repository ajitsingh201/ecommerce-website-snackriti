import { useDispatch } from "react-redux"
import { FiTrash2, FiMinus, FiPlus } from "react-icons/fi"
import { removeFromCart, updateQuantity } from "../../store/cartSlice"
import type { CartItem as CartItemType } from "../../types/product"

const CartItem = ({ item }: { item: CartItemType }) => {
  const dispatch = useDispatch()
  const price = item.product.discountedPrice ?? item.product.price

  return (
    <div className="flex gap-4 py-5 border-b border-gray-100 last:border-0">
      {/* Thumbnail */}
      <div className="w-20 h-20 flex-shrink-0 rounded-xl overflow-hidden bg-gray-50 border border-gray-100">
        <img
          src={item.product.images[0]}
          alt={item.product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-semibold text-orange-500 uppercase tracking-wide">
          {item.product.category}
        </p>
        <h4 className="font-semibold text-gray-800 text-sm line-clamp-2 leading-snug mt-0.5">
          {item.product.name}
        </h4>
        <p className="text-xs text-gray-400 mt-0.5">{item.product.packaging}</p>

        <div className="flex items-center justify-between mt-3">
          {/* Quantity controls */}
          <div className="flex items-center gap-1 bg-gray-50 border border-gray-200 rounded-full px-2 py-1">
            <button
              onClick={() =>
                dispatch(updateQuantity({ id: item.product.id, quantity: item.quantity - 1 }))
              }
              className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-orange-500 transition-colors"
            >
              <FiMinus size={12} />
            </button>
            <span className="text-sm font-bold text-gray-800 w-6 text-center">{item.quantity}</span>
            <button
              onClick={() =>
                dispatch(updateQuantity({ id: item.product.id, quantity: item.quantity + 1 }))
              }
              className="w-6 h-6 flex items-center justify-center text-gray-500 hover:text-orange-500 transition-colors"
            >
              <FiPlus size={12} />
            </button>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-bold text-gray-800">₹{price * item.quantity}</span>
            <button
              onClick={() => dispatch(removeFromCart(item.product.id))}
              className="text-gray-300 hover:text-red-500 transition-colors"
              title="Remove item"
            >
              <FiTrash2 size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
