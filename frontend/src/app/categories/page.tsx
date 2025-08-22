import { CategoryList } from '@/components/CategoryList';

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        카테고리 목록
      </h1>
      <CategoryList />
    </div>
  );
}
