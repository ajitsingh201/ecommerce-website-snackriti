import { useState } from "react"

interface Props {
  images: string[]
  name: string
}

const ProductGallery = ({ images, name }: Props) => {
  const [selected, setSelected] = useState(0)

  return (
    <div className="flex flex-col gap-4">
      {/* Main image */}
      <div className="relative overflow-hidden rounded-2xl bg-gray-50 aspect-square border border-gray-100">
        <img
          src={images[selected]}
          alt={name}
          className="w-full h-full object-cover transition-all duration-500"
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-3 overflow-x-auto pb-1">
          {images.map((img, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                selected === i
                  ? "border-orange-500 shadow-md scale-105"
                  : "border-gray-200 hover:border-orange-300"
              }`}
            >
              <img src={img} alt={`${name} ${i + 1}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductGallery
