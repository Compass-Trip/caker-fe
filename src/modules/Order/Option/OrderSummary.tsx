import { ChevronDown } from 'lucide-react';

/* eslint-disable @typescript-eslint/no-explicit-any */
interface OrderSummaryProps<T> {
  state: T;
  isExpanded?: boolean;
}
interface OrderState {
  date: Date;
  selectedTime: string;
  selectedSize: string;
  selectedSheet: string;
  selectedDesignCandle: string[];
  selectedPackaging: string;
  selectedIcePack: string;
}

const OrderSummary = <T extends OrderState>({
  state,
  isExpanded = false,
}: OrderSummaryProps<T>) => {
  if (!isExpanded) {
    return (
      <div className="px-4 py-4 bg-[rgba(174,169,177,0.1)] rounded-lg mx-4 mb-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-[12px] text-gray-900">픽업:</span>
            <span className="text-[12px] text-gray-500">{`${state.date.toLocaleDateString(
              'ko-KR'
            )} ${state.selectedTime}`}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[12px] text-gray-900">사이즈:</span>
            <span className="text-[12px] text-gray-500">
              {state.selectedSize}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[12px] text-gray-900">맛 선택:</span>
            <span className="text-[12px] text-gray-500">
              {state.selectedSheet}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[12px] text-gray-900">디자인 초:</span>
            <span className="text-[12px] text-gray-500">
              {state.selectedDesignCandle.join(', ')}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[12px] text-gray-900">포장 방법:</span>
            <span className="text-[12px] text-gray-500">
              {state.selectedPackaging}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-[12px] text-gray-900">아이스팩:</span>
            <span className="text-[12px] text-gray-500">
              {state.selectedIcePack}
            </span>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-end gap-2 p-3 bg-[#AEA9B11A] rounded-xl">
      <div className="flex items-center gap-2 w-full">
        <span className="font-pretendard text-[12px] leading-4 text-gray-900">
          픽업 :
        </span>
        <span className="font-pretendard text-[12px] leading-4 text-gray-500">
          {`${state.date.toLocaleDateString('ko-KR')} ${state.selectedTime}`}
        </span>
      </div>
      <div className="flex items-center gap-2 w-full">
        <span className="font-pretendard text-[12px] leading-4 text-gray-900">
          사이즈 :{' '}
        </span>
        <span className="font-pretendard text-[12px] leading-4 text-gray-500">
          {state.size} (+{sate.sizePrice.toLocaleString()}원)
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
  );
};

export default OrderSummary;
