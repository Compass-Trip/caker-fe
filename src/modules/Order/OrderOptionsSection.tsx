import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface OrderOptionsSectionProps {
  isVisible: boolean;
}

const OrderOptionsSection: React.FC<OrderOptionsSectionProps> = ({
  isVisible,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>('0호 10cm');
  const [selectedSheet, setSelectedSheet] = useState<string>('바닐라');
  const [selectedFilling, setSelectedFilling] = useState<string>('딸기잼');
  const [selectedDesigns, setSelectedDesigns] = useState<string[]>([]);
  const [selectedPackaging, setSelectedPackaging] =
    useState<string>('기본 (펄프용기)');
  const [selectedIcePack, setSelectedIcePack] = useState<string>('추가 X');

  if (!isVisible) return null;

  const handleDesignToggle = (design: string) => {
    setSelectedDesigns((prev) =>
      prev.includes(design)
        ? prev.filter((d) => d !== design)
        : [...prev, design]
    );
  };

  const calculateTotalPrice = () => {
    let total = 33000; // 기본 가격

    // 사이즈 추가 금액
    if (selectedSize === '1호 15cm') total += 27000;
    if (selectedSize === '2호 18cm') total += 40000;

    // 시트 추가 금액
    if (selectedSheet === '초코') total += 27000;
    if (selectedSheet === '레드벨벳') total += 40000;

    // 필링 추가 금액
    if (selectedFilling === '오레오') total += 2000;
    if (selectedFilling === '초코 가나슈') total += 2000;

    // 디자인 추가 금액
    if (selectedDesigns.includes('하트(레드)')) total += 27000;
    if (selectedDesigns.includes('하트(핑크)')) total += 40000;
    if (selectedDesigns.includes('곰돌이(화이트)')) total += 2000;
    if (selectedDesigns.includes('곰돌이(브라운)')) total += 2000;

    // 포장 추가 금액
    if (selectedPackaging === '기본 (펄프용기) + 비닐백') total += 27000;
    if (selectedPackaging === '케이크 상자') total += 40000;

    // 아이스팩 추가 금액
    if (selectedIcePack === '아이스팩 1개 추가 (여름철 필수)') total += 27000;

    return total;
  };

  return (
    <section className="w-full max-w-[375px] mx-auto bg-white">
      <Accordion
        type="multiple"
        defaultValue={[
          'pickup-date',
          'cake-size',
          'cake-flavor',
          'design',
          'packaging',
          'ice-pack',
        ]}
        className="w-full"
      >
        {/* 픽업날짜 섹션 */}
        <AccordionItem
          value="pickup-date"
          className="border-b border-[#EEEEEF]"
        >
          <AccordionTrigger className="px-4 py-4 hover:no-underline">
            <div className="flex items-center gap-2">
              <div className="text-[18px] font-bold text-[#2D2A32]">
                픽업날짜
              </div>
              <div className="text-[14px] text-[#AEA9B1]">(최소2일 후)</div>
            </div>
            <div className="bg-[#E2F4FE] text-[#2474B7] px-2 py-1 rounded text-[12px]">
              필수
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="px-4 pb-4">
              {/* Calendar */}
              <div className="bg-white border border-[#EEEEEF] rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <button className="w-10 h-10 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M15 18l-6-6 6-6"
                        stroke="#79767D"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <div className="text-[18px] font-medium text-black">
                    2025년 9월
                  </div>
                  <button className="w-10 h-10 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M9 6l6 6-6 6"
                        stroke="#79767D"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>

                {/* Calendar Grid */}
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
                    <div
                      key={day}
                      className={`text-center py-2 text-[13px] ${
                        day === '일' ? 'text-[#2FA5EE]' : 'text-black'
                      }`}
                    >
                      {day}
                    </div>
                  ))}

                  {/* Calendar dates */}
                  {[
                    31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                    17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
                  ].map((date) => (
                    <button
                      key={date}
                      className={`w-9 h-9 rounded-full text-[16px] ${
                        date === 10
                          ? 'bg-[#FF3A4E] text-white'
                          : date === 31 ||
                            date === 7 ||
                            date === 14 ||
                            date === 21 ||
                            date === 28
                          ? 'text-[#2FA5EE]'
                          : 'text-[#2D2A32] hover:bg-gray-100'
                      }`}
                      onClick={() => {}}
                    >
                      {date}
                    </button>
                  ))}
                </div>

                {/* Time Slots */}
                <div className="space-y-4">
                  <div>
                    <div className="text-[14px] text-[#2F2C45] mb-2">오전</div>
                    <div className="flex flex-wrap gap-2">
                      {['10:00', '10:30', '11:00', '11:30'].map((time) => (
                        <button
                          key={time}
                          className="px-6 py-4 border border-[#EEEEEF] rounded-lg text-[16px] hover:border-[#FF3A4E]"
                          onClick={() => {}}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="text-[14px] text-[#2F2C45] mb-2">오후</div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        '12:00',
                        '12:30',
                        '1:00',
                        '1:30',
                        '2:00',
                        '2:30',
                        '3:00',
                        '3:30',
                        '4:00',
                        '4:30',
                        '5:00',
                        '5:30',
                      ].map((time) => (
                        <button
                          key={time}
                          className={`px-6 py-4 border rounded-lg text-[16px] ${
                            time === '1:00'
                              ? 'bg-[#FF3A4E] text-white border-[#FF3A4E]'
                              : 'border-[#EEEEEF] hover:border-[#FF3A4E]'
                          }`}
                          onClick={() => {}}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 케이크사이즈 섹션 */}
        <AccordionItem value="cake-size" className="border-b border-[#EEEEEF]">
          <AccordionTrigger className="px-4 py-4 hover:no-underline">
            <div className="text-[18px] font-bold text-[#2D2A32]">
              케이크사이즈
            </div>
            <div className="bg-[#E2F4FE] text-[#2474B7] px-2 py-1 rounded text-[12px]">
              필수
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="px-4 pb-4">
              <div className="space-y-2">
                {[
                  { value: '0호 10cm', price: '+0원' },
                  { value: '1호 15cm', price: '(+27,000원)' },
                  { value: '2호 18cm', price: '(+40,000원)' },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 py-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="size"
                      value={option.value}
                      checked={selectedSize === option.value}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="w-5 h-5"
                    />
                    <span className="text-[15px] text-[#2D2A32]">
                      {option.value}
                    </span>
                    <span className="text-[12px] text-[#AEA9B1]">
                      {option.price}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 케이크 맛 섹션 */}
        <AccordionItem
          value="cake-flavor"
          className="border-b border-[#EEEEEF]"
        >
          <AccordionTrigger className="px-4 py-4 hover:no-underline">
            <div className="text-[18px] font-bold text-[#2D2A32]">
              케이크 맛
            </div>
            <div className="bg-[#E2F4FE] text-[#2474B7] px-2 py-1 rounded text-[12px]">
              필수
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="px-4 pb-4">
              <div className="bg-[rgba(174,169,177,0.1)] px-3 py-2 rounded mb-3">
                <div className="text-[15px] text-[#48464C]">시트</div>
              </div>

              <div className="space-y-2">
                {[
                  { value: '바닐라', price: '(+0원)' },
                  { value: '초코', price: '(+27,000원)' },
                  { value: '레드벨벳', price: '(+40,000원)' },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 py-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="sheet"
                      value={option.value}
                      checked={selectedSheet === option.value}
                      onChange={(e) => setSelectedSheet(e.target.value)}
                      className="w-5 h-5"
                    />
                    <span className="text-[15px] text-[#2D2A32]">
                      {option.value}
                    </span>
                    <span className="text-[12px] text-[#AEA9B1]">
                      {option.price}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Cake Flavor - Filling */}
            <div className="border-b border-[#EEEEEF] pb-4">
              <div className="bg-[rgba(174,169,177,0.1)] px-3 py-2 rounded mb-3">
                <div className="text-[15px] text-[#48464C]">필링</div>
              </div>

              <div className="space-y-2">
                {[
                  { value: '딸기잼', price: '(+0원)' },
                  { value: '오레오', price: '(+2,000원)' },
                  { value: '초코 가나슈', price: '(+2,000원)' },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 py-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="filling"
                      value={option.value}
                      checked={selectedFilling === option.value}
                      onChange={(e) => setSelectedFilling(e.target.value)}
                      className="w-5 h-5"
                    />
                    <span className="text-[15px] text-[#2D2A32]">
                      {option.value}
                    </span>
                    <span className="text-[12px] text-[#AEA9B1]">
                      {option.price}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 디자인 초 섹션 */}
        <AccordionItem value="design" className="border-b border-[#EEEEEF]">
          <AccordionTrigger className="px-4 py-4 hover:no-underline">
            <div className="flex items-center gap-2">
              <div className="text-[18px] font-bold text-[#2D2A32]">
                디자인 초
              </div>
              <div className="text-[14px] text-[#AEA9B1]">중복 선택 가능</div>
            </div>
            <div className="bg-[#E2F4FE] text-[#2474B7] px-2 py-1 rounded text-[12px]">
              필수
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="px-4 pb-4">
              <div className="space-y-2">
                {[
                  { value: '기본', price: '(+0원)' },
                  { value: '하트(레드)', price: '(+27,000원)' },
                  { value: '하트(핑크)', price: '(+40,000원)' },
                  { value: '곰돌이(화이트)', price: '(+2,000원)' },
                  { value: '곰돌이(브라운)', price: '(+2,000원)' },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 py-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedDesigns.includes(option.value)}
                      onChange={() => handleDesignToggle(option.value)}
                      className="w-5 h-5 rounded"
                    />
                    <span className="text-[15px] text-[#2D2A32]">
                      {option.value}
                    </span>
                    <span className="text-[12px] text-[#A5A3B3]">
                      {option.price}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 포장 섹션 */}
        <AccordionItem value="packaging" className="border-b border-[#EEEEEF]">
          <AccordionTrigger className="px-4 py-4 hover:no-underline">
            <div className="text-[18px] font-bold text-[#2D2A32]">포장</div>
            <div className="bg-[#E2F4FE] text-[#2474B7] px-2 py-1 rounded text-[12px]">
              필수
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="px-4 pb-4">
              <div className="space-y-2">
                {[
                  { value: '기본 (펄프용기)', price: '(+0원)' },
                  { value: '기본 (펄프용기) + 비닐백', price: '(+27,000원)' },
                  { value: '케이크 상자', price: '(+40,000원)' },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 py-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="packaging"
                      value={option.value}
                      checked={selectedPackaging === option.value}
                      onChange={(e) => setSelectedPackaging(e.target.value)}
                      className="w-5 h-5"
                    />
                    <span className="text-[15px] text-[#2D2A32]">
                      {option.value}
                    </span>
                    <span className="text-[12px] text-[#AEA9B1]">
                      {option.price}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* 아이스팩 추가 섹션 */}
        <AccordionItem value="ice-pack" className="border-b border-[#EEEEEF]">
          <AccordionTrigger className="px-4 py-4 hover:no-underline">
            <div className="text-[18px] font-bold text-[#2D2A32]">
              아이스팩 추가
            </div>
            <div className="bg-[#E2F4FE] text-[#2474B7] px-2 py-1 rounded text-[12px]">
              필수
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="px-4 pb-4">
              <div className="space-y-2">
                {[
                  { value: '추가 X', price: '(+0원)' },
                  {
                    value: '아이스팩 1개 추가 (여름철 필수)',
                    price: '(+27,000원)',
                  },
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center gap-3 py-3 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="icepack"
                      value={option.value}
                      checked={selectedIcePack === option.value}
                      onChange={(e) => setSelectedIcePack(e.target.value)}
                      className="w-5 h-5"
                    />
                    <span className="text-[15px] text-[#2D2A32]">
                      {option.value}
                    </span>
                    <span className="text-[12px] text-[#AEA9B1]">
                      {option.price}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* Order Summary */}
      <div className="px-4 py-4 bg-[rgba(174,169,177,0.1)] rounded-lg mx-4 mb-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-[12px] text-[#2D2A32]">픽업:</span>
            <span className="text-[12px] text-[#79767D]">9.16(화) 12:30</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[12px] text-[#2D2A32]">사이즈:</span>
            <span className="text-[12px] text-[#79767D]">
              1호(15cm) (+27,000원)
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[12px] text-[#2D2A32]">맛 선택:</span>
            <span className="text-[12px] text-[#79767D]">
              초코 시트(+2,000원), 오레오 필링(+2,000원)
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[12px] text-[#2D2A32]">디자인 초:</span>
            <span className="text-[12px] text-[#79767D]">
              하트(레드)(+1,000원), 곰돌이(화이트)(+3,000원)
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[12px] text-[#2D2A32]">포장 방법:</span>
            <span className="text-[12px] text-[#79767D]">기본(펄프 용기)</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[12px] text-[#2D2A32]">아이스팩:</span>
            <span className="text-[12px] text-[#79767D]">추가 X</span>
          </div>
        </div>
      </div>

      {/* Price and Buttons */}
      <div className="px-4 pb-4 border-t border-[#EEEEEF] pt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[15px] text-black">최종 상품 금액</span>
          <div className="flex items-center gap-1">
            <span className="text-[20px] font-semibold text-[#2D2A32]">
              {calculateTotalPrice().toLocaleString()}
            </span>
            <span className="text-[16px] text-[#AEA9B1]">원</span>
          </div>
        </div>

        <div className="flex gap-2">
          <Button className="flex-1 h-12 border border-[#EEEEEF] bg-white text-[#48464C] hover:bg-gray-50">
            장바구니
          </Button>
          <Button className="flex-1 h-12 bg-[#FF0F31] text-white hover:bg-[#E4002B]">
            바로 커스텀
          </Button>
        </div>
      </div>
    </section>
  );
};

export default OrderOptionsSection;
