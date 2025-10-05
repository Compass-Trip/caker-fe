import SearchFirst from "@/modules/search/SearchFirst";
import SearchResult from "@/modules/search/SearchResult";
import { useState } from "react";

const Search = () => {
  // search할때의 header와 결과 header생긴게 다르다.
  const [searchText, setSearchText] = useState<string>("");
  const recentData: string[] = [];

  return (
    <div className="min-h-screen">
      {/* <SearchFirst searchText={searchText} recentArray={recentData} /> */}
      <SearchResult searchText="wedding" />
    </div>
  );
};

export default Search;
