import { mockCakes } from "@/assets/data/cakeList";
import Header from "@/components/ui/header";
import { pageIcons } from "@/variants/icons";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import HeaderBack from "../common/HeaderBack";
import HeaderCart from "../common/HeaderCart";
import GridCakeList from "../home/GridCakeList";

const SearchResult = ({
  searchText,
  onIndexChange,
}: {
  searchText: string;
  onIndexChange?: () => void;
}) => {
  const mockData = mockCakes.filter(
    (e) =>
      e.storeName.includes(searchText) || e.description.includes(searchText)
  );
  return (
    <>
      <Header
        leftSide={<HeaderBack />}
        middleSide={
          <div
            className="min-w-[267px] flex gap-2 pl-[14px] justify-center items-center bg-[#EEEEEF] rounded-[12px] cursor-pointer"
            onClick={onIndexChange}
          >
            <Search width={24} height={24} stroke="#79767D" />
            <Input value={searchText} disabled />
          </div>
        }
        rightSide={<HeaderCart num={1} />}
      />
      {mockData.length === 0 ? (
        <>
          <div className="w-full min-h-[700px] flex flex-col justify-center items-center gap-[17px]">
            <img src={pageIcons.error} width={100} height={100} />
            <div className="w-full px-9 text-center">
              <div className="text-[#aea9b1]">검색 결과가 없습니다.</div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="w-full min-h-[700px] px-[14px]">
            <div className="w-full py-2 flex justify-between">
              <div>총 {mockData.length}개</div>
              <div>인기순</div>
            </div>
            <GridCakeList items={mockData} />
          </div>
        </>
      )}
    </>
  );
};

export default SearchResult;
