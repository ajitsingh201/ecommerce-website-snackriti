import { FiPackage, FiShield, FiSmile } from "react-icons/fi"

const WhySnackriti = () => {
  const features = [
    {
      icon: <FiPackage size={40} />,
      title: "Diverse Product Range",
      description:
        "Snackriti offers a multi-category portfolio including snacks, dry fruits, beauty, cosmetic, and lifestyle products - making it a convenient destination for everyday essentials and indulgences.",
    },
    {
      icon: <FiShield size={40} />,
      title: "Quality Assured Selection",
      description:
        "Across every category, products are carefully sourced and curated to maintain high standards of freshness, safety, and performance for customer satisfaction.",
    },
    {
      icon: <FiSmile size={40} />,
      title: "Customer-Centric Experience",
      description:
        "From seamless browsing to reliable delivery, Snackriti focuses on providing a smooth shopping journey supported by responsive service and dependable fulfillment.",
    },
  ]

  return (
    <section className="bg-gradient-to-b from-orange-50 to-white 
                        py-16 sm:py-20 md:py-24">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        <h2 className="text-2xl sm:text-3xl md:text-4xl 
                       font-bold mb-12">
          Why Snackriti?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">

          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 
                         shadow-md hover:shadow-2xl 
                         transition duration-500 
                         transform hover:-translate-y-3"
            >

              {/* Icon */}
              <div className="flex justify-center mb-6 
                              text-orange-600 
                              transition duration-500 
                              group-hover:scale-110">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  )
}

export default WhySnackriti