
interface Category {
  name: string
  image: string
}

const categories: Category[] = [
  {
    name: "Paan Corner",
    image: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
  },
  {
    name: "Dairy, Bread & Eggs",
    image: "https://cdn-icons-png.flaticon.com/512/3082/3082011.png",
  },
  {
    name: "Fruits & Vegetables",
    image: "https://cdn-icons-png.flaticon.com/512/2153/2153788.png",
  },
  {
    name: "Cold Drinks & Juices",
    image: "https://cdn-icons-png.flaticon.com/512/2405/2405479.png",
  },
  {
    name: "Snacks & Munchies",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046784.png",
  },
  {
    name: "Breakfast & Instant Food",
    image: "https://cdn-icons-png.flaticon.com/512/3075/3075977.png",
  },
  {
    name: "Sweet Tooth",
    image: "https://cdn-icons-png.flaticon.com/512/3081/3081559.png",
  },
  {
    name: "Bakery & Biscuits",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046759.png",
  },
  {
    name: "Tea, Coffee & Milk Drinks",
    image: "https://cdn-icons-png.flaticon.com/512/2935/2935307.png",
  },
  {
    name: "Atta, Rice & Dal",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046786.png",
  },
  {
    name: "Masala, Oil & More",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046769.png",
  },
  {
    name: "Sauces & Spreads",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046776.png",
  },
  {
    name: "Chicken, Meat & Fish",
    image: "https://cdn-icons-png.flaticon.com/512/1046/1046775.png",
  },
  {
    name: "Organic & Healthy Living",
    image: "https://cdn-icons-png.flaticon.com/512/2909/2909767.png",
  },
  {
    name: "Baby Care",
    image: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
  },
  {
    name: "Pharma & Wellness",
    image: "https://cdn-icons-png.flaticon.com/512/2966/2966481.png",
  },
  {
    name: "Cleaning Essentials",
    image: "https://cdn-icons-png.flaticon.com/512/2920/2920262.png",
  },
  {
    name: "Home & Office",
    image: "https://cdn-icons-png.flaticon.com/512/1946/1946488.png",
  },
  {
    name: "Personal Care",
    image: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",
  },
  {
    name: "Pet Care",
    image: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  },
]

const AllCategorySection = () => {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-10">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div
          className="
          grid
          grid-cols-3
          sm:grid-cols-4
          md:grid-cols-6
          lg:grid-cols-8
          xl:grid-cols-10
          gap-6
          "
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="
              flex
              flex-col
              items-center
              text-center
              group
              cursor-pointer
              "
            >

              {/* Image Box */}
              <div
                className="
                w-20
                h-20
                bg-white
                rounded-xl
                flex
                items-center
                justify-center
                shadow-sm
                transition
                duration-300
                group-hover:shadow-md
                group-hover:scale-105
                "
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-12 h-12 object-contain"
                />
              </div>

              {/* Category Name */}
              <p
                className="
                mt-2
                text-xs
                sm:text-sm
                font-medium
                text-gray-700
                "
              >
                {category.name}
              </p>

            </div>
          ))}
        </div>

      </div>

    </section>
  )
}

export default AllCategorySection