import type { InputHTMLAttributes, ReactNode } from "react"
import type { FieldError } from "react-hook-form"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: FieldError | string
  icon?: ReactNode
}

const Input = ({ label, error, icon, className = "", id, ...rest }: Props) => {
  const errorMsg = typeof error === "string" ? error : error?.message

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1.5">
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
            {icon}
          </span>
        )}
        <input
          id={id}
          className={`w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800
            focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent
            placeholder:text-gray-400 transition-all
            ${icon ? "pl-10" : ""}
            ${errorMsg ? "border-red-400 focus:ring-red-400" : ""}
            ${className}`}
          {...rest}
        />
      </div>
      {errorMsg && <p className="mt-1 text-xs text-red-500">{errorMsg}</p>}
    </div>
  )
}

export default Input
