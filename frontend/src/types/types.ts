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

