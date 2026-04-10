import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  FiCheckCircle, FiShield, FiChevronRight,
  FiCopy, FiCheck, FiSmartphone,
} from "react-icons/fi"
import { useDispatch, useSelector } from "react-redux"
import { selectCartItems, selectCartTotal, clearCart } from "../../store/cartSlice"
import AddressForm from "../../components/checkout/AddressForm"
import type { ShippingAddress } from "../../types/product"

type Step = "address" | "payment" | "success"
type PaymentMethod = "upi" | "razorpay" | "cod"

const SHIPPING_THRESHOLD = 499
const SHIPPING_COST = 49
const SNACKRITI_UPI_ID = "snackriti@paytm"

// ── Payment method logos (pure CSS / inline SVG, zero external deps) ──────────
const PaymentLogos = () => (
  <div className="flex items-center gap-2 flex-wrap mt-3">
    {/* UPI */}
    <span className="inline-flex items-center px-2 py-1 rounded-md border border-gray-200 bg-white gap-1">
      <span className="text-[10px] font-extrabold" style={{ color: "#097939" }}>U</span>
      <span className="text-[10px] font-extrabold" style={{ color: "#ED1C24" }}>P</span>
      <span className="text-[10px] font-extrabold" style={{ color: "#F7941D" }}>I</span>
    </span>
    {/* Razorpay */}
    <span className="inline-flex items-center px-2 py-1 rounded-md border border-gray-200 bg-white">
      <span className="text-[10px] font-bold" style={{ color: "#3395FF" }}>razorpay</span>
    </span>
    {/* PhonePe */}
    <span className="inline-flex items-center px-2 py-1 rounded-md border border-gray-200 bg-white">
      <span className="text-[10px] font-bold" style={{ color: "#5F259F" }}>PhonePe</span>
    </span>
    {/* Google Pay */}
    <span className="inline-flex items-center gap-0.5 px-2 py-1 rounded-md border border-gray-200 bg-white">
      <span className="text-[10px] font-bold" style={{ color: "#4285F4" }}>G</span>
      <span className="text-[10px] font-bold" style={{ color: "#EA4335" }}>o</span>
      <span className="text-[10px] font-bold" style={{ color: "#FBBC05" }}>o</span>
      <span className="text-[10px] font-bold" style={{ color: "#4285F4" }}>g</span>
      <span className="text-[10px] font-bold" style={{ color: "#34A853" }}>le</span>
      <span className="text-[10px] font-bold text-gray-500 ml-0.5">Pay</span>
    </span>
    {/* VISA */}
    <span className="inline-flex items-center px-2 py-1 rounded-md border border-gray-200 bg-white">
      <span className="text-[10px] font-black italic" style={{ color: "#1A1F71" }}>VISA</span>
    </span>
    {/* Mastercard */}
    <span className="inline-flex items-center gap-0.5 px-2 py-1 rounded-md border border-gray-200 bg-white">
      <span className="w-3 h-3 rounded-full bg-red-500 opacity-90 inline-block" />
      <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-90 -ml-1.5 inline-block" />
    </span>
    {/* Paytm */}
    <span className="inline-flex items-center px-2 py-1 rounded-md border border-gray-200 bg-white">
      <span className="text-[10px] font-bold" style={{ color: "#00BAF2" }}>Paytm</span>
    </span>
  </div>
)

