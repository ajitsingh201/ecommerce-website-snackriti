export interface Product {
  id: string
  name: string
  slug: string
  price: number
  discountedPrice?: number
  category: string
  categorySlug: string
  packaging: string
  images: string[]
  description: string
  highlights?: string[]
  ingredients?: string
  keywords: string[]
  rating: number
  reviewCount: number
  inStock: boolean
  featured?: boolean
  newArrival?: boolean
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface ShippingAddress {
  fullName: string
  phone: string
  email: string
  addressLine1: string
  addressLine2: string
  city: string
  state: string
  pincode: string
}

export interface Category {
  name: string
  slug: string
  image: string
  description: string
}
