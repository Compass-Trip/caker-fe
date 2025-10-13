// 리뷰 데이터 타입 정의
export interface ReviewData {
  id: number;
  userName: string;
  rating: number;
  date: string;
  images: string[];
  orderDetails: {
    pickup: string;
    size: string;
    flavor: string;
  };
  reviewText: string;
  isExpanded: boolean;
}
export interface CategoryRating {
  category: string;
  percentage: number;
  description: string;
}

export const mockReviews: ReviewData[] = [
  {
    id: 1,
    userName: '케이크 킬러',
    rating: 5.0,
    date: '2025.09.12',
    images: [
      '/api/placeholder/200/200',
      '/api/placeholder/200/200',
      '/api/placeholder/200/200',
    ],
    orderDetails: {
      pickup: '9.16(화) 12:30',
      size: '1호(15cm) (+27,000원)',
      flavor: '초코 시트(+2,000원), 오레오 필링(+2,000원)',
    },
    reviewText:
      'review txt review txt review txt review txt review txt review txt review txt review txt review txt review txt review txt review txt review txt review tx review',
    isExpanded: false,
  },
  {
    id: 2,
    userName: '케이크 킬러',
    rating: 5.0,
    date: '2025.09.12',
    images: [
      '/api/placeholder/200/200',
      '/api/placeholder/200/200',
      '/api/placeholder/200/200',
    ],
    orderDetails: {
      pickup: '9.16(화) 12:30',
      size: '1호(15cm) (+27,000원)',
      flavor: '초코 시트(+2,000원), 오레오 필링(+2,000원)',
    },
    reviewText:
      'review txt review txt review txt review txt review txt review txt review txt review txt review txt review txt review txt review txt review txt review tx review',
    isExpanded: false,
  },
  {
    id: 3,
    userName: '케이크 킬러',
    rating: 5.0,
    date: '2025.09.12',
    images: [
      '/api/placeholder/200/200',
      '/api/placeholder/200/200',
      '/api/placeholder/200/200',
    ],
    orderDetails: {
      pickup: '9.16(화) 12:30',
      size: '1호(15cm) (+27,000원)',
      flavor: '초코 시트(+2,000원), 오레오 필링(+2,000원)',
    },
    reviewText:
      'review txt review txt review txt review txt review txt review txt review txt review txt review txt review txt review txt review txt review txt review tx review',
    isExpanded: false,
  },
  {
    id: 4,
    userName: '케이크 킬러',
    rating: 4.0,
    date: '2025.09.12',
    images: [
      '/api/placeholder/200/200',
      '/api/placeholder/200/200',
      '/api/placeholder/200/200',
    ],
    orderDetails: {
      pickup: '9.16(화) 12:30',
      size: '1호(15cm) (+27,000원)',
      flavor: '초코 시트(+2,000원), 오레오 필링(+2,000원)',
    },
    reviewText:
      'review txt review txt review txt review txt review txt review txt review txt review txt review txt review txt review txt review txt review txt review tx review',
    isExpanded: false,
  },
  {
    id: 5,
    userName: '케이크 킬러',
    rating: 5.0,
    date: '2025.09.12',
    images: [
      '/api/placeholder/200/200',
      '/api/placeholder/200/200',
      '/api/placeholder/200/200',
    ],
    orderDetails: {
      pickup: '9.16(화) 12:30',
      size: '1호(15cm) (+27,000원)',
      flavor: '초코 시트(+2,000원), 오레오 필링(+2,000원)',
    },
    reviewText:
      'review txt review txt review txt review txt review txt review txt review txt review txt review txt review txt review txt review txt review txt review tx review',
    isExpanded: false,
  },
];

export const mockCategoryRatings: CategoryRating[] = [
  { category: '디자인', percentage: 100, description: '사진과비슷해요' },
  { category: '맛', percentage: 0, description: '맛있어요' },
  { category: '판매자응대', percentage: 90, description: '응대가 빨라요' },
  { category: '픽업', percentage: 80, description: '시간을 준수해요' },
];
