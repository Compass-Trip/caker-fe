import {
  mockCategoryRatings,
  mockReviews,
  type CategoryRating,
  type ReviewData,
} from '@/assets/data/reviewList';
import { useState } from 'react';
import StarRating from './StarRating';

// 카테고리별 평점 컴포넌트
const CategoryRatingItem = ({
  category,
  percentage,
  description,
}: CategoryRating) => {
  return (
    <div className="relative border border-gray-200 rounded-xl p-3 ">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-xs text-gray-400">{category}</span>
          <span className="text-sm text-gray-900">{description}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gray-300 rounded-full transition-all duration-300"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <span className="text-xs text-gray-500 w-8">{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

// 리뷰 카드 컴포넌트
const ReviewCard = ({ review }: { review: ReviewData }) => {
  return (
    <div className="flex flex-col gap-3 px-3.5">
      {/* 사용자 정보 */}
      <div className="flex flex-col gap-2 pt-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-200" />
          <div className="flex flex-col">
            <span className="text-sm text-gray-700 w-36">
              {review.userName}
            </span>
          </div>
        </div>
        <div className="flex items-center px-3 justify-between gap-1">
          <div className="flex items-center gap-1">
            <StarRating rating={review.rating} size="small" />
            <span className="text-sm text-gray-700">{review.rating}</span>
          </div>
          <span className="text-xs text-gray-500">{review.date}</span>
        </div>
      </div>

      {/* 이미지 그리드 */}
      <div className="flex gap-2">
        {review.images.map((_, index) => (
          <div
            key={index}
            className="w-[200px] h-[200px] bg-gray-50 rounded-xl flex items-center justify-center"
          >
            <div className="w-0 h-0" />
          </div>
        ))}
      </div>

      {/* 주문 정보 */}
      <div className="bg-gray-50 rounded-xl p-3 flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-900">픽업 :</span>
          <span className="text-xs text-gray-500">
            {review.orderDetails.pickup}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-900">사이즈 :</span>
          <span className="text-xs text-gray-500">
            {review.orderDetails.size}
          </span>
        </div>
        <div className="flex gap-2">
          <span className="text-xs text-gray-900">맛 선택:</span>
          <span className="text-xs text-gray-500">
            {review.orderDetails.flavor}
          </span>
        </div>
        <div className="flex justify-end items-center h-8">
          <div className="flex items-center gap-1 px-3 py-1">
            <span className="text-xs text-gray-500">자세히보기</span>
            <svg
              className="w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* 리뷰 텍스트 */}
      <div className="flex flex-col gap-1">
        <p className="text-sm text-gray-700 leading-relaxed">
          {review.reviewText}
        </p>
        <div className="flex justify-end">
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-500">더보기</span>
            <button className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center">
              <svg
                className="w-2.5 h-2.5 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Review = () => {
  const reviews = mockReviews;
  const [showAllReviews, setShowAllReviews] = useState(false);

  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* 리뷰 평점 섹션 */}
      <div className="flex flex-col items-center gap-5 px-3.5 pt-6 pb-4">
        {/* 전체 평점 */}
        <div className="flex items-center gap-2 px-6">
          <StarRating rating={4.9} size="big" />
          <div className="flex items-center gap-1">
            <span className="text-base font-bold text-gray-900">
              {reviews.reduce((acc, review) => acc + review.rating, 0) /
                reviews.length}
            </span>
            <span className="text-sm text-gray-300">({reviews.length}개)</span>
          </div>
        </div>

        {/* 카테고리별 평점 */}
        <div className="flex flex-col gap-2 w-full">
          {mockCategoryRatings.map((rating) => (
            <CategoryRatingItem key={rating.category} {...rating} />
          ))}
        </div>
      </div>

      {/* 구분선 */}
      <div className="w-full h-2 bg-gray-100" />

      {/* 리뷰 카드 섹션 */}
      <div className="flex flex-col items-center gap-6 pb-4">
        {/* 리뷰 개수 표시 */}
        <div className="flex justify-between items-end px-3.5 pt-6 pb-2 w-full">
          <span className="text-base text-gray-900">총 {reviews.length}개</span>
        </div>

        {/* 리뷰 카드들 */}
        <div className="flex flex-col gap-6 w-full">
          {displayedReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>

        {/* 리뷰 전체보기 버튼 */}
        {!showAllReviews && reviews.length > 3 && (
          <button
            onClick={() => setShowAllReviews(true)}
            className="flex items-center gap-2 px-4 py-3 border border-gray-100 rounded-lg w-[347px] justify-center"
          >
            <span className="text-base text-gray-700">리뷰 전체보기</span>
            <svg
              className="w-5 h-5 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.4}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

export default Review;
