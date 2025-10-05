import Header from "@/components/ui/header";
import HeaderBack from "../common/HeaderBack";
import { Input } from "@/components/ui/input";
import { pageIcons } from "@/variants/icons";
import { Search, X } from "lucide-react";
import { useState } from "react";

interface SearchPageProps {
  searchText: string;
  onSelect?: (value: string) => void;
  recentArray: string[];
  onChangeRecent?: (value: string, index?: number) => void;
  onIndexChange?: () => void;
}

const SearchFirst = (props: SearchPageProps) => {
  const [value, setValue] = useState<string>(props.searchText);
  return (
    <>
      <Header
        leftSide={<HeaderBack />}
        middleSide={
          <Input
            placeholder="케이크와 매장을 검색해보세요"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              props.onSelect?.(e.target.value);
            }}
          />
        }
        rightSide={
          <div className="flex gap-4 items-center">
            <X
              width={20}
              height={20}
              stroke="#79767D"
              onClick={() => {
                props.onSelect?.("");
                setValue("");
              }}
            />
            <Search
              width={24}
              height={24}
              stroke="#79767D"
              onClick={() => {
                if (value !== "") {
                  props.onIndexChange?.();
                }
              }}
            />
          </div>
        }
        className="border-primary-400 border-b-2"
      />
      <div className="px-[14px] w-full">
        <div className="w-full py-2 flex justify-between">
          <div className="text-[#2D2A32]">최근검색</div>
          <div
            className="cursor-pointer text-[#AEA9B1]"
            onClick={() => props.onChangeRecent?.("total")}
          >
            전체 삭제
          </div>
        </div>
        {props.recentArray.length === 0 ? (
          <div className="w-full min-h-[700px] flex flex-col justify-center items-center gap-[17px]">
            <img src={pageIcons.search} width={120} height={120} />
            <div className="w-full px-9 text-center">
              <div className="text-[#aea9b1]">
                최근 검색어가 여기에 표시됩니다.
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full flex gap-2">
            {props.recentArray.map((item, i) => (
              <div
                key={i}
                className="flex gap-2 basis-1/3 h-10 justify-center text-[#48464C] items-center border-2 border-[#EEEEEF] rounded-[8px]"
                onClick={() => {
                  props.onSelect?.(item);
                  props.onIndexChange?.();
                }}
              >
                <p>{item}</p>
                <X
                  width={20}
                  height={20}
                  stroke="#79767D"
                  onClick={(e) => {
                    e.stopPropagation();
                    props.onChangeRecent?.("sep", i);
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchFirst;
