import { cn } from "@/lib/utils";
import React from "react";

interface MyPageOrderCardProps extends React.ComponentProps<"div"> {
  name: string;
  location: string;
  img?: string;
  content: string;
  discount: number;
  price: number;
  classNames?: {
    img?: string;
    header?: string;
    content?: string;
    discount?: string;
    price?: string;
  };
}

const MyPageOrderCard = (props: MyPageOrderCardProps) => {
  return (
    <>
      <div
        className={cn("flex w-full h-[152px] gap-3 py-4", props.className)}
        {...props}
      >
        {props.img ? (
          <div
            className={cn(
              `w-[100px] h-[100px] contain-content relative bg-cover rounded-3xl flex-1/3`,
              props.classNames?.img
            )}
            style={{ backgroundImage: `url(${props.img})` }}
          ></div>
        ) : (
          <div
            className={cn(
              "w-[100px] h-[100px] contain-content bg-gray-700",
              props.classNames?.img
            )}
          ></div>
        )}
        <div className="flex flex-col h-full w-full">
          <div
            className={cn(
              "w-full flex gap-1 text-[#79767D] text-xs",
              props.classNames?.header
            )}
          >
            <div>{props.name}</div>
            <div>∙</div>
            <div>{props.location}</div>
          </div>
          <div
            className={cn(
              "w-full text-start flex-1",
              props.classNames?.content
            )}
          >
            {props.content}
          </div>
          <div className="flex w-full justify-between">
            <div className={cn("text-primary-700", props.classNames?.discount)}>
              {props.discount}%
            </div>
            <div className={cn(props.classNames?.price)}>{props.price}원</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPageOrderCard;
