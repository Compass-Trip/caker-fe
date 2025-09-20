import React from "react";
import { cn } from "@/lib/utils";

interface CategoryProps extends React.ComponentProps<"div"> {
  img?: string;
  name?: string;
}

const Category = (props: CategoryProps) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-center gap-2 w-20",
        props.className
      )}
      {...props}
    >
      {props.img ? (
        <img
          src={props.img}
          className=" rounded-full w-full h-20 contain-content"
        />
      ) : (
        <div className="rounded-full w-full h-20 contain-content bg-gray-700"></div>
      )}
      <div className="text-center w-full font-semibold">
        {props.name ? props.name : "category"}
      </div>
    </div>
  );
};

export default Category;
