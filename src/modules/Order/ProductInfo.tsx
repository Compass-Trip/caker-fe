import XBox from './X-box';

const ProductInfo = () => {
  const width = 345;
  const height = 260.25;
  const radius = 8;
  const padding = 6;
  return (
    <div className="flex flex-col gap-6 py-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <img src="/public/icons/category/minimal.svg" alt="notice" />
          <div className="text-[17px] font-semibold text-[#2D2A32]">
            구매 전 필독사항
          </div>
        </div>
        <div className="w-[351px] bg-[#FFEAEF] rounded-[12px] px-[14px] py-2 text-[15px] leading-[22px] tracking-[0.0096em] text-[#2D2A32]">
          최대한 안전포장 하여 발송하지만 배송중 케이크 손상이 있을 수 있습니다.
          이점 참고하시어 구매부탁드립니다! 주문 받은 만큼 제작하여 출고하고
          있어서 출고 당일 취소 불가합니다! 케이크 제작중에는 메세지확인이 느릴
          수 있습니다. 조금만 기다려주세요😭😭
        </div>
      </div>{' '}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <img src="/public/icons/category/birth.svg" alt="cakeSize" />
          <div className="text-[17px] font-semibold text-[#2D2A32]">
            케이크 사이즈
          </div>
        </div>
        <div className="w-full bg-[#E2F4FE] rounded-[12px] px-[14px] py-2 text-[15px] leading-[22px] tracking-[0.0096em] text-[#2D2A32]">
          0호 케이크 10cm
          <br />
          1호 케이크 15cm
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <XBox width={width} height={height} radius={radius} padding={padding} />
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <img src="/public/icons/category/cute.svg" alt="cakeFlavor" />
          <div className="text-[17px] font-semibold text-[#2D2A32]">
            케이크 맛 옵션
          </div>
        </div>
        <div className="w-[351px] bg-[#EDFEE8] rounded-[12px] px-[14px] py-2 text-[15px] leading-[22px] tracking-[0.0096em] text-[#2D2A32] space-y-2">
          <div className="space-y-1">
            <div className="text-[14px] leading-[20px] tracking-[0.0145em] text-[#2D2A32]">
              1.기본:
            </div>
            <div className="text-[14px] leading-[20px] tracking-[0.0145em] text-[#79767D]">
              바닐라빈 시트 + 동구리 특제크림
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-[14px] leading-[20px] tracking-[0.0145em] text-[#2D2A32]">
              2.고구마 100프로
            </div>
            <div className="text-[14px] leading-[20px] tracking-[0.0145em] text-[#79767D]">
              바닐라빈 시트 + 고구마크림 + 고구마무스
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-[14px] leading-[20px] tracking-[0.0145em] text-[#2D2A32]">
              3.흑임자 100프로
            </div>
            <div className="text-[14px] leading-[20px] tracking-[0.0145em] text-[#79767D]">
              바닐라빈 시트 + 흑임자크림
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-[14px] leading-[20px] tracking-[0.0145em] text-[#2D2A32]">
              4.초코
            </div>
            <div className="text-[14px] leading-[20px] tracking-[0.0145em] text-[#79767D]">
              초코시트 + 리얼초코크림 + 초코칩
            </div>
          </div>
          <div className="text-[12px] leading-[16px] tracking-[0.0252em] text-[#2D2A32]">
            *케이크 겉면 크림은 크림치즈와 버터를 혼합하여 제조합니다.
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-6">
        <XBox width={width} height={height} radius={radius} padding={padding} />
      </div>
    </div>
  );
};

export default ProductInfo;
