import { useState } from 'react';
import IndicatorTabs from '@/components/Tabs/indicatorTabs';
import ProductInfo from '@/modules/Order/ProductInfo';
import StoreInfo from '@/modules/Order/StoreInfo';
import CakeCarousel from '@/modules/Order/CakeCarousel';
import OrderOptionsSection from '@/modules/Order/Option/OrderOptionsSection';
import Header from '@/components/ui/header';
import HeaderBack from '@/modules/common/HeaderBack';
import HeaderCart from '@/modules/common/HeaderCart';

const Order = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [like, setLike] = useState(false);
  const handleOrderClick = () => {
    setShowOptions(true);
  };

  return (
    <div className="min-h-screen">
      <Header
        leftSide={<HeaderBack />}
        middleSide={
          <div className="text-[17px] font-semibold text-[#2D2A32]">
            상품정보
          </div>
        }
        rightSide={
          <div className="flex gap-4 items-center">
            <HeaderCart />
          </div>
        }
        className="mb-2"
      />

      <section>
        <CakeCarousel />
      </section>

      <section>
        <div className="flex flex-col gap-2 border-b border-[#EEEEEF] py-[20px] px-[14px]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#EEEEEF]" />
            <div className="flex flex-col">
              <div className="text-[15px] leading-[22px] text-[#48464C]">
                스웨이드 베이커리 청담
              </div>
              <div className="text-[12px] leading-[16px] tracking-[0.0252em] text-[#79767D]">
                서울 강남구
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 py-4 px-[14px]">
          <div className="text-[16px] leading-[24px] text-black">
            인기폭발 주문제작 레터링케이크
          </div>
          <div className="h-12 flex items-center justify-between">
            <div className="flex items-end gap-3">
              <div className="flex items-center gap-1 text-[#79767D]">
                <span className="text-[16px] leading-[24px]">35,000 원</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <span className="text-[16px] leading-[24px] font-bold text-[#E4002B]">
                    3
                  </span>
                  <span className="text-[16px] leading-[24px] font-bold text-[#F70031]">
                    %
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-[16px] leading-[24px] font-bold text-[#2D2A32]">
                    33,000
                  </span>
                  <span className="text-[16px] leading-[24px] text-[#79767D]">
                    원
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {showOptions ? (
        <OrderOptionsSection />
      ) : (
        <div>
          <div className="relative">
            <IndicatorTabs
              tabsItems={[
                {
                  label: '상품정보',
                  value: 'product info',
                  content: <ProductInfo />,
                },
                {
                  label: '리뷰(22)',
                  value: 'reviews',
                  content: (
                    <div className="py-6 text-[#79767D]">
                      리뷰는 준비 중입니다.
                    </div>
                  ),
                },
                {
                  label: '매장정보',
                  value: 'store info',
                  content: <StoreInfo />,
                },
              ]}
              classNames={{
                tabs: 'w-full sticky top-0',
                list: 'w-full',
                trigger:
                  'flex-1 justify-center h-9 text-[16px] border-b-2 data-[state=active]:border-[#FF3A4E] data-[state=active]:text-[#D80023]',
                content: 'mt-0',
              }}
            />
          </div>
          <div className="w-full flex items-center gap-2 py-2 px-4">
            <button
              className="w-12 h-12  border-none flex items-center justify-center"
              onClick={() => setLike(!like)}
            >
              {like ? (
                <img
                  src="/public/icons/card/buttonLike.svg"
                  alt="like"
                  className="w-24 h-24"
                />
              ) : (
                <img
                  src="/public/icons/card/buttonUnlike.svg"
                  alt="unlike"
                  className="w-24 h-24"
                />
              )}
            </button>
            <button
              className="flex-1 h-12 bg-[#FF0F31] text-white rounded-lg font-medium hover:bg-[#E4002B] transition-colors"
              onClick={handleOrderClick}
            >
              주문하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Order;
