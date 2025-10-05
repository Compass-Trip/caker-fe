import { iconList } from "@/variants/categorylist";
import { categoryIcons } from "@/variants/icons";
import { useNavigate } from "react-router";

const CategoryList = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-3 w-full h-[84px] overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="flex gap-2 w-full">
        {iconList.map((e, i) => (
          <div
            className="flex-none w-14 h-full flex flex-col items-center justify-center gap-1"
            key={i}
            onClick={() => {
              navigate(`/category?event=${e.text}`);
            }}
          >
            <div className="rounded-full w-full h-14 flex justify-center bg-[#FAF9FA]">
              <img src={categoryIcons[e.value]} width={40} height={40} />
            </div>
            <div className="text-xs">{e.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
