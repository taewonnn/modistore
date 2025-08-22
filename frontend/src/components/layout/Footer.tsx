import Link from 'next/link'
import { Share, Heart, MessageCircle, Play } from 'lucide-react'
import { categories } from '@/data/categories'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* 메인 푸터 */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-lg font-bold mb-4">모디스토어</h3>
            <p className="text-gray-400 text-sm mb-4">
              최신 패션 트렌드를 만나보세요.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white">
                <Share className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Heart className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <MessageCircle className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white">
                <Play className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* 쇼핑 */}
          <div>
            <h3 className="text-lg font-bold mb-4">쇼핑</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link href={category.href} className="hover:text-white">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 고객 서비스 */}
          <div>
            <h3 className="text-lg font-bold mb-4">고객 서비스</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/my/orders" className="hover:text-white">
                  주문 조회
                </Link>
              </li>
              <li>
                <Link href="/my/profile" className="hover:text-white">
                  마이페이지
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-white">
                  장바구니
                </Link>
              </li>
              <li>
                <Link href="/wishlist" className="hover:text-white">
                  위시리스트
                </Link>
              </li>
              <li>
                <Link href="/brands" className="hover:text-white">
                  브랜드
                </Link>
              </li>
            </ul>
          </div>

          {/* 회사 정보 */}
          <div>
            <h3 className="text-lg font-bold mb-4">회사 정보</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  회사 소개
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  이용약관
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  고객센터
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  채용 정보
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* 하단 푸터 */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              <p>© 2024 모디스토어. All rights reserved.</p>
              <p className="mt-1">
                사업자등록번호: 123-45-67890 | 대표: tw | 
                주소: 서울특별시 강남구 테헤란로 123
              </p>
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="#" className="hover:text-white">
                이용약관
              </Link>
              <Link href="#" className="hover:text-white">
                개인정보처리방침
              </Link>
              <Link href="#" className="hover:text-white">
                쿠키 정책
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
