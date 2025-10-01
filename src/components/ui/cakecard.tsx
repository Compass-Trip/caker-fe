import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { basicIcons } from "@/variants/icons";

interface CakeCardProps extends React.ComponentProps<"div"> {
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

const CakeCard = (props: CakeCardProps) => {
  const [like, setLike] = useState<boolean>(false);
  const btnClick = () => {
    setLike(!like);
  };
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center gap-2 w-[168px]",
        props.className
      )}
      {...props}
    >
      {props.img ? (
        <div
          className={cn(
            `w-full h-[168px] contain-content relative bg-cover`,
            props.classNames?.img
          )}
          style={{ backgroundImage: `url(${props.img})` }}
        >
          <img
            src={like ? basicIcons.btnLike : basicIcons.btnUnlike}
            width={40}
            height={40}
            onClick={btnClick}
            className="absolute bottom-1 right-1.5"
          />
        </div>
      ) : (
        <div
          className={cn(
            " w-full h-[168px] contain-content bg-gray-700",
            props.classNames?.img
          )}
        ></div>
      )}
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
      <div className={cn("w-full text-start", props.classNames?.content)}>
        {props.content}
      </div>
      <div className="flex w-full justify-between">
        <div className={cn("text-primary-700", props.classNames?.discount)}>
          {props.discount}%
        </div>
        <div className={cn(props.classNames?.price)}>{props.price}원</div>
      </div>
    </div>
  );
};

export default CakeCard;
