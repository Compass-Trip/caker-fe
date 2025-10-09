import KakaoMap from './KakaoMap';

const StoreInfo = () => {
  const handleCopyAddress = () => {
    navigator.clipboard.writeText('서울 강남구 도산대로62길 26 1층');
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText('0507-1449-4422');
  };

  return (
    <div className="flex flex-col gap-2 px-[14px] pt-6 pb-4">
      {/* 매장명 */}
      <div className="flex items-center gap-2">
        <img src="/icons/store/house.svg" alt="매장" className="w-4 h-4" />
        <span className="text-[15px] leading-[22px] text-[#2D2A32] font-normal">
          스웨이드 베이커리 청담
        </span>
      </div>

      {/* 주소 */}
      <div className="flex items-center gap-2">
        <img src="/icons/store/map.svg" alt="위치" className="w-4 h-4" />
        <span className="text-[15px] leading-[22px] text-[#2D2A32] font-normal">
          서울 강남구 도산대로62길 26 1층
        </span>
        <button
          onClick={handleCopyAddress}
          className="text-[14px] leading-[20px] text-[#2885CB] font-normal ml-auto cursor-pointer"
        >
          복사
        </button>
      </div>

      {/* 운영시간 */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <img src="/icons/store/clock.svg" alt="시간" className="w-4 h-4" />
          <span className="text-[15px] leading-[22px] text-[#2D2A32] font-normal">
            매일 09:00 ~ 18:00
          </span>
        </div>
        <div className="flex  pl-6">
          <span className="text-[15px] leading-[22px] text-[#2D2A32] font-normal">
            화요일 정기 휴무
          </span>
        </div>
      </div>

      {/* 전화번호 */}
      <div className="flex items-center gap-2">
        <img src="/icons/store/phone.svg" alt="전화" className="w-4 h-4" />
        <span className="text-[15px] leading-[22px] text-[#2D2A32] font-normal">
          0507-1449-4422
        </span>
        <button
          onClick={handleCopyPhone}
          className="text-[14px] leading-[20px] text-[#2885CB] font-normal ml-auto cursor-pointer"
        >
          복사
        </button>
      </div>

      {/* 웹사이트 */}
      <div className="flex items-center gap-2">
        <img src="/icons/store/window.svg" alt="웹사이트" className="w-4 h-4" />
        <span className="text-[15px] leading-[22px] text-[#2D2A32] font-normal">
          https://suede.co.kr
        </span>
      </div>

      {/* 지도 */}
      <div className="mt-2">
        <KakaoMap
          address="서울 강남구 도산대로62길 26 1층"
          markerTitle="스웨이드 베이커리 청담"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default StoreInfo;
