import { mockCakes } from "@/assets/data/cakeList";
import { useEffect, useState } from "react";
import GridCakeList from "../home/GridCakeList";
import type { FilterTypes } from "./FilterModal";

interface EventCategoryListProps {
  event: string;
  filterObj: FilterTypes;
  chipPart: React.ReactNode;
}

const EventCategoryContainer = (props: EventCategoryListProps) => {
  const filterDataHandler = () => {
    // 임시 데이터 -> 원래는 그냥 api받으면 될거에요!
    const { area, priceArr, minPrice, maxPrice, theme } = props.filterObj;
    let data = mockCakes.filter((e) => e.eventCategory === props.event);
    if (area !== "") {
      data = data.filter((e) => e.location.includes(area));
    }
    if (priceArr.length !== 0) {
      data = data.filter((e) => e.price >= minPrice && e.price < maxPrice);
    }
    if (theme.length !== 0) {
      data = data.filter((e) =>
        e.themeCategory.some((el) => theme.includes(el))
      );
    }
    return data;
  };
  const [mockData, setMockData] = useState(filterDataHandler());
  useEffect(() => {
    setMockData(filterDataHandler());
  }, [props.event, JSON.stringify(props.filterObj)]);
  return (
    <div className="w-full min-h-[700px] px-[14px]">
      <div className="w-full py-2 flex justify-between">
        <div>총 {mockData.length}개</div>
        <div>인기순</div>
      </div>
      {props.chipPart}
      <GridCakeList items={mockData} />
    </div>
  );
};

export default EventCategoryContainer;
