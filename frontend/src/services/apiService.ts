import { Category } from '@/data/categories';
import { api, ApiResponse } from '@/lib/api';
import { Product } from '@/types/types';

// 카테고리 관련 API
export const categoryApi = {
  // 모든 카테고리 조회
  getAll: (): Promise<ApiResponse<Category[]>> => {
    return api.get<ApiResponse<Category[]>>('/api/categories');
  },

 
};

// 상품 관련 API
export const productApi = {
  // 모든 상품 조회
  getAll: (categoryId?: string): Promise<ApiResponse<Product[]>> => {
    const params = categoryId ? { category: categoryId } : undefined;
    return api.get<ApiResponse<Product[]>>('/api/products', params);
  },

  
};
