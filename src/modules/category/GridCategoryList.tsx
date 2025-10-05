import { iconList } from "@/variants/categorylist";
import { categoryIcons } from "@/variants/icons";
import { useNavigate } from "react-router";

const GridCategoryList = () => {
  const navigate = useNavigate();
  return (
    <div className="py-2 grid grid-cols-4 gap-[9px] w-full">
      {iconList.map((e, i) => (
        <div
          className="flex-none w-20 h-[110px] flex flex-col items-center justify-center gap-1"
          key={i}
          onClick={() => {
            navigate(`/category?event=${e.text}`);
          }}
        >
          <div className="rounded-full w-full h-20 flex justify-center bg-[#FAF9FA]">
            <img src={categoryIcons[e.value]} width={60} height={60} />
          </div>
          <div className="text-[15px] text-[#48464C]">{e.text}</div>
        </div>
      ))}
    </div>
  );
};

export default GridCategoryList;
