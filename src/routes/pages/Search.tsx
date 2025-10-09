import SortModal from "@/modules/common/SortModal";
import SearchFirst from "@/modules/search/SearchFirst";
import SearchResult from "@/modules/search/SearchResult";
import { useState } from "react";

const Search = () => {
  // 무조건 search창을 누르면 1로 되게끔 구현
  const [index, setIndex] = useState(1);
  const [searchText, setSearchText] = useState<string>("");
  const [recentData, setRecentData] = useState<string[]>([
    "search",
    "hi",
    "and",
  ]);
  const [sort, setSort] = useState("인기순");
  const [modalOpen, setModalOpen] = useState(false);
  const onChangeRecent = (value: string, index?: number) => {
    if (value === "total") {
      setRecentData([]);
    } else {
      setRecentData((prev) => prev.filter((_, i) => i !== index));
    }
  };

  return (
    <div className="min-h-screen">
      {modalOpen && (
        <SortModal
          value={sort}
          onClose={() => setModalOpen(false)}
          onChange={(v: string) => setSort(v)}
        />
      )}
      {index === 1 ? (
        <SearchFirst
          searchText={searchText}
          recentArray={recentData}
          onSelect={(value) => setSearchText(value)}
          onIndexChange={() => setIndex(2)}
          onChangeRecent={onChangeRecent}
        />
      ) : (
        <SearchResult
          sort={sort}
          onOpen={() => setModalOpen(true)}
          searchText={searchText}
          onIndexChange={() => setIndex(1)}
        />
      )}
    </div>
  );
};

export default Search;
