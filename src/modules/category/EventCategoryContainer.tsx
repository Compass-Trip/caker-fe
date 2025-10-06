import { mockCakes } from "@/assets/data/cakeList";
import { useEffect, useState } from "react";
import GridCakeList from "../home/GridCakeList";

interface EventCategoryListProps {
  event: string;
}

const EventCategoryContainer = (props: EventCategoryListProps) => {
  const [mockData, setMockData] = useState(
    mockCakes.filter((e) => e.eventCategory === props.event)
  );
  useEffect(() => {
    setMockData(mockCakes.filter((e) => e.eventCategory === props.event));
  }, [props.event]);
  return (
    <div className="w-full min-h-[700px] px-[14px]">
      <div className="w-full py-2 flex justify-between">
        <div>총 {mockData.length}개</div>
        <div>인기순</div>
      </div>
      <GridCakeList items={mockData} />
    </div>
  );
};

export default EventCategoryContainer;
