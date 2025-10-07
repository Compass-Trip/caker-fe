import { mockSellerData } from "@/assets/data/sellerData";
import Header from "@/components/ui/header";
import { cn } from "@/lib/utils";
import { myPageIcons, type IconKey } from "@/variants/icons";
import {
  ArrowLeft,
  ChevronRight,
  CircleCheck,
  FileCheck,
  Gift,
  SquarePen,
} from "lucide-react";
import { OrderStatusTable } from "./OrderStatusTable";
import { useState } from "react";

interface OrderStatusProps {
  id: number;
  onClose: () => void;
}

const OrderStatus = ({ onClose }: OrderStatusProps) => {
  const stringOrderArray = ["주문 제출", "주문확정", "제작완료", "픽업완료"];
  const svgOrderArray = [SquarePen, FileCheck, Gift, CircleCheck];
  const sellerInfoArray: IconKey[] = [
    "location",
    "map",
    "clock",
    "call",
    "site",
  ];
  const statusString = "주문확정";
  const orderData = [
    { datetime: "2025-09-14 15:29:00", status: "주문확정" },
    { datetime: "2025-09-14 15:13:00", status: "주문서제출" },
  ];
  const [showToast, setShowToast] = useState(false);

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 1500);
    } catch {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 1500);
    }
  };
  return (
    <div className="w-full inset-0 min-h-screen fixed top-0 left-0 z-[400] bg-white overflow-y-scroll">
      <div className="w-full min-h-screen absolute top-0 left-0 z-[500]">
        <Header
          leftSide={
            <ArrowLeft
              width={24}
              height={24}
              stroke="#79767D"
              onClick={() => onClose()}
            />
          }
          middleSide={<div>주문현황</div>}
          rightSide={<div className="w-6 h-6" />}
        />
        <div className="px-[14px] pt-6">
          <div className="font-bold text-gray-700">주문 현황</div>
          <div className="flex w-full items-center justify-center py-3">
            {svgOrderArray.map((Icon, i) => (
              <>
                <div
                  key={i}
                  className={cn(
                    "text-[#AEA9B1] text-center w-14",
                    stringOrderArray[i] === statusString
                      ? "text-primary-400"
                      : ""
                  )}
                >
                  <div className="w-full flex flex-col justify-center items-center">
                    <div
                      className={cn(
                        "w-6 h-6 rounded-md flex justify-center items-center",
                        stringOrderArray[i] === statusString
                          ? "bg-primary-50"
                          : "bg-[#eeeeef]"
                      )}
                    >
                      <Icon
                        width={14}
                        height={14}
                        stroke={
                          stringOrderArray[i] === statusString
                            ? "#ff3a4e"
                            : "#79767D"
                        }
                      />
                    </div>
                    <div className="text-sm">{stringOrderArray[i]}</div>
                  </div>
                </div>
                {i !== stringOrderArray.length - 1 ? (
                  <ChevronRight width={24} height={24} stroke="#79767D" />
                ) : (
                  <></>
                )}
              </>
            ))}
          </div>
          <OrderStatusTable items={orderData} />
        </div>
        <div className="w-full h-2 bg-[#eeeeef]" />
        <div className="px-[14px] py-4">
          {/* 여기도 판매자 정보가 나오면 채우셔야 해요! */}
          <div className="font-bold text-gray-700">판매자 정보</div>
          <div className="w-full py-6">
            {sellerInfoArray.map((el, i) => (
              <div
                key={i}
                className="flex items-baseline w-full gap-2 text-gray-700 mb-0.5 whitespace-pre"
              >
                <img src={myPageIcons[el]} />
                <div className="flex gap-2">
                  <div>{mockSellerData[el]}</div>
                  {el === "map" || el === "call" ? (
                    <div
                      className="cursor-pointer text-point-blue-600"
                      onClick={() => handleCopy(mockSellerData[el])}
                    >
                      복사
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {showToast && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[600] px-5 py-2 text-white bg-[#4B4B4B] rounded-full">
          복사했습니다
        </div>
      )}
    </div>
  );
};

export default OrderStatus;
