import { useState } from 'react';
import HeaderBack from '@/modules/common/HeaderBack';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { Checkbox } from '@/components/ui/checkbox';
import { mockCartList, type CartItem } from '@/assets/data/CartList';

const Shopping = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartList);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isExpanded: !item.isExpanded } : item
      )
    );
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Header */}
      <header className="flex items-center gap-4 px-[14px] py-4 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <HeaderBack />
        </div>
        <div className="flex-1 flex justify-center">
          <h1 className="font-pretendard font-semibold text-[17px] leading-[24px] text-gray-900">
            장바구니
          </h1>
        </div>
        <div className="w-6" /> {/* Spacer for centering */}
      </header>

      {/* Select All Section */}
      <div className="flex justify-between items-end gap-[187px] px-[14px] pt-6 pb-2">
        <div className="flex items-center">
          <div className="flex items-center gap-0.5">
            <Checkbox
              checked={
                selectedItems.length === 0
                  ? false
                  : selectedItems.length === cartItems.length
              }
              onCheckedChange={(checked) => {
                if (checked === true) {
                  setSelectedItems(cartItems.map((item) => item.id));
                } else {
                  setSelectedItems([]);
                }
              }}
              className="size-[18px] data-[state=checked]:bg-primary-500 data-[state=checked]:text-white rounded-[5px] border-[1.5px]"
            />
            <span className="font-pretendard text-[15px] leading-[22px] text-gray-900">
              전체 선택
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center w-[66px] h-6">
          <button
            className="rounded-lg font-pretendard text-[16px] leading-6 text-gray-300"
            disabled
          >
            상품 삭제
          </button>
        </div>
      </div>

      {/* Cart Items List */}
      <div className="flex flex-col gap-2 flex-1 overflow-y-auto bg-gray-100">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-end gap-3 px-[14px] py-4 bg-white"
          >
            {/* Checkbox */}
            <div className="flex self-stretch pt-[38px]">
              <Checkbox
                checked={selectedItems.includes(item.id)}
                onCheckedChange={(checked) => {
                  setSelectedItems((prev) => {
                    if (checked === true) {
                      return prev.includes(item.id) ? prev : [...prev, item.id];
                    } else {
                      return prev.filter((itemId) => itemId !== item.id);
                    }
                  });
                }}
                className="size-[18px] data-[state=checked]:bg-primary-500 data-[state=checked]:text-white rounded-[5px] border-[1.5px]"
              />
            </div>

            {/* Item Content */}
            <div className="flex flex-col gap-3 flex-1">
              {/* Product Info */}
              <div className="flex items-center gap-3">
                {/* Image */}
                <div className="w-[100px] rounded-xl">
                  <div className="w-full h-[100px] bg-gray-100 rounded-xl flex items-center justify-center">
                    <img
                      src={item.imageUrl || '/placeholder-cake.jpg'}
                      alt={item.cakeName}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                </div>

                {/* Text Info */}
                <div className="flex flex-col justify-between flex-1 gap-[11px]">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                      <span className="font-pretendard text-[12px] leading-4 text-gray-500">
                        {item.storeName}
                      </span>
                      <span className="font-pretendard text-[12px] leading-4 text-gray-500">
                        ∙
                      </span>
                      <span className="font-pretendard text-[12px] leading-4 text-gray-500">
                        {item.location}
                      </span>
                    </div>
                    <p className="font-pretendard font-bold text-[16px] leading-6 text-gray-900 h-12">
                      {item.cakeName}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-0.5">
                      <span className="font-pretendard font-bold text-[16px] leading-6 text-gray-900">
                        {item.price.toLocaleString()}
                      </span>
                      <span className="font-pretendard text-[16px] leading-6 text-gray-500">
                        원
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Details Box */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-col items-end gap-2 p-3 bg-[#AEA9B11A] rounded-xl">
                  <div className="flex items-center gap-2 w-full">
                    <span className="font-pretendard text-[12px] leading-4 text-gray-900">
                      픽업 :
                    </span>
                    <span className="font-pretendard text-[12px] leading-4 text-gray-500">
                      {item.pickupDate} {item.pickupTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 w-full">
                    <span className="font-pretendard text-[12px] leading-4 text-gray-900">
                      사이즈 :{' '}
                    </span>
                    <span className="font-pretendard text-[12px] leading-4 text-gray-500">
                      {item.size} (+{item.sizePrice.toLocaleString()}원)
                    </span>
                  </div>
                  <div className="flex gap-2 w-full">
                    <span className="font-pretendard text-[12px] leading-4 text-gray-900">
                      맛 선택:
                    </span>
                    <span className="font-pretendard text-[12px] leading-4 text-gray-500">
                      {item.flavors
                        .map((f) => `${f.name}(+${f.price.toLocaleString()}원)`)
                        .join(', ')}
                    </span>
                  </div>

                  <div
                    className="flex justify-end items-center  py-1 w-[70px] cursor-pointer"
                    onClick={() => toggleExpand(item.id)}
                  >
                    <span className="font-pretendard text-[12px] leading-4 text-gray-500">
                      {item.isExpanded ? '닫기' : '자세히보기'}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-gray-500 transition-transform ${
                        item.isExpanded ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 w-full">
                  <button className="flex justify-center items-center gap-2 px-4 py-3 border-[1.5px] border-gray-100 rounded-lg font-pretendard text-[16px] leading-6 text-gray-700">
                    옵션 변경
                  </button>
                  <Button className="flex-1 flex justify-center items-center gap-2 px-4 py-3 bg-primary-500 rounded-lg font-pretendard text-[16px] leading-6 text-white">
                    바로 커스텀
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shopping;
