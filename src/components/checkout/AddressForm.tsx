import { useForm } from "react-hook-form"
import Input from "../ui/Input"
import type { ShippingAddress } from "../../types/product"

const INDIAN_STATES = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Jammu & Kashmir", "Ladakh",
]

interface Props {
  onSubmit: (data: ShippingAddress) => void
  defaultValues?: Partial<ShippingAddress>
  loading?: boolean
}

const AddressForm = ({ onSubmit, defaultValues, loading = false }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ShippingAddress>({ defaultValues })

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Full Name"
          id="fullName"
          placeholder="John Doe"
          error={errors.fullName}
          {...register("fullName", { required: "Full name is required" })}
        />
        <Input
          label="Phone Number"
          id="phone"
          placeholder="9876543210"
          error={errors.phone}
          {...register("phone", {
            required: "Phone number is required",
            pattern: { value: /^[6-9]\d{9}$/, message: "Enter a valid 10-digit mobile number" },
          })}
        />
      </div>

      <Input
        label="Email Address"
        id="email"
        type="email"
        placeholder="you@example.com"
        error={errors.email}
        {...register("email", {
          required: "Email is required",
          pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email address" },
        })}
      />

      <Input
        label="Address Line 1"
        id="addressLine1"
        placeholder="Flat/House no., Building, Street name"
        error={errors.addressLine1}
        {...register("addressLine1", { required: "Address is required" })}
      />

      <Input
        label="Address Line 2 (optional)"
        id="addressLine2"
        placeholder="Landmark, Area, Colony"
        {...register("addressLine2")}
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Input
          label="City"
          id="city"
          placeholder="Mumbai"
          error={errors.city}
          {...register("city", { required: "City is required" })}
        />

        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1.5">State</label>
          <select
            className={`w-full border rounded-xl px-4 py-3 text-sm text-gray-800 bg-white
              focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all
              ${errors.state ? "border-red-400" : "border-gray-200"}`}
            {...register("state", { required: "State is required" })}
          >
            <option value="">Select State</option>
            {INDIAN_STATES.map(s => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.state && <p className="mt-1 text-xs text-red-500">State is required</p>}
        </div>

        <Input
          label="Pincode"
          id="pincode"
          placeholder="400001"
          error={errors.pincode}
          {...register("pincode", {
            required: "Pincode is required",
            pattern: { value: /^\d{6}$/, message: "Enter a valid 6-digit pincode" },
          })}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold
          transition-all duration-200 shadow-sm hover:shadow-md mt-2 disabled:opacity-60 disabled:cursor-not-allowed
          flex items-center justify-center gap-2"
      >
        {loading && (
          <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        )}
        Continue to Payment
      </button>
    </form>
  )
}

export default AddressForm
