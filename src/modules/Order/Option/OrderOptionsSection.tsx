/* eslint-disable @typescript-eslint/no-explicit-any */
import { useReducer } from 'react';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import OrderSummary from './OrderSummary';
import { Calendar } from '@/components/ui/calendar';

// 초기 상태
const initialState = {
  selectedSize: '0호 10cm',
  selectedSheet: '바닐라',
  selectedFilling: '딸기잼',
  selectedDesigns: ['기본'] as string[],
  selectedPackaging: '기본 (펄프용기)',
  selectedIcePack: '추가 X',
};

// reducer 함수
function reducer(state: typeof initialState, action: any) {
  switch (action.type) {
    case 'SET_SIZE':
      return { ...state, selectedSize: action.payload };
    case 'SET_SHEET':
      return { ...state, selectedSheet: action.payload };
    case 'SET_FILLING':
      return { ...state, selectedFilling: action.payload };
    case 'SET_DESIGN_CANDLE':
      return {
        ...state,
        selectedDesigns: state.selectedDesigns.includes(action.payload)
          ? state.selectedDesigns.filter((d) => d !== action.payload)
          : [...state.selectedDesigns, action.payload],
      };
    case 'SET_PACKAGING':
      return { ...state, selectedPackaging: action.payload };
    case 'SET_ICE_PACK':
      return { ...state, selectedIcePack: action.payload };
    default:
      return state;
  }
}

