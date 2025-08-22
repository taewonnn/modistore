export default function ShoesProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">신발</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-64 bg-gray-200"></div>
            <div className="p-4">
              <h3 className="font-semibold mb-2">신발 상품 {item}</h3>
              <p className="text-gray-600 text-sm mb-2">브랜드명</p>
              <p className="font-bold text-lg">₩89,000</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
