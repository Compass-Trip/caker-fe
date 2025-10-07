import { mockCakes } from "@/assets/data/cakeList";
import Header from "@/components/ui/header";
import { ArrowLeft, ChevronRight } from "lucide-react";
import MyPageOrderCard from "./MyPageOrderCard";
import { Button } from "@/components/ui/button";

interface MyPageOrderListProps {
  onClose: () => void;
  onOrderOpen: () => void;
}

const MyPageOrderListPage = ({
  onClose,
  onOrderOpen,
}: MyPageOrderListProps) => {
  const mockData = mockCakes.slice(0, 5);
  return (
    <div className="w-full inset-0 min-h-screen fixed top-0 left-0 z-[200] bg-white overflow-y-scroll">
      <div className="w-full min-h-screen absolute top-0 left-0 z-[300]">
        <Header
          leftSide={
            <ArrowLeft
              width={24}
              height={24}
              stroke="#79767D"
              onClick={() => onClose()}
            />
          }
          middleSide={<div>주문내역</div>}
          rightSide={<div className="w-6 h-6" />}
        />
        <div className="px-[14px]">
          {mockData.map((item, i) => (
            <article className="py-4">
              <div className="flex w-full justify-between items-center">
                <div className="text-sm text-[#79767D]">25.09.20</div>
                <div
                  className="text-[#79767D] text-xs flex gap-1 items-center"
                  onClick={() => onClose()}
                >
                  주문상세{" "}
                  <ChevronRight width={20} height={20} stroke="#79767D" />
                </div>
              </div>
              <MyPageOrderCard
                key={i}
                name={item.storeName}
                location={item.location}
                img={item.image}
                content={item.description}
                discount={item.discount}
                price={item.price}
              />
              <div className="py-6 flex justify-center items-center gap-2">
                <Button
                  variant="outline"
                  className="w-24"
                  onClick={() => onClose()}
                >
                  리뷰 작성
                </Button>
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => onOrderOpen()}
                >
                  주문현황
                </Button>
              </div>
              {i !== mockData.length - 1 ? (
                <div className="w-full h-0.5 bg-[#eeeeef]" />
              ) : (
                <></>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyPageOrderListPage;
