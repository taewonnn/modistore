# 모디스토어 (ModiStore)

모디스토어 - Next.js + Node.js + Supabase


## 🛠️ 기술 스택

### Frontend
- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS 4**
- **Lucide React** (아이콘)

### Backend
- **Node.js**
- **Express.js**
- **Supabase** (PostgreSQL)
- **TypeScript**

### 공통
- **TypeScript** (타입 공유)
- **ESLint** (코드 품질)


## 🏗️ 프로젝트 구조

```
modistore/
├── frontend/          → Next.js 15 (App Router)
│   ├── src/
│   │   ├── app/       → 페이지 라우팅
│   │   ├── components/ → UI 컴포넌트
│   │   └── data/      → 정적 데이터
│   └── package.json
├── backend/           → Node.js Express API
│   ├── server.js      → 메인 서버
│   ├── routes/        → API 라우트
│   └── package.json
└── shared/            → 공통 코드
    └── types/         → TypeScript 타입 정의
```



## 📁 주요 기능

- [x] 반응형 레이아웃 (Header, Footer)
- [x] 카테고리별 상품 목록
- [x] 상품 상세 페이지
- [ ] 장바구니 시스템
- [ ] 사용자 인증
- [ ] 주문 시스템
- [ ] 검색 기능
- [ ] 마이페이지

## 🎯 포트폴리오 하이라이트

- **Monorepo 구조**: 프론트엔드 + 백엔드 통합 관리
- **타입 안정성**: TypeScript로 타입 공유
- **실시간 기능**: Supabase 실시간 데이터베이스
- **반응형 디자인**: 모바일 우선 디자인
- **성능 최적화**: Next.js App Router 활용