// ── QR Code Section ────────────────────────────────────────────────────────────
const UpiQrSection = ({ amount, upiRef }: { amount: number; upiRef: string }) => {
  const [copied, setCopied] = useState(false)

  const upiDeepLink = `upi://pay?pa=${SNACKRITI_UPI_ID}&pn=Snackriti&am=${amount}&cu=INR&tn=Snackriti%20Order%20${upiRef}`
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiDeepLink)}&bgcolor=ffffff&color=1a1a1a&format=svg`

  const handleCopy = () => {
    navigator.clipboard.writeText(SNACKRITI_UPI_ID)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="mt-5 flex flex-col sm:flex-row gap-6 items-center sm:items-start p-5 bg-gradient-to-br from-violet-50 to-indigo-50 rounded-2xl border border-indigo-100">
      {/* QR Code */}
      <div className="flex-shrink-0 flex flex-col items-center gap-2">
        <div className="w-44 h-44 bg-white rounded-2xl shadow-md flex items-center justify-center border border-gray-100 overflow-hidden p-2">
          <img
            src={qrUrl}
            alt="UPI QR Code"
            className="w-full h-full object-contain"
            onError={e => {
              // Fallback if QR API is unavailable
              const target = e.currentTarget as HTMLImageElement
              target.style.display = "none"
              const parent = target.parentElement
              if (parent) {
                parent.innerHTML =
                  '<div class="text-center p-3"><div class="text-4xl mb-2">📱</div><p class="text-xs text-gray-500 font-medium">QR Code</p><p class="text-xs text-gray-400">Use UPI ID below</p></div>'
              }
            }}
          />
        </div>
        <p className="text-xs text-gray-500 text-center">Scan with any UPI app</p>
      </div>

      {/* UPI Details */}
      <div className="flex-1 flex flex-col gap-4 w-full">
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
            Pay to UPI ID
          </p>
          <div className="flex items-center gap-2 bg-white rounded-xl border border-gray-200 px-4 py-3">
            <span className="font-mono text-sm font-semibold text-gray-800 flex-1">
              {SNACKRITI_UPI_ID}
            </span>
            <button
              onClick={handleCopy}
              className={`flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-lg transition-all ${
                copied
                  ? "bg-green-100 text-green-600"
                  : "bg-gray-100 hover:bg-orange-100 text-gray-600 hover:text-orange-600"
              }`}
            >
              {copied ? <FiCheck size={13} /> : <FiCopy size={13} />}
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
            Amount to Pay
          </p>
          <div className="bg-white rounded-xl border border-gray-200 px-4 py-3">
            <span className="text-xl font-black text-orange-600">₹{amount}</span>
          </div>
        </div>

        {/* Supported apps */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Supported UPI Apps
          </p>
          <div className="flex gap-2 flex-wrap">
            {[
              { name: "GPay", color: "#4285F4" },
              { name: "PhonePe", color: "#5F259F" },
              { name: "Paytm", color: "#00BAF2" },
              { name: "BHIM", color: "#00438A" },
              { name: "Amazon Pay", color: "#FF9900" },
            ].map(app => (
              <span
                key={app.name}
                className="text-xs px-2.5 py-1 rounded-full font-semibold border"
                style={{ color: app.color, borderColor: `${app.color}40`, backgroundColor: `${app.color}10` }}
              >
                {app.name}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-start gap-2 text-xs text-gray-500 bg-white rounded-xl p-3 border border-gray-100">
          <FiSmartphone size={14} className="text-orange-500 flex-shrink-0 mt-0.5" />
          <p>
            Open any UPI app → Scan QR or enter UPI ID → Enter ₹{amount} → Complete payment →
            Click <strong>"I've completed the payment"</strong> below.
          </p>
        </div>
      </div>
    </div>
  )
}

// ── Main Checkout Page ─────────────────────────────────────────────────────────
const CheckoutPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const items = useSelector(selectCartItems)
  const subtotal = useSelector(selectCartTotal)
  const shipping = subtotal > 0 && subtotal < SHIPPING_THRESHOLD ? SHIPPING_COST : 0
  const total = subtotal + shipping

  const [step, setStep] = useState<Step>("address")
  const [address, setAddress] = useState<ShippingAddress | null>(null)
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("upi")
  const [placingOrder, setPlacingOrder] = useState(false)

  // Generate a short order ref for QR metadata
  const orderRef = `ORD${Date.now().toString().slice(-6)}`

  if (items.length === 0 && step !== "success") {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Your cart is empty</h2>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold transition-all"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  const handleAddressSubmit = (data: ShippingAddress) => {
    setAddress(data)
    setStep("payment")
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handlePlaceOrder = async () => {
    setPlacingOrder(true)
    // Razorpay SDK call would go here for non-UPI methods
    await new Promise(r => setTimeout(r, 1500))
    dispatch(clearCart())
    setStep("success")
    setPlacingOrder(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (step === "success") {
    return (
      <div className="max-w-lg mx-auto px-4 py-24 text-center">
        <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
          <FiCheckCircle size={52} className="text-green-500" />
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Order Placed!</h2>
        <p className="text-gray-500 mb-2">
          Thank you for your order. You'll receive a confirmation email shortly.
        </p>
        <p className="text-sm text-gray-400 mb-8">Order ID: <span className="font-mono font-semibold text-gray-600">{orderRef}</span></p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate("/")}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-sm hover:shadow-md"
          >
            Back to Home
          </button>
          <button
            onClick={() => navigate("/products")}
            className="border-2 border-orange-500 text-orange-500 hover:bg-orange-50 px-8 py-3 rounded-full font-semibold transition-all"
          >
            Shop More
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Checkout</h1>

      {/* Progress bar */}
      <div className="flex items-center gap-2 text-sm mb-10">
        <div className={`flex items-center gap-1.5 font-semibold ${step === "address" ? "text-orange-600" : "text-green-600"}`}>
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${step === "address" ? "bg-orange-500" : "bg-green-500"}`}>
            {step !== "address" ? "✓" : "1"}
          </span>
          Shipping
        </div>
        <div className={`flex-1 h-0.5 max-w-12 ${step === "payment" ? "bg-orange-400" : "bg-gray-200"}`} />
        <FiChevronRight size={14} className="text-gray-400" />
        <div className={`flex items-center gap-1.5 font-semibold ${step === "payment" ? "text-orange-600" : "text-gray-400"}`}>
          <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${step === "payment" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-500"}`}>
            2
          </span>
          Payment
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* ── Left Panel ── */}
        <div className="flex-1">
          {/* Step 1: Address */}
          {step === "address" && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Shipping Address</h2>
              <AddressForm onSubmit={handleAddressSubmit} />
            </div>
          )}

          {/* Step 2: Payment */}
          {step === "payment" && address && (
            <div className="space-y-5">
              {/* Confirmed address card */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <FiCheck size={11} className="text-white" />
                      </span>
                      <h3 className="font-bold text-gray-800">Delivering to</h3>
                    </div>
                    <p className="text-sm text-gray-700 font-medium">{address.fullName} · {address.phone}</p>
                    <p className="text-sm text-gray-500">
                      {address.addressLine1}{address.addressLine2 ? `, ${address.addressLine2}` : ""}
                    </p>
                    <p className="text-sm text-gray-500">
                      {address.city}, {address.state} – {address.pincode}
                    </p>
                  </div>
                  <button
                    onClick={() => setStep("address")}
                    className="text-sm text-orange-500 hover:underline font-medium flex-shrink-0 ml-4"
                  >
                    Change
                  </button>
                </div>
              </div>

              {/* Payment method selector */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-bold text-gray-800 text-lg mb-1">Payment Method</h3>
                <p className="text-xs text-gray-400 mb-5">All transactions are secured and encrypted</p>

                <div className="space-y-3">
                  {/* ── UPI / QR Code ── */}
                  <label
                    className={`flex items-start gap-4 p-4 border-2 rounded-2xl cursor-pointer transition-all ${
                      paymentMethod === "upi"
                        ? "border-violet-500 bg-violet-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="upi"
                      checked={paymentMethod === "upi"}
                      onChange={() => setPaymentMethod("upi")}
                      className="accent-violet-600 mt-0.5"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-gray-800 text-sm">UPI / QR Code</p>
                        <div className="flex items-center gap-1">
                          <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded border" style={{ color: "#097939", borderColor: "#09793940" }}>UPI</span>
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded border text-violet-600 border-violet-200">GPay</span>
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded border" style={{ color: "#00BAF2", borderColor: "#00BAF240" }}>Paytm</span>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Scan QR or pay via UPI ID — PhonePe, GPay, BHIM, Paytm & more
                      </p>
                      {paymentMethod === "upi" && (
                        <UpiQrSection amount={total} upiRef={orderRef} />
                      )}
                    </div>
                  </label>

                  {/* ── Razorpay (Cards / Net Banking / Wallets) ── */}
                  <label
                    className={`flex items-start gap-4 p-4 border-2 rounded-2xl cursor-pointer transition-all ${
                      paymentMethod === "razorpay"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="razorpay"
                      checked={paymentMethod === "razorpay"}
                      onChange={() => setPaymentMethod("razorpay")}
                      className="accent-blue-600 mt-0.5"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-semibold text-gray-800 text-sm">Cards / Net Banking / Wallets</p>
                        <span className="text-[10px] font-bold text-blue-600 border border-blue-200 bg-blue-50 px-1.5 py-0.5 rounded">razorpay</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Credit card, debit card, net banking, and digital wallets
                      </p>
                      {paymentMethod === "razorpay" && (
                        <div className="mt-3 p-4 bg-white rounded-xl border border-blue-100">
                          <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">
                            Accepted payment methods
                          </p>
                          <PaymentLogos />
                          <p className="text-xs text-gray-400 mt-3 flex items-center gap-1">
                            <FiShield size={11} />
                            You'll be redirected to Razorpay's secure payment gateway
                          </p>
                        </div>
                      )}
                    </div>
                  </label>

                  {/* ── Cash on Delivery ── */}
                  <label
                    className={`flex items-start gap-4 p-4 border-2 rounded-2xl cursor-pointer transition-all ${
                      paymentMethod === "cod"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={paymentMethod === "cod"}
                      onChange={() => setPaymentMethod("cod")}
                      className="accent-green-600 mt-0.5"
                    />
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">Cash on Delivery</p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Pay in cash when your order arrives at your doorstep
                      </p>
                      {paymentMethod === "cod" && (
                        <p className="text-xs text-amber-600 bg-amber-50 rounded-xl px-3 py-2 mt-3 border border-amber-100">
                          ⚠️ COD is available for orders up to ₹2,000. Extra ₹25 COD handling fee applies.
                        </p>
                      )}
                    </div>
                  </label>
                </div>

                {/* Place Order CTA */}
                <button
                  onClick={handlePlaceOrder}
                  disabled={placingOrder}
                  className="mt-6 w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-full font-bold
                    text-base transition-all shadow-sm hover:shadow-lg active:scale-[0.98]
                    disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {placingOrder ? (
                    <>
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Processing your order…
                    </>
                  ) : (
                    <>
                      <FiShield size={18} />
                      {paymentMethod === "upi" && `I've Paid ₹${total} — Confirm Order`}
                      {paymentMethod === "razorpay" && `Pay ₹${total} Securely`}
                      {paymentMethod === "cod" && `Place Order – ₹${total} (COD)`}
                    </>
                  )}
                </button>

                {/* Trust badges */}
                <div className="flex items-center justify-center gap-6 mt-5">
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <FiShield size={13} className="text-green-500" />
                    <span>256-bit SSL</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-green-400" />
                    <span>Secure Checkout</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-400">
                    <span>🔒</span>
                    <span>PCI-DSS Compliant</span>
                  </div>
                </div>

                {/* Payment logos row */}
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-400 text-center mb-3">We accept</p>
                  <div className="flex justify-center">
                    <PaymentLogos />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* ── Right: Order Summary ── */}
        <div className="lg:w-80 xl:w-96">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sticky top-24">
            <h3 className="font-bold text-gray-800 text-lg mb-5">Order Summary</h3>

            <div className="space-y-3 mb-5 max-h-64 overflow-y-auto pr-1">
              {items.map(item => {
                const price = item.product.discountedPrice ?? item.product.price
                return (
                  <div key={item.product.id} className="flex gap-3 items-center">
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0 border border-gray-100">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs text-gray-700 font-medium line-clamp-1">{item.product.name}</p>
                      <p className="text-xs text-gray-400">Qty: {item.quantity} × ₹{price}</p>
                    </div>
                    <span className="text-sm font-semibold text-gray-800 flex-shrink-0">
                      ₹{price * item.quantity}
                    </span>
                  </div>
                )
              })}
            </div>

            <div className="border-t border-dashed pt-4 space-y-2.5 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({items.reduce((s, i) => s + i.quantity, 0)} items)</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                {shipping === 0 ? (
                  <span className="text-green-600 font-semibold">FREE</span>
                ) : (
                  <span>₹{shipping}</span>
                )}
              </div>
              {paymentMethod === "cod" && (
                <div className="flex justify-between text-amber-600 text-xs">
                  <span>COD Handling Fee</span>
                  <span>₹25</span>
                </div>
              )}
              <div className="flex justify-between font-bold text-gray-800 text-base pt-2.5 border-t">
                <span>Total</span>
                <span className="text-orange-600">
                  ₹{paymentMethod === "cod" ? total + 25 : total}
                </span>
              </div>
            </div>

            {subtotal > 0 && subtotal < SHIPPING_THRESHOLD && (
              <p className="text-xs text-orange-600 bg-orange-50 rounded-xl px-3 py-2 mt-3 text-center">
                Add ₹{SHIPPING_THRESHOLD - subtotal} more for <strong>FREE shipping</strong>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
