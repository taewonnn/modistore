import { useQuery } from '@tanstack/react-query';
import { productApi } from '@/services/apiService';

// 상품 가져오기 훅
export function useProducts() {
  return useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await productApi.getAll();
      return response.data;
    },
  });
}
