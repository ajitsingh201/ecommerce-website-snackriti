import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { FiMail, FiLock, FiUser, FiPhone, FiUserPlus } from "react-icons/fi"
import { FcGoogle } from "react-icons/fc"
import Input from "../../components/ui/Input"

interface SignupFormData {
  name: string
  phone: string
  email: string
  password: string
  confirmPassword: string
}

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<SignupFormData>()

  const password = watch("password")

  const onSubmit = async (data: SignupFormData) => {
    // Firebase / API auth here
    console.log("Signup:", data)
    await new Promise(r => setTimeout(r, 800))
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-16 bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 sm:p-10">
          {/* Heading */}
          <div className="text-center mb-8">
            <Link to="/">
              <img src="/images/logo.png" alt="Snackriti" className="h-12 mx-auto mb-4" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">Create your account</h1>
            <p className="text-gray-500 text-sm mt-1">Join Snackriti and start shopping</p>
          </div>

          {/* Google placeholder */}
          <button className="w-full flex items-center justify-center gap-3 py-3 border-2 border-gray-200 rounded-xl
            hover:border-gray-300 hover:bg-gray-50 transition-all text-sm font-semibold text-gray-700 mb-6">
            <FcGoogle size={20} />
            Sign up with Google
          </button>

          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 font-medium">OR</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <Input
              label="Full Name"
              id="name"
              placeholder="John Doe"
              icon={<FiUser size={16} />}
              error={errors.name}
              {...register("name", { required: "Name is required" })}
            />
            <Input
              label="Phone Number"
              id="phone"
              placeholder="9876543210"
              icon={<FiPhone size={16} />}
              error={errors.phone}
              {...register("phone", {
                required: "Phone is required",
                pattern: { value: /^[6-9]\d{9}$/, message: "Enter a valid 10-digit number" },
              })}
            />
            <Input
              label="Email Address"
              id="email"
              type="email"
              placeholder="you@example.com"
              icon={<FiMail size={16} />}
              error={errors.email}
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+\.\S+$/, message: "Enter a valid email" },
              })}
            />
            <Input
              label="Password"
              id="password"
              type="password"
              placeholder="Create a strong password"
              icon={<FiLock size={16} />}
              error={errors.password}
              {...register("password", {
                required: "Password is required",
                minLength: { value: 8, message: "At least 8 characters required" },
              })}
            />
            <Input
              label="Confirm Password"
              id="confirmPassword"
              type="password"
              placeholder="Re-enter your password"
              icon={<FiLock size={16} />}
              error={errors.confirmPassword}
              {...register("confirmPassword", {
                required: "Please confirm your password",
                validate: v => v === password || "Passwords do not match",
              })}
            />

            <p className="text-xs text-gray-400">
              By signing up, you agree to our{" "}
              <Link to="/terms" className="text-orange-500 hover:underline">Terms</Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-orange-500 hover:underline">Privacy Policy</Link>.
            </p>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3.5 rounded-full font-semibold
                flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md
                disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              ) : (
                <FiUserPlus size={18} />
              )}
              {isSubmitting ? "Creating account…" : "Create Account"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Already have an account?{" "}
            <Link to="/login" className="text-orange-500 hover:underline font-semibold">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default SignupPage
