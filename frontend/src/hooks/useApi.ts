import { useQuery } from '@tanstack/react-query';
import { categoryApi } from '@/services/apiService';



// 카테고리 훅
export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await categoryApi.getAll();
      return response.data;
    },
  });
}

