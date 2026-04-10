const Newsletter = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 
                        py-12 sm:py-16 md:py-20 text-center">

      <h2 className="text-2xl sm:text-3xl md:text-4xl 
                     font-bold mb-6">
        Subscribe for Exclusive Offers
      </h2>

      <p className="text-gray-600 mb-8 text-sm sm:text-base">
        Get updates about new products and special discounts.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-3 border rounded-md 
                     w-full sm:w-80"
        />
        <button className="bg-orange-600 text-white 
                           px-6 py-3 rounded-md 
                           hover:bg-orange-700 transition">
          Subscribe
        </button>
      </div>
    </section>
  )
}

export default Newsletter