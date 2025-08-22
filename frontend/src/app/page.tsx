import { categories } from '@/data/categories'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* 히어로 섹션 */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            최신 패션 트렌드를 만나보세요
          </h1>
          <p className="text-xl mb-8 text-blue-100">
            모디스토어에서 당신만의 스타일을 완성하세요
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            쇼핑 시작하기
          </button>
        </div>
      </section>

      {/* 카테고리 섹션 */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">카테고리</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {categories.map((category) => (
              <a
                key={category.id}
                href={category.href}
                className={`${category.color} p-6 rounded-lg text-center hover:shadow-lg transition-shadow`}
              >
                <h3 className="text-lg font-semibold text-black">{category.name}</h3>
                
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 인기 상품 섹션 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">인기 상품</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-64 bg-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-semibold mb-2">상품명 {item}</h3>
                  <p className="text-gray-600 text-sm mb-2">브랜드명</p>
                  <p className="font-bold text-lg">₩29,000</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  )
}
