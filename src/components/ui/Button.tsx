import type { ButtonHTMLAttributes } from "react"

type Variant = "primary" | "secondary" | "outline" | "ghost"
type Size = "sm" | "md" | "lg"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  fullWidth?: boolean
  loading?: boolean
}

const variantStyles: Record<Variant, string> = {
  primary: "bg-orange-500 hover:bg-orange-600 text-white shadow-sm hover:shadow-md",
  secondary: "bg-gray-800 hover:bg-gray-900 text-white",
  outline: "border-2 border-orange-500 text-orange-500 hover:bg-orange-50",
  ghost: "text-orange-500 hover:bg-orange-50",
}

const sizeStyles: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-base",
}

const Button = ({
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  children,
  className = "",
  disabled,
  ...rest
}: Props) => (
  <button
    className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold
      transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
      ${variantStyles[variant]} ${sizeStyles[size]} ${fullWidth ? "w-full" : ""} ${className}`}
    disabled={disabled || loading}
    {...rest}
  >
    {loading && (
      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
      </svg>
    )}
    {children}
  </button>
)

export default Button
