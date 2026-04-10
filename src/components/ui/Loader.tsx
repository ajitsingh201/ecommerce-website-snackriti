const Loader = ({ size = "md" }: { size?: "sm" | "md" | "lg" }) => {
  const sizes = { sm: "h-6 w-6", md: "h-10 w-10", lg: "h-16 w-16" }

  return (
    <div className="flex items-center justify-center py-16">
      <div className={`${sizes[size]} animate-spin rounded-full border-4 border-orange-100 border-t-orange-500`} />
    </div>
  )
}

export default Loader
