'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ShoppingBag, Heart, User, Menu, X } from 'lucide-react';
import { categories } from '@/data/categories';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 bg-white border-b border-gray-200'>
      {/* 상단 헤더 */}
      <div className='bg-gray-900 text-white py-2'>
        <div className='container mx-auto px-4'>
          <div className='flex items-center justify-between text-sm'>
            <div className='flex items-center gap-6'>
              <Link href='/brands' className='hover:text-gray-300'>
                브랜드
              </Link>
              <Link href='/events' className='hover:text-gray-300'>
                이벤트
              </Link>
            </div>
            <div className='flex items-center gap-6'>
              <Link href='/my' className='hover:text-gray-300'>
                마이페이지
              </Link>
              <Link href='/my/orders' className='hover:text-gray-300'>
                주문조회
              </Link>
              <Link href='/login' className='hover:text-gray-300'>
                로그인
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 메인 헤더 */}
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          {/* 로고 */}
          <Link href='/' className='text-2xl font-bold text-gray-900'>
            모디스토어
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className='hidden lg:flex items-center gap-8'>
            {categories.map(category => (
              <Link key={category.id} href={category.href} className='text-gray-700 hover:text-gray-900 font-medium'>
                {category.name}
              </Link>
            ))}
          </nav>

          {/* 검색바 */}
          <div className='hidden md:flex flex-1 max-w-md mx-8'>
            <div className='relative w-full'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
              <input
                type='text'
                placeholder='검색어를 입력하세요'
                className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
            </div>
          </div>

          {/* 우측 아이콘들 */}
          <div className='flex items-center gap-4'>
            {/* 모바일 검색 버튼 */}
            <button onClick={() => setIsSearchOpen(!isSearchOpen)} className='md:hidden p-2 hover:bg-gray-100 rounded-lg'>
              <Search className='w-5 h-5' />
            </button>

            {/* 위시리스트 */}
            <Link href='/wishlist' className='p-2 hover:bg-gray-100 rounded-lg relative'>
              <Heart className='w-5 h-5' />
              <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>
                0
              </span>
            </Link>

            {/* 장바구니 */}
            <Link href='/cart' className='p-2 hover:bg-gray-100 rounded-lg relative'>
              <ShoppingBag className='w-5 h-5' />
              <span className='absolute -top-1 -right-1 bg-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center'>
                0
              </span>
            </Link>

            {/* 사용자 메뉴 */}
            <Link href='/my' className='p-2 hover:bg-gray-100 rounded-lg'>
              <User className='w-5 h-5' />
            </Link>

            {/* 모바일 메뉴 버튼 */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='lg:hidden p-2 hover:bg-gray-100 rounded-lg'>
              {isMenuOpen ? <X className='w-5 h-5' /> : <Menu className='w-5 h-5' />}
            </button>
          </div>
        </div>

        {/* 모바일 검색바 */}
        {isSearchOpen && (
          <div className='md:hidden mt-4'>
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
              <input
                type='text'
                placeholder='검색어를 입력하세요'
                className='w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
              />
            </div>
          </div>
        )}
      </div>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className='lg:hidden border-t border-gray-200 bg-white'>
          <nav className='container mx-auto px-4 py-4'>
            <div className='flex flex-col gap-4'>
              {categories.map(category => (
                <Link
                  key={category.id}
                  href={category.href}
                  className='text-gray-700 hover:text-gray-900 font-medium py-2'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
