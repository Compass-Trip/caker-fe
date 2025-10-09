import type { CakeData } from "@/assets/data/cakeList";
import CakeCard from "@/components/ui/cakecard";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface GridCakeListProps {
  items: CakeData[];
}

const PAGE_SIZE = 14;

const GridCakeList = (props: GridCakeListProps) => {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = props.items.slice(0, visible);
  const remain = Math.max(props.items.length - visible, 0);
  return (
    <>
      <div className="py-3 grid grid-cols-2 gap-x-[12px] gap-y-[20px] w-full">
        {shown.map((item, i) => (
          <article>
            <CakeCard
              key={i}
              name={item.storeName}
              location={item.location}
              img={item.image}
              isLike={item.isLiked}
              content={item.description}
              discount={item.discount}
              price={item.price}
            />
          </article>
        ))}
      </div>
      {remain > 0 && (
        <button
          className="w-full flex justify-center items-center gap-0.5 border-[#eeeeef] border-2 h-12 rounded-[8px]"
          onClick={
            () => setVisible((v) => Math.min(v + PAGE_SIZE, props.items.length)) // 14개씩 추가
          }
        >
          <p>더보기</p>
          <ChevronDown />
        </button>
      )}
    </>
  );
};

export default GridCakeList;
