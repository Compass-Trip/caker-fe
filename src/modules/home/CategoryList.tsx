import { categoryIcons } from "@/variants/icons";
import { useNavigate } from "react-router";

const CategoryList = () => {
  const navigate = useNavigate();
  const iconList = [
    { value: "birth", text: "생일" },
    { value: "wedding", text: "웨딩/결혼" },
    { value: "baby", text: "돌잔치" },
    { value: "event", text: "기념일" },
    { value: "graduation", text: "졸업/입학" },
    { value: "company", text: "기업" },
    { value: "season", text: "시즌" },
    { value: "character", text: "캐릭터" },
    { value: "fruit", text: "과일" },
    { value: "flower", text: "플라워" },
    { value: "smallCake", text: "한입" },
    { value: "lunchbox", text: "도시락" },
    { value: "photo", text: "포토" },
  ] as const;

  return (
    <div className="mt-3 w-full h-[84px] overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="flex gap-2 w-full">
        {iconList.map((e, i) => (
          <div
            className="flex-none w-14 h-full flex flex-col items-center justify-center gap-1"
            key={i}
            onClick={() => {
              navigate("/navigate");
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
