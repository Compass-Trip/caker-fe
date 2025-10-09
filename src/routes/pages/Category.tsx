import Header from "@/components/ui/header";
import EventCategoryContainer from "@/modules/category/EventCategoryContainer";
import EventCategoryList from "@/modules/category/EventCategoryList";
import FilterChips from "@/modules/category/FilterChips";
import FilterModal, { type FilterTypes } from "@/modules/category/FilterModal";
import GridCategoryList from "@/modules/category/GridCategoryList";
import HeaderBack from "@/modules/common/HeaderBack";
import HeaderCart from "@/modules/common/HeaderCart";
import HeaderLogo from "@/modules/common/HeaderLogo";
import HeaderSearch from "@/modules/common/HeaderSearch";
import SortModal from "@/modules/common/SortModal";
import { PRICE_RANGES, type PriceRange } from "@/variants/filterOptions";
import { useState } from "react";
import { useSearchParams } from "react-router";

const Category = () => {
  const [searchParams] = useSearchParams();
  const event = searchParams.get("event");
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("인기순");
  const [modalOpen, setModalOpen] = useState(false);
  const [filterObj, setFilterObj] = useState<FilterTypes>({
    area: "",
    priceArr: [],
    minPrice: 0,
    maxPrice: Infinity,
    theme: [],
  });

  function computePriceBounds(selectedIds: string[]) {
    const selected = PRICE_RANGES.filter((r) => selectedIds.includes(r.id));
    if (selected.length === 0) return { min: 0, max: Infinity };
    return {
      min: Math.min(...selected.map((r) => r.min)),
      max: Math.max(...selected.map((r) => r.max)),
    };
  }

  const changeFilterObj = (type: string, payload: any) => {
    setFilterObj((prev) => {
      if (type === "area") {
        return { ...prev, area: prev.area === payload ? "" : payload };
      } else if (type === "price") {
        const id = (payload as PriceRange).id;
        const nextPriceArr = prev.priceArr.includes(id)
          ? prev.priceArr.filter((x) => x !== id)
          : [...prev.priceArr, id];

        const { min, max } = computePriceBounds(nextPriceArr);

        return {
          ...prev,
          priceArr: nextPriceArr,
          minPrice: min,
          maxPrice: max,
        };
      } else if (type === "theme") {
        const name = payload.name as string;
        const nextTheme = prev.theme.includes(name)
          ? prev.theme.filter((x) => x !== name)
          : [...prev.theme, name];

        return { ...prev, theme: nextTheme };
      } else {
        return {
          area: "",
          priceArr: [],
          minPrice: 0,
          maxPrice: Infinity,
          theme: [],
        };
      }
    });
  };
  return (
    <div className="min-h-screen">
      {event ? (
        <>
          {modalOpen && (
            <SortModal
              value={sort}
              onClose={() => setModalOpen(false)}
              onChange={(v: string) => setSort(v)}
            />
          )}
          {open ? (
            <FilterModal
              open={open}
              setOpen={() => setOpen(false)}
              filterObj={filterObj}
              changeFilterObj={changeFilterObj}
            />
          ) : (
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
              <EventCategoryContainer
                sort={sort}
                onOpen={() => setModalOpen(true)}
                event={event}
                filterObj={filterObj}
                chipPart={
                  <FilterChips
                    filterObj={filterObj}
                    setOpen={() => setOpen(true)}
                  />
                }
              />
            </>
          )}
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
