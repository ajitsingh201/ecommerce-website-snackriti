import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { FiMail, FiLock, FiLogIn } from "react-icons/fi"
import { FcGoogle } from "react-icons/fc"
import Input from "../../components/ui/Input"

interface LoginFormData {
  email: string
  password: string
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>()

  const onSubmit = async (data: LoginFormData) => {
    // Firebase / API auth here
    console.log("Login:", data)
    await new Promise(r => setTimeout(r, 800))
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-16 bg-gradient-to-br from-orange-50 via-white to-amber-50">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-8 sm:p-10">
          {/* Logo / heading */}
          <div className="text-center mb-8">
            <Link to="/">
              <img src="/images/logo.png" alt="Snackriti" className="h-12 mx-auto mb-4" />
            </Link>
            <h1 className="text-2xl font-bold text-gray-800">Welcome back</h1>
            <p className="text-gray-500 text-sm mt-1">Sign in to your Snackriti account</p>
          </div>

          {/* Google login placeholder */}
          <button className="w-full flex items-center justify-center gap-3 py-3 border-2 border-gray-200 rounded-xl
            hover:border-gray-300 hover:bg-gray-50 transition-all text-sm font-semibold text-gray-700 mb-6">
            <FcGoogle size={20} />
            Continue with Google
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 font-medium">OR</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Email / password form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
            <div>
              <Input
                label="Password"
                id="password"
                type="password"
                placeholder="••••••••"
                icon={<FiLock size={16} />}
                error={errors.password}
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
                })}
              />
              <div className="flex justify-end mt-1.5">
                <button type="button" className="text-xs text-orange-500 hover:underline font-medium">
                  Forgot password?
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3.5 rounded-full font-semibold
                flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow-md
                mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
              ) : (
                <FiLogIn size={18} />
              )}
              {isSubmitting ? "Signing in…" : "Sign In"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            Don't have an account?{" "}
            <Link to="/signup" className="text-orange-500 hover:underline font-semibold">
              Sign up free
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
