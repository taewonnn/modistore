export interface Category {
  id: string
  name: string
  href: string
  color: string
  description?: string
}

export const categories: Category[] = [
  {
    id: 'top',
    name: '상의',
    href: '/products/top',
    color: 'bg-red-100',
    description: '티셔츠, 셔츠, 니트 등'
  },
  {
    id: 'bottom',
    name: '하의',
    href: '/products/bottom',
    color: 'bg-blue-100',
    description: '청바지, 슬랙스, 반바지 등'
  },
  {
    id: 'shoes',
    name: '신발',
    href: '/products/shoes',
    color: 'bg-green-100',
    description: '스니커즈, 구두, 샌들 등'
  },
  {
    id: 'bag',
    name: '가방',
    href: '/products/bag',
    color: 'bg-yellow-100',
    description: '백팩, 토트백, 크로스백 등'
  },
  {
    id: 'acc',
    name: '액세서리',
    href: '/products/acc',
    color: 'bg-purple-100',
    description: '모자, 벨트, 주얼리 등'
  }
]

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id)
}

export const getCategoryByHref = (href: string): Category | undefined => {
  return categories.find(category => category.href === href)
}