const OrderOptionsSection = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const calculateTotalPrice = () => {
    let total = 33000; // 기본 가격

    // 사이즈 추가 금액
    if (state.selectedSize === '1호 15cm') {
      total += 27000;
    }
    if (state.selectedSize === '2호 18cm') total += 40000;

    // 시트 추가 금액
    if (state.selectedSheet === '초코') total += 27000;
    if (state.selectedSheet === '레드벨벳') total += 40000;

    // 필링 추가 금액
    if (state.selectedFilling === '오레오') total += 2000;
    if (state.selectedFilling === '초코 가나슈') total += 2000;

    // 디자인 추가 금액
    if (state.selectedDesigns.includes('하트(레드)')) total += 27000;
    if (state.selectedDesigns.includes('하트(핑크)')) total += 40000;
    if (state.selectedDesigns.includes('곰돌이(화이트)')) total += 2000;
    if (state.selectedDesigns.includes('곰돌이(브라운)')) total += 2000;

    // 포장 추가 금액
    if (state.selectedPackaging === '기본 (펄프용기) + 비닐백') total += 27000;
    if (state.selectedPackaging === '케이크 상자') total += 40000;

    // 아이스팩 추가 금액
    if (state.selectedIcePack === '아이스팩 1개 추가 (여름철 필수)')
      total += 27000;

    return total;
  };

  return (
    <section className="w-full mx-auto bg-white">
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
              <div className="bg-[#E2F4FE] text-[#2474B7] px-2 py-1 rounded text-[12px]">
                필수
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="px-4 pb-4">
              {/* Calendar */}
              <Calendar />
              <div className="bg-white border border-[#EEEEEF] rounded-lg p-4">
                {/* Time Slots */}
                <div className="space-y-4">
                  <div>
                    <div className="text-[14px] text-[#2F2C45] mb-2">오전</div>
                    <div className="flex flex-wrap gap-2">
                      {['10:00', '10:30', '11:00', '11:30'].map((time) => (
                        <button
                          key={time}
                          className="flex-1 px-4 py-4 border border-[#EEEEEF] rounded-lg text-[16px] hover:border-[#FF3A4E]"
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
                          className={`flex-1 px-4 py-4 border rounded-lg text-[16px] ${
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

        {/* 케이크 사이즈 */}
        <AccordionItem value="cake-size" className="border-b border-[#EEEEEF]">
          <AccordionTrigger className="px-4 py-4 hover:no-underline">
            {' '}
            <div className="flex items-center gap-2">
              <div className="text-[18px] font-bold text-[#2D2A32]">
                케이크사이즈
              </div>
              <div className="bg-[#E2F4FE] text-[#2474B7] px-2 py-1 rounded text-[12px]">
                필수
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="px-4 pb-4 space-y-2">
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
                    checked={state.selectedSize === option.value}
                    onChange={(e) =>
                      dispatch({ type: 'SET_SIZE', payload: e.target.value })
                    }
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
          </AccordionContent>
        </AccordionItem>

        {/* 케이크 맛 */}
        <AccordionItem
          value="cake-flavor"
          className="border-b border-[#EEEEEF]"
        >
          <AccordionTrigger className="px-4 py-4 hover:no-underline">
            <div className="flex items-center gap-2">
              <div className="text-[18px] font-bold text-[#2D2A32]">
                케이크 맛
              </div>
              <div className="bg-[#E2F4FE] text-[#2474B7] px-2 py-1 rounded text-[12px]">
                필수
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="px-4 pb-4 space-y-2">
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
                    checked={state.selectedSheet === option.value}
                    onChange={(e) =>
                      dispatch({ type: 'SET_SHEET', payload: e.target.value })
                    }
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

            {/* 필링 */}
            <div className="border-t border-[#EEEEEF] pt-4 space-y-2">
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
                    checked={state.selectedFilling === option.value}
                    onChange={(e) =>
                      dispatch({ type: 'SET_FILLING', payload: e.target.value })
                    }
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
          </AccordionContent>
        </AccordionItem>

        {/* 디자인 초 */}
        <AccordionItem value="design" className="border-b border-[#EEEEEF]">
          <AccordionTrigger className="px-4 py-4 hover:no-underline">
            <div className="flex items-center gap-2">
              <div className="text-[18px] font-bold text-[#2D2A32]">
                디자인 초
              </div>
              <div className="text-[14px] text-[#AEA9B1]">중복 선택 가능</div>
              <div className="bg-[#E2F4FE] text-[#2474B7] px-2 py-1 rounded text-[12px]">
                필수
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="px-4 pb-4 space-y-2">
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
                    checked={state.selectedDesigns.includes(option.value)}
                    onChange={() =>
                      dispatch({
                        type: 'SET_DESIGN_CANDLE',
                        payload: option.value,
                      })
                    }
                    className="w-5 h-5"
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
          </AccordionContent>
        </AccordionItem>

        {/* 포장 */}
        <AccordionItem value="packaging" className="border-b border-[#EEEEEF]">
          <AccordionTrigger className="px-4 py-4 hover:no-underline">
            <div className="flex items-center gap-2">
              <div className="text-[18px] font-bold text-[#2D2A32]">포장</div>
              <div className="bg-[#E2F4FE] text-[#2474B7] px-2 py-1 rounded text-[12px]">
                필수
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="px-4 pb-4 space-y-2">
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
                    checked={state.selectedPackaging === option.value}
                    onChange={(e) =>
                      dispatch({
                        type: 'SET_PACKAGING',
                        payload: e.target.value,
                      })
                    }
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
          </AccordionContent>
        </AccordionItem>

        {/* 아이스팩 */}
        <AccordionItem value="ice-pack" className="border-b border-[#EEEEEF]">
          <AccordionTrigger className="px-4 py-4 hover:no-underline">
            <div className="flex items-center gap-2">
              <div className="text-[18px] font-bold text-[#2D2A32]">
                아이스팩 추가
              </div>
              <div className="bg-[#E2F4FE] text-[#2474B7] px-2 py-1 rounded text-[12px]">
                필수
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="px-4 pb-4 space-y-2">
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
                    checked={state.selectedIcePack === option.value}
                    onChange={(e) =>
                      dispatch({
                        type: 'SET_ICE_PACK',
                        payload: e.target.value,
                      })
                    }
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
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* 주문 요약 및 가격 */}
      <OrderSummary state={state} />
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
