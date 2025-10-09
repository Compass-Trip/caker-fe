import { Button } from "@/components/ui/button";
import Header from "@/components/ui/header";
import { cn } from "@/lib/utils";
import { PRICE_RANGES, REGIONS, THEME_FILTERS } from "@/variants/filterOptions";
import { X } from "lucide-react";

export type FilterTypes = {
  area: string;
  priceArr: string[];
  minPrice: number;
  maxPrice: number;
  theme: string[];
};

interface FilterModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  filterObj: FilterTypes;
  changeFilterObj: (type: string, payload: any) => void;
}

const FilterModal = (props: FilterModalProps) => {
  const getFilterCnt = () => {
    return (
      props.filterObj.priceArr.length +
      props.filterObj.theme.length +
      (props.filterObj.area !== "" ? 1 : 0)
    );
  };
  return (
    <div className="w-full min-h-screen bg-white absolute top-0 left-0 z-[200]">
      <Header
        leftSide={<div className="w-6 h-6 hidden" />}
        middleSide={<div>필터</div>}
        rightSide={
          <X
            width={24}
            height={24}
            stroke="#79767D"
            onClick={() => props.setOpen(props.open)}
          />
        }
      />
      <main className="px-[14px] pt-6 w-full h-full">
        <section className="pb-6 border-b-2 border-[#eeeeef] mb-5">
          <div className="mb-3">지역</div>
          <div className="flex flex-wrap gap-2 items-center">
            {REGIONS.map((el, i) => (
              <button
                key={i}
                className={cn(
                  "min-w-20 flex justify-center items-center border-[#eeeeef] border-2 h-10 rounded-[8px] py-2 px-4",
                  props.filterObj["area"] === el
                    ? "border-none text-primary-800 bg-primary-50"
                    : ""
                )}
                onClick={() => props.changeFilterObj("area", el)}
              >
                {el}
              </button>
            ))}
          </div>
        </section>
        <section className="pb-6 border-b-2 border-[#eeeeef] mb-5">
          <div className="mb-3">금액</div>
          <div className="flex flex-wrap gap-2 items-center">
            {PRICE_RANGES.map((el) => {
              const active = props.filterObj.priceArr.includes(el.id);
              return (
                <button
                  key={el.id}
                  onClick={() => props.changeFilterObj("price", el)}
                  className={cn(
                    "min-w-20 flex justify-center items-center border-2 border-[#eeeeef] h-10 rounded-[8px] py-2 px-4 text-sm",
                    active && "border-none text-primary-800 bg-primary-50"
                  )}
                >
                  {el.label}
                </button>
              );
            })}
          </div>
        </section>
        <section>
          <div className="mb-3">테마/디자인</div>
          <div className="flex flex-wrap gap-2 items-center">
            {THEME_FILTERS.map((el, i) => (
              <button
                key={i}
                className={cn(
                  "min-w-20 flex justify-center items-center border-[#eeeeef] border-2 h-10 rounded-[8px] py-2 px-4",
                  props.filterObj["theme"].includes(el["name"])
                    ? "border-none text-primary-800 bg-primary-50"
                    : ""
                )}
                onClick={() => props.changeFilterObj("theme", el)}
              >
                {el["name"]}
              </button>
            ))}
          </div>
        </section>
        <div className="w-full flex gap-2 absolute bottom-4 justify-center">
          <button
            className="w-[74px]"
            onClick={() => props.changeFilterObj("reset", undefined)}
          >
            초기화
          </button>
          <Button
            className="w-[265px]"
            disabled={getFilterCnt() === 0}
            onClick={() => props.setOpen(props.open)}
          >
            적용하기 {getFilterCnt()}
          </Button>
        </div>
      </main>
    </div>
  );
};

export default FilterModal;
