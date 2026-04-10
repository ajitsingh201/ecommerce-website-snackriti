import type { ReactNode } from "react"

type Variant = "orange" | "green" | "red" | "gray" | "blue"

interface Props {
  children: ReactNode
  variant?: Variant
  className?: string
}

const variants: Record<Variant, string> = {
  orange: "bg-orange-100 text-orange-600",
  green: "bg-green-100 text-green-600",
  red: "bg-red-100 text-red-600",
  gray: "bg-gray-100 text-gray-600",
  blue: "bg-blue-100 text-blue-600",
}

const Badge = ({ children, variant = "orange", className = "" }: Props) => (
  <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full ${variants[variant]} ${className}`}>
    {children}
  </span>
)

export default Badge
