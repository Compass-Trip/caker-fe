import HeaderBack from '../common/HeaderBack';
import HeaderCart from '../common/HeaderCart';

const OrderHeader = () => {
  return (
    <header className="w-full flex items-center justify-between gap-4 py-4 border-b border-[#EEEEEF]">
      <div className="w-10 h-10 flex items-center justify-center">
        <HeaderBack />
      </div>
      <div className="text-[17px] font-semibold text-[#2D2A32]">상품정보</div>
      <div className="w-10 h-10 flex items-center justify-center">
        <HeaderCart />
      </div>
    </header>
  );
};

export default OrderHeader;
