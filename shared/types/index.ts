export interface Product {
  id: string
  name: string
  brand: string
  price: number
  categoryId: string
  images: string[]
  description?: string
  stock: number
  createdAt: string
  updatedAt: string
}

export interface Category {
  id: string
  name: string
  href: string
  color: string
  description?: string
}

export interface User {
  id: string
  email: string
  name: string
  createdAt: string
}

export interface CartItem {
  id: string
  productId: string
  quantity: number
  product: Product
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  totalAmount: number
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  shippingAddress: string
  createdAt: string
}
