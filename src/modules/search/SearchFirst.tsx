import Header from "@/components/ui/header";
import HeaderBack from "../common/HeaderBack";
import { Input } from "@/components/ui/input";
import { pageIcons } from "@/variants/icons";

interface SearchPageProps {
  searchText: string;
  onSelect?: (value: string) => void;
  recentArray: string[];
  onChangeRecent?: (value: string, index?: number) => void;
}

const SearchFirst = (props: SearchPageProps) => {
  return (
    <>
      <Header
        leftSide={<HeaderBack />}
        middleSide={<Input placeholder="케이크와 매장을 검색해보세요" />}
        rightSide={<div className="w-6 h-6 hidden" />}
        className="border-primary-400 border-b-2"
      />
      <div className="px-[14px] w-full">
        <div className="w-full py-2 flex justify-between">
          <div>최근검색</div>
          <div>전체 삭제</div>
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
          <div>테스트중</div>
        )}
      </div>
    </>
  );
};

export default SearchFirst;
