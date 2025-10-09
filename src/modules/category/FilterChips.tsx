import { cn } from "@/lib/utils";
import type { FilterTypes } from "./FilterModal";
import { ChevronDown } from "lucide-react";

const FilterChips = ({
  filterObj,
  setOpen,
}: {
  filterObj: FilterTypes;
  setOpen: () => void;
}) => {
  const { area, priceArr, theme } = filterObj;
  return (
    <div className="flex gap-[9px]">
      <button
        className={cn(
          "min-w-12 flex justify-center items-center gap-1 border-[#eeeeef] border-2 h-8 rounded-2xl py-1 px-2",
          area !== "" ? "border-none text-white bg-[#48464C]" : ""
        )}
        onClick={() => setOpen()}
      >
        지역
        {area !== "" ? (
          <p>1</p>
        ) : (
          <ChevronDown width={16} height={16} stroke="#79767D" />
        )}
      </button>
      <button
        className={cn(
          "min-w-12 flex justify-center items-center gap-1 border-[#eeeeef] border-2 h-8 rounded-2xl py-1 px-2",
          priceArr.length !== 0 ? "border-none text-white bg-[#48464C]" : ""
        )}
        onClick={() => setOpen()}
      >
        금액
        {priceArr.length !== 0 ? (
          <p>{priceArr.length}</p>
        ) : (
          <ChevronDown width={16} height={16} stroke="#79767D" />
        )}
      </button>
      <button
        className={cn(
          "min-w-12 flex justify-center items-center gap-1 border-[#eeeeef] border-2 h-8 rounded-2xl py-1 px-2",
          theme.length !== 0 ? "border-none text-white bg-[#48464C]" : ""
        )}
        onClick={() => setOpen()}
      >
        테마/디자인
        {theme.length !== 0 ? (
          <p>{theme.length}</p>
        ) : (
          <ChevronDown width={16} height={16} stroke="#79767D" />
        )}
      </button>
    </div>
  );
};

export default FilterChips;
