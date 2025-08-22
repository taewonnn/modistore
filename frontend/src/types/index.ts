// 기본 타입들
export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  created_at: string;
  updated_at: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  category_id: string;
  images: string[];
  description?: string;
  stock: number;
  created_at: string;
  updated_at: string;
}

// API 응답 타입들
export interface ApiResponse<T> {
  data: T;
  message?: string;
  status?: number;
  error?: string;
}

export interface ApiError {
  error: string;
  status?: number;
}

// 장바구니 타입들
export interface CartItem {
  id: string;
  product_id: string;
  quantity: number;
  product: Product;
}

// 주문 타입들
export interface Order {
  id: string;
  user_id: string;
  items: CartItem[];
  total_amount: number;
  status: 'pending' | 'paid' | 'shipped' | 'delivered';
  created_at: string;
  updated_at: string;
}
