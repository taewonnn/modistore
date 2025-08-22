'use client';

import { useCategories } from '@/hooks/useApi';

export function CategoryList() {
  // React Query 훅 사용
  const { data: categories, isLoading, error } = useCategories();

  // 로딩 상태
  if (isLoading) {
    return (
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-2">카테고리를 불러오는 중...</span>
      </div>
    );
  }

  // 에러 상태
  if (error) {
    return (
      <div className="flex justify-center items-center p-8 text-red-600">
        <span>에러: {error.message}</span>
      </div>
    );
  }

  // 데이터가 없을 때
  if (!categories || categories.length === 0) {
    return (
      <div className="flex justify-center items-center p-8 text-gray-500">
        <span>카테고리가 없습니다.</span>
      </div>
    );
  }

  // 카테고리 목록 렌더링
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {categories.map((category) => (
        <div
          key={category.id}
          className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer"
        >
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {category.name}
          </h3>
          {category.description && (
            <p className="text-gray-600 text-sm mb-3">
              {category.description}
            </p>
          )}
          <div className="flex justify-between items-center">
            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
              {category.slug}
            </span>
            <span className="text-xs text-gray-400">
              {new Date(category.created_at).toLocaleDateString()}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
