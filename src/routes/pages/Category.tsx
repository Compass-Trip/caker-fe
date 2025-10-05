import Header from "@/components/ui/header";
import EventCategoryContainer from "@/modules/category/EventCategoryContainer";
import EventCategoryList from "@/modules/category/EventCategoryList";
import GridCategoryList from "@/modules/category/GridCategoryList";
import HeaderBack from "@/modules/common/HeaderBack";
import HeaderCart from "@/modules/common/HeaderCart";
import HeaderLogo from "@/modules/common/HeaderLogo";
import HeaderSearch from "@/modules/common/HeaderSearch";
import CategoryList from "@/modules/home/CategoryList";
import { useSearchParams } from "react-router";

const Category = () => {
  const [searchParams] = useSearchParams();
  const event = searchParams.get("event");
  return (
    <div className="min-h-screen">
      {event ? (
        <>
          <Header
            leftSide={<HeaderBack />}
            middleSide={<div>카테고리</div>}
            rightSide={
              <div className="flex gap-4 items-center">
                <HeaderSearch />
                <HeaderCart num={1} />
              </div>
            }
            className="mb-2"
          />
          <section>
            <EventCategoryList event={event} />
          </section>
          <EventCategoryContainer event={event} />
        </>
      ) : (
        <>
          <Header
            leftSide={<HeaderLogo />}
            rightSide={
              <div className="flex gap-4 items-center">
                <HeaderSearch />
                <HeaderCart num={1} />
              </div>
            }
            className="mb-2"
          />
          <section className="pt-4 px-[14px] w-full">
            <div className="text-xl text-[#2D2A32] font-bold">인기 케이크</div>
            <GridCategoryList />
          </section>
        </>
      )}
    </div>
  );
};

export default Category;
