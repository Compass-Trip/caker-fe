import { mockCakes } from "@/assets/data/cakeList";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import MyPageOrderCard from "./MyPageOrderCard";

interface MyPageMainProps {
  onEditOpen: () => void;
  orderArray: number[];
  onOrderListOpen: () => void;
  onOpen: (type: string) => void;
}

const MyPageMain = ({
  onEditOpen,
  orderArray,
  onOrderListOpen,
  onOpen,
}: MyPageMainProps) => {
  const stringOrderArray = ["주문 제출", "주문확정", "제작완료", "픽업완료"];
  const mockData = mockCakes.slice(0, 5);
  return (
    <section className="text-[#2D2A32] min-h-[calc(100vh-120px)] relative">
      <div className="w-full h-20 py-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#F1F1F1] rounded-full" />
          <div className="font-bold text-lg">케이커</div>
        </div>
        <button
          className="w-[60px] text-center h-6 bg-[#eeeeef] rounded-sm text-sm"
          onClick={() => onEditOpen()}
        >
          정보수정
        </button>
      </div>
      <div className="w-full h-1 bg-[#eeeeef]" />
      <div className="w-full py-6 ">
        <div className="flex w-full justify-between items-center">
          <div className="font-bold text-gray-700">주문 조회</div>
          <div className="text-[#79767D] text-xs">최근 1개월</div>
        </div>
        <div className="flex w-full items-center justify-center">
          {orderArray.map((el, i) => (
            <>
              <div
                className={cn(
                  "text-[#AEA9B1] text-center w-16",
                  el > 0 ? "text-primary-400" : ""
                )}
              >
                <div className="text-xl font-bold">{el}</div>
                <div className="text-sm">{stringOrderArray[i]}</div>
              </div>
              {i !== orderArray.length - 1 ? (
                <ChevronRight width={24} height={24} stroke="#79767D" />
              ) : (
                <></>
              )}
            </>
          ))}
        </div>
      </div>
      <div className="w-full h-1 bg-[#eeeeef]" />
      <div className="flex-1 min-h-0">
        <div className="flex flex-col py-6 gap-4">
          <div className="flex w-full justify-between items-center">
            <div className="font-bold text-gray-700">주문 내역</div>
            <div
              className="text-[#79767D] text-xs flex gap-1 items-center"
              onClick={() => onOrderListOpen()}
            >
              전체보기 <ChevronRight width={20} height={20} stroke="#79767D" />
            </div>
          </div>
          <div className="overflow-y-scroll">
            {mockData.map((item, i) => (
              <article>
                <div className="text-sm text-[#79767D]">25.09.20</div>
                <MyPageOrderCard
                  key={i}
                  name={item.storeName}
                  location={item.location}
                  img={item.image}
                  content={item.description}
                  discount={item.discount}
                  price={item.price}
                />
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full text-[#79767D] font-normal flex items-center justify-center py-[10px] gap-2">
        <p onClick={() => onOpen("logout")}>로그아웃</p>
        <p> | </p>
        <p onClick={() => onOpen("delete")}>회원탈퇴</p>
      </div>
    </section>
  );
};

export default MyPageMain;
