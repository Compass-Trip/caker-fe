/* eslint-disable @typescript-eslint/no-explicit-any */
const OrderSummary = ({ state }: { state: any }) => {
  return (
    <div className="px-4 py-4 bg-[rgba(174,169,177,0.1)] rounded-lg mx-4 mb-4">
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-[12px] text-[#2D2A32]">픽업:</span>
          <span className="text-[12px] text-[#79767D]">
            {state.selectedDate}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[12px] text-[#2D2A32]">사이즈:</span>
          <span className="text-[12px] text-[#79767D]">
            {state.selectedSize}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[12px] text-[#2D2A32]">맛 선택:</span>
          <span className="text-[12px] text-[#79767D]">
            {state.selectedSheet}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[12px] text-[#2D2A32]">디자인 초:</span>
          <span className="text-[12px] text-[#79767D]">
            {state.selectedDesigns.join(', ')}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[12px] text-[#2D2A32]">포장 방법:</span>
          <span className="text-[12px] text-[#79767D]">
            {state.selectedPackaging}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-[12px] text-[#2D2A32]">아이스팩:</span>
          <span className="text-[12px] text-[#79767D]">
            {state.selectedIcePack}
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
