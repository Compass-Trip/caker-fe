import { mockCakes } from "@/assets/data/cakeList";
import Header from "@/components/ui/header";
import HeaderBack from "../common/HeaderBack";
import { pageIcons } from "@/variants/icons";
import { Input } from "@/components/ui/input";

const SearchResult = ({ searchText }: { searchText: string }) => {
  const mockData = mockCakes.filter(
    (e) =>
      e.storeName.includes(searchText) || e.description.includes(searchText)
  );
  return (
    <>
      {mockData.length === 0 ? (
        <>
          <Header
            leftSide={<HeaderBack />}
            middleSide={<Input value={searchText} />}
            rightSide={<div className="w-6 h-6 hidden" />}
            className="border-primary-400 border-b-2"
          />{" "}
          <div className="w-full min-h-[700px] flex flex-col justify-center items-center gap-[17px]">
            <img src={pageIcons.error} width={100} height={100} />
            <div className="w-full px-9 text-center">
              <div className="text-[#aea9b1]">검색 결과가 없습니다.</div>
            </div>
          </div>
        </>
      ) : (
        <div>여기 값이 있다..!</div>
      )}
    </>
  );
};

export default SearchResult;
